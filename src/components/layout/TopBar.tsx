import { Flame } from 'lucide-react'
import { calculateProfileLevel } from '@/services/xp'
import { useProgressStore } from '@/store/useProgressStore'
import { ProgressBar } from '@/components/ui/ProgressBar'

export function TopBar() {
  const xp = useProgressStore((state) => state.progress.xp)
  const streak = useProgressStore((state) => state.progress.streak)
  const levelInfo = calculateProfileLevel(xp)

  return (
    <header className="flex items-center justify-between gap-4 border-b border-border bg-surface px-4 py-3 md:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">
          {levelInfo.level}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-text">{levelInfo.title}</p>
          {levelInfo.xpForNextLevel !== null && (
            <ProgressBar percent={levelInfo.progressPercent} className="mt-1 w-28" />
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm font-medium text-text-muted">
        <span className="flex items-center gap-1.5">
          <Flame size={16} className={streak.current > 0 ? 'text-warning' : ''} />
          {streak.current}
        </span>
        <span>{xp} XP</span>
      </div>
    </header>
  )
}
