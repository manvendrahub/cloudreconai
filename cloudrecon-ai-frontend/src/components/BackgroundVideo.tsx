import { useEffect, useRef } from 'react'

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {
        // Fallback for strict browser autoplay policies
      })
    }
  }, [])

  return (
    <div className="bg-video-container" aria-hidden="true">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      >
        <source
          src="https://cdn.dribbble.com/userupload/17187384/file/original-9edd149d1370afc5211c0d9581f8ca4d.mp4"
          type="video/mp4"
        />
      </video>
      <div className="bg-video-overlay" />
    </div>
  )
}
