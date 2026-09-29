import { useEffect } from 'react'

export function useLocalitiesScroll() {
  useEffect(() => {
    let frame = 0

    const updateLocalities = () => {
      frame = 0

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight

      const scrollProgress =
        maxScroll > 0
          ? Math.min(
              1,
              Math.max(0, window.scrollY / maxScroll)
            )
          : 0

      const localities =
        document.querySelectorAll('.locality-image')

      localities.forEach((locality) => {
        const start = Number(
          locality.dataset.scrollStart ?? 0
        )

        const end = Number(
          locality.dataset.scrollEnd ?? 1
        )

        const progress = Math.min(
          1,
          Math.max(
            0,
            (scrollProgress - start) / (end - start)
          )
        )

        locality.style.setProperty(
          '--locality-progress',
          progress.toString()
        )
        locality.classList.toggle(
          'is-entering',
          progress > 0 && progress < 1
        )
      })
    }

    const requestUpdate = () => {
      if (frame) return

      frame = window.requestAnimationFrame(
        updateLocalities
      )
    }

    updateLocalities()

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

      window.removeEventListener(
        'scroll',
        requestUpdate
      )

      window.removeEventListener(
        'resize',
        requestUpdate
      )
    }
  }, [])
}