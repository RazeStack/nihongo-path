import { CheckCircle2, Circle, Lock } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { findBlock, findLevel } from '@/data/course/levels'
import { LEVELS } from '@/data/course/levels'
import {
  getBestExamScore,
  getBlockStatus,
  getBlockLockReason,
  isBlockLessonsComplete,
  isLevelUnlocked,
} from '@/services/progressService'
import { useProgressStore } from '@/store/useProgressStore'

export function BlockPage() {
  const { levelId = '', blockId = '' } = useParams()
  const progress = useProgressStore((state) => state.progress)
  const level = findLevel(levelId)
  const block = findBlock(levelId, blockId)

  if (!level || !block) return <Navigate to="/course" replace />

  const levelUnlocked = isLevelUnlocked(level, progress, LEVELS)
  const status = getBlockStatus(block, level, progress, levelUnlocked)

  if (status === 'locked') {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <Lock size={40} className="text-text-muted" />
        <h1 className="text-xl font-semibold text-text">Раздел заблокирован</h1>
        <p className="max-w-sm text-text-muted">{getBlockLockReason(block, level, levelUnlocked)}</p>
        <Link to="/course">
          <Button variant="secondary">К карте курса</Button>
        </Link>
      </div>
    )
  }

  const lessonsComplete = isBlockLessonsComplete(block, progress)
  const bestScore = getBestExamScore(progress, block.exam.id)

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Link to="/course" className="text-sm text-text-muted hover:text-accent">
          ← К карте курса
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-text">{block.title}</h1>
        <p className="mt-1 text-text-muted">{block.description}</p>
      </div>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-text">Уроки</h2>
        <div className="flex flex-col gap-2">
          {[...block.lessons]
            .sort((a, b) => a.order - b.order)
            .map((lesson) => {
              const isDone = progress.completedLessons.includes(lesson.id)
              return (
                <Link
                  key={lesson.id}
                  to={`/course/${levelId}/${blockId}/lesson/${lesson.id}`}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent"
                >
                  {isDone ? <CheckCircle2 className="shrink-0 text-success" size={20} /> : <Circle className="shrink-0 text-text-muted" size={20} />}
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-text">{lesson.title}</p>
                    <p className="truncate text-sm text-text-muted">{lesson.description}</p>
                  </div>
                  <span className="shrink-0 text-xs text-text-muted">+{lesson.xpReward} XP</span>
                </Link>
              )
            })}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold text-text">Практика</h2>
          <p className="mt-1 text-sm text-text-muted">Потренируй символы этого блока в разных режимах.</p>
          <Link to={`/course/${levelId}/${blockId}/practice`} className="mt-4 block">
            <Button variant="secondary" className="w-full">
              Открыть практику
            </Button>
          </Link>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-text">{block.exam.title}</h2>
          <p className="mt-1 text-sm text-text-muted">{block.exam.description}</p>
          <p className="mt-2 text-xs text-text-muted">
            {block.exam.questionCount} вопросов · проходной балл {Math.round(block.exam.passingScore * 100)}%
            {bestScore !== null && ` · лучший результат ${bestScore}%`}
          </p>
          {lessonsComplete ? (
            <Link to={`/course/${levelId}/${blockId}/exam`} className="mt-4 block">
              <Button className="w-full">Начать экзамен</Button>
            </Link>
          ) : (
            <>
              <Button disabled className="mt-4 w-full">
                Начать экзамен
              </Button>
              <p className="mt-2 text-xs text-warning">Пройди все уроки блока, чтобы открыть экзамен.</p>
            </>
          )}
        </Card>
      </section>
    </div>
  )
}
