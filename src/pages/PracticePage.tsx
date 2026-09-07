import { useEffect, useMemo, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { QuestionCard } from '@/components/practice/QuestionCard'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { LEVELS, findBlock } from '@/data/course/levels'
import { usePracticeSession } from '@/hooks/usePracticeSession'
import { generateKanaQuestion, type KanaQuestionDirection } from '@/services/questionGenerators/kanaQuestions'
import { generateGrammarQuestion, type GrammarDrillItem } from '@/services/questionGenerators/grammarQuestions'
import { generateVocabQuestion, type VocabQuestionDirection } from '@/services/questionGenerators/vocabQuestions'
import {
  getKnownGrammarDrillItems,
  getKnownKanaCharacters,
  getKnownVocabWords,
  type PracticeKanaChar,
  type PracticeVocabWord,
} from '@/services/knownItems'
import { announceRewards } from '@/services/rewardAnnouncer'
import { useProgressStore } from '@/store/useProgressStore'
import type { ContentType } from '@/types/content'
import type { PracticeMode } from '@/types/practice'

const MODE_OPTIONS: { value: PracticeMode; label: string; description: string }[] = [
  { value: 'sequential', label: 'По порядку', description: 'Идут в порядке изучения' },
  { value: 'random', label: 'Случайный', description: 'Порядок и варианты перемешаны' },
  { value: 'mistakes', label: 'Ошибки', description: 'Только то, в чём ты ошибался' },
  { value: 'review', label: 'Повторение', description: 'То, что пора повторить (SRS)' },
]

const KANA_DIRECTION_OPTIONS: { value: KanaQuestionDirection | 'mixed'; label: string }[] = [
  { value: 'char-to-romaji', label: 'Символ → ромадзи' },
  { value: 'romaji-to-char', label: 'Ромадзи → символ' },
  { value: 'mixed', label: 'Смешанно' },
]

const VOCAB_DIRECTION_OPTIONS: { value: VocabQuestionDirection | 'mixed'; label: string }[] = [
  { value: 'word-to-translation', label: 'Слово → перевод' },
  { value: 'translation-to-word', label: 'Перевод → слово' },
  { value: 'mixed', label: 'Смешанно' },
]

const SESSION_LENGTH = 12

export function PracticePage() {
  const { levelId, blockId } = useParams()
  const [searchParams] = useSearchParams()
  const progress = useProgressStore((state) => state.progress)

  const scopedBlock = levelId && blockId ? findBlock(levelId, blockId) : undefined
  const contentType: ContentType = scopedBlock?.contentType ?? 'kana'

  const relevantBlocks = useMemo(
    () => (scopedBlock ? [scopedBlock] : LEVELS.flatMap((level) => level.blocks).filter((b) => b.contentType === 'kana')),
    [scopedBlock],
  )
  const knownChars = useMemo(
    () => (contentType === 'kana' ? getKnownKanaCharacters(relevantBlocks, progress) : []),
    [contentType, relevantBlocks, progress],
  )
  const knownGrammarItems = useMemo(
    () => (contentType === 'grammar' ? getKnownGrammarDrillItems(relevantBlocks, progress) : []),
    [contentType, relevantBlocks, progress],
  )
  const knownVocabWords = useMemo(
    () => (contentType === 'vocabulary' ? getKnownVocabWords(relevantBlocks, progress) : []),
    [contentType, relevantBlocks, progress],
  )
  const itemCount =
    contentType === 'grammar' ? knownGrammarItems.length : contentType === 'vocabulary' ? knownVocabWords.length : knownChars.length

  const requestedMode = searchParams.get('mode') as PracticeMode | null
  const [mode, setMode] = useState<PracticeMode>(requestedMode ?? 'random')
  const [kanaDirection, setKanaDirection] = useState<KanaQuestionDirection | 'mixed'>('mixed')
  const [vocabDirection, setVocabDirection] = useState<VocabQuestionDirection | 'mixed'>('mixed')
  const [started, setStarted] = useState(searchParams.get('start') === '1')

  const backLink = scopedBlock ? `/course/${scopedBlock.levelId}/${scopedBlock.id}` : '/'

  if (!started) {
    return (
      <div className="mx-auto flex max-w-xl flex-col gap-6">
        <Link to={backLink} className="text-sm text-text-muted hover:text-accent">
          ← Назад
        </Link>
        <div>
          <h1 className="text-2xl font-semibold text-text">{scopedBlock ? `Практика: ${scopedBlock.title}` : 'Практика'}</h1>
          <p className="mt-1 text-text-muted">
            {scopedBlock ? 'Тренировка по материалу этого блока.' : 'Смешанная тренировка по всей изученной кане.'}
          </p>
        </div>

        {itemCount === 0 ? (
          <Card>
            <p className="text-text-muted">Сначала пройди хотя бы один урок, чтобы появился материал для тренировки.</p>
          </Card>
        ) : (
          <>
            <Card className="flex flex-col gap-3">
              <p className="text-sm font-medium text-text">Режим</p>
              <div className="grid grid-cols-2 gap-2">
                {MODE_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setMode(option.value)}
                    className={`rounded-xl border p-3 text-left text-sm transition-colors ${
                      mode === option.value ? 'border-accent bg-accent-soft text-accent' : 'border-border hover:border-accent'
                    }`}
                  >
                    <p className="font-medium">{option.label}</p>
                    <p className="text-xs text-text-muted">{option.description}</p>
                  </button>
                ))}
              </div>
            </Card>

            {contentType === 'kana' && (
              <Card className="flex flex-col gap-3">
                <p className="text-sm font-medium text-text">Направление</p>
                <div className="grid grid-cols-3 gap-2">
                  {KANA_DIRECTION_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setKanaDirection(option.value)}
                      className={`rounded-xl border p-2.5 text-sm transition-colors ${
                        kanaDirection === option.value ? 'border-accent bg-accent-soft text-accent' : 'border-border hover:border-accent'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </Card>
            )}

            {contentType === 'vocabulary' && (
              <Card className="flex flex-col gap-3">
                <p className="text-sm font-medium text-text">Направление</p>
                <div className="grid grid-cols-3 gap-2">
                  {VOCAB_DIRECTION_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setVocabDirection(option.value)}
                      className={`rounded-xl border p-2.5 text-sm transition-colors ${
                        vocabDirection === option.value ? 'border-accent bg-accent-soft text-accent' : 'border-border hover:border-accent'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </Card>
            )}

            <Button onClick={() => setStarted(true)}>Начать тренировку</Button>
          </>
        )}
      </div>
    )
  }

  if (contentType === 'grammar') {
    return <RunningGrammarPractice items={knownGrammarItems} mode={mode} backLink={backLink} onExit={() => setStarted(false)} />
  }
  if (contentType === 'vocabulary') {
    return (
      <RunningVocabPractice
        words={knownVocabWords}
        mode={mode}
        direction={vocabDirection}
        backLink={backLink}
        onExit={() => setStarted(false)}
      />
    )
  }
  return (
    <RunningKanaPractice
      knownChars={knownChars}
      mode={mode}
      direction={kanaDirection}
      backLink={backLink}
      onExit={() => setStarted(false)}
    />
  )
}

