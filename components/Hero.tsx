'use client'

import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

const NUM_CARDS = 8
const CARD_W = 140
const CARD_GAP = 20
const STRIP_W = NUM_CARDS * (CARD_W + CARD_GAP)

interface HeroProps {
  onStart: () => void
}

export default function Hero({ onStart }: HeroProps) {
  const controls = useAnimationControls()

  useEffect(() => {
    let cancelled = false
    async function loop() {
      while (!cancelled) {
        await controls.start({ x: -STRIP_W, transition: { duration: 24, ease: 'linear' } })
        if (cancelled) break
        controls.set({ x: 0 })
      }
    }
    loop()
    return () => { cancelled = true; controls.stop() }
  }, [controls])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#1b1b8f' }}
    >
      {/* Dimmed card carousel */}
      <div className="absolute inset-0 flex items-center overflow-hidden" style={{ opacity: 0.08 }}>
        <motion.div className="flex" style={{ gap: 20, width: STRIP_W * 2 }} animate={controls}>
          {Array.from({ length: NUM_CARDS * 2 }).map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 overflow-hidden"
              style={{ width: CARD_W, height: 233, border: '1px solid rgba(255,255,255,0.3)' }}
            >
              <Image src="/cards/card-back.svg" alt="" width={CARD_W} height={233} className="w-full h-full object-cover" priority={i < 4} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-3xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="eyebrow eyebrow-dark"
          style={{ marginBottom: 48 }}
        >
          AirOps Offsite · Lisbon 2025
        </motion.div>

        {/* Headline: Serrif VF (Georgia) — 64px per design system */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ margin: '0 0 24px' }}
        >
          <span
            className="block"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(56px, 10vw, 96px)',
              lineHeight: 1.0,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            Lisbon Tarot
          </span>
        </motion.h1>

        {/* Subheading: Serrif VF medium */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: 'clamp(22px, 3vw, 38px)',
            lineHeight: 1.05,
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '-0.01em',
            marginBottom: 40,
          }}
        >
          Five questions. Six archetypes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.5,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 460,
            marginBottom: 48,
          }}
        >
          One card that tells you exactly what kind of AirOps person you are when let loose in a foreign city.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.62 }}
        >
          <motion.button
            whileHover={{ background: '#1b1db5' }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#ffffff',
              color: '#1b1b8f',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              fontSize: 16,
              lineHeight: 1,
              padding: '14px 28px',
              borderRadius: 9999,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Draw Your Card
            <i className="ri-arrow-right-line" style={{ fontSize: 18 }} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
