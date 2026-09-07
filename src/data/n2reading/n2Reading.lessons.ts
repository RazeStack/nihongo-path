import type { LessonDefinition, ReadingSegment } from '@/types/content'

const BLOCK_ID = 'n2-reading'

function seg(text: string, reading?: string, meaning?: string): ReadingSegment {
  return { text, reading, meaning }
}

const introLesson: LessonDefinition = {
  id: 'n2-reading-intro',
  blockId: BLOCK_ID,
  title: 'Тексты N2: новости и деловая переписка',
  description: 'Самые формальные жанры курса',
  order: 0,
  theory: [
    { type: 'heading', text: 'Последний шаг в чтении' },
    {
      type: 'paragraph',
      text: 'Два текста этого блока — заметка в духе новостной статьи и деловое письмо — используют самый формальный японский в курсе: конструкции N2 (にもかかわらず, ざるを得ない) и вежливые обороты (お世話になっております, いたします вместо します).',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const articleLesson: LessonDefinition = {
  id: 'n2-reading-article',
  blockId: BLOCK_ID,
  title: 'Заметка о технологиях',
  description: 'Новостной стиль — にもかかわらず, そうです, かもしれません',
  order: 1,
  theory: [
    { type: 'heading', text: '技術と理解' },
    {
      type: 'reading',
      translation:
        'Согласно недавнему исследованию, хотя технологии развиваются, многие люди не знают, как ими пользоваться. Специалисты говорят: «Важно понимать новые понятия». Возможно, в дальнейшем эта тенденция не изменится.',
      segments: [
        seg('最近の研究によると', 'saikin no kenkyuu ni yoru to', 'согласно недавнему исследованию'),
        seg('、'),
        seg('技術', 'gijutsu', 'технология'),
        seg('は'),
        seg('発展している', 'hatten shiteiru', 'развивается'),
        seg('にもかかわらず', 'nimo kakawarazu', 'несмотря на то что'),
        seg('、'),
        seg('使い方', 'tsukaikata', 'способ использования'),
        seg('を'),
        seg('知らない', 'shiranai', 'не знает'),
        seg('人', 'hito', 'человек'),
        seg('が'),
        seg('多い', 'ooi', 'многочисленный'),
        seg('そうです', 'sou desu', 'говорят, что'),
        seg('。'),
        seg('専門家', 'senmonka', 'специалист'),
        seg('は'),
        seg('「'),
        seg('新しい', 'atarashii', 'новый'),
        seg('概念', 'gainen', 'понятие'),
        seg('を'),
        seg('理解する', 'rikai suru', 'понимать'),
        seg('ことが大切だ', 'koto ga taisetsu da', 'важно'),
        seg('」'),
        seg('と言っています', 'to itteimasu', 'говорит(-ят)'),
        seg('。'),
        seg('これから', 'kore kara', 'в дальнейшем'),
        seg('、'),
        seg('この'),
        seg('傾向', 'keikou', 'тенденция'),
        seg('は'),
        seg('変わらない', 'kawaranai', 'не изменится'),
        seg('かもしれません', 'kamoshiremasen', 'возможно'),
        seg('。'),
      ],
    },
  ],
  miniCheck: [
    {
      id: 'n2-reading-article-check-0',
      question: 'Что, по словам специалистов, важно?',
      options: ['Покупать новую технику', 'Понимать новые понятия', 'Работать больше', 'Читать новости каждый день'],
      correctIndex: 1,
      explanation: '«新しい概念を理解することが大切だ» — «важно понимать новые понятия».',
    },
    {
      id: 'n2-reading-article-check-1',
      question: 'Что автор говорит о тенденции в конце текста?',
      options: ['Она точно изменится', 'Возможно, не изменится', 'Уже изменилась', 'Об этом не сказано'],
      correctIndex: 1,
      explanation: '«この傾向は変わらないかもしれません» — «возможно, эта тенденция не изменится».',
    },
  ],
  itemIds: [],
  xpReward: 40,
}

const businessEmailLesson: LessonDefinition = {
  id: 'n2-reading-business-email',
  blockId: BLOCK_ID,
  title: 'Деловое письмо',
  description: 'Формальная переписка — ざるを得ない, お手数をおかけします',
  order: 2,
  theory: [
    { type: 'heading', text: '田中様' },
    {
      type: 'reading',
      translation:
        'Господин Танака, всегда благодарен за вашу поддержку. Пишу по поводу контракта, который мы недавно обсуждали. Несмотря на то, что дедлайн близко, предложение ещё не готово. Мне очень жаль, но не могли бы вы подождать до следующей недели? Извините за беспокойство, прошу вашего понимания. Судзуки',
      segments: [
        seg('田中様', 'tanaka-sama', 'уважаемый господин Танака'),
        seg('\n\n'),
        seg('いつもお世話になっております', 'itsumo osewa ni natte orimasu', 'всегда благодарен за вашу поддержку (вежливая формула)'),
        seg('。'),
        seg('先日', 'senjitsu', 'на днях'),
        seg('ご相談した', 'go-soudan shita', 'обсуждали (вежливо)'),
        seg('契約', 'keiyaku', 'контракт'),
        seg('の件について', 'no ken ni tsuite', 'по поводу вопроса о'),
        seg('、'),
        seg('ご連絡いたします', 'go-renraku itashimasu', 'связываюсь с вами (скромно)'),
        seg('。'),
        seg('締め切り', 'shimekiri', 'дедлайн'),
        seg('が'),
        seg('近い', 'chikai', 'близкий'),
        seg('にもかかわらず', 'nimo kakawarazu', 'несмотря на то что'),
        seg('、'),
        seg('まだ'),
        seg('提案', 'teian', 'предложение'),
        seg('書', 'sho', 'документ (суффикс)'),
        seg('ができておりません', 'ga dekite orimasen', 'ещё не готово (вежливо)'),
        seg('。'),
        seg('大変申し訳ございませんが', 'taihen moushiwake gozaimasen ga', 'мне очень жаль, но'),
        seg('、'),
        seg('来週', 'raishuu', 'следующая неделя'),
        seg('まで'),
        seg('待っていただけますでしょうか', 'matte itadakemasu deshou ka', 'не могли бы вы подождать'),
        seg('。'),
        seg('お手数をおかけしますが', 'otesuu wo okakeshimasu ga', 'извините за беспокойство, но'),
        seg('、'),
        seg('よろしくお願いいたします', 'yoroshiku onegai itashimasu', 'прошу вашего понимания'),
        seg('。'),
        seg('\n\n鈴木', 'suzuki', 'Судзуки (отправитель)'),
      ],
    },
  ],
  miniCheck: [
    {
      id: 'n2-reading-business-email-check-0',
      question: 'О чём просит Судзуки?',
      options: ['Отменить контракт', 'Подождать до следующей недели', 'Прислать деньги', 'Приехать в офис'],
      correctIndex: 1,
      explanation: '«来週まで待っていただけますでしょうか» — «не могли бы вы подождать до следующей недели?».',
    },
    {
      id: 'n2-reading-business-email-check-1',
      question: 'Что ещё не готово, по письму?',
      options: ['Контракт', 'Предложение (提案書)', 'Билеты', 'Отчёт'],
      correctIndex: 1,
      explanation: '«提案書ができておりません» — «предложение (документ) ещё не готово».',
    },
  ],
  itemIds: [],
  xpReward: 40,
}

export const N2_READING_LESSONS: LessonDefinition[] = [introLesson, articleLesson, businessEmailLesson]
