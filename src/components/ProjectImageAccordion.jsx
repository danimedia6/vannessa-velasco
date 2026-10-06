import { useState } from "react"
import "./ProjectImageAccordion.css"

export function ProjectImageAccordion({
  images = []
}) {
  const [activeIndex, setActiveIndex] =
    useState(0)

  if (!images.length) {
    return null
  }

  return (
    <div
      className="project-image-accordion"
      aria-label="Galería del proyecto"
    >
      {images.map((image, index) => {
        const isActive =
          index === activeIndex

        return (
          <button
            key={`${image.src}-${index}`}
            className={`project-image-accordion__item ${
              isActive ? "is-active" : ""
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
            aria-label={
              image.alt ||
              `Imagen ${index + 1}`
            }
          >
            <img
                src={image.src}
                alt={image.alt || ""}
                style={{
                    objectPosition:
                    image.position || "center",
                }}
            />

            <span
              className="project-image-accordion__index"
              aria-hidden="true"
            >
              {String(index + 1).padStart(
                2,
                "0"
              )}
            </span>
          </button>
        )
      })}
    </div>
  )
}