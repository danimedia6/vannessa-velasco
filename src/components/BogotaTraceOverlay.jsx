import { useEffect, useRef } from "react"

export function BogotaTraceOverlay() {
  const pathRef = useRef(null)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const length = path.getTotalLength()

    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`

    requestAnimationFrame(() => {
      path.style.transition =
        "stroke-dashoffset 2600ms cubic-bezier(0.22, 1, 0.36, 1)"
      path.style.strokeDashoffset = "0"
    })
  }, [])

  return (
    <svg
      className="bogota-map-image bogota-map-trace-svg"
      viewBox="0 0 2217 4667"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        className="bogota-trace-path"
        fill="none"
        stroke="#8f9b8c"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 2209 663
            L 1778 1007
            L 1683 1159
            L 1443 1558
            L 1236 1838
            L 941 2230
            L 622 2653
            L 359 2957
            L 144 3268
            L 8 3428"
        />
    </svg>
  )
}