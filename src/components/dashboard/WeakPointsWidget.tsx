import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import type { WeakTopic } from '@/services/weakPoints'

export function WeakPointsWidget({ topics }: { topics: WeakTopic[] }) {
  return (
    <Card className="flex flex-col gap-3">
      <h2 className="font-semibold text-text">Слабые места</h2>
      {topics.length === 0 ? (
        <p className="text-sm text-text-muted">Пока недостаточно данных — пройди пару тренировок.</p>
      ) : (
        <>
          <div className="flex flex-col gap-2">
            {topics.map((topic) => (
              <div key={topic.label}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-text">{topic.label}</span>
                  <span className="text-text-muted">{topic.accuracyPercent}%</span>
                </div>
                <ProgressBar percent={topic.accuracyPercent} color={topic.accuracyPercent < 60 ? 'danger' : topic.accuracyPercent < 80 ? 'warning' : 'success'} />
              </div>
            ))}
          </div>
          <Link to="/practice?mode=mistakes&start=1">
            <Button variant="secondary" className="w-full">
              Тренировать слабые места
            </Button>
          </Link>
        </>
      )}
    </Card>
  )
}
