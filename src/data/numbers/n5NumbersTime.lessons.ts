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

const elevenToNinetyNineLesson: LessonDefinition = {
  id: 'n5-numbers-time-11-99',
  blockId: BLOCK_ID,
  title: 'Числа от 11 до 99',
  description: 'Как собрать любое число из 一 (1), 十 (10) и 百 (100)',
  order: N5_NUMBERS_TIME_CATEGORIES.length + 1,
  theory: [
    { type: 'heading', text: 'Числа складываются, как конструктор' },
    {
      type: 'paragraph',
      text: 'В отличие от русского, где у каждого десятка своё слово («двадцать», «тридцать»...), в японском числа от 11 и выше просто складываются из уже известных 一-九 (1-9) и 十 (10, «десять»). Никаких новых слов запоминать не нужно — только порядок сложения.',
    },
    {
      type: 'table',
      headers: ['Число', 'Состав', 'Чтение'],
      rows: [
        ['11', '十 + 一 (10+1)', 'じゅういち'],
        ['12', '十 + 二 (10+2)', 'じゅうに'],
        ['15', '十 + 五 (10+5)', 'じゅうご'],
        ['19', '十 + 九 (10+9)', 'じゅうきゅう'],
        ['20', '二 + 十 (2×10)', 'にじゅう'],
        ['21', '二十 + 一 (20+1)', 'にじゅういち'],
        ['30', '三 + 十 (3×10)', 'さんじゅう'],
        ['45', '四十 + 五 (40+5)', 'よんじゅうご'],
        ['99', '九十 + 九 (90+9)', 'きゅうじゅうきゅう'],
      ],
    },
    {
      type: 'note',
      text: 'Правило одно и то же на все случаи: [десятки]十[единицы]. 十 сам по себе — это «десять» (10), но внутри большего числа он работает как «умножить на 10» (десятки) или «плюс десять» (после единицы, для 11-19).',
    },
    {
      type: 'paragraph',
      text: 'Та же логика работает и дальше: 百 (100), 千 (1000) и 万 (10 000) складываются точно так же — 二百 (2×100=200), 三千 (3×1000=3000), 五万 (5×10000=50 000).',
    },
    { type: 'warning', text: 'Единственная тонкость — те же особые чтения, что уже встречались: 4 всегда よん (не し) в составе больших чисел, а не наоборот.' },
  ],
  miniCheck: [
    {
      id: 'n5-numbers-time-11-99-check-0',
      question: 'Как читается число 21?',
      options: ['にじゅういち', 'いちじゅうに', 'にいち', 'じゅうにいち'],
      correctIndex: 0,
      explanation: '21 = 二十一 = に(2)じゅう(×10)いち(1) = にじゅういち.',
    },
    {
      id: 'n5-numbers-time-11-99-check-1',
      question: 'Как устроено число 45?',
      options: ['4 + 5', '4 × 10 + 5', '5 × 10 + 4', '45 — отдельное слово, не связанное с 4 и 5'],
      correctIndex: 1,
      explanation: '45 = 四十五 = よん(4)じゅう(×10)ご(5) — «четыре десятка и пять».',
    },
  ],
  itemIds: [],
  xpReward: 30,
}

export const N5_NUMBERS_TIME_LESSONS: LessonDefinition[] = [introLesson, ...categoryLessons, elevenToNinetyNineLesson]
