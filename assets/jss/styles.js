/* ============================================================
   BONE & INK — interactions
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    const y = window.scrollY + 140;
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
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
});
