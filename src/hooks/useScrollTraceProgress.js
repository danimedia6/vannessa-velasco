import { useEffect } from 'react'

export function useScrollTraceProgress() {
  useEffect(() => {
    const root = document.documentElement

    const motionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    let frame = 0

    const applyTraceProgress = (globalTraceProgress, scrollProgress) => {
      const paths = document.querySelectorAll('.bogota-trace-path')

      paths.forEach((path) => {
        const length = path.getTotalLength()

        let localProgress

        // Trazados con aparición ligada al scroll real
        if (path.dataset.scrollStart !== undefined) {
          const start = Number(path.dataset.scrollStart)
          const end = Number(path.dataset.scrollEnd ?? 1)

          localProgress = Math.min(
            1,
            Math.max(
              0,
              (scrollProgress - start) / (end - start)
            )
          )
        } else {
          // Trazados normales: siguen usando el progreso acelerado
          const start = Number(path.dataset.traceStart ?? 0)
          const end = Number(path.dataset.traceEnd ?? 1)

          localProgress = Math.min(
            1,
            Math.max(
              0,
              (globalTraceProgress - start) / (end - start)
            )
          )
        }

        path.style.strokeDasharray = `${length} ${length}`
        path.style.strokeDashoffset =
          `${length * (1 - localProgress)}`
      })
    }

    const setProgress = () => {
      frame = 0

      /*
       * Reduced motion:
       * ciudad parcialmente construida,
       * pero sin animación.
       */
      if (motionQuery.matches) {
        root.style.setProperty(
          '--scroll-progress',
          '0.32'
        )

        applyTraceProgress(0.32)

        return
      }

      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight

      const raw =
        maxScroll > 0
          ? window.scrollY / maxScroll
          : 0

      const progress = Math.min(
        1,
        Math.max(0, raw)
      )

      /*
       * El mapa sigue usando el progreso real
       * de toda la landing.
       */
      root.style.setProperty(
        '--scroll-progress',
        progress.toString()
      )

      /*
       * El trazado avanza MÁS RÁPIDO.
       *
       * 10 % visible desde el inicio.
       * Se completa alrededor del 42 %
       * del scroll total.
       */
      const traceProgress = Math.min(
        1,
        0.11 + progress * 2.7
      )

      applyTraceProgress(traceProgress, progress)
    }

    const requestProgress = () => {
      if (frame) return

      frame =
        window.requestAnimationFrame(setProgress)
    }

    setProgress()

    window.addEventListener(
      'scroll',
      requestProgress,
      { passive: true }
    )

    window.addEventListener(
      'resize',
      requestProgress
    )

    motionQuery.addEventListener(
      'change',
      setProgress
    )

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame)
      }

      window.removeEventListener(
        'scroll',
        requestProgress
      )

      window.removeEventListener(
        'resize',
        requestProgress
      )

      motionQuery.removeEventListener(
        'change',
        setProgress
      )
    }
  }, [])
}