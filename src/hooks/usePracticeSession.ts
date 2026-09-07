import { useMemo, useState } from 'react'
import { selectItemsForMode, summarizeSession, type PracticeSourceItem } from '@/services/practiceEngine'
import { useProgressStore } from '@/store/useProgressStore'
import type { PracticeMode, Question } from '@/types/practice'

interface UsePracticeSessionParams<T extends PracticeSourceItem> {
  items: T[]
  mode: PracticeMode
  count: number
  generateQuestion: (item: T, pool: T[]) => Question
}

/**
 * Общий движок прохождения тренировки/экзамена. Не знает, кана это, слово
 * или кандзи — принимает уже готовый generateQuestion. Использовать для
 * новых типов контента можно без изменений этого файла.
 */
export function usePracticeSession<T extends PracticeSourceItem>({
  items,
  mode,
  count,
  generateQuestion,
}: UsePracticeSessionParams<T>) {
  const recordPracticeAnswer = useProgressStore((state) => state.recordPracticeAnswer)
  const srs = useProgressStore((state) => state.progress.srs)
  const mistakeCounts = useProgressStore((state) => state.progress.mistakeCounts)

  const [startedAt] = useState(() => Date.now())
  const questions = useMemo(() => {
    const selected = selectItemsForMode(items, mode, srs, mistakeCounts, count)
    return selected.map((item) => generateQuestion(item, items))
    // eslint-disable-next-line react-hooks/exhaustive-deps -- сессия фиксируется один раз при монтировании
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [answered, setAnswered] = useState<{ question: Question; selectedAnswer: string; isCorrect: boolean }[]>([])

  const currentQuestion = questions[currentIndex] ?? null
  const isFinished = questions.length > 0 && currentIndex >= questions.length
  const isAnswered = selectedAnswer !== null

  function submitAnswer(answer: string) {
    if (!currentQuestion || isAnswered) return
    const isCorrect = answer === currentQuestion.correctAnswer
    setSelectedAnswer(answer)
    setAnswered((prev) => [...prev, { question: currentQuestion, selectedAnswer: answer, isCorrect }])
    recordPracticeAnswer(currentQuestion.srsKey, isCorrect)
  }

  function goToNext() {
    setSelectedAnswer(null)
    setCurrentIndex((index) => index + 1)
  }

  const durationSeconds = Math.round((Date.now() - startedAt) / 1000)
  const result = isFinished ? summarizeSession(answered, durationSeconds) : null

  return {
    questions,
    currentQuestion,
    currentIndex,
    isAnswered,
    selectedAnswer,
    isFinished,
    answered,
    result,
    submitAnswer,
    goToNext,
  }
}
