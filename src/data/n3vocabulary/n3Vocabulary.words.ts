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
    jlptLevel: 'n3',
    category,
    japanese,
    kana,
    romaji,
    translation,
    example: { japanese: exampleJapanese, romaji: exampleRomaji, translation: exampleTranslation },
  }
}

export const N3_VOCAB_CATEGORIES = ['Общество', 'Технологии', 'Экономика', 'Отношения', 'Формальная лексика'] as const

/** 30 слов N3 — общество/технологии/экономика/отношения и первые устойчивые вежливые выражения (кэйго). */
export const N3_VOCABULARY_WORDS: VocabWord[] = [
  // Общество
  word('n3voc-shakai', 'Общество', '社会', 'しゃかい', 'shakai', 'общество', '現代社会は複雑です。', 'Gendai shakai wa fukuzatsu desu.', 'Современное общество сложное.'),
  word('n3voc-seiji', 'Общество', '政治', 'せいじ', 'seiji', 'политика', '政治に興味があります。', 'Seiji ni kyoumi ga arimasu.', 'Интересуюсь политикой.'),
  word('n3voc-bunka', 'Общество', '文化', 'ぶんか', 'bunka', 'культура', '日本の文化が好きです。', 'Nihon no bunka ga suki desu.', 'Мне нравится японская культура.'),
  word('n3voc-kankyou', 'Общество', '環境', 'かんきょう', 'kankyou', 'окружающая среда', '環境を守ります。', 'Kankyou wo mamorimasu.', 'Защищаем окружающую среду.'),
  word('n3voc-jinkou', 'Общество', '人口', 'じんこう', 'jinkou', 'население', '人口が増えています。', 'Jinkou ga fueteimasu.', 'Население растёт.'),
  word('n3voc-kokusai', 'Общество', '国際', 'こくさい', 'kokusai', 'международный', '国際会議に出ます。', 'Kokusai kaigi ni demasu.', 'Участвую в международной конференции.'),

  // Технологии
  word('n3voc-gijutsu', 'Технологии', '技術', 'ぎじゅつ', 'gijutsu', 'технология', '技術が進んでいます。', 'Gijutsu ga susundeimasu.', 'Технологии развиваются.'),
  word('n3voc-jouhou', 'Технологии', '情報', 'じょうほう', 'jouhou', 'информация', 'インターネットで情報を集めます。', 'Intaanetto de jouhou wo atsumemasu.', 'Собираю информацию в интернете.'),
  word('n3voc-hatten', 'Технологии', '発展', 'はってん', 'hatten', 'развитие', 'この国は発展しています。', 'Kono kuni wa hatten shiteimasu.', 'Эта страна развивается.'),
  word('n3voc-riyou', 'Технологии', '利用する', 'りようする', 'riyou suru', 'использовать', 'このアプリを利用します。', 'Kono apuri wo riyou shimasu.', 'Использую это приложение.'),
  word('n3voc-eikyou', 'Технологии', '影響', 'えいきょう', 'eikyou', 'влияние', '天気に影響されます。', 'Tenki ni eikyou saremasu.', 'Подвержен влиянию погоды.'),
  word('n3voc-kanou', 'Технологии', '可能', 'かのう', 'kanou', 'возможность, возможный', 'それは可能です。', 'Sore wa kanou desu.', 'Это возможно.'),

  // Экономика
  word('n3voc-keizai', 'Экономика', '経済', 'けいざい', 'keizai', 'экономика', '経済が成長しています。', 'Keizai ga seichou shiteimasu.', 'Экономика растёт.'),
  word('n3voc-nedan', 'Экономика', '値段', 'ねだん', 'nedan', 'цена', 'この値段は高いです。', 'Kono nedan wa takai desu.', 'Эта цена высокая.'),
  word('n3voc-uru', 'Экономика', '売る', 'うる', 'uru', 'продавать', '家を売ります。', 'Ie wo urimasu.', 'Продаю дом.'),
  word('n3voc-kau', 'Экономика', '買う', 'かう', 'kau', 'покупать', '新しい車を買いました。', 'Atarashii kuruma wo kaimashita.', 'Купил новую машину.'),
  word('n3voc-fueru', 'Экономика', '増える', 'ふえる', 'fueru', 'увеличиваться', '人口が増えます。', 'Jinkou ga fuemasu.', 'Население увеличивается.'),
  word('n3voc-heru', 'Экономика', '減る', 'へる', 'heru', 'уменьшаться', 'お金が減りました。', 'Okane ga herimashita.', 'Денег стало меньше.'),

  // Отношения
  word('n3voc-kankei', 'Отношения', '関係', 'かんけい', 'kankei', 'отношения', 'いい関係を作ります。', 'Ii kankei wo tsukurimasu.', 'Строю хорошие отношения.'),
  word('n3voc-shinrai', 'Отношения', '信頼', 'しんらい', 'shinrai', 'доверие', '彼を信頼しています。', 'Kare wo shinrai shiteimasu.', 'Я доверяю ему.'),
  word('n3voc-gokai', 'Отношения', '誤解', 'ごかい', 'gokai', 'недопонимание', '誤解がありました。', 'Gokai ga arimashita.', 'Было недопонимание.'),
  word('n3voc-ayamaru', 'Отношения', '謝る', 'あやまる', 'ayamaru', 'извиняться', 'すぐに謝りました。', 'Sugu ni ayamarimashita.', 'Сразу извинился.'),
  word('n3voc-kyouryoku', 'Отношения', '協力する', 'きょうりょくする', 'kyouryoku suru', 'сотрудничать', 'みんなで協力しましょう。', 'Minna de kyouryoku shimashou.', 'Давайте сотрудничать все вместе.'),
  word('n3voc-taido', 'Отношения', '態度', 'たいど', 'taido', 'отношение, поведение', '彼の態度が変わりました。', 'Kare no taido ga kawarimashita.', 'Его отношение изменилось.'),

  // Формальная лексика
  word('n3voc-haiken', 'Формальная лексика', '拝見する', 'はいけんする', 'haiken suru', 'смотреть (скромно о себе)', '資料を拝見しました。', 'Shiryou wo haiken shimashita.', 'Я ознакомился с материалами.'),
  word('n3voc-moushiwake', 'Формальная лексика', '申し訳ございません', 'もうしわけございません', 'moushiwake gozaimasen', 'искренне прошу прощения', '遅れて申し訳ございません。', 'Okurete moushiwake gozaimasen.', 'Извините за опоздание.'),
  word('n3voc-shouchi', 'Формальная лексика', '承知しました', 'しょうちしました', 'shouchi shimashita', 'понял, принял к сведению (вежливо)', 'はい、承知しました。', 'Hai, shouchi shimashita.', 'Да, понял.'),
  word('n3voc-osewa', 'Формальная лексика', 'お世話になります', 'おせわになります', 'osewa ni narimasu', 'благодарю за помощь/заботу', 'いつもお世話になります。', 'Itsumo osewa ni narimasu.', 'Всегда благодарен за вашу помощь.'),
  word('n3voc-osoreirimasu', 'Формальная лексика', '恐れ入ります', 'おそれいります', 'osoreirimasu', 'прошу прощения, премного благодарен', '恐れ入りますが、質問があります。', 'Osoreirimasu ga, shitsumon ga arimasu.', 'Извините, у меня есть вопрос.'),
  word('n3voc-kashikomari', 'Формальная лексика', 'かしこまりました', 'かしこまりました', 'kashikomarimashita', 'слушаюсь (очень вежливо)', 'かしこまりました。少々お待ちください。', 'Kashikomarimashita. Shoushou omachi kudasai.', 'Слушаюсь. Подождите немного, пожалуйста.'),
]
