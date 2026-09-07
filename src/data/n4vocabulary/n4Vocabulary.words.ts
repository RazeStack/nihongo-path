import type { VocabWord } from '@/types/content'

function word(
  id: string,
  category: string,
  japanese: string,
  kana: string,
  romaji: string,
  translation: string,
  exampleJapanese: string,
  exampleRomaji: string,
  exampleTranslation: string,
): VocabWord {
  return {
    id,
    jlptLevel: 'n4',
    category,
    japanese,
    kana,
    romaji,
    translation,
    example: { japanese: exampleJapanese, romaji: exampleRomaji, translation: exampleTranslation },
  }
}

export const N4_VOCAB_CATEGORIES = ['Работа', 'Учёба', 'Природа и погода', 'Эмоции', 'Абстрактные понятия'] as const

/** 30 слов N4 — на ступень абстрактнее N5: работа, учёба, погода, чувства, отвлечённые понятия. */
export const N4_VOCABULARY_WORDS: VocabWord[] = [
  // Работа
  word('n4voc-shigoto', 'Работа', '仕事', 'しごと', 'shigoto', 'работа', '毎日仕事に行きます。', 'Mainichi shigoto ni ikimasu.', 'Каждый день хожу на работу.'),
  word('n4voc-kaisha', 'Работа', '会社', 'かいしゃ', 'kaisha', 'компания', '会社で働きます。', 'Kaisha de hatarakimasu.', 'Работаю в компании.'),
  word('n4voc-hataraku', 'Работа', '働く', 'はたらく', 'hataraku', 'работать', '毎日働きます。', 'Mainichi hatarakimasu.', 'Работаю каждый день.'),
  word('n4voc-kyuuryou', 'Работа', '給料', 'きゅうりょう', 'kyuuryou', 'зарплата', '給料をもらいます。', 'Kyuuryou wo moraimasu.', 'Получаю зарплату.'),
  word('n4voc-yasumi', 'Работа', '休み', 'やすみ', 'yasumi', 'выходной, отпуск', '明日は休みです。', 'Ashita wa yasumi desu.', 'Завтра выходной.'),
  word('n4voc-isogashii', 'Работа', '忙しい', 'いそがしい', 'isogashii', 'занятой', '今日は忙しいです。', 'Kyou wa isogashii desu.', 'Сегодня я занят.'),

  // Учёба
  word('n4voc-shiken', 'Учёба', '試験', 'しけん', 'shiken', 'экзамен', '明日試験があります。', 'Ashita shiken ga arimasu.', 'Завтра экзамен.'),
  word('n4voc-shukudai', 'Учёба', '宿題', 'しゅくだい', 'shukudai', 'домашнее задание', '宿題をします。', 'Shukudai wo shimasu.', 'Делаю домашнее задание.'),
  word('n4voc-oboeru', 'Учёба', '覚える', 'おぼえる', 'oboeru', 'запоминать', '単語を覚えます。', 'Tango wo oboemasu.', 'Запоминаю слова.'),
  word('n4voc-oshieru', 'Учёба', '教える', 'おしえる', 'oshieru', 'учить, преподавать', '先生が日本語を教えます。', 'Sensei ga nihongo wo oshiemasu.', 'Учитель преподаёт японский.'),
  word('n4voc-wakaru', 'Учёба', '分かる', 'わかる', 'wakaru', 'понимать', '質問が分かりません。', 'Shitsumon ga wakarimasen.', 'Не понимаю вопрос.'),
  word('n4voc-muzukashii', 'Учёба', '難しい', 'むずかしい', 'muzukashii', 'трудный', 'この試験は難しいです。', 'Kono shiken wa muzukashii desu.', 'Этот экзамен трудный.'),

  // Природа и погода
  word('n4voc-tenki', 'Природа и погода', '天気', 'てんき', 'tenki', 'погода', '今日はいい天気です。', 'Kyou wa ii tenki desu.', 'Сегодня хорошая погода.'),
  word('n4voc-ame', 'Природа и погода', '雨', 'あめ', 'ame', 'дождь', '明日雨が降るそうです。', 'Ashita ame ga furu sou desu.', 'Говорят, завтра будет дождь.'),
  word('n4voc-yuki', 'Природа и погода', '雪', 'ゆき', 'yuki', 'снег', '雪が降っています。', 'Yuki ga futteimasu.', 'Идёт снег.'),
  word('n4voc-hare', 'Природа и погода', '晴れ', 'はれ', 'hare', 'ясная погода', '明日は晴れです。', 'Ashita wa hare desu.', 'Завтра ясно.'),
  word('n4voc-kaze', 'Природа и погода', '風', 'かぜ', 'kaze', 'ветер', '風が強いです。', 'Kaze ga tsuyoi desu.', 'Ветер сильный.'),
  word('n4voc-sora', 'Природа и погода', '空', 'そら', 'sora', 'небо', '空が青いです。', 'Sora ga aoi desu.', 'Небо голубое.'),

  // Эмоции
  word('n4voc-ureshii', 'Эмоции', '嬉しい', 'うれしい', 'ureshii', 'радостный', '会えて嬉しいです。', 'Aete ureshii desu.', 'Рад встрече.'),
  word('n4voc-kanashii', 'Эмоции', '悲しい', 'かなしい', 'kanashii', 'грустный', '悲しい映画でした。', 'Kanashii eiga deshita.', 'Это был грустный фильм.'),
  word('n4voc-shinpai', 'Эмоции', '心配', 'しんぱい', 'shinpai', 'беспокойство', '心配しないでください。', 'Shinpai shinaide kudasai.', 'Не волнуйтесь.'),
  word('n4voc-bikkuri', 'Эмоции', 'びっくりする', 'びっくりする', 'bikkuri suru', 'удивляться', 'そのニュースにびっくりしました。', 'Sono nyuusu ni bikkuri shimashita.', 'Удивился этой новости.'),
  word('n4voc-tanoshii', 'Эмоции', '楽しい', 'たのしい', 'tanoshii', 'весёлый, приятный', '旅行は楽しかったです。', 'Ryokou wa tanoshikatta desu.', 'Поездка была весёлая.'),
  word('n4voc-kowai', 'Эмоции', '怖い', 'こわい', 'kowai', 'страшный', 'この映画は怖いです。', 'Kono eiga wa kowai desu.', 'Этот фильм страшный.'),

  // Абстрактные понятия
  word('n4voc-imi', 'Абстрактные понятия', '意味', 'いみ', 'imi', 'значение', 'この言葉の意味が分かりません。', 'Kono kotoba no imi ga wakarimasen.', 'Не понимаю значение этого слова.'),
  word('n4voc-riyuu', 'Абстрактные понятия', '理由', 'りゆう', 'riyuu', 'причина', '理由を教えてください。', 'Riyuu wo oshiete kudasai.', 'Пожалуйста, скажите причину.'),
  word('n4voc-keiken', 'Абстрактные понятия', '経験', 'けいけん', 'keiken', 'опыт', 'いい経験でした。', 'Ii keiken deshita.', 'Это был хороший опыт.'),
  word('n4voc-yakusoku', 'Абстрактные понятия', '約束', 'やくそく', 'yakusoku', 'обещание', '約束を守ります。', 'Yakusoku wo mamorimasu.', 'Держу обещание.'),
  word('n4voc-kikai', 'Абстрактные понятия', '機会', 'きかい', 'kikai', 'возможность, случай', 'いい機会です。', 'Ii kikai desu.', 'Хорошая возможность.'),
  word('n4voc-hitsuyou', 'Абстрактные понятия', '必要', 'ひつよう', 'hitsuyou', 'необходимость', 'お金が必要です。', 'Okane ga hitsuyou desu.', 'Деньги необходимы.'),
]
