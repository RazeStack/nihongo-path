import { useEffect, useMemo, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { QuestionCard } from '@/components/practice/QuestionCard'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { LEVELS, findBlock } from '@/data/course/levels'
import { usePracticeSession } from '@/hooks/usePracticeSession'
import { generateGrammarQuestion, type GrammarDrillItem } from '@/services/questionGenerators/grammarQuestions'
import { pickRandom } from '@/utils/shuffle'
import {
  getKnownGrammarDrillItems,
  getKnownKanaCharacters,
  getKnownKanjiEntries,
  getKnownVocabWords,
} from '@/services/knownItems'
import { announceRewards } from '@/services/rewardAnnouncer'
import { useProgressStore } from '@/store/useProgressStore'
import { KANA_ADAPTER, KANJI_ADAPTER, VOCAB_ADAPTER, type DirectionalAdapter } from '@/services/questionGenerators/directionalAdapters'
import type { ContentType } from '@/types/content'
import type { PracticeMode, Question } from '@/types/practice'
import type { PracticeSourceItem } from '@/services/practiceEngine'

const MODE_OPTIONS: { value: PracticeMode; label: string; description: string }[] = [
  { value: 'sequential', label: 'По порядку', description: 'Идут в порядке изучения' },
  { value: 'random', label: 'Случайный', description: 'Порядок и варианты перемешаны' },
  { value: 'mistakes', label: 'Ошибки', description: 'Только то, в чём ты ошибался' },
  { value: 'review', label: 'Повторение', description: 'То, что пора повторить (SRS)' },
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
  const knownKanjiEntries = useMemo(
    () => (contentType === 'kanji' ? getKnownKanjiEntries(relevantBlocks, progress) : []),
    [contentType, relevantBlocks, progress],
  )
  const itemCount =
    contentType === 'grammar'
      ? knownGrammarItems.length
      : contentType === 'vocabulary'
        ? knownVocabWords.length
        : contentType === 'kanji'
          ? knownKanjiEntries.length
          : knownChars.length

  const requestedMode = searchParams.get('mode') as PracticeMode | null
  const [mode, setMode] = useState<PracticeMode>(requestedMode ?? 'random')
  const [direction, setDirection] = useState('mixed')
  const [started, setStarted] = useState(searchParams.get('start') === '1')

  const backLink = scopedBlock ? `/course/${scopedBlock.levelId}/${scopedBlock.id}` : '/'
  const adapter = contentType === 'vocabulary' ? VOCAB_ADAPTER : contentType === 'kanji' ? KANJI_ADAPTER : KANA_ADAPTER

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

            {contentType !== 'grammar' && (
              <Card className="flex flex-col gap-3">
                <p className="text-sm font-medium text-text">Направление</p>
                <div className="grid grid-cols-3 gap-2">
                  {[...adapter.directionOptions, { value: 'mixed', label: 'Смешанно' }].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setDirection(option.value)}
                      className={`rounded-xl border p-2.5 text-sm transition-colors ${
                        direction === option.value ? 'border-accent bg-accent-soft text-accent' : 'border-border hover:border-accent'
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

  const exit = () => setStarted(false)

  if (contentType === 'grammar') {
    return <RunningGrammarPractice items={knownGrammarItems} mode={mode} backLink={backLink} onExit={exit} />
  }
  if (contentType === 'vocabulary') {
    return (
      <RunningDirectionalPractice items={knownVocabWords} mode={mode} direction={direction} adapter={VOCAB_ADAPTER} backLink={backLink} onExit={exit} />
    )
  }
  if (contentType === 'kanji') {
    return (
      <RunningDirectionalPractice items={knownKanjiEntries} mode={mode} direction={direction} adapter={KANJI_ADAPTER} backLink={backLink} onExit={exit} />
    )
  }
  return <RunningDirectionalPractice items={knownChars} mode={mode} direction={direction} adapter={KANA_ADAPTER} backLink={backLink} onExit={exit} />
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

function RunningDirectionalPractice<T extends PracticeSourceItem>({
  items,
  mode,
  direction,
  adapter,
  backLink,
  onExit,
}: {
  items: T[]
  mode: PracticeMode
  direction: string
  adapter: DirectionalAdapter<T>
  backLink: string
  onExit: () => void
}) {
  const xpBefore = useProgressStore((state) => state.progress.xp)
  const finishPracticeSession = useProgressStore((state) => state.finishPracticeSession)

  const session = usePracticeSession({
    items,
    mode,
    count: Math.min(SESSION_LENGTH, items.length),
    generateQuestion: (item, pool): Question =>
      adapter.generateQuestion(item, pool, direction === 'mixed' ? pickRandom(adapter.directionOptions, 1)[0].value : direction),
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
