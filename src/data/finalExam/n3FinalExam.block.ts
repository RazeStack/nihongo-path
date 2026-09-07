import { N3_FINAL_EXAM_LESSONS } from './n3FinalExam.lessons'
import type { BlockDefinition } from '@/types/content'

export const N3_FINAL_EXAM_BLOCK: BlockDefinition = {
  id: 'n3-final-exam',
  levelId: 'n3',
  title: 'Экзамен N3',
  description: 'Финальная смешанная проверка по всей программе N3 — сдав его, ты откроешь уровень N2.',
  order: 5,
  contentType: 'mixed',
  prerequisiteBlockId: 'n3-reading',
  lessons: N3_FINAL_EXAM_LESSONS,
  exam: {
    id: 'n3-final-exam-exam',
    blockId: 'n3-final-exam',
    title: 'Экзамен N3 (итоговый)',
    description: 'Случайные вопросы по грамматике, словарю, кандзи и чтению из всего пройденного материала N3.',
    questionCount: 20,
    passingScore: 0.8,
    xpReward: 400,
  },
}
