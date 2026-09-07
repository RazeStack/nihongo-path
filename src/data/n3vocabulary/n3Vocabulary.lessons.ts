import { buildVocabCategoryLesson } from '@/data/vocabulary/buildVocabLesson'
import { N3_VOCAB_CATEGORIES, N3_VOCABULARY_WORDS } from './n3Vocabulary.words'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n3-vocabulary'

const introLesson: LessonDefinition = {
  id: 'n3-vocabulary-intro',
  blockId: BLOCK_ID,
  title: 'Лексика N3: общество и вежливость',
  description: 'Абстрактные темы плюс первые устойчивые вежливые выражения',
  order: 0,
  theory: [
    { type: 'heading', text: 'Две новые грани словаря' },
    {
      type: 'paragraph',
      text: 'На N3 словарь растёт в двух направлениях сразу: темы становятся более общественными и отвлечёнными (общество, экономика, технологии), а параллельно появляются первые устойчивые вежливые выражения (敬語, кэйго) — фразы, которые не собираются по грамматическим правилам, а просто заучиваются целиком, потому что так принято говорить в вежливой/деловой речи.',
    },
    {
      type: 'note',
      text: 'Раздел "Формальная лексика" — это не грамматика, а именно устойчивые фразы. Их бесполезно разбирать по частям — нужно просто запомнить целиком, в каких ситуациях они звучат уместно.',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const categoryLessons: LessonDefinition[] = N3_VOCAB_CATEGORIES.map((category, index) =>
  buildVocabCategoryLesson(
    category,
    N3_VOCABULARY_WORDS.filter((w) => w.category === category),
    N3_VOCABULARY_WORDS,
    BLOCK_ID,
    index + 1,
  ),
)

export const N3_VOCABULARY_LESSONS: LessonDefinition[] = [introLesson, ...categoryLessons]
