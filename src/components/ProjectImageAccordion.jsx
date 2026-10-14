import {
  useEffect,
  useState,
} from "react"

import "./ProjectImageAccordion.css"

export function ProjectImageAccordion({
  images = [],
}) {
  const [activeIndex, setActiveIndex] =
    useState(0)

  const [isPaused, setIsPaused] =
    useState(false)

  useEffect(() => {
    if (
      images.length <= 1 ||
      isPaused
    ) {
      return
    }

    const interval = window.setInterval(
      () => {
        setActiveIndex(
          (currentIndex) =>
            (currentIndex + 1) %
            images.length
        )
      },
      3500
    )

    return () => {
      window.clearInterval(interval)
    }
  }, [
    images.length,
    isPaused,
  ])

  if (!images.length) {
    return null
  }

  return (
    <div
      className="project-image-accordion"
      onMouseEnter={() =>
        setIsPaused(true)
      }
      onMouseLeave={() =>
        setIsPaused(false)
      }
      onFocus={() =>
        setIsPaused(true)
      }
      onBlur={() =>
        setIsPaused(false)
      }
    >
      {images.map(
        (image, index) => {

          const isActive =
            index === activeIndex

          return (
            <button
              key={`${image.src}-${index}`}
              className={`project-image-accordion__item ${
                isActive
                  ? "is-active"
                  : ""
              }`}
              type="button"
              onMouseEnter={() =>
                setActiveIndex(index)
              }
              onFocus={() =>
                setActiveIndex(index)
              }
              onClick={() =>
                setActiveIndex(index)
              }
              aria-label={`Mostrar imagen ${
                index + 1
              } de ${images.length}`}
            >
              <img
                src={image.src}
                alt={
                  image.alt || ""
                }
                loading="lazy"
                decoding="async"
                style={{
                  objectPosition:
                    image.position ||
                    "center",
                }}
              />

              <span
                className="project-image-accordion__index"
                aria-hidden="true"
              >
                {String(
                  index + 1
                ).padStart(
                  2,
                  "0"
                )}
              </span>
            </button>
          )
        }
      )}
    </div>
  )
}