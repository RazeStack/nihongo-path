import { N5_READING_LESSONS } from './n5Reading.lessons'
import type { BlockDefinition } from '@/types/content'

export const N5_READING_BLOCK: BlockDefinition = {
  id: 'n5-reading',
  levelId: 'n5',
  title: 'Чтение',
  description: 'Три интерактивных текста N5: рассказ о себе, диалог на станции и распорядок дня. Незнакомые слова кликабельны.',
  order: 9,
  contentType: 'reading',
  prerequisiteBlockId: 'n5-numbers-time',
  lessons: N5_READING_LESSONS,
  exam: {
    id: 'n5-reading-exam',
    blockId: 'n5-reading',
    title: 'Экзамен: Чтение',
    description: 'Вопросы на понимание прочитанного по всем трём текстам блока.',
    questionCount: 7,
    passingScore: 0.7,
    xpReward: 220,
  },
}
