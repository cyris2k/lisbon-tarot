'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Quiz from '@/components/Quiz'
import Shuffle from '@/components/Shuffle'
import Result from '@/components/Result'
import { initScores, getWinner } from '@/lib/scoring'
import { questions } from '@/data/questions'
import type { ArchetypeId } from '@/data/archetypes'

type Phase = 'hero' | 'quiz' | 'shuffle' | 'result'

export default function Home() {
  const [phase, setPhase] = useState<Phase>('hero')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState<Record<ArchetypeId, number>>(initScores)
  const [winner, setWinner] = useState<ArchetypeId | null>(null)

  function handleStart() {
    setPhase('quiz')
  }

  function handleAnswer(archetype: ArchetypeId) {
    const q = questions[currentQuestion]
    // Q5 is the tiebreaker — weighted 1.5x
    const points = q.tiebreaker ? 1.5 : 1
    const nextScores = { ...scores, [archetype]: (scores[archetype] ?? 0) + points }
    setScores(nextScores)

    const nextQ = currentQuestion + 1
    if (nextQ >= questions.length) {
      setWinner(getWinner(nextScores))
      setPhase('shuffle')
    } else {
      setCurrentQuestion(nextQ)
    }
  }

  function handleShuffleDone() {
    setPhase('result')
  }

  if (phase === 'hero') return <Hero onStart={handleStart} />
  if (phase === 'quiz') return <Quiz currentQuestion={currentQuestion} onAnswer={handleAnswer} />
  if (phase === 'shuffle') return <Shuffle onDone={handleShuffleDone} />
  if (phase === 'result' && winner) return <Result winner={winner} />
  return null
}
