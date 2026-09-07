import type { GrammarPoint } from '@/types/content'

const HA_GA_COMPARISON =
  'は vs が: в «ぞうは はなが ながい» (что касается слонов, у них длинный нос) は берёт общую тему, а が выделяет подлежащее внутри комментария о ней. は — «то, о чём говорим», が — «конкретно что происходит».'

const NI_DE_COMPARISON =
  'に vs で: がっこうに いきます (иду В школу — に, направление движения) и がっこうで べんきょうします (учусь В школе — で, место, где происходит действие).'

/** Первые 7 грамматических конструкций N5 — фундамент, на котором строятся почти все простые предложения. */
export const N5_GRAMMAR_BASICS_POINTS: GrammarPoint[] = [
  {
    id: 'gr-desu',
    jlptLevel: 'n5',
    title: 'です — вежливая связка',
    formula: 'N です',
    explanation:
      'です присоединяется к существительному в конце предложения и переводится примерно как «является / это». Не изменяется по родам, числам или лицам — это одна и та же форма для «я, ты, он, они».',
    usage: 'Ставится в самом конце предложения, когда нужно вежливо сказать, что что-то ЕСТЬ что-то.',
    answerToken: 'です',
    examples: [
      { japanese: 'これは本です。', romaji: 'Kore wa hon desu.', translation: 'Это книга.' },
      { japanese: 'わたしは学生です。', romaji: 'Watashi wa gakusei desu.', translation: 'Я студент.' },
    ],
    drillSentences: [
      { before: 'これは ねこ', after: '。', translation: 'Это кошка.' },
      { before: 'わたしは にほんじん', after: '。', translation: 'Я японец.' },
    ],
    commonMistakes: [
      'です — не отдельный глагол «быть» в европейском смысле, его нельзя вставить в середину фразы, только в самый конец.',
      'У です есть разговорный вариант だ, но на уровне N5 и в вежливой речи используется です.',
    ],
  },
  {
    id: 'gr-ha',
    jlptLevel: 'n5',
    title: 'は — тема предложения',
    formula: 'N1 は ...',
    explanation:
      'は ставится после слова, которое является ТЕМОЙ предложения — тем, о чём дальше пойдёт речь. Несмотря на то что это тот же знак хираганы, что «ha», в роли частицы он читается «wa».',
    usage: 'После существительного, о котором делается высказывание дальше в предложении.',
    answerToken: 'は',
    examples: [
      { japanese: 'わたしは学生です。', romaji: 'Watashi wa gakusei desu.', translation: 'Я (что касается меня) — студент.' },
      { japanese: 'これはペンです。', romaji: 'Kore wa pen desu.', translation: 'Это ручка.' },
    ],
    drillSentences: [
      { before: 'わたし', after: 'がくせいです。', translation: 'Я студент.' },
      { before: 'これ', after: 'ほんです。', translation: 'Это книга.' },
    ],
    commonMistakes: ['Легко перепутать с частицей が — см. сравнение в уроке про が.'],
    comparisons: [HA_GA_COMPARISON],
  },
  {
    id: 'gr-ga',
    jlptLevel: 'n5',
    title: 'が — подлежащее и новая информация',
    formula: 'N が V / A',
    explanation:
      'が отмечает грамматическое подлежащее — часто когда информация новая для собеседника. Также обязательна в конструкциях наличия (ある/いる) и после некоторых слов вроде すき (нравится) и わかる (понимать).',
    usage: 'После существительного, которое является конкретным исполнителем действия или объектом предпочтения.',
    answerToken: 'が',
    examples: [
      { japanese: 'こうえんに犬がいます。', romaji: 'Kouen ni inu ga imasu.', translation: 'В парке есть собака.' },
      { japanese: 'わたしはねこが好きです。', romaji: 'Watashi wa neko ga suki desu.', translation: 'Мне нравятся кошки.' },
    ],
    drillSentences: [
      { before: 'にわに はな', after: 'あります。', translation: 'В саду есть цветы.' },
      { before: 'わたしは コーヒー', after: 'すきです。', translation: 'Мне нравится кофе.' },
    ],
    commonMistakes: ['が само по себе не означает «нравится» — смысл даёт следующее за ним слово (すき и т.п.).'],
    comparisons: [HA_GA_COMPARISON],
  },
  {
    id: 'gr-wo',
    jlptLevel: 'n5',
    title: 'を — прямое дополнение',
    formula: 'N を V',
    explanation: 'を отмечает прямое дополнение — предмет, над которым совершается действие.',
    usage: 'После существительного, которое является объектом переходного глагола (едят/читают/пьют что-то).',
    answerToken: 'を',
    examples: [
      { japanese: 'りんごを食べます。', romaji: 'Ringo wo tabemasu.', translation: 'Ем яблоко.' },
      { japanese: '本を読みます。', romaji: 'Hon wo yomimasu.', translation: 'Читаю книгу.' },
    ],
    drillSentences: [
      { before: 'りんご', after: 'たべます。', translation: 'Ем яблоко.' },
      { before: 'みず', after: 'のみます。', translation: 'Пью воду.' },
    ],
    commonMistakes: ['を используется только с переходными глаголами — не с местом действия (для места нужна で).'],
  },
  {
    id: 'gr-ni',
    jlptLevel: 'n5',
    title: 'に — направление и момент времени',
    formula: 'N(время/место назначения) に V',
    explanation: 'に указывает на точку во времени или конечную точку/цель движения.',
    usage: 'После места, куда направлено движение, или после конкретного момента времени.',
    answerToken: 'に',
    examples: [
      { japanese: '学校に行きます。', romaji: 'Gakkou ni ikimasu.', translation: 'Иду в школу.' },
      { japanese: '7時に起きます。', romaji: 'Shichi-ji ni okimasu.', translation: 'Встаю в 7 часов.' },
    ],
    drillSentences: [
      { before: 'がっこう', after: 'いきます。', translation: 'Иду в школу.' },
      { before: 'あさ 7じ', after: 'おきます。', translation: 'Встаю в 7 утра.' },
    ],
    commonMistakes: ['Не путай с で: に — направление или момент времени, で — место, ГДЕ происходит действие.'],
    comparisons: [NI_DE_COMPARISON],
  },
  {
    id: 'gr-de',
    jlptLevel: 'n5',
    title: 'で — место действия и средство',
    formula: 'N(место/средство) で V',
    explanation: 'で указывает место, где происходит действие, либо инструмент или способ, которым оно совершается.',
    usage: 'После места, где что-то делают, или после транспорта/инструмента.',
    answerToken: 'で',
    examples: [
      { japanese: '図書館で勉強します。', romaji: 'Toshokan de benkyou shimasu.', translation: 'Учусь в библиотеке.' },
      { japanese: 'バスで行きます。', romaji: 'Basu de ikimasu.', translation: 'Еду на автобусе.' },
    ],
    drillSentences: [
      { before: 'としょかん', after: 'べんきょうします。', translation: 'Учусь в библиотеке.' },
      { before: 'バス', after: 'がっこうに いきます。', translation: 'Еду в школу на автобусе.' },
    ],
    commonMistakes: [],
    comparisons: [NI_DE_COMPARISON],
  },
  {
    id: 'gr-masu',
    jlptLevel: 'n5',
    title: 'ます — вежливая форма глагола',
    formula: 'V(основа) + ます',
    explanation: 'ます делает глагол вежливым и ставит его в настоящее/будущее положительное время.',
    usage: 'В конце вежливого предложения вместо словарной формы глагола.',
    answerToken: 'ます',
    examples: [
      { japanese: '食べます。', romaji: 'Tabemasu.', translation: 'Ем / буду есть.' },
      { japanese: '毎日日本語を勉強します。', romaji: 'Mainichi nihongo wo benkyou shimasu.', translation: 'Каждый день учу японский.' },
    ],
    drillSentences: [
      { before: 'まいにち にほんごを べんきょうし', after: '。', translation: 'Каждый день учу японский.' },
      { before: 'あさごはんを たべ', after: '。', translation: 'Завтракаю.' },
    ],
    commonMistakes: ['Отрицательная форма — это отдельное слово ません, а не «ます» с добавленным «не».'],
  },
]
