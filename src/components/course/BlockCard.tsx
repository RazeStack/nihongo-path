import { CheckCircle2, Lock, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/Badge'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { getBlockProgressPercent, getLessonsCompletedInBlock } from '@/services/progressService'
import { useProgressStore } from '@/store/useProgressStore'
import type { BlockStatus } from '@/services/progressService'
import type { BlockDefinition } from '@/types/content'

interface BlockCardProps {
  block: BlockDefinition
  status: BlockStatus
  isCurrent: boolean
  lockReason?: string
}

export function BlockCard({ block, status, isCurrent, lockReason }: BlockCardProps) {
  const progress = useProgressStore((state) => state.progress)
  const isLocked = status === 'locked'
  const completedLessons = getLessonsCompletedInBlock(block, progress)
  const percent = getBlockProgressPercent(block, progress)

  const content = (
    <div
      className={`flex flex-col gap-3 rounded-2xl border p-5 transition-colors ${
        isLocked
          ? 'border-border bg-surface-2 opacity-70'
          : isCurrent
            ? 'border-accent bg-accent-soft'
            : 'border-border bg-surface hover:border-accent'
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base font-semibold text-text">{block.title}</h3>
          <p className="mt-0.5 text-sm text-text-muted">{block.description}</p>
        </div>
        {status === 'completed' && <CheckCircle2 className="shrink-0 text-success" size={22} />}
        {isLocked && <Lock className="shrink-0 text-text-muted" size={20} />}
        {isCurrent && <Sparkles className="shrink-0 text-accent" size={20} />}
      </div>

      <div className="flex items-center gap-2 text-xs text-text-muted">
        <span>{block.lessons.length} уроков</span>
        <span>·</span>
        <span>{block.exam.xpReward} XP за экзамен</span>
      </div>

      {!isLocked && (
        <div className="flex items-center gap-2">
          <ProgressBar percent={percent} color={status === 'completed' ? 'success' : 'accent'} />
          <span className="shrink-0 text-xs text-text-muted">
            {completedLessons}/{block.lessons.length}
          </span>
        </div>
      )}

      {isLocked && lockReason && <p className="text-xs text-text-muted">{lockReason}</p>}

      <div className="flex gap-2">
        {status === 'completed' && <Badge tone="success">Пройдено</Badge>}
        {isCurrent && <Badge tone="accent">Продолжить</Badge>}
      </div>
    </div>
  )

  if (isLocked) return content

  return <Link to={`/course/${block.levelId}/${block.id}`}>{content}</Link>
}
