import { useEffect } from "react"

export function useAlternateBackgroundScroll() {
  useEffect(() => {
    const root = document.documentElement
    const image = document.querySelector(
      ".alternate-map-base"
    )

    if (!image) return

    let frame = 0

    const updateBackground = () => {
      frame = 0

      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight

      const progress =
        maxScroll > 0
          ? Math.min(
              1,
              Math.max(
                0,
                window.scrollY / maxScroll
              )
            )
          : 0

      const naturalWidth =
        image.naturalWidth

      const naturalHeight =
        image.naturalHeight

      if (
        !naturalWidth ||
        !naturalHeight
      ) {
        return
      }

      /*
       * Lee directamente el zoom
       * que está usando CSS.
       *
       * Desktop: 2
       * Mobile: 3.6
       */
      const styles =
        getComputedStyle(root)

      const zoom =
        parseFloat(
          styles.getPropertyValue(
            "--alternate-background-zoom"
          )
        ) || 2

      /*
       * La imagen está girada 90°.
       *
       * Su height CSS determina
       * el escalado real:
       *
       * height =
       * viewportWidth * zoom
       */
      const renderedHeight =
        window.innerWidth * zoom

      const scale =
        renderedHeight /
        naturalHeight

      /*
       * Después de rotarla 90°,
       * el ancho original se convierte
       * en la dimensión vertical.
       */
      const visualHeight =
        naturalWidth * scale

      /*
       * Distancia disponible para
       * recorrer el mapa.
       */
      const travel =
        Math.max(
          0,
          visualHeight -
            window.innerHeight
        )

      const scrollSpeed = 1

      const backgroundProgress =
        Math.min(
          1,
          progress * scrollSpeed
        )

      const y =
        -(travel *
          backgroundProgress)

      root.style.setProperty(
        "--alternate-background-y",
        `${y}px`
      )
    }

    const requestUpdate = () => {
      if (frame) return

      frame =
        window.requestAnimationFrame(
          updateBackground
        )
    }

    if (image.complete) {
      updateBackground()
    } else {
      image.addEventListener(
        "load",
        updateBackground
      )
    }

    window.addEventListener(
      "scroll",
      requestUpdate,
      { passive: true }
    )

    window.addEventListener(
      "resize",
      requestUpdate
    )

    return () => {
      if (frame) {
        window.cancelAnimationFrame(
          frame
        )
      }

      image.removeEventListener(
        "load",
        updateBackground
      )

      window.removeEventListener(
        "scroll",
        requestUpdate
      )

      window.removeEventListener(
        "resize",
        requestUpdate
      )

      root.style.removeProperty(
        "--alternate-background-y"
      )
    }
  }, [])
}