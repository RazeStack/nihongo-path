import type { ExampleWord, GrammarPoint } from '@/types/content'

function ex(japanese: string, romaji: string, translation: string): ExampleWord {
  return { japanese, romaji, translation }
}

/** Продвинутые конструкции N3: каузатив-пассив и связки момента/повода/основы. */
export const N3_GRAMMAR_ADVANCED_POINTS: GrammarPoint[] = [
  {
    id: 'n3gr-shieki-ukemi',
    jlptLevel: 'n3',
    title: '使役受身形 — «меня заставили» (каузатив-пассив)',
    formula: 'V(побудительная основа) + られる',
    explanation: 'Комбинация побудительной формы (N4, «заставлять») и пассивной формы (N4, «подвергаться действию») — говорящий вынужден был сделать что-то по чужой воле, часто против желания. У глаголов 1 группы разговорная форма часто сокращается: 飲まされる → 飲まされる (полная), также встречается стяжение -される → -さされる в некоторых глаголах.',
    usage: 'Говорящего заставили сделать что-то, и это ему не нравилось/было неприятно.',
    answerToken: 'たべさせられました',
    examples: [
      ex('母に野菜を食べさせられました。', 'Haha ni yasai wo tabesaseraremashita.', 'Мама заставила меня съесть овощи (пришлось, хоть и не хотелось).'),
      ex('上司に残業させられました。', 'Joushi ni zangyou saseraremashita.', 'Начальник заставил меня работать сверхурочно.'),
    ],
    drillSentences: [{ before: 'ははに やさいを', after: '。', translation: 'Мама заставила меня съесть овощи.' }],
    commonMistakes: ['Это не отдельная новая форма, а сочетание уже известных 使役形 (N4) + 受身形 (N4) — если обе формы знакомы по отдельности, эта комбинация складывается логично.'],
  },
  {
    id: 'n3gr-totan',
    jlptLevel: 'n3',
    title: 'たとたん(に) — «как только, в тот самый момент»',
    formula: 'Vた-форма + とたん(に)',
    explanation: 'たとたんに показывает, что второе событие произошло СРАЗУ ЖЕ, буквально в момент завершения первого — обычно неожиданно для говорящего.',
    usage: 'Два события, второе из которых наступает мгновенно после первого, часто неожиданно.',
    answerToken: 'でたとたんに',
    examples: [
      ex('家を出たとたんに、雨が降り出しました。', 'Ie wo deta totan ni, ame ga furidashimashita.', 'Как только вышел из дома, начался дождь.'),
    ],
    drillSentences: [{ before: 'いえを', after: 'に、あめが ふりだしました。', translation: 'Как только вышел из дома, начался дождь.' }],
    commonMistakes: [],
  },
  {
    id: 'n3gr-wokikkakeni',
    jlptLevel: 'n3',
    title: 'をきっかけに — «пользуясь случаем, взяв за повод»',
    formula: 'N / Vた-форма こと + をきっかけに',
    explanation: 'をきっかけに указывает на событие, которое стало отправной точкой/поводом для последующего значимого изменения.',
    usage: 'Какое-то событие послужило толчком к важному решению или перемене.',
    answerToken: 'びょうきをきっかけに',
    examples: [
      ex('病気をきっかけに、たばこをやめました。', 'Byouki wo kikkake ni, tabako wo yamemashita.', 'Болезнь стала поводом бросить курить.'),
    ],
    drillSentences: [{ before: '', after: '、たばこを やめました。', translation: 'Болезнь стала поводом бросить курить. (びょうき + をきっかけに)' }],
    commonMistakes: [],
  },
  {
    id: 'n3gr-womotoni',
    jlptLevel: 'n3',
    title: 'をもとに — «основываясь на»',
    formula: 'N + をもとに',
    explanation: 'をもとに указывает исходный материал/данные, на основе которых что-то создаётся или делается вывод.',
    usage: 'Указание источника/основы для дальнейшего действия или творчества.',
    answerToken: 'をもとに',
    examples: [
      ex('実際の話をもとに、映画を作りました。', 'Jissai no hanashi wo moto ni, eiga wo tsukurimashita.', 'Основываясь на реальной истории, сняли фильм.'),
    ],
    drillSentences: [{ before: 'じっさいの はなし', after: '、えいがを つくりました。', translation: 'Основываясь на реальной истории, сняли фильм.' }],
    commonMistakes: [],
  },
  {
    id: 'n3gr-kawarini',
    jlptLevel: 'n3',
    title: 'かわりに — «вместо»',
    formula: 'N の / V(словарная форма) + かわりに',
    explanation: 'かわりに указывает замену — «вместо N», «вместо того, чтобы...». Может также означать компенсацию — «взамен».',
    usage: 'Указание, что одно действие/предмет заменяет другой.',
    answerToken: 'ははのかわりに',
    examples: [
      ex('母のかわりに、私が料理を作りました。', 'Haha no kawari ni, watashi ga ryouri wo tsukurimashita.', 'Вместо мамы я приготовил(а) еду.'),
    ],
    drillSentences: [{ before: 'はは', after: '、わたしが りょうりを つくりました。', translation: 'Вместо мамы я приготовил(а) еду.' }],
    commonMistakes: [],
  },
]
