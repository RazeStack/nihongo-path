import { N4_FINAL_EXAM_LESSONS } from './n4FinalExam.lessons'
import type { BlockDefinition } from '@/types/content'

export const N4_FINAL_EXAM_BLOCK: BlockDefinition = {
  id: 'n4-final-exam',
  levelId: 'n4',
  title: 'Экзамен N4',
  description: 'Финальная смешанная проверка по всей программе N4 — сдав его, ты откроешь уровень N3.',
  order: 8,
  contentType: 'mixed',
  prerequisiteBlockId: 'n4-reading',
  lessons: N4_FINAL_EXAM_LESSONS,
  exam: {
    id: 'n4-final-exam-exam',
    blockId: 'n4-final-exam',
    title: 'Экзамен N4 (итоговый)',
    description: 'Случайные вопросы по грамматике, словарю, кандзи и чтению из всего пройденного материала N4.',
    questionCount: 35,
    passingScore: 0.8,
    xpReward: 400,
  },
}
