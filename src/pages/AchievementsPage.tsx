import { Lock } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { ACHIEVEMENTS } from '@/data/achievements'
import { useProgressStore } from '@/store/useProgressStore'

export function AchievementsPage() {
  const progress = useProgressStore((state) => state.progress)
  const unlockedCount = ACHIEVEMENTS.filter((a) => progress.unlockedAchievements[a.id]).length

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-text">Достижения</h1>
        <p className="mt-1 text-text-muted">
          Открыто {unlockedCount} из {ACHIEVEMENTS.length}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((achievement) => {
          const unlockedDate = progress.unlockedAchievements[achievement.id]
          const isUnlocked = Boolean(unlockedDate)
          const isSecretAndLocked = achievement.hidden && !isUnlocked

          return (
            <Card key={achievement.id} className={`flex items-start gap-3 ${isUnlocked ? '' : 'opacity-60'}`}>
              <span className="text-3xl">{isSecretAndLocked ? '❓' : achievement.icon}</span>
              <div className="min-w-0">
                <p className="font-medium text-text">{isSecretAndLocked ? 'Скрытое достижение' : achievement.title}</p>
                <p className="text-sm text-text-muted">{isSecretAndLocked ? 'Условие откроется, когда ты его выполнишь.' : achievement.description}</p>
                {isUnlocked ? (
                  <p className="mt-1 text-xs text-success">Открыто {unlockedDate}</p>
                ) : (
                  <p className="mt-1 flex items-center gap-1 text-xs text-text-muted">
                    <Lock size={12} /> +{achievement.xpReward} XP
                  </p>
                )}
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
