import { ImageResponse } from "next/og";
import { CCGlyph } from "@/components/common/logo";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 112,
          background: "linear-gradient(135deg, #5b9dff 0%, #2f6bff 50%, #1e50e6 100%)",
        }}
      >
        <CCGlyph width={320} height={320} stroke="white" />
      </div>
    ),
    { ...size },
  );
}
