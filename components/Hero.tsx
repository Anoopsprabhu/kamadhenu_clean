'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full aspect-video md:aspect-none md:h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Video — Scaled slightly to crop potential edge-vignettes or black bars encoded in the file */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 scale-110 object-cover"
      >
        <source src="/entryvideo.mp4" type="video/mp4" />
      </video>
    </section>
  )
}