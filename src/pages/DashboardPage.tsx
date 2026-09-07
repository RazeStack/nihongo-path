import { useEffect } from 'react'
import { Award, BookOpen, CheckCircle2, Flame } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ContinueCard } from '@/components/dashboard/ContinueCard'
import { DailyQuestList } from '@/components/dashboard/DailyQuestList'
import { StatTile } from '@/components/dashboard/StatTile'
import { WeakPointsWidget } from '@/components/dashboard/WeakPointsWidget'
import { Card } from '@/components/ui/Card'
import { ACHIEVEMENTS } from '@/data/achievements'
import { LEVELS } from '@/data/course/levels'
import { findNextRecommendedBlock } from '@/services/progressService'
import { computeWeakTopics } from '@/services/weakPoints'
import { useProgressStore } from '@/store/useProgressStore'

export function DashboardPage() {
  const progress = useProgressStore((state) => state.progress)
  const ensureDailyQuests = useProgressStore((state) => state.ensureDailyQuests)

  useEffect(() => {
    ensureDailyQuests()
  }, [ensureDailyQuests])

  const isFirstVisit = progress.xp === 0 && progress.completedLessons.length === 0
  const recommended = findNextRecommendedBlock(LEVELS, progress)
  const weakTopics = computeWeakTopics(progress)
  const examsPassed = Object.values(progress.blockExamAttempts).filter((list) => list.some((a) => a.passed)).length
  const recentAchievements = ACHIEVEMENTS.filter((a) => progress.unlockedAchievements[a.id]).slice(-3).reverse()

  return (
    <div className="flex flex-col gap-6">
      {isFirstVisit && (
        <Card className="border-accent bg-accent-soft">
          <h1 className="text-xl font-semibold text-accent">Добро пожаловать в Nihongo Path 👋</h1>
          <p className="mt-1 text-sm text-accent">
            Начни с азбуки хирагана — это основа, без которой не читается ни один японский текст. Дальше откроются катакана,
            грамматика, кандзи и остальная программа N5.
          </p>
        </Card>
      )}

      {recommended && <ContinueCard level={recommended.level} block={recommended.block} />}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatTile icon={<Award size={18} />} label="Опыт" value={`${progress.xp} XP`} />
        <StatTile icon={<Flame size={18} />} label="Серия дней" value={progress.streak.current} />
        <StatTile icon={<BookOpen size={18} />} label="Уроков пройдено" value={progress.completedLessons.length} />
        <StatTile icon={<CheckCircle2 size={18} />} label="Экзаменов сдано" value={examsPassed} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <WeakPointsWidget topics={weakTopics} />
        {progress.dailyQuests && <DailyQuestList quests={progress.dailyQuests.quests} />}
      </div>

      <Card>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-semibold text-text">Достижения</h2>
          <Link to="/achievements" className="text-sm text-accent hover:underline">
            Все достижения
          </Link>
        </div>
        {recentAchievements.length === 0 ? (
          <p className="text-sm text-text-muted">Пока нет открытых достижений — начни с первого урока.</p>
        ) : (
          <div className="flex flex-wrap gap-3">
            {recentAchievements.map((a) => (
              <div key={a.id} className="flex items-center gap-2 rounded-xl bg-surface-2 px-3 py-2 text-sm">
                <span className="text-xl">{a.icon}</span>
                <span className="text-text">{a.title}</span>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
