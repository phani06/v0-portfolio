import { ImageResponse } from "next/image"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 24,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#00e6ff",
        fontWeight: "bold",
      }}
    >
      PT
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
