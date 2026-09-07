import type { ExampleWord, GrammarPoint } from '@/types/content'

function ex(japanese: string, romaji: string, translation: string): ExampleWord {
  return { japanese, romaji, translation }
}

/** N2-грамматика — формальные, часто письменные конструкции продвинутого уровня. */
export const N2_GRAMMAR_POINTS: GrammarPoint[] = [
  {
    id: 'n2gr-nimokakawarazu',
    jlptLevel: 'n2',
    title: 'にもかかわらず — «несмотря на»',
    formula: 'Простая форма / N + にもかかわらず',
    explanation: 'Более формальный и книжный аналог のに — вводит результат, противоречащий ожиданиям от первой части.',
    usage: 'В официальной и письменной речи, где のに звучало бы слишком разговорно.',
    answerToken: 'にもかかわらず',
    examples: [
      ex('忙しいにもかかわらず、手伝ってくれました。', 'Isogashii nimo kakawarazu, tetsudatte kuremashita.', 'Несмотря на занятость, он мне помог.'),
    ],
    drillSentences: [{ before: 'いそがしい', after: '、てつだってくれました。', translation: 'Несмотря на занятость, он мне помог.' }],
    comparisons: ['にもかかわらず — книжный/формальный вариант のに (N3). Смысл тот же, регистр другой.'],
  },
  {
    id: 'n2gr-wariniwa',
    jlptLevel: 'n2',
    title: 'わりに — «учитывая X, на удивление Y»',
    formula: 'Простая форма / N + の + わりに',
    explanation: 'Сравнивает результат с тем, что логично было бы ожидать — "для X это на удивление Y".',
    usage: 'Когда результат лучше или хуже ожидаемого по какому-то признаку.',
    answerToken: 'わりに',
    examples: [
      ex('この店は安いわりに、おいしいです。', 'Kono mise wa yasui wari ni, oishii desu.', 'Этот магазин, хоть и дешёвый, но (на удивление) вкусный.'),
    ],
    drillSentences: [{ before: 'このみせは やすい', after: '、おいしいです。', translation: 'Этот магазин, хоть и дешёвый, но вкусный.' }],
  },
  {
    id: 'n2gr-nichigainai',
    jlptLevel: 'n2',
    title: 'に違いない — «должно быть, наверняка»',
    formula: 'Простая форма + に違いない',
    explanation: 'Уверенное предположение, основанное на конкретных признаках — сильнее, чем でしょう.',
    usage: 'Когда говорящий почти уверен в выводе, хоть и не проверял лично.',
    answerToken: 'にちがいない',
    examples: [
      ex('彼は忙しいに違いない。', 'Kare wa isogashii ni chigainai.', 'Он наверняка занят.'),
    ],
    drillSentences: [{ before: 'かれは いそがしい', after: '。', translation: 'Он наверняка занят.' }],
  },
  {
    id: 'n2gr-kanenai',
    jlptLevel: 'n2',
    title: 'かねない — «может случиться (плохое)»',
    formula: 'Vます-основа + かねない',
    explanation: 'Показывает риск нежелательного исхода — "вполне может случиться, что...", обычно про что-то плохое.',
    usage: 'Предупреждение о возможных негативных последствиях.',
    answerToken: 'なりかねません',
    examples: [
      ex('無理をすると、病気になりかねません。', 'Muri wo suru to, byouki ni nikanemasen.', 'Если перенапрягаться, можно и заболеть.'),
    ],
    drillSentences: [{ before: 'むりをすると、びょうきに', after: '。', translation: 'Если перенапрягаться, можно и заболеть.' }],
    commonMistakes: ['かねない используется почти всегда для негативных, нежелательных исходов, не для нейтральных или хороших.'],
  },
  {
    id: 'n2gr-zaruoenai',
    jlptLevel: 'n2',
    title: 'ざるを得ない — «вынужден, нет другого выбора»',
    formula: 'Vない-основа (без ない) + ざるを得ない',
    explanation: 'Показывает, что действие совершается не по своей воле, а из-за обстоятельств — "приходится, хочешь не хочешь".',
    usage: 'Когда обстоятельства не оставляют выбора.',
    answerToken: 'ざるをえません',
    examples: [
      ex('給料が安いので、辞めざるを得ません。', 'Kyuuryou ga yasui node, yamezaru wo emasen.', 'Поскольку зарплата низкая, вынужден уволиться.'),
    ],
    drillSentences: [{ before: 'きゅうりょうが やすいので、やめ', after: '。', translation: 'Поскольку зарплата низкая, вынужден уволиться.' }],
    commonMistakes: ['する исключение: するざるを得ない → せざるを得ない.'],
  },
  {
    id: 'n2gr-monoda',
    jlptLevel: 'n2',
    title: 'ものだ — «как это бывает / было принято»',
    formula: 'Vた-форма (прошлое, воспоминание) + ものだ',
    explanation: 'С прошедшим временем передаёт ностальгическое воспоминание о том, что регулярно происходило когда-то давно.',
    usage: 'Воспоминания о привычках/повторяющихся событиях прошлого.',
    answerToken: 'ものです',
    examples: [
      ex('子供の頃、よくこの公園で遊んだものです。', 'Kodomo no koro, yoku kono kouen de asonda mono desu.', 'В детстве я часто играл в этом парке.'),
    ],
    drillSentences: [{ before: 'こどものころ、よく このこうえんで あそんだ', after: '。', translation: 'В детстве я часто играл в этом парке.' }],
  },
]
