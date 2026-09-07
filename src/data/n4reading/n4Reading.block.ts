import { N4_READING_LESSONS } from './n4Reading.lessons'
import type { BlockDefinition } from '@/types/content'

export const N4_READING_BLOCK: BlockDefinition = {
  id: 'n4-reading',
  levelId: 'n4',
  title: 'Чтение N4',
  description: 'Пять текстов N4: сообщение другу, рассказ о поездке, объявление в компании, дневниковая запись и диалог о взаимопомощи — длиннее и связнее, чем на N5.',
  order: 7,
  contentType: 'reading',
  prerequisiteBlockId: 'n4-kanji',
  lessons: N4_READING_LESSONS,
  exam: {
    id: 'n4-reading-exam',
    blockId: 'n4-reading',
    title: 'Экзамен: Чтение N4',
    description: 'Вопросы на понимание прочитанного по всем пяти текстам блока.',
    questionCount: 10,
    passingScore: 0.7,
    xpReward: 260,
  },
}
