import type { UserProgress } from './progress'

export interface AchievementDefinition {
  id: string
  title: string
  description: string
  icon: string
  xpReward: number
  hidden?: boolean
  /** Достижение открыто, если функция возвращает true для текущего прогресса. */
  isUnlocked: (progress: UserProgress) => boolean
}

export interface DailyQuestTemplate {
  id: string
  title: string
  targetCount: number
  xpReward: number
  /** Сколько добавить к прогрессу квеста за одно "событие" такого типа. */
  metric: 'answers' | 'lessonsCompleted' | 'examsPassed'
}
