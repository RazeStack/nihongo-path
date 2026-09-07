import { N5_FINAL_EXAM_LESSONS } from './n5FinalExam.lessons'
import type { BlockDefinition } from '@/types/content'

export const N5_FINAL_EXAM_BLOCK: BlockDefinition = {
  id: 'n5-final-exam',
  levelId: 'n5',
  title: 'Экзамен N5',
  description: 'Финальная смешанная проверка по всей программе N5 — сдав его, ты откроешь уровень N4.',
  order: 10,
  contentType: 'mixed',
  prerequisiteBlockId: 'n5-reading',
  lessons: N5_FINAL_EXAM_LESSONS,
  exam: {
    id: 'n5-final-exam-exam',
    blockId: 'n5-final-exam',
    title: 'Экзамен N5 (итоговый)',
    description: 'Случайные вопросы по кане, грамматике, словарю, кандзи и чтению из всего пройденного материала N5.',
    questionCount: 30,
    passingScore: 0.8,
    xpReward: 400,
  },
}
