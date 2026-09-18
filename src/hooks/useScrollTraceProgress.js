import { useEffect } from 'react'

export function useScrollTraceProgress() {
  useEffect(() => {
    const root = document.documentElement
    const motionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    let frame = 0

    const setProgress = () => {
      frame = 0

      if (motionQuery.matches) {
        root.style.setProperty('--scroll-progress', '0.32')
        root.style.setProperty('--trace-offset', '0.68')
        return
      }

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight

      const raw =
        maxScroll > 0
          ? window.scrollY / maxScroll
          : 0

      const progress = Math.min(
        1,
        Math.max(0, raw)
      )

      const traceOffset = 1 - progress

      root.style.setProperty(
        '--scroll-progress',
        progress.toString()
      )

      root.style.setProperty(
        '--trace-offset',
        traceOffset.toString()
      )
    }

    const requestProgress = () => {
      if (frame) return

      frame = window.requestAnimationFrame(setProgress)
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