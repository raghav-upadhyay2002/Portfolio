import { ImageResponse } from "next/og";
import { availability, site, thesis } from "@/lib/content";

export const dynamic = "force-static";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0c0e",
          color: "#e9e6df",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#79766d", textTransform: "uppercase" }}>
            {site.url.replace("https://", "")} / {site.revision}
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#86b3da" }}>§</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, lineHeight: 1.05, color: "#e9e6df" }}>{site.name}</div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 28,
              fontStyle: "italic",
              color: "#e9e6df",
              maxWidth: 980,
              borderLeft: "2px solid #26282d",
              paddingLeft: 24,
            }}
          >
            {thesis}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: 20, color: "#a9a59c" }}>
          <div style={{ display: "flex" }}>
            {site.role} — Research Collaborator, {site.affiliation}
          </div>
          <div style={{ display: "flex", color: "#86b3da" }}>{availability}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
