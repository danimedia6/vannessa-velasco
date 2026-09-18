import { useEffect, useRef, useState } from 'react'

export function VideoInterlude({ content }) {
  const video = content.media?.videoInterlude
  const videoRef = useRef(null)
  const frameRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true)
  const [shouldPlay, setShouldPlay] = useState(false)

  useEffect(() => {
    if (!video) return undefined

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotionPreference = () => {
      setPrefersReducedMotion(motionQuery.matches)
    }

    syncMotionPreference()
    motionQuery.addEventListener('change', syncMotionPreference)

    return () => {
      motionQuery.removeEventListener('change', syncMotionPreference)
    }
  }, [video])

  useEffect(() => {
    if (!frameRef.current) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      {
        rootMargin: '240px 0px',
        threshold: 0.18,
      },
    )

    observer.observe(frameRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canPlay = Boolean(video && isInView && !prefersReducedMotion)
    setShouldPlay(canPlay)

    if (!videoRef.current) return
    if (canPlay) {
      videoRef.current.play().catch(() => {})
    } else {
      videoRef.current.pause()
    }
  }, [isInView, prefersReducedMotion, video])

  if (!video) return null

  return (
    <section className="video-interlude" aria-label={video.label}>
      <div className="video-frame" ref={frameRef}>
        <video
          ref={videoRef}
          autoPlay={shouldPlay}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={video.label}
        >
          <source src={video.src} type={video.type} />
        </video>
      </div>
    </section>
  )
}
