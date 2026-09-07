import { CheckCircle2, Circle } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import type { DailyQuestInstance } from '@/types/progress'

export function DailyQuestList({ quests }: { quests: DailyQuestInstance[] }) {
  return (
    <Card className="flex flex-col gap-3">
      <h2 className="font-semibold text-text">Задания на сегодня</h2>
      <div className="flex flex-col gap-3">
        {quests.map((quest) => (
          <div key={quest.id} className="flex items-center gap-3">
            {quest.completed ? (
              <CheckCircle2 size={18} className="shrink-0 text-success" />
            ) : (
              <Circle size={18} className="shrink-0 text-text-muted" />
            )}
            <div className="min-w-0 flex-1">
              <p className={`text-sm ${quest.completed ? 'text-text-muted line-through' : 'text-text'}`}>{quest.title}</p>
              <ProgressBar percent={(quest.progressCount / quest.targetCount) * 100} className="mt-1" />
            </div>
            <span className="shrink-0 text-xs text-text-muted">+{quest.xpReward}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
