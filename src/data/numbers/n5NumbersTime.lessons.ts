import { buildVocabCategoryLesson } from '@/data/vocabulary/buildVocabLesson'
import { N5_NUMBERS_TIME_CATEGORIES, N5_NUMBERS_TIME_WORDS } from './n5NumbersTime.words'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n5-numbers-time'

const introLesson: LessonDefinition = {
  id: 'n5-numbers-time-intro',
  blockId: BLOCK_ID,
  title: 'Как считают в японском',
  description: 'Счётчики и почему один и тот же предмет "считается" по-разному',
  order: 0,
  theory: [
    { type: 'heading', text: 'Числа не стоят сами по себе' },
    {
      type: 'paragraph',
      text: 'В японском числа почти никогда не употребляются в одиночку — к ним почти всегда присоединяется счётчик (助数詞, дзёсуси), который зависит от того, ЧТО считают: людей, плоские предметы, длинные предметы, часы, минуты и так далее. У каждого счётчика — свои особенности произношения.',
    },
    {
      type: 'table',
      headers: ['Счётчик', 'Для чего', 'Пример'],
      rows: [
        ['つ', 'Предметы общего вида (1-10)', 'ひとつ, ふたつ, みっつ...'],
        ['人', 'Люди', 'ひとり (1), ふたり (2), さんにん (3)...'],
        ['時', 'Часы', 'いちじ, にじ, さんじ...'],
        ['分', 'Минуты', 'いっぷん, にふん, さんぷん...'],
      ],
    },
    {
      type: 'note',
      text: 'В этом блоке разбираются сами числа 1-10, сотни/тысячи на примере денег (円) и счётчики времени — часы и минуты. Полная система счётчиков для предметов и людей — тема следующих уроков.',
    },
    { type: 'warning', text: 'У счётчика часов (時) три числа читаются не по общему правилу: 4時 — よじ (не よんじ), 7時 — しちじ (не ななじ), 9時 — くじ (не きゅうじ). Их придётся просто запомнить.' },
  ],
  miniCheck: [
    {
      id: 'n5-numbers-time-intro-check-0',
      question: 'Как правильно читается 4時 ("4 часа")?',
      options: ['よんじ', 'よじ', 'しじ', 'よんどき'],
      correctIndex: 1,
      explanation: '4時 читается よじ — одно из трёх исключений в чтении часов, наряду с 7時 (しちじ) и 9時 (くじ).',
    },
  ],
  itemIds: [],
  xpReward: 20,
}

const categoryLessons: LessonDefinition[] = N5_NUMBERS_TIME_CATEGORIES.map((category, index) =>
  buildVocabCategoryLesson(
    category,
    N5_NUMBERS_TIME_WORDS.filter((w) => w.category === category),
    N5_NUMBERS_TIME_WORDS,
    BLOCK_ID,
    index + 1,
  ),
)

export const N5_NUMBERS_TIME_LESSONS: LessonDefinition[] = [introLesson, ...categoryLessons]
