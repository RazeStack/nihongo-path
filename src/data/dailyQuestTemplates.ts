import type { DailyQuestTemplate } from '@/types/gamification'

export const DAILY_QUEST_TEMPLATES: DailyQuestTemplate[] = [
  { id: 'answer-15', title: 'Ответь на 15 вопросов в тренировке', targetCount: 15, xpReward: 15, metric: 'answers' },
  { id: 'answer-30', title: 'Ответь на 30 вопросов в тренировке', targetCount: 30, xpReward: 25, metric: 'answers' },
  { id: 'lesson-1', title: 'Заверши 1 урок', targetCount: 1, xpReward: 20, metric: 'lessonsCompleted' },
  { id: 'lesson-2', title: 'Заверши 2 урока', targetCount: 2, xpReward: 35, metric: 'lessonsCompleted' },
  { id: 'exam-1', title: 'Сдай 1 экзамен', targetCount: 1, xpReward: 40, metric: 'examsPassed' },
]
