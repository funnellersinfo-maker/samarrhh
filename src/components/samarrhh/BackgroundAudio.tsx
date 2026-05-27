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

      const targetVolume = 0.25
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
      let step = 0
      const fadeSteps = 15
      const fadeInterval = setInterval(() => {
        step++
        const next = Math.max(audio.volume - 0.25 / fadeSteps, 0)
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
        const targetVolume = isMuted ? 0 : 0.25
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
        const next = Math.max(audio.volume - 0.25 / fadeSteps, 0)
        audio.volume = next
        if (step >= fadeSteps) {
          clearInterval(fadeInterval)
        }
      }, 40)
    } else {
      let step = 0
      const target = 0.25
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

      <div className="fixed bottom-8 left-6 sm:left-8 z-50 flex items-center gap-2">
        {!hasInteracted && (
          <div className="flex items-center gap-2 animate-[fadeIn_1s_ease_3s_both]">
            <span className="hidden sm:inline text-[10px] text-slate-400 tracking-wider uppercase whitespace-nowrap">
              Scroll → música
            </span>
          </div>
        )}

        {hasInteracted && (
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md border border-slate-100">
            <button
              onClick={toggleMute}
              aria-label={isMuted ? 'Activar sonido' : 'Silenciar música'}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 transition-all"
            >
              {isMuted ? (
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-corporate-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>

            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 transition-all"
            >
              {isPlaying ? (
                <svg className="w-4 h-4 text-corporate-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>

            {isPlaying && !isMuted && (
              <div className="flex items-end gap-[2px] h-4">
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className="w-[2px] bg-corporate-blue-light/60 rounded-full animate-[audioBar_0.5s_ease-in-out_infinite_alternate]"
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
