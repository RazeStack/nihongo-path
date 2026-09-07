import { N3_READING_LESSONS } from './n3Reading.lessons'
import type { BlockDefinition } from '@/types/content'

export const N3_READING_BLOCK: BlockDefinition = {
  id: 'n3-reading',
  levelId: 'n3',
  title: 'Чтение N3',
  description: 'Официальное объявление и заметка-рассуждение — тексты опираются на грамматику и словарь N3.',
  order: 4,
  contentType: 'reading',
  prerequisiteBlockId: 'n3-kanji',
  lessons: N3_READING_LESSONS,
  exam: {
    id: 'n3-reading-exam',
    blockId: 'n3-reading',
    title: 'Экзамен: Чтение N3',
    description: 'Вопросы на понимание прочитанного по обоим текстам блока.',
    questionCount: 4,
    passingScore: 0.7,
    xpReward: 260,
  },
}
