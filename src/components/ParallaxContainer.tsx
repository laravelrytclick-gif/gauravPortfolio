'use client'

import { useEffect, useRef, useState } from 'react'

export default function ParallaxContainer({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} className="relative">
      <div 
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {children}
      </div>
      <div className="relative z-10">
        {/* This creates space for the parallax content */}
        <div style={{ height: '100vh' }} />
      </div>
    </div>
  )
}
