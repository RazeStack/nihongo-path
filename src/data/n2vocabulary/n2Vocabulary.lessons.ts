import { buildVocabCategoryLesson } from '@/data/vocabulary/buildVocabLesson'
import { N2_VOCAB_CATEGORIES, N2_VOCABULARY_WORDS } from './n2Vocabulary.words'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n2-vocabulary'

const introLesson: LessonDefinition = {
  id: 'n2-vocabulary-intro',
  blockId: BLOCK_ID,
  title: 'Лексика N2: деловой и научный японский',
  description: 'Стили речи вместо конкретных тем',
  order: 0,
  theory: [
    { type: 'heading', text: 'Разные стили одной темы' },
    {
      type: 'paragraph',
      text: 'На N2 важна не только тема слова, но и СТИЛЬ, в котором его уместно использовать: деловая переписка, научная статья, новости, вежливая беседа с малознакомым человеком. Последняя тема этого блока — "Формальные обороты" — фразы, которые пригодятся именно в вежливом/деловом общении, а не в разговоре с друзьями.',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const categoryLessons: LessonDefinition[] = N2_VOCAB_CATEGORIES.map((category, index) =>
  buildVocabCategoryLesson(
    category,
    N2_VOCABULARY_WORDS.filter((w) => w.category === category),
    N2_VOCABULARY_WORDS,
    BLOCK_ID,
    index + 1,
  ),
)

export const N2_VOCABULARY_LESSONS: LessonDefinition[] = [introLesson, ...categoryLessons]
