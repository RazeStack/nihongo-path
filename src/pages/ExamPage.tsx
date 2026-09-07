import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { QuestionCard } from '@/components/practice/QuestionCard'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { findKanaCharById } from '@/data/kana/allKanaCharacters'
import { findGrammarPointById } from '@/data/grammar/allGrammarPoints'
import { findVocabWordById } from '@/data/vocabulary/allVocabWords'
import { findBlock, findLevel, LEVELS } from '@/data/course/levels'
import { usePracticeSession } from '@/hooks/usePracticeSession'
import { generateKanaQuestion } from '@/services/questionGenerators/kanaQuestions'
import { generateGrammarQuestion, type GrammarDrillItem } from '@/services/questionGenerators/grammarQuestions'
import { generateVocabQuestion } from '@/services/questionGenerators/vocabQuestions'
import { getBestExamScore, isBlockLessonsComplete, isBlockUnlocked, isLevelUnlocked } from '@/services/progressService'
import {
  getKnownGrammarDrillItems,
  getKnownKanaCharacters,
  getKnownVocabWords,
  type PracticeKanaChar,
  type PracticeVocabWord,
} from '@/services/knownItems'
import { announceRewards } from '@/services/rewardAnnouncer'
import { useProgressStore } from '@/store/useProgressStore'
import type { AnsweredQuestion } from '@/types/practice'

export function ExamPage() {
  const { levelId = '', blockId = '' } = useParams()
  const level = findLevel(levelId)
  const block = findBlock(levelId, blockId)
  const progress = useProgressStore((state) => state.progress)
  const [started, setStarted] = useState(false)

  if (!level || !block) return <Navigate to="/course" replace />

  const levelUnlocked = isLevelUnlocked(level, progress, LEVELS)
  const blockUnlocked = isBlockUnlocked(block, level, progress, levelUnlocked)
  const lessonsComplete = isBlockLessonsComplete(block, progress)

  if (!blockUnlocked || !lessonsComplete) return <Navigate to={`/course/${levelId}/${blockId}`} replace />

  const attempts = progress.blockExamAttempts[block.exam.id] ?? []
  const bestScore = getBestExamScore(progress, block.exam.id)

  if (!started) {
    return (
      <div className="mx-auto flex max-w-xl flex-col gap-6">
        <Link to={`/course/${levelId}/${blockId}`} className="text-sm text-text-muted hover:text-accent">
          ← {block.title}
        </Link>
        <div>
          <h1 className="text-2xl font-semibold text-text">{block.exam.title}</h1>
          <p className="mt-1 text-text-muted">{block.exam.description}</p>
        </div>
        <Card className="flex flex-col gap-2 text-sm text-text-muted">
          <p>Вопросов: {block.exam.questionCount}</p>
          <p>Проходной балл: {Math.round(block.exam.passingScore * 100)}%</p>
          <p>Попыток пройдено: {attempts.length}</p>
          {bestScore !== null && <p>Лучший результат: {bestScore}%</p>}
        </Card>
        <Button onClick={() => setStarted(true)}>Начать экзамен</Button>
      </div>
    )
  }

  const examMeta = {
    levelId,
    blockId,
    examId: block.exam.id,
    xpReward: block.exam.xpReward,
    passingScore: block.exam.passingScore,
    questionCount: block.exam.questionCount,
  }

  if (block.contentType === 'grammar') {
    return <RunningGrammarExam {...examMeta} items={getKnownGrammarDrillItems([block], progress)} onRetry={() => setStarted(false)} />
  }
  if (block.contentType === 'vocabulary') {
    return <RunningVocabExam {...examMeta} words={getKnownVocabWords([block], progress)} onRetry={() => setStarted(false)} />
  }
  return <RunningKanaExam {...examMeta} knownChars={getKnownKanaCharacters([block], progress)} onRetry={() => setStarted(false)} />
}

