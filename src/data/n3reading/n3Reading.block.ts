import { N3_READING_LESSONS } from './n3Reading.lessons'
import type { BlockDefinition } from '@/types/content'

export const N3_READING_BLOCK: BlockDefinition = {
  id: 'n3-reading',
  levelId: 'n3',
  title: 'Чтение N3',
  description: 'Пять текстов N3: официальное объявление, заметка-рассуждение, деловое письмо (敬語), новостная статья и личные размышления — опираются на грамматику и словарь N3.',
  order: 9,
  contentType: 'reading',
  prerequisiteBlockId: 'n3-kanji',
  lessons: N3_READING_LESSONS,
  exam: {
    id: 'n3-reading-exam',
    blockId: 'n3-reading',
    title: 'Экзамен: Чтение N3',
    description: 'Вопросы на понимание прочитанного по всем пяти текстам блока.',
    questionCount: 10,
    passingScore: 0.7,
    xpReward: 280,
  },
}
