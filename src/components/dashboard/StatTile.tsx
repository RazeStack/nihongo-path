import type { ReactNode } from 'react'
import { Card } from '@/components/ui/Card'

export function StatTile({ icon, label, value }: { icon: ReactNode; label: string; value: ReactNode }) {
  return (
    <Card className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
        {icon}
      </div>
      <div>
        <p className="text-lg font-semibold text-text">{value}</p>
        <p className="text-xs text-text-muted">{label}</p>
      </div>
    </Card>
  )
}
