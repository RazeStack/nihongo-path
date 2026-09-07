import { buildVocabCategoryLesson } from '@/data/vocabulary/buildVocabLesson'
import { N4_VOCAB_CATEGORIES, N4_VOCABULARY_WORDS } from './n4Vocabulary.words'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n4-vocabulary'

const introLesson: LessonDefinition = {
  id: 'n4-vocabulary-intro',
  blockId: BLOCK_ID,
  title: 'Лексика N4: от предметов к понятиям',
  description: 'Чем словарь N4 отличается от N5',
  order: 0,
  theory: [
    { type: 'heading', text: 'От конкретных вещей — к абстракции' },
    {
      type: 'paragraph',
      text: 'Словарь N5 — это в основном конкретные предметы и люди (стол, книга, студент). На N4 добавляются слова для описания процессов, чувств и отвлечённых понятий — работа, учёба, погода, эмоции, причины и обещания. Это тот словарь, который нужен, чтобы не просто называть вещи, а обсуждать ситуации.',
    },
    { type: 'list', items: N4_VOCAB_CATEGORIES.map((c) => c) },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const categoryLessons: LessonDefinition[] = N4_VOCAB_CATEGORIES.map((category, index) =>
  buildVocabCategoryLesson(
    category,
    N4_VOCABULARY_WORDS.filter((w) => w.category === category),
    N4_VOCABULARY_WORDS,
    BLOCK_ID,
    index + 1,
  ),
)

export const N4_VOCABULARY_LESSONS: LessonDefinition[] = [introLesson, ...categoryLessons]
