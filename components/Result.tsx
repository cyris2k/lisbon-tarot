'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { archetypeMap } from '@/data/archetypes'
import type { ArchetypeId } from '@/data/archetypes'
import AllCards from './AllCards'

interface ResultProps {
  winner: ArchetypeId
}

export default function Result({ winner }: ResultProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const a = archetypeMap[winner]
  const isDark = a.cardBg === '#1b1b8f' || a.cardBg === '#2323a5'

  async function handleDownload() {
    const { default: html2canvas } = await import('html2canvas')
    if (!cardRef.current) return
    try {
      const canvas = await html2canvas(cardRef.current, { backgroundColor: null, scale: 2 })
      const link = document.createElement('a')
      link.download = `lisbon-tarot-${winner}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (e) {
      console.error('Download failed', e)
    }
  }

  return (
    <>
      {/* ── Result hero ── */}
      <section style={{ background: '#e5e7eb', borderBottom: '1px solid #d8d8ee' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '72px 24px 88px' }}>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow eyebrow-light"
            style={{ marginBottom: 48 }}
          >
            Your Archetype
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Card */}
            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                width: 280,
                minHeight: 420,
                flexShrink: 0,
                background: a.cardBg,
                border: a.cardBorder !== 'transparent' ? `1px solid ${a.cardBorder}` : 'none',
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Eyebrow on card */}
              <div
                className="eyebrow"
                style={{
                  background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(35,35,165,0.08)',
                  borderColor: isDark ? 'rgba(255,255,255,0.2)' : a.cardBorder,
                  color: a.cardText,
                  marginBottom: 32,
                  opacity: 0.85,
                }}
              >
                Lisbon Tarot · 2025
              </div>

              {/* Name — Serrif VF large heading: 64px */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 400,
                    fontSize: 56,
                    lineHeight: 0.92,
                    letterSpacing: '-0.02em',
                    color: a.cardText,
                    marginBottom: 16,
                  }}
                >
                  {a.name}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: a.cardText,
                    opacity: 0.65,
                    margin: 0,
                  }}
                >
                  {a.vibe}
                </p>
              </div>

              {/* Superlative */}
              <div
                style={{
                  marginTop: 32,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: '0.84px',
                  textTransform: 'uppercase',
                  color: a.cardText,
                  opacity: 0.5,
                  lineHeight: 1.4,
                }}
              >
                {a.superlative}
              </div>
            </motion.div>

            {/* Right: Quill content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ flex: 1 }}
            >
              {/* Quill one-liner — Serrif VF medium heading */}
              <blockquote
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 400,
                  fontSize: 'clamp(22px, 2.8vw, 34px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                  color: '#2323a5',
                  margin: '0 0 20px',
                  padding: 0,
                  border: 'none',
                }}
              >
                &ldquo;{a.oneliner}&rdquo;
              </blockquote>

              {/* Attribution */}
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  fontWeight: 400,
                  letterSpacing: '0.84px',
                  textTransform: 'uppercase',
                  color: '#2323a5',
                  marginBottom: 28,
                }}
              >
                — Quill
              </p>

              {/* Full description */}
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 16,
                  lineHeight: 1.5,
                  color: '#0d0d0d',
                  marginBottom: 36,
                }}
              >
                {a.description}
              </p>

              <button onClick={handleDownload} className="btn-primary">
                <i className="ri-download-2-line" style={{ fontSize: 16 }} />
                Download your card
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Quill Mini Guide ── */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid #d8d8ee' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '64px 24px 72px' }}>

          <div className="eyebrow eyebrow-light" style={{ marginBottom: 32 }}>
            Quill&apos;s {a.name} Lisbon
          </div>

          {/* Serrif VF heading */}
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              color: '#0d0d0d',
              margin: '0 0 40px',
            }}
          >
            Your five picks, curated for you.
          </h2>

          <div className="flex flex-col" style={{ gap: 1, background: '#d8d8ee' }}>
            {a.guide.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="flex flex-col md:flex-row gap-4 md:gap-10"
                style={{
                  background: i % 2 === 0 ? '#ffffff' : '#eaeaf5',
                  padding: '24px 28px',
                }}
              >
                <div style={{ minWidth: 180, flexShrink: 0 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      fontWeight: 400,
                      letterSpacing: '0.84px',
                      textTransform: 'uppercase',
                      color: '#2323a5',
                    }}
                  >
                    {entry.category}
                  </span>
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 400,
                      fontSize: 20,
                      lineHeight: 1.2,
                      color: '#0d0d0d',
                      margin: '0 0 8px',
                    }}
                  >
                    {entry.place}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: '#0d0d0d',
                      opacity: 0.75,
                      margin: 0,
                    }}
                  >
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AllCards winner={winner} />
    </>
  )
}
