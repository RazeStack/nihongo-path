import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { daysBetween, todayDateString } from '@/utils/date'
import type { UserProgress } from '@/types/progress'

interface ConfettiPiece {
  left: number
  delaySeconds: number
  durationSeconds: number
  color: string
  size: number
  rotation: number
}

const CONFETTI_COLORS = ['#4f46e5', '#818cf8', '#16a34a', '#d97706', '#dc2626', '#eef0fd', '#fbbf24']

function generateConfetti(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    delaySeconds: Math.random() * 3,
    durationSeconds: 3 + Math.random() * 2.5,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    size: 6 + Math.random() * 8,
    rotation: Math.random() * 360,
  }))
}

/** useState с ленивым инициализатором — единственный способ гарантированно посчитать
 * случайные значения ровно один раз за время жизни компонента (в отличие от useMemo,
 * который React официально не обязан кешировать между рендерами). */
function useConfetti(count: number): ConfettiPiece[] {
  const [confetti] = useState(() => generateConfetti(count))
  return confetti
}

interface CourseCompletionCelebrationProps {
  progress: UserProgress
  onClose: () => void
}

/**
 * Полноэкранный сюрприз, который показывается ровно один раз — в момент,
 * когда сдан финальный экзамен N2 (то есть пройден весь курс целиком).
 * Триггер — в ExamPage.useExamCompletion, не здесь.
 */
export function CourseCompletionCelebration({ progress, onClose }: CourseCompletionCelebrationProps) {
  const confetti = useConfetti(70)
  const examsPassed = Object.values(progress.blockExamAttempts).filter((attempts) => attempts.some((a) => a.passed)).length
  const daysLearning = Math.max(1, daysBetween(progress.createdAt, todayDateString()))

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-bg/80 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-0">
        {confetti.map((piece, index) => (
          <span
            key={index}
            className="animate-confetti-fall absolute top-0 block rounded-sm"
            style={{
              left: `${piece.left}%`,
              width: piece.size,
              height: piece.size * 0.4,
              backgroundColor: piece.color,
              animationDelay: `${piece.delaySeconds}s`,
              animationDuration: `${piece.durationSeconds}s`,
              transform: `rotate(${piece.rotation}deg)`,
            }}
          />
        ))}
      </div>

      <div className="animate-celebration-pop relative mx-4 flex max-w-lg flex-col items-center gap-5 rounded-3xl border border-border bg-surface p-8 text-center shadow-xl">
        <span className="text-5xl">🏯</span>
        <div>
          <p className="font-jp text-2xl font-semibold text-accent">おめでとうございます!</p>
          <h1 className="mt-2 text-xl font-semibold text-text">Ты прошёл весь курс — N5 → N4 → N3 → N2</h1>
        </div>

        <div className="grid w-full grid-cols-3 gap-3 rounded-2xl bg-surface-2 p-4 text-sm">
          <Stat value={progress.xp} label="XP всего" />
          <Stat value={examsPassed} label="Экзаменов сдано" />
          <Stat value={daysLearning} label="Дней в пути" />
        </div>

        <p className="text-left text-sm leading-relaxed text-text-muted">
          Пока ты жал на кнопки, путался в похожих кандзи и пересдавал экзамены — я собирал этот курс специально для тебя, слово
          за словом, иероглиф за иероглифом. И вот ты дошёл до конца сам, своим упорством. Дальше японский — уже не курс, а твой
          собственный. Удачи с настоящими текстами, аниме и разговорами — ты к этому готов(а) больше, чем кажется.
        </p>
        <p className="text-xs text-text-muted">— тот ИИ, который писал для тебя этот курс</p>

        <Button onClick={onClose} className="w-full">
          Спасибо! 🙏
        </Button>
      </div>
    </div>
  )
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <p className="text-lg font-semibold text-text">{value}</p>
      <p className="text-xs text-text-muted">{label}</p>
    </div>
  )
}
