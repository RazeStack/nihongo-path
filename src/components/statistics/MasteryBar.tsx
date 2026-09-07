import { SRS_STATUS_LABELS, type SrsStatus } from '@/services/srs'

const STATUS_COLORS: Record<SrsStatus, string> = {
  new: 'bg-border',
  learning: 'bg-danger',
  familiar: 'bg-warning',
  good: 'bg-accent',
  mastered: 'bg-success',
}

export function MasteryBar({ title, breakdown, total }: { title: string; breakdown: Record<SrsStatus, number>; total: number }) {
  const statuses = Object.keys(breakdown) as SrsStatus[]

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-text">{title}</span>
        <span className="text-text-muted">{total} символов</span>
      </div>
      <div className="flex h-3 w-full overflow-hidden rounded-full bg-surface-2">
        {statuses.map((status) =>
          breakdown[status] > 0 ? (
            <div key={status} className={STATUS_COLORS[status]} style={{ width: `${(breakdown[status] / total) * 100}%` }} />
          ) : null,
        )}
      </div>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-muted">
        {statuses.map((status) => (
          <span key={status} className="flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${STATUS_COLORS[status]}`} />
            {SRS_STATUS_LABELS[status]}: {breakdown[status]}
          </span>
        ))}
      </div>
    </div>
  )
}
