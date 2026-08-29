import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090b",
        }}
      >
        <span
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#8b5cf6",
            fontFamily: "sans-serif",
          }}
        >
          M
        </span>
        <div style={{ display: "flex", width: 48, height: 4, background: "#baff29", marginTop: 8 }} />
      </div>
    ),
    { ...size }
  );
}
