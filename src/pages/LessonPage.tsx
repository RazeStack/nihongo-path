import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { MiniCheck } from '@/components/lesson/MiniCheck'
import { TheoryRenderer } from '@/components/lesson/TheoryRenderer'
import { Button } from '@/components/ui/Button'
import { findBlock, findLesson, findLevel } from '@/data/course/levels'
import { announceRewards } from '@/services/rewardAnnouncer'
import { useProgressStore } from '@/store/useProgressStore'

export function LessonPage() {
  const { levelId = '', blockId = '', lessonId = '' } = useParams()
  const navigate = useNavigate()
  const level = findLevel(levelId)
  const block = findBlock(levelId, blockId)
  const lesson = findLesson(levelId, blockId, lessonId)
  const xpBefore = useProgressStore((state) => state.progress.xp)
  const isCompleted = useProgressStore((state) => state.progress.completedLessons.includes(lessonId))
  const completeLesson = useProgressStore((state) => state.completeLesson)

  if (!level || !block || !lesson) return <Navigate to="/course" replace />

  const sortedLessons = [...block.lessons].sort((a, b) => a.order - b.order)
  const nextLesson = sortedLessons[sortedLessons.findIndex((l) => l.id === lesson.id) + 1]

  function handleComplete() {
    const result = completeLesson(lesson!.id, lesson!.xpReward)
    announceRewards(xpBefore, result)
    if (nextLesson) navigate(`/course/${levelId}/${blockId}/lesson/${nextLesson.id}`)
    else navigate(`/course/${levelId}/${blockId}`)
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <Link to={`/course/${levelId}/${blockId}`} className="text-sm text-text-muted hover:text-accent">
        ← {block.title}
      </Link>

      <div>
        <h1 className="text-2xl font-semibold text-text">{lesson.title}</h1>
        <p className="mt-1 text-text-muted">{lesson.description}</p>
      </div>

      <TheoryRenderer sections={lesson.theory} />
      <MiniCheck questions={lesson.miniCheck} />

      <div className="flex items-center justify-between">
        <span className="text-sm text-text-muted">+{lesson.xpReward} XP</span>
        <Button onClick={handleComplete}>
          {isCompleted ? (nextLesson ? 'Следующий урок' : 'К блоку') : 'Завершить урок'}
        </Button>
      </div>
    </div>
  )
}
