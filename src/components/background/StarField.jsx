import { useMemo } from "react"

const MIN_DENSITY = 40
const MAX_DENSITY = 60
const LILAC = "#A594E0"

function clampDensity(density) {
  return Math.min(MAX_DENSITY, Math.max(MIN_DENSITY, Math.round(density)))
}

function pickStarType(index, lilacCutoff, fourPointCutoff) {
  if (index < fourPointCutoff) return "four-point"
  if (index < lilacCutoff) return "lilac"
  return "dot"
}

function createStars(count) {
  const fourPointCount = Math.max(3, Math.round(count * 0.1))
  const lilacCount = Math.max(4, Math.round(count * 0.14))
  const fourPointCutoff = fourPointCount
  const lilacCutoff = fourPointCutoff + lilacCount

  return Array.from({ length: count }, (_, index) => {
    const type = pickStarType(index, lilacCutoff, fourPointCutoff)
    const baseOpacity = 0.25 + Math.random() * 0.45

    return {
      id: index,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      type,
      size: type === "four-point" ? 3 + Math.random() * 2 : 1 + Math.random() * 1.5,
      color: type === "lilac" ? LILAC : "#ffffff",
      baseOpacity,
      peakOpacity: Math.min(baseOpacity + 0.35, 0.95),
      duration: 4 + Math.random() * 5,
      delay: Math.random() * 6,
    }
  })
}

function FourPointStar({ size, color }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size * 3.2}
      height={size * 3.2}
      style={{ display: "block", color }}
    >
      <path
        fill="currentColor"
        d="M12 1.5 14.2 9.8 22.5 12 14.2 14.2 12 22.5 9.8 14.2 1.5 12 9.8 9.8Z"
      />
    </svg>
  )
}

export default function StarField({
  density = 50,
  animated = true,
  opacity = 1,
}) {
  const stars = useMemo(() => createStars(clampDensity(density)), [density])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ opacity }}
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className={`star-field-star star-field-star--${star.type}${
            animated ? "" : " star-field-star--static"
          }`}
          style={{
            left: star.left,
            top: star.top,
            width: star.type === "four-point" ? undefined : `${star.size}px`,
            height: star.type === "four-point" ? undefined : `${star.size}px`,
            backgroundColor: star.type === "four-point" ? undefined : star.color,
            "--twinkle-min": star.baseOpacity,
            "--twinkle-max": star.peakOpacity,
            "--twinkle-duration": `${star.duration}s`,
            "--twinkle-delay": `${star.delay}s`,
          }}
        >
          {star.type === "four-point" && (
            <FourPointStar size={star.size} color={star.color} />
          )}
        </span>
      ))}
    </div>
  )
}
