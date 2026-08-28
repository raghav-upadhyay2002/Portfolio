/* ============================================================
   NEURAL NOIR — interactions
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

  /* ===== Mobile Menu ===== */
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove("show");
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    };
    menuToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("show");
      menuToggle.classList.toggle("open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  }

  /* ===== Footer Year ===== */
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ===== Typing Animation ===== */
  const typedEl = document.getElementById("typed-text");
  if (typedEl) {
    const phrases = [
      "AI Engineer",
      "LLM & RAG Systems Builder",
      "ML Engineer",
      "Computer Vision & Robotics Tinkerer",
      "MS Data Science @ Arizona",
    ];
    let p = 0, c = 0, deleting = false;

    const tick = () => {
      const word = phrases[p];
      typedEl.textContent = word.substring(0, deleting ? c - 1 : c + 1);
      c += deleting ? -1 : 1;
      let speed = deleting ? 45 : 95;

      if (!deleting && c === word.length) {
        speed = 1800;
        deleting = true;
      } else if (deleting && c === 0) {
        deleting = false;
        p = (p + 1) % phrases.length;
        speed = 350;
      }
      setTimeout(tick, speed);
    };
    if (reduceMotion) {
      typedEl.textContent = phrases[0];
    } else {
      tick();
    }
  }

  /* ===== Scroll Progress Bar ===== */
  const progress = document.getElementById("scrollProgress");
  const onProgress = () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    if (progress) progress.style.width = scrolled + "%";
  };

  /* ===== Navbar scrolled state ===== */
  const navbar = document.getElementById("navbar");
  const onNavbar = () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 40);
  };

  /* ===== Back to Top ===== */
  const backToTop = document.getElementById("backToTop");
  const onBackTop = () => {
    if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 500);
  };
  if (backToTop) {
    backToTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
    );
  }

  /* ===== Scroll Spy ===== */
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
  const onSpy = () => {
    const y = window.scrollY + 120;
    let current = "";
    sections.forEach((s) => {
      if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) current = s.id;
    });
    navAnchors.forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === "#" + current)
    );
  };

  /* ===== Unified scroll handler (rAF throttled) ===== */
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      onProgress();
      onNavbar();
      onBackTop();
      onSpy();
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ===== Scroll Reveal ===== */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.transitionDelay = Math.min(i * 70, 280) + "ms";
            el.classList.add("revealed");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("revealed"));
  }

  /* ===== Animated Counters ===== */
  const counters = document.querySelectorAll(".stat-num[data-count]");
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const val = target * eased;
      el.textContent = val.toFixed(decimals) + suffix;
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals) + suffix;
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window && !reduceMotion) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((c) => cio.observe(c));
  } else {
    counters.forEach((c) => {
      const d = parseInt(c.dataset.decimals || "0", 10);
      c.textContent = parseFloat(c.dataset.count).toFixed(d) + (c.dataset.suffix || "");
    });
  }

  /* ===== Cursor Glow ===== */
  const glow = document.getElementById("cursorGlow");
  if (glow && !isTouch && !reduceMotion) {
    let gx = window.innerWidth / 2, gy = window.innerHeight / 2;
    let cx = gx, cy = gy;
    document.body.classList.add("cursor-active");
    window.addEventListener("mousemove", (e) => {
      gx = e.clientX;
      gy = e.clientY;
    }, { passive: true });
    const follow = () => {
      cx += (gx - cx) * 0.15;
      cy += (gy - cy) * 0.15;
      glow.style.transform = `translate(${cx}px, ${cy}px)`;
      requestAnimationFrame(follow);
    };
    follow();
  }

  /* ===== Neural Network Canvas ===== */
  const canvas = document.getElementById("neural");
  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext("2d");
    let w, h, dpr, nodes = [], raf = null, running = false;
    const mouse = { x: -9999, y: -9999 };

    const palette = ["139,92,255", "91,140,255", "45,212,255"];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    };

    const buildNodes = () => {
      const density = Math.min(Math.max((w * h) / 16000, 32), 110);
      nodes = [];
      for (let i = 0; i < density; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.8 + 1,
          c: palette[(Math.random() * palette.length) | 0],
        });
      }
    };

    const linkDist = 130;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;

        // mouse repel/attract (gentle)
        const mdx = a.x - mouse.x;
        const mdy = a.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 150) {
          const f = (150 - md) / 150 * 0.6;
          a.x += (mdx / md) * f;
          a.y += (mdy / md) * f;
        }

        // links
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const op = (1 - dist / linkDist) * 0.5;
            ctx.strokeStyle = `rgba(${a.c}, ${op})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes on top
      for (const a of nodes) {
        const near = Math.hypot(a.x - mouse.x, a.y - mouse.y) < 150;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${a.c}, ${near ? 0.95 : 0.65})`;
        if (near) { ctx.shadowColor = `rgba(${a.c},0.9)`; ctx.shadowBlur = 10; }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running) return;
      running = true;
      draw();
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
    };

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    canvas.addEventListener("mouseleave", () => { mouse.x = -9999; mouse.y = -9999; });

    // pause when hero off-screen
    const heroSection = document.getElementById("home");
    if ("IntersectionObserver" in window && heroSection) {
      new IntersectionObserver(
        (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
        { threshold: 0.01 }
      ).observe(heroSection);
    } else {
      start();
    }

    let rt;
    window.addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(resize, 150);
    });
    resize();
  }
});
