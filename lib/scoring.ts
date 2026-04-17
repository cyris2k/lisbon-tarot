import type { ArchetypeId } from '@/data/archetypes'

// Tie-breaking order per content spec: Q5 answer wins, then Q4, then Wanderer default
const TIE_ORDER: ArchetypeId[] = [
  'optimizer',
  'researcher',
  'connector',
  'wanderer',
  'nightowl',
  'shipper',
]

export function getWinner(scores: Record<ArchetypeId, number>): ArchetypeId {
  const max = Math.max(...TIE_ORDER.map((id) => scores[id] ?? 0))
  const tied = TIE_ORDER.filter((id) => (scores[id] ?? 0) === max)
  if (tied.length === 1) return tied[0]
  // Wanderer is the default when still tied (per content spec)
  if (tied.includes('wanderer')) return 'wanderer'
  return tied[0]
}

export function initScores(): Record<ArchetypeId, number> {
  return {
    optimizer: 0,
    researcher: 0,
    connector: 0,
    wanderer: 0,
    nightowl: 0,
    shipper: 0,
  }
}
