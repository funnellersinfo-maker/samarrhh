'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Core3DNode() {
  const nodeRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false)

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -150])

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  useEffect(() => {
    if (isMobile) return

    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 30
      setMousePos({ x, y: mouseY })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [isMobile])

  const rotateX = isMobile ? 15 : mousePos.y
  const rotateY = isMobile ? -15 : -mousePos.x

  return (
    <motion.div
      ref={containerRef}
      style={{ y: isMobile ? 0 : y }}
      className="parallax-layer relative flex items-center justify-center"
    >
      <div
        id="core-talento"
        ref={nodeRef}
        className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 core-node"
        style={{ perspective: '800px' }}
      >
        <div
          className="core-node-inner w-full h-full node-glow rounded-2xl"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Front face */}
          <div
            className="core-face rounded-2xl flex items-center justify-center"
            style={{ transform: 'translateZ(40px)' }}
          >
            <div className="text-center p-6">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black gradient-text-animated">
                S
              </div>
              <div className="text-xs sm:text-sm text-cyber-blue/80 mt-2 tracking-[0.3em] uppercase font-medium">
                RR.HH
              </div>
            </div>
          </div>

          {/* Back face */}
          <div
            className="core-face rounded-2xl"
            style={{ transform: 'rotateY(180deg) translateZ(40px)' }}
          />

          {/* Left face */}
          <div
            className="core-face rounded-2xl"
            style={{ transform: 'rotateY(-90deg) translateZ(40px)', width: '80px', left: '-40px' }}
          />

          {/* Right face */}
          <div
            className="core-face rounded-2xl"
            style={{ transform: 'rotateY(90deg) translateZ(40px)', width: '80px', right: '-40px' }}
          />

          {/* Top face */}
          <div
            className="core-face rounded-2xl"
            style={{ transform: 'rotateX(90deg) translateZ(40px)', height: '80px', top: '-40px' }}
          />

          {/* Bottom face */}
          <div
            className="core-face rounded-2xl"
            style={{ transform: 'rotateX(-90deg) translateZ(40px)', height: '80px', bottom: '-40px' }}
          />

          {/* Outer ring glow */}
          <div className="absolute inset-[-20px] rounded-full border border-cyber-blue/10" />
          <div className="absolute inset-[-40px] rounded-full border border-neon-purple/5" />
          <div className="absolute inset-[-60px] rounded-full border border-cyber-blue/5" />

          {/* Orbiting dots */}
          <div
            className="absolute w-2 h-2 rounded-full bg-cyber-blue glow-pulse"
            style={{
              top: '10%',
              right: '10%',
              transform: 'translateZ(60px)',
              boxShadow: '0 0 10px #00d2ff',
            }}
          />
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-neon-purple glow-pulse"
            style={{
              bottom: '15%',
              left: '5%',
              transform: 'translateZ(50px)',
              boxShadow: '0 0 10px #9d4edd',
              animationDelay: '1s',
            }}
          />
          <div
            className="absolute w-1 h-1 rounded-full bg-cyber-blue glow-pulse"
            style={{
              top: '50%',
              right: '-5%',
              transform: 'translateZ(70px)',
              boxShadow: '0 0 8px #00d2ff',
              animationDelay: '2s',
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}
