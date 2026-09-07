import type { LessonDefinition, ReadingSegment } from '@/types/content'

const BLOCK_ID = 'n3-reading'

function seg(text: string, reading?: string, meaning?: string): ReadingSegment {
  return { text, reading, meaning }
}

const introLesson: LessonDefinition = {
  id: 'n3-reading-intro',
  blockId: BLOCK_ID,
  title: 'Тексты N3: объявления и мнения',
  description: 'От бытовых историй — к общественным темам',
  order: 0,
  theory: [
    { type: 'heading', text: 'Новые жанры текста' },
    {
      type: 'paragraph',
      text: 'На N5-N4 читали рассказы о себе и бытовые истории. На N3 добавляются официальные объявления (お知らせ) и короткие заметки-мнения — они используют грамматику и лексику именно из блоков N3: ことになる/ことにする для объявлений об изменениях, のに/ばかり для рассуждений.',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const announcementLesson: LessonDefinition = {
  id: 'n3-reading-announcement',
  blockId: BLOCK_ID,
  title: 'Объявление библиотеки',
  description: 'Официальное お知らせ — ことになる, ため, ことにする',
  order: 1,
  theory: [
    { type: 'heading', text: 'お知らせ' },
    {
      type: 'reading',
      translation:
        'С следующего месяца часы работы библиотеки изменятся. До сих пор было с 9 до 6, но станет с 9 до 8. Поскольку число пользователей растёт, мы решили продлить время. Просим вашего содействия.',
      segments: [
        seg('来月', 'raigetsu', 'следующий месяц'),
        seg('から', 'kara', 'частица "начиная с"'),
        seg('、'),
        seg('図書館', 'toshokan', 'библиотека'),
        seg('の'),
        seg('開館時間', 'kaikan jikan', 'часы работы (открытия)'),
        seg('が'),
        seg('変わる', 'kawaru', 'меняться'),
        seg('ことになりました', 'koto ni narimashita', 'было решено (обстоятельствами), что'),
        seg('。'),
        seg('今まで', 'ima made', 'до сих пор'),
        seg('は'),
        seg('9時から6時まででしたが', 'kuji kara rokuji made deshita ga', 'было с 9 до 6, но'),
        seg('、'),
        seg('9時から8時までになります', 'kuji kara hachiji made ni narimasu', 'станет с 9 до 8'),
        seg('。'),
        seg('利用者', 'riyousha', 'пользователь (тот, кто использует)'),
        seg('が'),
        seg('増えている', 'fueteiru', 'увеличивается (сейчас)'),
        seg('ため', 'tame', 'из-за того, что'),
        seg('、'),
        seg('時間', 'jikan', 'время'),
        seg('を'),
        seg('延ばす', 'nobasu', 'продлевать'),
        seg('ことにしました', 'koto ni shimashita', 'решили (мы сами)'),
        seg('。'),
        seg('ご協力', 'go-kyouryoku', 'ваше содействие'),
        seg('を'),
        seg('お願いします', 'onegaishimasu', 'просим'),
        seg('。'),
      ],
    },
  ],
  miniCheck: [
    {
      id: 'n3-reading-announcement-check-0',
      question: 'Когда изменится время работы библиотеки?',
      options: ['С завтрашнего дня', 'Со следующего месяца', 'С сегодняшнего дня', 'С следующего года'],
      correctIndex: 1,
      explanation: '«来月から...変わることになりました» — «с следующего месяца изменится».',
    },
    {
      id: 'n3-reading-announcement-check-1',
      question: 'Почему продлевают часы работы?',
      options: ['Пользователей стало меньше', 'Пользователей стало больше', 'Библиотеку ремонтируют', 'Так решило начальство без причины'],
      correctIndex: 1,
      explanation: '«利用者が増えているため» — «потому что число пользователей увеличивается».',
    },
  ],
  itemIds: [],
  xpReward: 40,
}

const opinionLesson: LessonDefinition = {
  id: 'n3-reading-opinion',
  blockId: BLOCK_ID,
  title: 'Заметка о технологиях',
  description: 'Короткое рассуждение — のに, ばかり',
  order: 2,
  theory: [
    { type: 'heading', text: '技術と人間関係' },
    {
      type: 'reading',
      translation:
        'В последнее время, хотя технологии развиваются, я думаю, что отношения между людьми стали сложнее. Хотя только что стало легко получать информацию, время для разговоров с семьёй и друзьями сократилось. Технологии важны, но я хочу ценить и отношения с людьми.',
      segments: [
        seg('最近', 'saikin', 'в последнее время'),
        seg('、'),
        seg('技術', 'gijutsu', 'технология'),
        seg('が'),
        seg('発展している', 'hatten shiteiru', 'развивается (сейчас)'),
        seg('のに', 'noni', 'хотя'),
        seg('、'),
        seg('人と人の関係', 'hito to hito no kankei', 'отношения между людьми'),
        seg('は'),
        seg('難しくなっている', 'muzukashiku natteiru', 'становится сложнее'),
        seg('と思います', 'to omoimasu', 'я думаю, что'),
        seg('。'),
        seg('情報', 'jouhou', 'информация'),
        seg('を'),
        seg('簡単に', 'kantan ni', 'легко'),
        seg('得られる', 'erareru', 'можно получить'),
        seg('ようになった', 'you ni natta', 'стало так, что (изменение способности)'),
        seg('ばかり', 'bakari', 'только что'),
        seg('なのに', 'nanoni', 'хотя (перед なのに нужна именная форма)'),
        seg('、'),
        seg('家族', 'kazoku', 'семья'),
        seg('や'),
        seg('友達', 'tomodachi', 'друзья'),
        seg('と'),
        seg('話す', 'hanasu', 'разговаривать'),
        seg('時間', 'jikan', 'время'),
        seg('は'),
        seg('減りました', 'herimashita', 'уменьшилось'),
        seg('。'),
        seg('技術', 'gijutsu', 'технология'),
        seg('も'),
        seg('大切です', 'taisetsu desu', 'важна'),
        seg('が'),
        seg('、'),
        seg('人との関係', 'hito to no kankei', 'отношения с людьми'),
        seg('も'),
        seg('大切にしたいです', 'taisetsu ni shitai desu', 'хочу ценить'),
        seg('。'),
      ],
    },
  ],
  miniCheck: [
    {
      id: 'n3-reading-opinion-check-0',
      question: 'Что, по мнению автора, стало сложнее из-за развития технологий?',
      options: ['Учёба', 'Отношения между людьми', 'Работа', 'Погода'],
      correctIndex: 1,
      explanation: '«人と人の関係は難しくなっている» — «отношения между людьми становятся сложнее».',
    },
    {
      id: 'n3-reading-opinion-check-1',
      question: 'Что уменьшилось, по тексту?',
      options: ['Количество информации', 'Время разговора с семьёй и друзьями', 'Число технологий', 'Цены'],
      correctIndex: 1,
      explanation: '«家族や友達と話す時間は減りました» — «время разговора с семьёй и друзьями уменьшилось».',
    },
  ],
  itemIds: [],
  xpReward: 40,
}

export const N3_READING_LESSONS: LessonDefinition[] = [introLesson, announcementLesson, opinionLesson]
