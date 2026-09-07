import type { KanjiEntry, RelatedWord } from '@/types/content'

function rw(japanese: string, kana: string, romaji: string, translation: string): RelatedWord {
  return { japanese, kana, romaji, translation }
}

function kanji(
  id: string,
  char: string,
  meaning: string,
  onyomi: string[],
  kunyomi: string[],
  relatedWords: RelatedWord[],
  exampleJapanese: string,
  exampleRomaji: string,
  exampleTranslation: string,
): KanjiEntry {
  return {
    id,
    char,
    jlptLevel: 'n5',
    meaning,
    onyomi,
    kunyomi,
    relatedWords,
    example: { japanese: exampleJapanese, romaji: exampleRomaji, translation: exampleTranslation },
  }
}

export const N5_KANJI_GROUPS = ['Дни недели и природа', 'Величина и положение', 'Природа и вещи', 'Школа и жизнь', 'Действия'] as const

/** 24 кандзи N5 — намеренно пересекаются со словами из блока Vocabulary и грамматикой, чтобы материал закреплялся. */
export const N5_KANJI_ENTRIES: Record<(typeof N5_KANJI_GROUPS)[number], KanjiEntry[]> = {
  'Дни недели и природа': [
    kanji('kj-hi', '日', 'день, солнце', ['にち', 'じつ'], ['ひ'], [
      rw('日本', 'にほん', 'nihon', 'Япония'),
      rw('毎日', 'まいにち', 'mainichi', 'каждый день'),
      rw('今日', 'きょう', 'kyou', 'сегодня (особое чтение)'),
    ], '今日はいい天気です。', 'Kyou wa ii tenki desu.', 'Сегодня хорошая погода.'),
    kanji('kj-tsuki', '月', 'луна, месяц', ['げつ', 'がつ'], ['つき'], [
      rw('一月', 'いちがつ', 'ichigatsu', 'январь'),
      rw('毎月', 'まいつき', 'maitsuki', 'каждый месяц'),
      rw('月曜日', 'げつようび', 'getsuyoubi', 'понедельник'),
    ], '月がきれいです。', 'Tsuki ga kirei desu.', 'Луна красивая.'),
    kanji('kj-hi2', '火', 'огонь', ['か'], ['ひ'], [
      rw('火曜日', 'かようび', 'kayoubi', 'вторник'),
      rw('花火', 'はなび', 'hanabi', 'фейерверк'),
    ], '火が危ないです。', 'Hi ga abunai desu.', 'Огонь опасен.'),
    kanji('kj-mizu', '水', 'вода', ['すい'], ['みず'], [
      rw('水曜日', 'すいようび', 'suiyoubi', 'среда'),
      rw('水泳', 'すいえい', 'suiei', 'плавание'),
    ], '水を飲みます。', 'Mizu wo nomimasu.', 'Пью воду.'),
    kanji('kj-ki', '木', 'дерево', ['もく', 'ぼく'], ['き'], [
      rw('木曜日', 'もくようび', 'mokuyoubi', 'четверг'),
      rw('大木', 'たいぼく', 'taiboku', 'большое дерево'),
    ], '木の下で休みます。', 'Ki no shita de yasumimasu.', 'Отдыхаю под деревом.'),
    kanji('kj-kin', '金', 'золото, деньги', ['きん'], ['かね'], [
      rw('金曜日', 'きんようび', 'kinyoubi', 'пятница'),
      rw('お金', 'おかね', 'okane', 'деньги'),
    ], 'お金がありません。', 'Okane ga arimasen.', 'У меня нет денег.'),
    kanji('kj-tsuchi', '土', 'земля, почва', ['ど'], ['つち'], [
      rw('土曜日', 'どようび', 'doyoubi', 'суббота'),
      rw('土地', 'とち', 'tochi', 'земля, участок'),
    ], '土曜日は休みです。', 'Doyoubi wa yasumi desu.', 'Суббота — выходной.'),
  ],
  'Величина и положение': [
    kanji('kj-hito', '人', 'человек', ['じん', 'にん'], ['ひと'], [
      rw('日本人', 'にほんじん', 'nihonjin', 'японец'),
      rw('三人', 'さんにん', 'san\'nin', 'трое человек'),
    ], 'あの人は先生です。', 'Ano hito wa sensei desu.', 'Тот человек — учитель.'),
    kanji('kj-dai', '大', 'большой', ['だい', 'たい'], ['おおきい'], [
      rw('大学', 'だいがく', 'daigaku', 'университет'),
      rw('大きい', 'おおきい', 'ookii', 'большой'),
    ], '大きい家です。', 'Ookii ie desu.', 'Это большой дом.'),
    kanji('kj-shou', '小', 'маленький', ['しょう'], ['ちいさい'], [
      rw('小学校', 'しょうがっこう', 'shougakkou', 'начальная школа'),
      rw('小さい', 'ちいさい', 'chiisai', 'маленький'),
    ], '小さいねこです。', 'Chiisai neko desu.', 'Это маленькая кошка.'),
    kanji('kj-naka', '中', 'середина, внутри', ['ちゅう'], ['なか'], [
      rw('中国', 'ちゅうごく', 'chuugoku', 'Китай'),
      rw('家の中', 'いえのなか', 'ie no naka', 'внутри дома'),
    ], 'かばんの中にあります。', 'Kaban no naka ni arimasu.', 'Это внутри сумки.'),
    kanji('kj-ue', '上', 'верх', ['じょう'], ['うえ'], [
      rw('上手', 'じょうず', 'jouzu', 'умелый'),
      rw('机の上', 'つくえのうえ', 'tsukue no ue', 'на столе'),
    ], '本は机の上にあります。', 'Hon wa tsukue no ue ni arimasu.', 'Книга на столе.'),
    kanji('kj-shita', '下', 'низ', ['か'], ['した'], [
      rw('地下', 'ちか', 'chika', 'подземный'),
      rw('木の下', 'きのした', 'ki no shita', 'под деревом'),
    ], 'いすの下にねこがいます。', 'Isu no shita ni neko ga imasu.', 'Под стулом кошка.'),
  ],
  'Природа и вещи': [
    kanji('kj-yama', '山', 'гора', ['さん'], ['やま'], [
      rw('富士山', 'ふじさん', 'fujisan', 'гора Фудзи'),
    ], '山に登ります。', 'Yama ni noborimasu.', 'Поднимаюсь в горы.'),
    kanji('kj-kawa', '川', 'река', ['せん'], ['かわ'], [
      rw('小川', 'おがわ', 'ogawa', 'ручей'),
    ], '川で泳ぎます。', 'Kawa de oyogimasu.', 'Плаваю в реке.'),
    kanji('kj-ta', '田', 'рисовое поле', ['でん'], ['た'], [
      rw('田中', 'たなか', 'tanaka', 'Танака (фамилия)'),
      rw('田舎', 'いなか', 'inaka', 'деревня'),
    ], '田中さんに会いました。', 'Tanaka-san ni aimashita.', 'Встретил господина Танаку.'),
    kanji('kj-hon', '本', 'книга, основа', ['ほん'], ['もと'], [
      rw('日本', 'にほん', 'nihon', 'Япония'),
      rw('本当', 'ほんとう', 'hontou', 'правда'),
    ], '本を読みます。', 'Hon wo yomimasu.', 'Читаю книгу.'),
  ],
  'Школа и жизнь': [
    kanji('kj-gaku', '学', 'учёба, наука', ['がく'], ['まなぶ'], [
      rw('学校', 'がっこう', 'gakkou', 'школа'),
      rw('学生', 'がくせい', 'gakusei', 'студент'),
    ], '日本語を学びます。', 'Nihongo wo manabimasu.', 'Изучаю японский.'),
    kanji('kj-kou', '校', 'школа', ['こう'], [], [
      rw('学校', 'がっこう', 'gakkou', 'школа'),
      rw('高校', 'こうこう', 'koukou', 'старшая школа'),
    ], '学校は九時からです。', 'Gakkou wa kuji kara desu.', 'Школа начинается с 9 часов.'),
    kanji('kj-sei', '生', 'жизнь, рождение', ['せい'], ['いきる', 'うまれる', 'なま'], [
      rw('学生', 'がくせい', 'gakusei', 'студент'),
      rw('先生', 'せんせい', 'sensei', 'учитель'),
      rw('誕生日', 'たんじょうび', 'tanjoubi', 'день рождения'),
    ], '先生は日本人です。', 'Sensei wa nihonjin desu.', 'Учитель — японец.'),
  ],
  'Действия': [
    kanji('kj-shoku', '食', 'еда, есть', ['しょく'], ['たべる', 'くう'], [
      rw('食べる', 'たべる', 'taberu', 'есть'),
      rw('食事', 'しょくじ', 'shokuji', 'приём пищи'),
      rw('食堂', 'しょくどう', 'shokudou', 'столовая'),
    ], '昼ご飯を食べます。', 'Hirugohan wo tabemasu.', 'Ем обед.'),
    kanji('kj-ken', '見', 'видеть, смотреть', ['けん'], ['みる'], [
      rw('見る', 'みる', 'miru', 'смотреть'),
      rw('花見', 'はなみ', 'hanami', 'любование цветами'),
    ], '映画を見ます。', 'Eiga wo mimasu.', 'Смотрю фильм.'),
    kanji('kj-kou2', '行', 'идти, проводить', ['こう', 'ぎょう'], ['いく', 'おこなう'], [
      rw('行く', 'いく', 'iku', 'идти'),
      rw('銀行', 'ぎんこう', 'ginkou', 'банк'),
      rw('旅行', 'りょこう', 'ryokou', 'путешествие'),
    ], '学校に行きます。', 'Gakkou ni ikimasu.', 'Иду в школу.'),
    kanji('kj-go', '語', 'язык, слово', ['ご'], ['かたる'], [
      rw('日本語', 'にほんご', 'nihongo', 'японский язык'),
      rw('英語', 'えいご', 'eigo', 'английский язык'),
    ], '日本語を勉強します。', 'Nihongo wo benkyou shimasu.', 'Изучаю японский.'),
  ],
}
