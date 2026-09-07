interface ProgressBarProps {
  percent: number
  color?: 'accent' | 'success' | 'warning' | 'danger'
  className?: string
}

const COLOR_CLASSES: Record<NonNullable<ProgressBarProps['color']>, string> = {
  accent: 'bg-accent',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
}

export function ProgressBar({ percent, color = 'accent', className = '' }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percent))
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-surface-2 ${className}`}>
      <div
        className={`h-full rounded-full transition-all duration-500 ease-out ${COLOR_CLASSES[color]}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  )
}
