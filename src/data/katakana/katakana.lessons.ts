import { buildKanaRowLesson } from '@/data/kana/buildKanaLesson'
import { KATAKANA_CHARACTERS, KATAKANA_ROWS } from './katakana.characters'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n5-katakana'

const introLesson: LessonDefinition = {
  id: 'n5-katakana-intro',
  blockId: BLOCK_ID,
  title: 'Что такое катакана',
  description: 'Вторая азбука: для заимствованных слов, имён и терминов',
  order: 0,
  theory: [
    { type: 'heading', text: 'Зачем нужна вторая азбука' },
    {
      type: 'paragraph',
      text: 'Катакана передаёт ровно те же 46 звуков, что и хирагана, но другими по форме знаками. Она используется для заимствованных слов (テレビ — «телевизор»), иностранных имён (イタリア — «Италия»), названий животных и растений в науке, а иногда — для выделения слова, как в русском мы иногда используем курсив.',
    },
    {
      type: 'paragraph',
      text: 'Если хирагана округлая и плавная, то катакана — угловатая и прямая. Это не два разных языка звуков, а два разных "шрифта" для одних и тех же звуков — учить произношение заново не нужно, только новые начертания.',
    },
    { type: 'heading', text: 'Два новых знака, которых нет в хирагане' },
    {
      type: 'table',
      headers: ['Знак', 'Что означает'],
      rows: [
        ['ー', 'Знак долготы — удлиняет предыдущий гласный. コーヒー = «ko-hi-» = «ко:хи:» (кофе).'],
        ['ッ (маленькая)', 'Удвоение следующего согласного. ベッド = «беддо» (кровать) — на письме пауза перед «д».'],
      ],
    },
    {
      type: 'note',
      text: 'Оба знака встречаются почти в каждом втором заимствованном слове — они разобраны отдельно, потому что не входят в основную таблицу из 46 звуков.',
    },
  ],
  miniCheck: [
    {
      id: 'n5-katakana-intro-check-0',
      question: 'Для чего в первую очередь используется катакана?',
      options: ['Для японских глаголов', 'Для заимствованных слов и имён', 'Только для чисел', 'Для официальных документов'],
      correctIndex: 1,
      explanation: 'Катакана — «шрифт» для иностранных слов, имён и терминов.',
    },
    {
      id: 'n5-katakana-intro-check-1',
      question: 'Что делает знак ー в катакане?',
      options: ['Ничего не означает', 'Удлиняет предыдущий гласный звук', 'Означает частицу', 'Обозначает вопрос'],
      correctIndex: 1,
      explanation: 'コーヒー читается «ко:хи:» — гласный после ー произносится вдвое дольше.',
    },
  ],
  itemIds: [],
  xpReward: 20,
}

const rowsWithIntro: { key: string; introText: string }[] = [
  {
    key: 'vowels',
    introText: 'Те же пять гласных звуков, что и в хирагане, но угловатым начертанием катаканы.',
  },
  { key: 'k', introText: 'Ряд K — звучит так же, как в хирагане, просто пишется по-другому.' },
  {
    key: 's',
    introText: 'シ (shi) — тот же звук, что し в хирагане. Обрати внимание: シ легко перепутать с ツ (tsu) — они различаются направлением последнего штриха.',
  },
  {
    key: 't',
    introText: 'チ (chi) и ツ (tsu) — те же исключения, что и в хирагане. ツ часто путают с シ и ソ — сравнивай их внимательно.',
  },
  { key: 'n', introText: 'Ряд N регулярен и в катакане — «н» плюс гласный.' },
  {
    key: 'h',
    introText: 'Ряд H — заимствования с этим звуком очень частотны (ホテル, ハム). В отличие от хираганы, у は-катаканы (ハ) нет отдельной роли частицы.',
  },
  { key: 'm', introText: 'Ряд M — регулярный, как и в хирагане.' },
  { key: 'y', introText: 'Ряд Y — те же три знака (ya, yu, yo), другое начертание.' },
  { key: 'r', introText: 'Ряд R особенно часто встречается в заимствованиях (レストラン, ラジオ) — звук средний между «р» и «л».' },
  {
    key: 'w',
    introText: 'ワ (wa) активно используется (ワイン), а ヲ практически вышел из употребления. ン (n) легко перепутать с ソ и ツ — сравнивай направление штриха.',
  },
]

const rowLessons: LessonDefinition[] = KATAKANA_ROWS.map((row, index) => {
  const meta = rowsWithIntro.find((r) => r.key === row.key)!
  return buildKanaRowLesson({
    id: `n5-katakana-row-${row.key}`,
    blockId: BLOCK_ID,
    order: index + 1,
    rowLabel: row.label,
    scriptLabel: 'катакана',
    chars: KATAKANA_CHARACTERS.filter((c) => c.row === row.key),
    introText: meta.introText,
  })
})

export const KATAKANA_LESSONS: LessonDefinition[] = [introLesson, ...rowLessons]
