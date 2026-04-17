'use client'

import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

interface ShuffleProps {
  onDone: () => void
}

const CARDS = [
  { rotate: -22, x: -110, y: 18, delay: 0 },
  { rotate: -10, x: -55, y: -8, delay: 0.1 },
  { rotate: 0, x: 0, y: -18, delay: 0.15 },
  { rotate: 10, x: 55, y: -8, delay: 0.2 },
  { rotate: 22, x: 110, y: 18, delay: 0.25 },
]

function ShuffleCard({ card }: { card: (typeof CARDS)[0] }) {
  const controls = useAnimationControls()

  useEffect(() => {
    async function run() {
      await controls.start({ opacity: 1, scale: 1, transition: { delay: card.delay, duration: 0.25 } })
      await controls.start({ rotate: card.rotate, x: card.x, y: card.y, transition: { duration: 0.5, type: 'spring', stiffness: 110, damping: 14 } })
    }
    run()
  }, [controls, card])

  return (
    <motion.div
      className="absolute overflow-hidden"
      style={{
        width: 96,
        height: 160,
        left: '50%',
        top: '50%',
        marginLeft: -48,
        marginTop: -80,
        border: '1px solid rgba(255,255,255,0.25)',
      }}
      initial={{ rotate: 0, x: 0, y: 0, opacity: 0, scale: 0.85 }}
      animate={controls}
    >
      <Image src="/cards/card-back.svg" alt="" width={96} height={160} className="w-full h-full object-cover" />
    </motion.div>
  )
}

export default function Shuffle({ onDone }: ShuffleProps) {
  useEffect(() => {
    const t = setTimeout(onDone, 2600)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#1b1b8f' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="eyebrow eyebrow-dark"
        style={{ marginBottom: 80 }}
      >
        Reading the cards
      </motion.div>

      <div className="relative" style={{ width: 340, height: 220 }}>
        {CARDS.map((card, i) => (
          <ShuffleCard key={i} card={card} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          marginTop: 80,
          fontFamily: 'var(--font-serif)',
          fontWeight: 400,
          fontSize: 24,
          lineHeight: 1.3,
          color: 'rgba(255,255,255,0.6)',
          letterSpacing: '-0.01em',
        }}
      >
        Your archetype is being revealed...
      </motion.p>
    </section>
  )
}
