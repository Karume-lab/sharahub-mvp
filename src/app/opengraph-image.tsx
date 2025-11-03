import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const openGraphImage = async (): Promise<ImageResponse> => {
  const logo = `${process.env.NEXT_PUBLIC_APP_URL}/core/logo.png`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(135deg, #e1f8ff 0%, #64c1ff 40%, #009cff 80%, #0068b6 100%)",
        color: "#ffffff",
        fontFamily: "Inter, sans-serif",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: <Image /> cannot be used here */}
      <img
        src={logo}
        width={220}
        height={220}
        alt="Sharahub logo"
        style={{
          borderRadius: "6px",
          objectFit: "contain",
          border: "4px solid rgba(255, 255, 255, 0.85)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
          marginBottom: "30px",
        }}
      />

      <h1
        style={{
          fontSize: 72,
          margin: 0,
          fontWeight: 700,
          textShadow: "2px 2px 10px rgba(0,0,0,0.25)",
        }}
      >
        Sharahub
      </h1>

      <p
        style={{
          fontSize: 28,
          maxWidth: "80%",
          lineHeight: 1.4,
          color: "rgba(255,255,255,0.9)",
          marginTop: "12px",
        }}
      >
        Connect. Create. Collaborate.
      </p>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 60,
          fontSize: 24,
          opacity: 0.75,
          display: "flex",
        }}
      >
        &copy; {new Date().getFullYear()} Sharahub Limited
      </div>
    </div>,
    {
      ...size,
    },
  );
};

export default openGraphImage;
