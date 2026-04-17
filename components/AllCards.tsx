'use client'

import { archetypes } from '@/data/archetypes'
import type { ArchetypeId } from '@/data/archetypes'

interface AllCardsProps {
  winner?: ArchetypeId
}

export default function AllCards({ winner }: AllCardsProps) {
  return (
    <section style={{ background: '#1b1b8f' }}>
      <div style={{ maxWidth: 920, margin: '0 auto', padding: '64px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow eyebrow-dark" style={{ marginBottom: 24 }}>
            All Six Archetypes
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              margin: 0,
            }}
          >
            Which card does your team hold?
          </h2>
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 2 }}
        >
          {archetypes.map((a) => {
            const isWinner = a.id === winner
            const isDark = a.cardBg === '#1b1b8f' || a.cardBg === '#2323a5'
            return (
              <div
                key={a.id}
                style={{
                  background: a.cardBg,
                  padding: '28px 24px',
                  outline: isWinner ? '2px solid #ffffff' : 'none',
                  outlineOffset: -2,
                  position: 'relative',
                }}
              >
                {isWinner ? (
                  <div
                    className="eyebrow"
                    style={{
                      background: '#ffffff',
                      borderColor: 'transparent',
                      color: '#1b1b8f',
                      marginBottom: 20,
                    }}
                  >
                    <i className="ri-star-fill" style={{ marginRight: 4, fontSize: 10 }} />
                    Your Card
                  </div>
                ) : (
                  <div style={{ height: 34, marginBottom: 20 }} />
                )}

                {/* Name — Serrif VF */}
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 400,
                    fontSize: 32,
                    lineHeight: 1.0,
                    letterSpacing: '-0.02em',
                    color: a.cardText,
                    marginBottom: 12,
                  }}
                >
                  {a.name}
                </div>

                {/* Superlative */}
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    fontWeight: 400,
                    letterSpacing: '0.6px',
                    textTransform: 'uppercase',
                    color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(13,13,13,0.45)',
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {a.superlative}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