function SessionEmptyState({ mode, onExit }: { mode: PracticeMode; onExit: () => void }) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 py-16 text-center">
      <p className="text-text-muted">
        {mode === 'mistakes' ? 'Пока нет ошибок для повторения — отличная работа!' : 'Нет материала для этого режима.'}
      </p>
      <Button variant="secondary" onClick={onExit}>
        Назад к настройкам
      </Button>
    </div>
  )
}

function SessionResults({
  scorePercent,
  correctCount,
  totalCount,
  backLink,
  onExit,
}: {
  scorePercent: number
  correctCount: number
  totalCount: number
  backLink: string
  onExit: () => void
}) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 py-10 text-center">
      <h1 className="text-2xl font-semibold text-text">Тренировка завершена</h1>
      <p className="text-5xl font-bold text-accent">{scorePercent}%</p>
      <p className="text-text-muted">
        {correctCount} из {totalCount} правильно
      </p>
      <div className="flex gap-3">
        <Button variant="secondary" onClick={onExit}>
          Ещё раз
        </Button>
        <Link to={backLink}>
          <Button>Готово</Button>
        </Link>
      </div>
    </div>
  )
}

function RunningKanaPractice({
  knownChars,
  mode,
  direction,
  backLink,
  onExit,
}: {
  knownChars: PracticeKanaChar[]
  mode: PracticeMode
  direction: KanaQuestionDirection | 'mixed'
  backLink: string
  onExit: () => void
}) {
  const xpBefore = useProgressStore((state) => state.progress.xp)
  const finishPracticeSession = useProgressStore((state) => state.finishPracticeSession)

  const session = usePracticeSession({
    items: knownChars,
    mode,
    count: Math.min(SESSION_LENGTH, knownChars.length),
    generateQuestion: (item, pool) =>
      generateKanaQuestion(item, pool, direction === 'mixed' ? (Math.random() > 0.5 ? 'char-to-romaji' : 'romaji-to-char') : direction),
  })

  useEffect(() => {
    if (session.isFinished && session.result) {
      const result = finishPracticeSession(session.result.totalCount)
      announceRewards(xpBefore, result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.isFinished])

  if (session.questions.length === 0) return <SessionEmptyState mode={mode} onExit={onExit} />
  if (session.isFinished && session.result) return <SessionResults {...session.result} backLink={backLink} onExit={onExit} />

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-6">
      <ProgressBar percent={(session.currentIndex / session.questions.length) * 100} />
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

function RunningVocabPractice({
  words,
  mode,
  direction,
  backLink,
  onExit,
}: {
  words: PracticeVocabWord[]
  mode: PracticeMode
  direction: VocabQuestionDirection | 'mixed'
  backLink: string
  onExit: () => void
}) {
  const xpBefore = useProgressStore((state) => state.progress.xp)
  const finishPracticeSession = useProgressStore((state) => state.finishPracticeSession)

  const session = usePracticeSession({
    items: words,
    mode,
    count: Math.min(SESSION_LENGTH, words.length),
    generateQuestion: (item, pool) =>
      generateVocabQuestion(
        item,
        pool,
        direction === 'mixed' ? (Math.random() > 0.5 ? 'word-to-translation' : 'translation-to-word') : direction,
      ),
  })

  useEffect(() => {
    if (session.isFinished && session.result) {
      const result = finishPracticeSession(session.result.totalCount)
      announceRewards(xpBefore, result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.isFinished])

  if (session.questions.length === 0) return <SessionEmptyState mode={mode} onExit={onExit} />
  if (session.isFinished && session.result) return <SessionResults {...session.result} backLink={backLink} onExit={onExit} />

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-6">
      <ProgressBar percent={(session.currentIndex / session.questions.length) * 100} />
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

function RunningGrammarPractice({
  items,
  mode,
  backLink,
  onExit,
}: {
  items: GrammarDrillItem[]
  mode: PracticeMode
  backLink: string
  onExit: () => void
}) {
  const xpBefore = useProgressStore((state) => state.progress.xp)
  const finishPracticeSession = useProgressStore((state) => state.finishPracticeSession)

  const session = usePracticeSession({
    items,
    mode,
    count: Math.min(SESSION_LENGTH, items.length),
    generateQuestion: generateGrammarQuestion,
  })

  useEffect(() => {
    if (session.isFinished && session.result) {
      const result = finishPracticeSession(session.result.totalCount)
      announceRewards(xpBefore, result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.isFinished])

  if (session.questions.length === 0) return <SessionEmptyState mode={mode} onExit={onExit} />
  if (session.isFinished && session.result) return <SessionResults {...session.result} backLink={backLink} onExit={onExit} />

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-6">
      <ProgressBar percent={(session.currentIndex / session.questions.length) * 100} />
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
