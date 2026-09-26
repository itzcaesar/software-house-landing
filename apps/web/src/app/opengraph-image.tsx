import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";
import { CCGlyph } from "@/components/common/logo";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0b0c0e",
          backgroundImage:
            "radial-gradient(900px 500px at 80% -10%, rgba(47,107,255,0.5), transparent), radial-gradient(700px 500px at 0% 110%, rgba(74,168,255,0.32), transparent)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #5b9dff, #2f6bff 50%, #1e50e6)",
            }}
          >
            <CCGlyph width={46} height={46} stroke="white" />
          </div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, maxWidth: 940, letterSpacing: -2 }}>
            We design & build digital products that feel inevitable.
          </div>
          <div style={{ fontSize: 34, color: "rgba(255,255,255,0.7)", maxWidth: 900 }}>
            Web · Mobile · UI/UX · SaaS · AI · MVPs — from idea to scale.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 28, color: "rgba(255,255,255,0.6)" }}>
          <span>callumc.id</span>
          <span>Product studio · Jakarta & worldwide</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
