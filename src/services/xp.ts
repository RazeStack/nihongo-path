/**
 * XP и уровень профиля — независимая система от уровня JLPT (N5-N2).
 * Уровень JLPT — это "что ты изучаешь", уровень профиля — "насколько
 * активно ты занимаешься в принципе".
 */
export const XP_REWARDS = {
  LESSON_COMPLETE: 50,
  PRACTICE_SESSION: 20,
  BLOCK_EXAM_PASS: 200,
  STREAK_BONUS_5_CORRECT: 10,
} as const

interface ProfileLevelTier {
  level: number
  title: string
  xpRequired: number
}

const PROFILE_LEVEL_TIERS: ProfileLevelTier[] = [
  { level: 1, title: 'Новичок', xpRequired: 0 },
  { level: 2, title: 'Ученик', xpRequired: 150 },
  { level: 3, title: 'Студент', xpRequired: 400 },
  { level: 4, title: 'Практик', xpRequired: 800 },
  { level: 5, title: 'Знаток', xpRequired: 1400 },
  { level: 6, title: 'Эксперт', xpRequired: 2200 },
  { level: 7, title: 'Мастер', xpRequired: 3200 },
  { level: 8, title: 'Сэнсэй', xpRequired: 4500 },
]

export interface ProfileLevelInfo {
  level: number
  title: string
  xpIntoLevel: number
  xpForNextLevel: number | null
  progressPercent: number
}

export function calculateProfileLevel(xp: number): ProfileLevelInfo {
  let current = PROFILE_LEVEL_TIERS[0]
  let next: ProfileLevelTier | undefined

  for (let i = 0; i < PROFILE_LEVEL_TIERS.length; i++) {
    if (xp >= PROFILE_LEVEL_TIERS[i].xpRequired) {
      current = PROFILE_LEVEL_TIERS[i]
      next = PROFILE_LEVEL_TIERS[i + 1]
    }
  }

  const xpIntoLevel = xp - current.xpRequired
  const xpForNextLevel = next ? next.xpRequired - current.xpRequired : null
  const progressPercent = xpForNextLevel ? Math.min(100, (xpIntoLevel / xpForNextLevel) * 100) : 100

  return {
    level: current.level,
    title: current.title,
    xpIntoLevel,
    xpForNextLevel,
    progressPercent,
  }
}
