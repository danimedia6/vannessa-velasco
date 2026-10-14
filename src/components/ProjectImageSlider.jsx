import {
  useEffect,
  useState,
} from "react"

import "./ProjectImageSlider.css"

export function ProjectImageSlider({
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

    const interval =
      window.setInterval(() => {
        setActiveIndex(
          (currentIndex) =>
            (currentIndex + 1) %
            images.length
        )
      }, 4000)

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
      className="project-image-slider"
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

      {/* IMÁGENES */}

      <div
        className="project-image-slider__track"
        style={{
          transform: `translateX(-${
            activeIndex * 100
          }%)`,
        }}
      >
        {images.map(
          (image, index) => (
            <div
              className="project-image-slider__slide"
              key={`${image.src}-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt || ""}
                loading="lazy"
                decoding="async"
                style={{
                  objectPosition:
                    image.position ||
                    "center",
                }}
              />
            </div>
          )
        )}
      </div>


      {/* CONTADOR */}

      <div
        className="project-image-slider__counter"
        aria-hidden="true"
      >
        <span>
          {String(
            activeIndex + 1
          ).padStart(2, "0")}
        </span>

        <span>/</span>

        <span>
          {String(
            images.length
          ).padStart(2, "0")}
        </span>
      </div>


      {/* NAVEGACIÓN */}

      <div
        className="project-image-slider__navigation"
        aria-label="Galería de imágenes"
      >
        {images.map(
          (_, index) => (
            <button
              key={index}
              type="button"
              className={`project-image-slider__dot ${
                activeIndex === index
                  ? "is-active"
                  : ""
              }`}
              onClick={() =>
                setActiveIndex(index)
              }
              aria-label={`Mostrar imagen ${
                index + 1
              }`}
            />
          )
        )}
      </div>

    </div>
  )
}