import { AnimatedMetric } from "../components/AnimatedMetric.jsx"
import {
  useEffect,
  useRef,
  useState,
} from "react"

import "./ImpactSection.css"

export function ImpactSection({ content }) {

  const impactRef = useRef(null)
  const [isVisible, setIsVisible] =
    useState(false)

  useEffect(() => {
    const element = impactRef.current

    if (!element) return

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches

    if (reducedMotion) {
      setIsVisible(true)
      return
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return

          setIsVisible(true)

          observer.disconnect()
        },
        {
          threshold: 0.25,
        }
      )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const { impact } = content



  return (
    <section
      ref={impactRef}
      className={`impact-section ${
        isVisible ? "is-visible" : ""
      }`}
      aria-label="Impacto"
    >
      <div className="impact-list">
        {impact.metrics.map((metric, index) => (
          <article
            className="impact-item"
            key={metric.value}
            style={{
              "--impact-delay": `${index * 90}ms`,
            }}
          >
            <p className="impact-value">
              <AnimatedMetric
                value={metric.value}
                count={metric.count}
                prefix={metric.prefix}
                suffix={metric.suffix}
                delay={index * 90}
              />
            </p>

            <p className="impact-label">
              {metric.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}