import { N4_READING_LESSONS } from './n4Reading.lessons'
import type { BlockDefinition } from '@/types/content'

export const N4_READING_BLOCK: BlockDefinition = {
  id: 'n4-reading',
  levelId: 'n4',
  title: 'Чтение N4',
  description: 'Сообщение другу и рассказ о поездке — тексты длиннее и связнее, чем на N5, с опорой на て-форму.',
  order: 4,
  contentType: 'reading',
  prerequisiteBlockId: 'n4-kanji',
  lessons: N4_READING_LESSONS,
  exam: {
    id: 'n4-reading-exam',
    blockId: 'n4-reading',
    title: 'Экзамен: Чтение N4',
    description: 'Вопросы на понимание прочитанного по обоим текстам блока.',
    questionCount: 5,
    passingScore: 0.7,
    xpReward: 240,
  },
}
