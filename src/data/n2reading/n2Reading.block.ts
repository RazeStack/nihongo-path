import { N2_READING_LESSONS } from './n2Reading.lessons'
import type { BlockDefinition } from '@/types/content'

export const N2_READING_BLOCK: BlockDefinition = {
  id: 'n2-reading',
  levelId: 'n2',
  title: 'Чтение N2',
  description: 'Пять текстов — новостная заметка, деловое письмо, колонка мнения, интервью, официальное уведомление — самый формальный японский в курсе.',
  order: 8,
  contentType: 'reading',
  prerequisiteBlockId: 'n2-kanji',
  lessons: N2_READING_LESSONS,
  exam: {
    id: 'n2-reading-exam',
    blockId: 'n2-reading',
    title: 'Экзамен: Чтение N2',
    description: 'Вопросы на понимание прочитанного по всем текстам блока.',
    questionCount: 10,
    passingScore: 0.7,
    xpReward: 340,
  },
}
