'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const hasStartedRef = useRef(false)

  const startAudio = useCallback(async () => {
    if (hasStartedRef.current) return
    hasStartedRef.current = true
    setHasInteracted(true)

    const audio = audioRef.current
    if (!audio) return

    try {
      audio.volume = 0
      await audio.play()
      setIsPlaying(true)

      // Smooth fade-in over 3 seconds
      const targetVolume = 0.35
      const fadeSteps = 30
      const stepInterval = 100
      let step = 0
      const fadeInterval = setInterval(() => {
        step++
        const next = Math.min((step / fadeSteps) * targetVolume, targetVolume)
        audio.volume = next
        if (step >= fadeSteps) {
          clearInterval(fadeInterval)
        }
      }, stepInterval)
    } catch {
      // Browser blocked autoplay, retry on next interaction
      hasStartedRef.current = false
      setHasInteracted(false)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true
    audio.preload = 'auto'
    audio.volume = 0

    const handleScroll = () => {
      if (!hasStartedRef.current) {
        startAudio()
      }
    }

    const handleInteraction = () => {
      if (!hasStartedRef.current) {
        startAudio()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('touchstart', handleInteraction, { passive: true, once: true })
    window.addEventListener('click', handleInteraction, { once: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('touchstart', handleInteraction)
      window.removeEventListener('click', handleInteraction)
    }
  }, [startAudio])

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      // Fade out then pause
      let step = 0
      const fadeSteps = 15
      const fadeInterval = setInterval(() => {
        step++
        const next = Math.max(audio.volume - 0.35 / fadeSteps, 0)
        audio.volume = next
        if (step >= fadeSteps) {
          clearInterval(fadeInterval)
          audio.pause()
          setIsPlaying(false)
        }
      }, 50)
    } else {
      try {
        audio.volume = 0
        await audio.play()
        setIsPlaying(true)
        let step = 0
        const targetVolume = isMuted ? 0 : 0.35
        const fadeSteps = 15
        const fadeInterval = setInterval(() => {
          step++
          const next = Math.min((step / fadeSteps) * targetVolume, targetVolume)
          audio.volume = next
          if (step >= fadeSteps) {
            clearInterval(fadeInterval)
          }
        }, 50)
      } catch {
        // Failed to play
      }
    }
  }, [isPlaying, isMuted])

  const toggleMute = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    const newMuted = !isMuted
    setIsMuted(newMuted)

    if (newMuted) {
      let step = 0
      const fadeSteps = 10
      const fadeInterval = setInterval(() => {
        step++
        const next = Math.max(audio.volume - 0.35 / fadeSteps, 0)
        audio.volume = next
        if (step >= fadeSteps) {
          clearInterval(fadeInterval)
        }
      }, 40)
    } else {
      let step = 0
      const target = 0.35
      const fadeSteps = 10
      const fadeInterval = setInterval(() => {
        step++
        const next = Math.min(audio.volume + target / fadeSteps, target)
        audio.volume = next
        if (step >= fadeSteps) {
          clearInterval(fadeInterval)
        }
      }, 40)
    }
  }, [isMuted])

  return (
    <>
      <audio
        ref={audioRef}
        src="/background-music.mp3"
        preload="auto"
        loop
      />

      {/* Audio controls - fixed bottom-left, above WhatsApp on right */}
      <div className="fixed bottom-8 left-6 sm:left-8 z-50 flex items-center gap-2">

        {/* Pre-interaction hint */}
        {!hasInteracted && (
          <div className="audio-hint flex items-center gap-2 animate-[fadeIn_1s_ease_3s_both]">
            <span className="hidden sm:inline text-[10px] text-white/25 tracking-wider uppercase whitespace-nowrap">
              Scroll → música
            </span>
          </div>
        )}

        {/* Post-interaction controls */}
        {hasInteracted && (
          <div className="flex items-center gap-2">
            {/* Mute button */}
            <button
              onClick={toggleMute}
              aria-label={isMuted ? 'Activar sonido' : 'Silenciar música'}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyber-blue/30 transition-all duration-300"
            >
              {isMuted ? (
                <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>

            {/* Play/Pause button */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyber-blue/30 transition-all duration-300"
            >
              {isPlaying ? (
                <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>

            {/* Mini audio visualizer */}
            {isPlaying && !isMuted && (
              <div className="flex items-end gap-[2px] h-4">
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className="w-[2px] bg-cyber-blue/50 rounded-full animate-[audioBar_0.5s_ease-in-out_infinite_alternate]"
                    style={{
                      animationDelay: `${bar * 0.1}s`,
                      animationDuration: `${0.3 + bar * 0.12}s`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}
