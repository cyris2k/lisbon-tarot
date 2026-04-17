'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { questions } from '@/data/questions'
import type { ArchetypeId } from '@/data/archetypes'

interface QuizProps {
  currentQuestion: number
  onAnswer: (archetype: ArchetypeId) => void
}

const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E', 'F']

export default function Quiz({ currentQuestion, onAnswer }: QuizProps) {
  const q = questions[currentQuestion]
  const progress = (currentQuestion / questions.length) * 100

  return (
    <section className="min-h-screen flex flex-col" style={{ background: '#e5e7eb' }}>
      {/* Progress bar */}
      <div style={{ height: 2, background: '#d8d8ee', width: '100%' }}>
        <motion.div
          style={{ height: 2, background: '#2323a5' }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Top bar */}
      <div
        className="flex items-center justify-between px-6 md:px-10 py-4"
        style={{ background: '#ffffff', borderBottom: '1px solid #d8d8ee' }}
      >
        <span className="eyebrow eyebrow-light">Lisbon Tarot</span>
        <div className="flex items-center gap-3">
          {q.tiebreaker && (
            <span
              className="eyebrow"
              style={{ background: '#eaeaf5', borderColor: '#1b1b8f', color: '#1b1b8f' }}
            >
              Tiebreaker
            </span>
          )}
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: '0.84px',
              textTransform: 'uppercase',
              color: '#2323a5',
              background: '#eaeaf5',
              padding: '6px 14px',
              borderRadius: 9999,
            }}
          >
            {currentQuestion + 1} / {questions.length}
          </span>
        </div>
      </div>

      {/* Question + options */}
      <div className="flex-1 flex items-start md:items-center justify-center px-6 py-12 md:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-2xl"
          >
            {/* Question — Serrif VF medium-heading spec: 38.4px */}
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                color: '#0d0d0d',
                margin: '0 0 32px',
              }}
            >
              {q.question}
            </h2>

            {/* Options */}
            <div className="flex flex-col" style={{ gap: 2 }}>
              {q.options.map((option, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ background: '#d8d8ee' }}
                  whileTap={{ scale: 0.995 }}
                  onClick={() => onAnswer(option.archetype)}
                  className="w-full text-left flex items-start gap-5 transition-colors"
                  style={{
                    background: '#ffffff',
                    color: '#0d0d0d',
                    padding: '18px 24px',
                    border: 'none',
                    borderRadius: 0,
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      fontWeight: 400,
                      letterSpacing: '0.84px',
                      textTransform: 'uppercase' as const,
                      color: '#2323a5',
                      flexShrink: 0,
                      marginTop: 3,
                      minWidth: 14,
                    }}
                  >
                    {OPTION_LABELS[i]}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 16,
                      lineHeight: 1.5,
                      fontWeight: 400,
                    }}
                  >
                    {option.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
