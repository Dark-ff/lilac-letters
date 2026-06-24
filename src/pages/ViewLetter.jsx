import { useParams } from "react-router-dom"
import { useState } from "react"

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

export default function ViewLetter() {
  const { id } = useParams()

  const letter = JSON.parse(
    localStorage.getItem(`lunareth-${id}`)
  )

  const [enteredPassword, setEnteredPassword] = useState("")
  const [unlocked, setUnlocked] = useState(false)

  if (!letter) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#000",
          color: "#fff",
          padding: "2.5rem",
        }}
      >
        <p>Letter not found.</p>
      </div>
    )
  }

  const unlockLetter = () => {
    if (enteredPassword === letter.password) {
      setUnlocked(true)
    } else {
      alert("Wrong password")
    }
  }

  const s = styles[letter.style] || styles.Moonlit

  const pageStyle = {
    minHeight: "100vh",
    background: s.bg,
    color: s.text,
    fontFamily: s.fontFamily,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    ...s.pageExtra,
  }

  if (letter.password && !unlocked) {
    return (
      <div style={pageStyle}>
        <div
          style={{
            ...s.containerStyle,
            width: "100%",
            maxWidth: "440px",
            padding: "2.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "2rem",
              marginBottom: "0.5rem",
            }}
          >
            🔒
          </p>

          <h2
            style={{
              color: s.text,
              fontSize: "1.25rem",
              marginBottom: "0.5rem",
            }}
          >
            This letter is protected
          </h2>

          <p
            style={{
              color: s.subtext,
              fontSize: "0.85rem",
              marginBottom: "1.5rem",
            }}
          >
            Enter the password to read it.
          </p>

          <input
            type="password"
            value={enteredPassword}
            onChange={(e) =>
              setEnteredPassword(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                unlockLetter()
              }
            }}
            placeholder="Password"
            style={{
              width: "100%",
              background: s.inputBg,
              color: s.text,
              border: `1px solid ${s.border}`,
              fontFamily: s.fontFamily,
              padding: "0.75rem 1rem",
              borderRadius: "4px",
              outline: "none",
              marginBottom: "0.75rem",
              boxSizing: "border-box",
            }}
          />

          <button
            onClick={unlockLetter}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: `1px solid ${s.accent}`,
              color: s.accent,
              background: "transparent",
              fontFamily: s.fontFamily,
              fontSize: "0.9rem",
              borderRadius: "4px",
              cursor: "pointer",
              letterSpacing: "0.05em",
            }}
          >
            Unlock
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={pageStyle}>
      <div
        style={{
          ...s.containerStyle,
          width: "100%",
          maxWidth: "680px",
          padding: "3rem 3.5rem",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: s.text,
            marginBottom: "0.5rem",
            lineHeight: 1.3,
          }}
        >
          {letter.title || "Untitled Letter"}
        </h1>

        {letter.recipient && (
          <p
            style={{
              color: s.subtext,
              fontSize: "0.8rem",
              marginBottom: "0.25rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            To: {letter.recipient}
          </p>
        )}

        {letter.createdAt && (
          <p
            style={{
              color: s.subtext,
              fontSize: "0.78rem",
              marginBottom: "1.5rem",
            }}
          >
            {new Date(
              letter.createdAt
            ).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}

        <div
          style={{
            borderTop: `1px solid ${s.divider}`,
            marginBottom: "1.75rem",
          }}
        />

        <p
          style={{
            color: s.text,
            lineHeight: "1.95",
            fontSize: "1.05rem",
            whiteSpace: "pre-wrap",
            opacity: 0.92,
          }}
        >
          {letter.message}
        </p>

        {(letter.memory || letter.hope) && (
          <>
            <div
              style={{
                borderTop: `1px solid ${s.divider}`,
                margin: "2rem 0 1.5rem",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {letter.memory && (
                <div>
                  <p
                    style={{
                      color: s.accent,
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "0.35rem",
                    }}
                  >
                    A memory I hold
                  </p>

                  <p
                    style={{
                      color: s.text,
                      fontSize: "0.95rem",
                      lineHeight: "1.7",
                      opacity: 0.8,
                    }}
                  >
                    {letter.memory}
                  </p>
                </div>
              )}

              {letter.hope && (
                <div>
                  <p
                    style={{
                      color: s.accent,
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "0.35rem",
                    }}
                  >
                    A hope I carry
                  </p>

                  <p
                    style={{
                      color: s.text,
                      fontSize: "0.95rem",
                      lineHeight: "1.7",
                      opacity: 0.8,
                    }}
                  >
                    {letter.hope}
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}