/** Считает точность по группам (ряды каны / грамматические конструкции) и возвращает те, где она ниже 80%. */
function computeWeakGroups(answered: AnsweredQuestion[], getGroupLabel: (srsKey: string) => string | undefined): string[] {
  const stats = new Map<string, { correct: number; total: number }>()
  for (const entry of answered) {
    const label = getGroupLabel(entry.question.srsKey)
    if (!label) continue
    const stat = stats.get(label) ?? { correct: 0, total: 0 }
    stat.total += 1
    if (entry.isCorrect) stat.correct += 1
    stats.set(label, stat)
  }
  return [...stats.entries()].filter(([, stat]) => stat.correct / stat.total < 0.8).map(([label]) => label)
}

interface ExamResultsProps {
  passed: boolean
  scorePercent: number
  correctCount: number
  totalCount: number
  durationSeconds: number
  weakTopics: string[]
  levelId: string
  blockId: string
  onRetry: () => void
}

function ExamResults({ passed, scorePercent, correctCount, totalCount, durationSeconds, weakTopics, levelId, blockId, onRetry }: ExamResultsProps) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 py-10 text-center">
      <h1 className="text-2xl font-semibold text-text">{passed ? 'Экзамен сдан!' : 'Экзамен не сдан'}</h1>
      <p className={`text-5xl font-bold ${passed ? 'text-success' : 'text-danger'}`}>{scorePercent}%</p>
      <p className="text-text-muted">
        {correctCount} из {totalCount} правильно · {durationSeconds}с
      </p>
      {weakTopics.length > 0 && <p className="text-sm text-warning">Стоит повторить: {weakTopics.join(', ')}</p>}
      <div className="flex gap-3">
        <Button variant="secondary" onClick={onRetry}>
          Попробовать снова
        </Button>
        <Link to={`/course/${levelId}/${blockId}`}>
          <Button>{passed ? 'Следующий шаг' : 'К блоку'}</Button>
        </Link>
      </div>
    </div>
  )
}

interface ExamMeta {
  levelId: string
  blockId: string
  examId: string
  xpReward: number
  passingScore: number
  questionCount: number
  onRetry: () => void
}

