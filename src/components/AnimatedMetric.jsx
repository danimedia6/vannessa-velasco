import { useEffect, useRef, useState } from "react"

export function AnimatedMetric({
  count,
  prefix = "",
  suffix = "",
  value,
  duration = 1700,
  delay = 0,
}) {
  const elementRef = useRef(null)

  const [displayValue, setDisplayValue] = useState(
    count !== null && count !== undefined ? 0 : value
  )

  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    if (count === null || count === undefined) {
      setDisplayValue(value)
      return
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (reducedMotion) {
      setDisplayValue(count)
      hasAnimated.current = true
      return
    }

    let frameId

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          !entry.isIntersecting ||
          hasAnimated.current
        ) {
          return
        }

        hasAnimated.current = true

        const startTime =
          performance.now() + delay

        const animate = (currentTime) => {
          if (currentTime < startTime) {
            frameId =
              requestAnimationFrame(animate)

            return
          }

          const elapsed =
            currentTime - startTime

          const progress = Math.min(
            elapsed / duration,
            1
          )

          const easedProgress =
            1 - Math.pow(1 - progress, 3)

          const currentNumber = Math.round(
            count * easedProgress
          )

          setDisplayValue(currentNumber)

          if (progress < 1) {
            frameId =
              requestAnimationFrame(animate)
          }
        }

        frameId =
          requestAnimationFrame(animate)

        observer.disconnect()
      },
      {
        threshold: 0.35,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()

      if (frameId) {
        cancelAnimationFrame(frameId)
      }
    }
  }, [
    count,
    duration,
    delay,
    value,
  ])

  const isCounter =
    count !== null &&
    count !== undefined

  return (
    <span ref={elementRef}>
      {isCounter
        ? `${prefix}${displayValue}${suffix}`
        : value}
    </span>
  )
}