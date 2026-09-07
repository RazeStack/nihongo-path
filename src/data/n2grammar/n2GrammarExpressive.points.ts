import type { ExampleWord, GrammarPoint } from '@/types/content'

function ex(japanese: string, romaji: string, translation: string): ExampleWord {
  return { japanese, romaji, translation }
}

/** N2: экспрессивные и книжные формы — «даже до такой степени», «немыслимо без», «вот что значит», «постепенно происходит». */
export const N2_GRAMMAR_EXPRESSIVE_POINTS: GrammarPoint[] = [
  {
    id: 'n2gr-temade',
    jlptLevel: 'n2',
    title: 'てまで — «даже до такой степени, чтобы»',
    formula: 'Vて-форма + まで',
    explanation: 'Показывает крайнюю степень усилия или жертвы ради чего-то — «даже пойти на X, чтобы...» — обычно с оттенком «а стоит ли оно того».',
    usage: 'Крайняя, часто чрезмерная мера, предпринятая ради цели.',
    answerToken: 'してまで',
    examples: [
      ex('借金をしてまで、旅行に行きたくないです。', 'Shakkin wo shitemade, ryokou ni ikitakunai desu.', 'Не хочу ехать в путешествие, даже если для этого придётся влезть в долги.'),
    ],
    drillSentences: [{ before: 'しゃっきんを', after: '、りょこうに いきたくないです。', translation: 'Не хочу ехать в путешествие даже ценой долгов.' }],
  },
  {
    id: 'n2gr-nukiniwa',
    jlptLevel: 'n2',
    title: 'ぬきには〜ない — «невозможно без»',
    formula: 'N + ぬきには + Vない-форма',
    explanation: 'Утверждает, что без названного элемента результат в принципе невозможен — «без N нет и Y».',
    usage: 'Подчёркивание незаменимости какого-то условия/фактора.',
    answerToken: 'どりょくぬきには',
    examples: [
      ex('努力ぬきには、成功はありません。', 'Doryoku nuki ni wa, seikou wa arimasen.', 'Без усилий не бывает успеха.'),
    ],
    drillSentences: [{ before: '', after: '、せいこうは ありません。', translation: 'Без усилий не бывает успеха. (どりょく + ぬきには)' }],
  },
  {
    id: 'n2gr-toiumonoda',
    jlptLevel: 'n2',
    title: 'というものだ — «вот что значит, это и есть»',
    formula: 'N / Простая форма + というものだ',
    explanation: 'Формулирует общую истину или обобщающее суждение о природе вещей — «вот что такое N на самом деле».',
    usage: 'Обобщающее философское утверждение о сути явления.',
    answerToken: 'というものだ',
    examples: [
      ex('それが人生というものだ。', 'Sore ga jinsei to iu mono da.', 'Вот что такое жизнь.'),
    ],
    drillSentences: [{ before: 'それが じんせい', after: '。', translation: 'Вот что такое жизнь.' }],
  },
  {
    id: 'n2gr-tsutsuaru',
    jlptLevel: 'n2',
    title: 'つつある — «постепенно происходит»',
    formula: 'Vます-основа + つつある',
    explanation: 'Формальный аналог ています для описания процесса, который постепенно движется в определённом направлении — «постепенно X-ится».',
    usage: 'Формальное описание изменения, происходящего постепенно, в текущий момент.',
    answerToken: 'かいぜんしつつあります',
    examples: [
      ex('状況は改善しつつあります。', 'Joukyou wa kaizen shitsutsu arimasu.', 'Ситуация постепенно улучшается.'),
    ],
    drillSentences: [{ before: 'じょうきょうは かいぜんし', after: 'あります。', translation: 'Ситуация постепенно улучшается.' }],
    comparisons: ['つつある — книжный вариант ています именно для ПОСТЕПЕННОГО, продолжающегося изменения, а не любого длящегося действия.'],
  },
]