function RunningKanaExam({ knownChars, ...meta }: ExamMeta & { knownChars: PracticeKanaChar[] }) {
  const xpBefore = useProgressStore((state) => state.progress.xp)
  const recordExamAttempt = useProgressStore((state) => state.recordExamAttempt)
  const [rewardShown, setRewardShown] = useState(false)

  const session = usePracticeSession({
    items: knownChars,
    mode: 'exam',
    count: Math.min(meta.questionCount, knownChars.length),
    generateQuestion: (item, pool) => generateKanaQuestion(item, pool, Math.random() > 0.5 ? 'char-to-romaji' : 'romaji-to-char'),
  })

  const passed = session.result ? session.result.scorePercent >= meta.passingScore * 100 : false
  const weakTopics = useMemo(
    () =>
      session.result
        ? computeWeakGroups(session.answered, (srsKey) => findKanaCharById(srsKey.split(':')[1])?.row)
        : [],
    [session.result, session.answered],
  )

  useEffect(() => {
    if (session.isFinished && session.result && !rewardShown) {
      setRewardShown(true)
      const result = recordExamAttempt(
        meta.examId,
        {
          date: new Date().toISOString(),
          scorePercent: session.result.scorePercent,
          passed,
          correctCount: session.result.correctCount,
          totalCount: session.result.totalCount,
          durationSeconds: session.result.durationSeconds,
        },
        meta.xpReward,
      )
      announceRewards(xpBefore, result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.isFinished])

  if (session.isFinished && session.result) {
    return (
      <ExamResults
        passed={passed}
        weakTopics={weakTopics}
        levelId={meta.levelId}
        blockId={meta.blockId}
        onRetry={meta.onRetry}
        {...session.result}
      />
    )
  }

  return <ExamQuestion session={session} />
}

function RunningVocabExam({ words, ...meta }: ExamMeta & { words: PracticeVocabWord[] }) {
  const xpBefore = useProgressStore((state) => state.progress.xp)
  const recordExamAttempt = useProgressStore((state) => state.recordExamAttempt)
  const [rewardShown, setRewardShown] = useState(false)

  const session = usePracticeSession({
    items: words,
    mode: 'exam',
    count: Math.min(meta.questionCount, words.length),
    generateQuestion: (item, pool) =>
      generateVocabQuestion(item, pool, Math.random() > 0.5 ? 'word-to-translation' : 'translation-to-word'),
  })

  const passed = session.result ? session.result.scorePercent >= meta.passingScore * 100 : false
  const weakTopics = useMemo(
    () =>
      session.result
        ? computeWeakGroups(session.answered, (srsKey) => findVocabWordById(srsKey.split(':')[1])?.category)
        : [],
    [session.result, session.answered],
  )

  useEffect(() => {
    if (session.isFinished && session.result && !rewardShown) {
      setRewardShown(true)
      const result = recordExamAttempt(
        meta.examId,
        {
          date: new Date().toISOString(),
          scorePercent: session.result.scorePercent,
          passed,
          correctCount: session.result.correctCount,
          totalCount: session.result.totalCount,
          durationSeconds: session.result.durationSeconds,
        },
        meta.xpReward,
      )
      announceRewards(xpBefore, result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.isFinished])

  if (session.isFinished && session.result) {
    return (
      <ExamResults
        passed={passed}
        weakTopics={weakTopics}
        levelId={meta.levelId}
        blockId={meta.blockId}
        onRetry={meta.onRetry}
        {...session.result}
      />
    )
  }

  return <ExamQuestion session={session} />
}

function RunningGrammarExam({ items, ...meta }: ExamMeta & { items: GrammarDrillItem[] }) {
  const xpBefore = useProgressStore((state) => state.progress.xp)
  const recordExamAttempt = useProgressStore((state) => state.recordExamAttempt)
  const [rewardShown, setRewardShown] = useState(false)

  const session = usePracticeSession({
    items,
    mode: 'exam',
    count: Math.min(meta.questionCount, items.length),
    generateQuestion: generateGrammarQuestion,
  })

  const passed = session.result ? session.result.scorePercent >= meta.passingScore * 100 : false
  const weakTopics = useMemo(
    () =>
      session.result
        ? computeWeakGroups(session.answered, (srsKey) => findGrammarPointById(srsKey.split(':')[1])?.title)
        : [],
    [session.result, session.answered],
  )

  useEffect(() => {
    if (session.isFinished && session.result && !rewardShown) {
      setRewardShown(true)
      const result = recordExamAttempt(
        meta.examId,
        {
          date: new Date().toISOString(),
          scorePercent: session.result.scorePercent,
          passed,
          correctCount: session.result.correctCount,
          totalCount: session.result.totalCount,
          durationSeconds: session.result.durationSeconds,
        },
        meta.xpReward,
      )
      announceRewards(xpBefore, result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.isFinished])

  if (session.isFinished && session.result) {
    return (
      <ExamResults
        passed={passed}
        weakTopics={weakTopics}
        levelId={meta.levelId}
        blockId={meta.blockId}
        onRetry={meta.onRetry}
        {...session.result}
      />
    )
  }

  return <ExamQuestion session={session} />
}

function ExamQuestion({ session }: { session: ReturnType<typeof usePracticeSession> }) {
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-6">
      <ProgressBar percent={(session.currentIndex / session.questions.length) * 100} color="warning" />
      {session.currentQuestion && (
        <QuestionCard
          question={session.currentQuestion}
          selectedAnswer={session.selectedAnswer}
          onAnswer={session.submitAnswer}
          onNext={session.goToNext}
          isLast={session.currentIndex === session.questions.length - 1}
        />
      )}
    </div>
  )
}
