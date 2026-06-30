import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Flavortown Hoodies — in production";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const wordmark = await readFile(join(process.cwd(), "public", "wordmark.png"));
  const src = `data:image/png;base64,${wordmark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 56,
        }}
      >
        <img src={src} width={960} height={75} alt="" />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <div style={{ fontSize: 40, fontWeight: 600, letterSpacing: "0.18em" }}>
            HOODIES — IN PRODUCTION
          </div>
          <div style={{ fontSize: 26, color: "#8a8a93" }}>July 10–14, 2026</div>
        </div>
      </div>
    ),
    size,
  );
}
