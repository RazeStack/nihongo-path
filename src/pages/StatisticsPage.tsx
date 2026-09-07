import { MasteryBar } from '@/components/statistics/MasteryBar'
import { StatTile } from '@/components/dashboard/StatTile'
import { WeakPointsWidget } from '@/components/dashboard/WeakPointsWidget'
import { Card } from '@/components/ui/Card'
import { HIRAGANA_CHARACTERS } from '@/data/hiragana/hiragana.characters'
import { KATAKANA_CHARACTERS } from '@/data/katakana/katakana.characters'
import { computeKanaMasteryBreakdown, computeOverallAccuracy } from '@/services/statsService'
import { computeWeakTopics } from '@/services/weakPoints'
import { useProgressStore } from '@/store/useProgressStore'
import { Award, Flame, Percent, Target } from 'lucide-react'

export function StatisticsPage() {
  const progress = useProgressStore((state) => state.progress)
  const hiraganaBreakdown = computeKanaMasteryBreakdown(HIRAGANA_CHARACTERS, progress)
  const katakanaBreakdown = computeKanaMasteryBreakdown(KATAKANA_CHARACTERS, progress)
  const accuracy = computeOverallAccuracy(progress)
  const examAttempts = Object.entries(progress.blockExamAttempts)

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-text">Статистика</h1>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatTile icon={<Award size={18} />} label="Всего XP" value={progress.xp} />
        <StatTile icon={<Percent size={18} />} label="Точность ответов" value={`${accuracy}%`} />
        <StatTile icon={<Target size={18} />} label="Ответов дано" value={progress.totalAnswered} />
        <StatTile icon={<Flame size={18} />} label="Лучшая серия" value={progress.streak.longest} />
      </div>

      <Card className="flex flex-col gap-6">
        <h2 className="font-semibold text-text">Знание каны</h2>
        <MasteryBar title="Хирагана" breakdown={hiraganaBreakdown} total={HIRAGANA_CHARACTERS.length} />
        <MasteryBar title="Катакана" breakdown={katakanaBreakdown} total={KATAKANA_CHARACTERS.length} />
      </Card>

      <WeakPointsWidget topics={computeWeakTopics(progress)} />

      <Card>
        <h2 className="mb-3 font-semibold text-text">Результаты экзаменов</h2>
        {examAttempts.length === 0 ? (
          <p className="text-sm text-text-muted">Экзамены ещё не сдавались.</p>
        ) : (
          <div className="flex flex-col gap-2">
            {examAttempts.map(([examId, attempts]) => {
              const best = Math.max(...attempts.map((a) => a.scorePercent))
              return (
                <div key={examId} className="flex items-center justify-between text-sm">
                  <span className="text-text">{examId}</span>
                  <span className="text-text-muted">
                    {attempts.length} попыт. · лучший {best}%
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </Card>
    </div>
  )
}
