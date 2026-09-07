import { N2_FINAL_EXAM_LESSONS } from './n2FinalExam.lessons'
import type { BlockDefinition } from '@/types/content'

export const N2_FINAL_EXAM_BLOCK: BlockDefinition = {
  id: 'n2-final-exam',
  levelId: 'n2',
  title: 'Экзамен N2',
  description: 'Финальная смешанная проверка по всей программе N2 — и всего курса целиком.',
  order: 5,
  contentType: 'mixed',
  prerequisiteBlockId: 'n2-reading',
  lessons: N2_FINAL_EXAM_LESSONS,
  exam: {
    id: 'n2-final-exam-exam',
    blockId: 'n2-final-exam',
    title: 'Экзамен N2 (итоговый)',
    description: 'Случайные вопросы по грамматике, словарю, кандзи и чтению из всего пройденного материала N2.',
    questionCount: 20,
    passingScore: 0.8,
    xpReward: 500,
  },
}
