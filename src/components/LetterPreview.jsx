const styles = {
  Moonlit: {
    bg: "#0d1117",
    text: "#e2d9f3",
    subtext: "#7a6fa8",
    border: "#2a1f52",
    accent: "#9d7fe0",
    inputBg: "#13111f",
    fontFamily: "'Georgia', serif",
    containerStyle: {
      background: "rgba(255,255,255,0.03)",
      border: "1px solid #2a1f52",
      borderRadius: "4px",
      boxShadow: "0 0 60px rgba(124, 92, 191, 0.08)",
    },
    pageExtra: {
      backgroundImage:
        "radial-gradient(ellipse at 70% 0%, #1a0e3a 0%, transparent 55%)",
    },
    divider: "#2a1f52",
  },

  "Old Paper": {
    bg: "#ede0c4",
    text: "#2c1a0e",
    subtext: "#8b6344",
    border: "#c9a87c",
    accent: "#7a4e2d",
    inputBg: "#e4d3b0",
    fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
    containerStyle: {
      background: "#f5ead0",
      border: "1px solid #c9a87c",
      borderRadius: "2px",
      boxShadow:
        "0 10px 40px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.12), inset 0 0 60px rgba(180,130,60,0.06)",
    },
    pageExtra: {
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E\")",
    },
    divider: "#c9a87c",
  },

  "Dark Aesthetic": {
    bg: "#050505",
    text: "#c0c0c0",
    subtext: "#444",
    border: "#1c1c1c",
    accent: "#e03c50",
    inputBg: "#0a0a0a",
    fontFamily: "'Courier New', Courier, monospace",
    containerStyle: {
      background: "#080808",
      border: "1px solid #1c1c1c",
      borderRadius: "0px",
      boxShadow: "none",
    },
    pageExtra: {
      backgroundImage:
        "repeating-linear-gradient(0deg, transparent, transparent 23px, #111 23px, #111 24px)",
    },
    divider: "#1c1c1c",
  },

  Minimal: {
    bg: "#f9f9f9",
    text: "#111",
    subtext: "#999",
    border: "#e8e8e8",
    accent: "#111",
    inputBg: "#efefef",
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    containerStyle: {
      background: "#ffffff",
      border: "1px solid #e8e8e8",
      borderRadius: "2px",
      boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
    },
    pageExtra: {},
    divider: "#e8e8e8",
  },
}

const todayFormatted = new Date().toLocaleDateString("en-IN", {
  year: "numeric",
  month: "long",
  day: "numeric",
})

export default function LetterPreview({
  title,
  recipient,
  message,
  memory,
  hope,
  password,
  style,
}) {
  const s = styles[style] || styles.Moonlit

  const wrapperStyle = {
    background: s.bg,
    fontFamily: s.fontFamily,
    borderRadius: "8px",
    overflow: "hidden",
    padding: "1.5rem",
    ...s.pageExtra,
  }

  const containerStyle = {
    ...s.containerStyle,
    width: "100%",
    padding: "2rem 2.25rem",
    boxSizing: "border-box",
  }

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>

        {/* Title */}
        <h2
          style={{
            fontSize: "1.4rem",
            fontWeight: "bold",
            color: s.text,
            marginBottom: "0.4rem",
            lineHeight: 1.3,
          }}
        >
          {title?.trim() || "Untitled Letter"}
        </h2>

        {/* Recipient */}
        {recipient?.trim() && (
          <p
            style={{
              color: s.subtext,
              fontSize: "0.72rem",
              marginBottom: "0.2rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            To: {recipient}
          </p>
        )}

        {/* Date — only when user has started writing */}
        {(title?.trim() || message?.trim()) && (
          <p
            style={{
              color: s.subtext,
              fontSize: "0.7rem",
              marginBottom: "1.25rem",
            }}
          >
            {todayFormatted}
          </p>
        )}

        {/* Divider */}
        <div
          style={{
            borderTop: `1px solid ${s.divider}`,
            marginBottom: "1.25rem",
          }}
        />

        {/* Message */}
        <p
          style={{
            color: message?.trim() ? s.text : s.subtext,
            lineHeight: "1.9",
            fontSize: "0.95rem",
            whiteSpace: "pre-wrap",
            opacity: message?.trim() ? 0.92 : 0.5,
            fontStyle: message?.trim() ? "normal" : "italic",
          }}
        >
          {message?.trim() ? message : "What have you been wanting to say?"}
        </p>

        {/* Memory & Hope */}
        {(memory?.trim() || hope?.trim()) && (
          <>
            <div
              style={{
                borderTop: `1px solid ${s.divider}`,
                margin: "1.5rem 0 1.25rem",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {memory?.trim() && (
                <div>
                  <p
                    style={{
                      color: s.accent,
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "0.3rem",
                    }}
                  >
                    A memory I hold
                  </p>
                  <p
                    style={{
                      color: s.text,
                      fontSize: "0.88rem",
                      lineHeight: "1.7",
                      opacity: 0.8,
                    }}
                  >
                    {memory}
                  </p>
                </div>
              )}

              {hope?.trim() && (
                <div>
                  <p
                    style={{
                      color: s.accent,
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "0.3rem",
                    }}
                  >
                    A hope I carry
                  </p>
                  <p
                    style={{
                      color: s.text,
                      fontSize: "0.88rem",
                      lineHeight: "1.7",
                      opacity: 0.8,
                    }}
                  >
                    {hope}
                  </p>
                </div>
              )}
            </div>
          </>
        )}

        {/* Password badge */}
        {password?.trim() && (
          <p
            style={{
              marginTop: "1.5rem",
              color: s.subtext,
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            🔒 <span style={{ textTransform: "uppercase" }}>Password protection enabled</span>
          </p>
        )}

      </div>
    </div>
  )
}