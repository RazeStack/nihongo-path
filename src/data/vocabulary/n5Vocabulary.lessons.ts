import { buildVocabCategoryLesson } from './buildVocabLesson'
import { N5_VOCAB_CATEGORIES, N5_VOCABULARY_WORDS } from './n5Vocabulary.words'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n5-vocabulary'

const introLesson: LessonDefinition = {
  id: 'n5-vocabulary-intro',
  blockId: BLOCK_ID,
  title: 'Как учить слова',
  description: 'Кандзи, кана, ромадзи и зачем нужен пример',
  order: 0,
  theory: [
    { type: 'heading', text: 'Из чего состоит карточка слова' },
    {
      type: 'paragraph',
      text: 'У каждого слова в этом курсе четыре части: написание (иногда с кандзи, если он уже встречался), чтение полностью каной, ромадзи для удобства и перевод. Дальше идёт пример — короткое предложение, где видно, как слово ведёт себя в реальной речи, а не только в отрыве от контекста.',
    },
    {
      type: 'note',
      text: 'Учи слово вместе с примером, а не отдельно — так сразу видно, с какими частицами оно обычно употребляется.',
    },
    { type: 'heading', text: 'Темы этого блока' },
    {
      type: 'list',
      items: N5_VOCAB_CATEGORIES.map((c) => c),
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const categoryLessons: LessonDefinition[] = N5_VOCAB_CATEGORIES.map((category, index) =>
  buildVocabCategoryLesson(
    category,
    N5_VOCABULARY_WORDS.filter((w) => w.category === category),
    N5_VOCABULARY_WORDS,
    BLOCK_ID,
    index + 1,
  ),
)

export const N5_VOCABULARY_LESSONS: LessonDefinition[] = [introLesson, ...categoryLessons]
