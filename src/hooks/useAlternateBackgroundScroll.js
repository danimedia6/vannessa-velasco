import { useEffect } from 'react'

export function useAlternateBackgroundScroll() {
  useEffect(() => {
    const root = document.documentElement
    const image = document.querySelector('.alternate-map-base')

    if (!image) return

    let frame = 0

    const updateBackground = () => {
      frame = 0

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight

      const progress =
        maxScroll > 0
          ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
          : 0

      /*
       * La imagen original es horizontal.
       * Al rotarla 90°, su altura original pasa a ser
       * el ancho visual.
       */
      const naturalWidth = image.naturalWidth
      const naturalHeight = image.naturalHeight

      if (!naturalWidth || !naturalHeight) return

      const zoom = 1.55

        const scale =
        (window.innerWidth / naturalHeight) * zoom

      const visualHeight =
        naturalWidth * scale

      const travel =
        Math.max(0, visualHeight - window.innerHeight)

      const scrollSpeed = 1

        const backgroundProgress = Math.min(
        1,
        progress * scrollSpeed
        )

        const y =
        -(travel * backgroundProgress)

      root.style.setProperty(
        '--alternate-background-y',
        `${y}px`
      )
    }

    const requestUpdate = () => {
      if (frame) return

      frame = window.requestAnimationFrame(
        updateBackground
      )
    }

    if (image.complete) {
      updateBackground()
    } else {
      image.addEventListener('load', updateBackground)
    }

    window.addEventListener(
      'scroll',
      requestUpdate,
      { passive: true }
    )

    window.addEventListener(
      'resize',
      requestUpdate
    )

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame)
      }

      image.removeEventListener(
        'load',
        updateBackground
      )

      window.removeEventListener(
        'scroll',
        requestUpdate
      )

      window.removeEventListener(
        'resize',
        requestUpdate
      )

      root.style.removeProperty(
        '--alternate-background-y'
      )
    }
  }, [])
}