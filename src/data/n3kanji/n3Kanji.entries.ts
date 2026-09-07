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
    jlptLevel: 'n3',
    meaning,
    onyomi,
    kunyomi,
    relatedWords,
    example: { japanese: exampleJapanese, romaji: exampleRomaji, translation: exampleTranslation },
  }
}

export const N3_KANJI_GROUPS = ['Общество', 'Технологии', 'Экономика', 'Отношения'] as const

/** 21 кандзи N3, собранные из слов, уже введённых в блоке Словарь N3. */
export const N3_KANJI_ENTRIES: Record<(typeof N3_KANJI_GROUPS)[number], KanjiEntry[]> = {
  Общество: [
    kanji('n3kj-sei', '政', 'политика (управление)', ['せい'], [], [rw('政治', 'せいじ', 'seiji', 'политика')], '政治に興味があります。', 'Seiji ni kyoumi ga arimasu.', 'Интересуюсь политикой.'),
    kanji('n3kj-ji2', '治', 'управлять, лечить', ['じ', 'ち'], ['おさめる', 'なおる'], [rw('政治', 'せいじ', 'seiji', 'политика')], '政治の話をします。', 'Seiji no hanashi wo shimasu.', 'Говорим о политике.'),
    kanji('n3kj-bun', '文', 'текст, письменность', ['ぶん'], ['ふみ'], [rw('文化', 'ぶんか', 'bunka', 'культура')], '日本の文化が好きです。', 'Nihon no bunka ga suki desu.', 'Мне нравится японская культура.'),
    kanji('n3kj-ka2', '化', 'превращаться', ['か'], ['ばける'], [rw('文化', 'ぶんか', 'bunka', 'культура')], '文化が変わります。', 'Bunka ga kawarimasu.', 'Культура меняется.'),
    kanji('n3kj-koku', '国', 'страна', ['こく'], ['くに'], [rw('国際', 'こくさい', 'kokusai', 'международный'), rw('外国', 'がいこく', 'gaikoku', 'зарубежная страна')], '国際会議に出ます。', 'Kokusai kaigi ni demasu.', 'Участвую в международной конференции.'),
  ],
  Технологии: [
    kanji('n3kj-gi', '技', 'навык, умение', ['ぎ'], ['わざ'], [rw('技術', 'ぎじゅつ', 'gijutsu', 'технология')], '技術が進んでいます。', 'Gijutsu ga susundeimasu.', 'Технологии развиваются.'),
    kanji('n3kj-jutsu', '術', 'техника, искусство', ['じゅつ'], [], [rw('技術', 'ぎじゅつ', 'gijutsu', 'технология'), rw('手術', 'しゅじゅつ', 'shujutsu', 'операция')], '新しい技術です。', 'Atarashii gijutsu desu.', 'Это новая технология.'),
    kanji('n3kj-jou', '情', 'чувство', ['じょう'], ['なさけ'], [rw('情報', 'じょうほう', 'jouhou', 'информация')], 'インターネットで情報を集めます。', 'Intaanetto de jouhou wo atsumemasu.', 'Собираю информацию в интернете.'),
    kanji('n3kj-hou2', '報', 'сообщение', ['ほう'], ['むくいる'], [rw('情報', 'じょうほう', 'jouhou', 'информация')], '大事な情報です。', 'Daiji na jouhou desu.', 'Это важная информация.'),
    kanji('n3kj-hatsu', '発', 'начинать, отправляться', ['はつ'], [], [rw('発展', 'はってん', 'hatten', 'развитие'), rw('出発', 'しゅっぱつ', 'shuppatsu', 'отправление')], 'この国は発展しています。', 'Kono kuni wa hatten shiteimasu.', 'Эта страна развивается.'),
    kanji('n3kj-ten2', '展', 'разворачивать, выставка', ['てん'], [], [rw('発展', 'はってん', 'hatten', 'развитие')], '経済が発展します。', 'Keizai ga hatten shimasu.', 'Экономика развивается.'),
  ],
  Экономика: [
    kanji('n3kj-sai', '済', 'заканчивать, экономика', ['さい'], ['すむ'], [rw('経済', 'けいざい', 'keizai', 'экономика')], '経済が成長しています。', 'Keizai ga seichou shiteimasu.', 'Экономика растёт.'),
    kanji('n3kj-chi2', '値', 'ценность', ['ち'], ['ね', 'あたい'], [rw('値段', 'ねだん', 'nedan', 'цена')], 'この値段は高いです。', 'Kono nedan wa takai desu.', 'Эта цена высокая.'),
    kanji('n3kj-zou', '増', 'увеличивать', ['ぞう'], ['ふえる', 'ます'], [rw('増える', 'ふえる', 'fueru', 'увеличиваться')], '人口が増えます。', 'Jinkou ga fuemasu.', 'Население увеличивается.'),
    kanji('n3kj-gen', '減', 'уменьшать', ['げん'], ['へる', 'へらす'], [rw('減る', 'へる', 'heru', 'уменьшаться')], 'お金が減りました。', 'Okane ga herimashita.', 'Денег стало меньше.'),
  ],
  Отношения: [
    kanji('n3kj-kan', '関', 'отношение, связь', ['かん'], ['せき'], [rw('関係', 'かんけい', 'kankei', 'отношения')], 'いい関係を作ります。', 'Ii kankei wo tsukurimasu.', 'Строю хорошие отношения.'),
    kanji('n3kj-kei2', '係', 'связь', ['けい'], ['かかり'], [rw('関係', 'かんけい', 'kankei', 'отношения')], '関係が大切です。', 'Kankei ga taisetsu desu.', 'Отношения важны.'),
    kanji('n3kj-shin', '信', 'доверие', ['しん'], [], [rw('信頼', 'しんらい', 'shinrai', 'доверие')], '彼を信頼しています。', 'Kare wo shinrai shiteimasu.', 'Я доверяю ему.'),
    kanji('n3kj-rai', '頼', 'полагаться, просить', ['らい'], ['たのむ'], [rw('信頼', 'しんらい', 'shinrai', 'доверие'), rw('頼む', 'たのむ', 'tanomu', 'просить')], '信頼が大事です。', 'Shinrai ga daiji desu.', 'Доверие важно.'),
    kanji('n3kj-kyou3', '協', 'сотрудничество', ['きょう'], [], [rw('協力', 'きょうりょく', 'kyouryoku', 'сотрудничество')], 'みんなで協力しましょう。', 'Minna de kyouryoku shimashou.', 'Давайте сотрудничать все вместе.'),
    kanji('n3kj-ryoku', '力', 'сила', ['りょく', 'りき'], ['ちから'], [rw('協力', 'きょうりょく', 'kyouryoku', 'сотрудничество'), rw('力', 'ちから', 'chikara', 'сила')], '協力する力が必要です。', 'Kyouryoku suru chikara ga hitsuyou desu.', 'Нужна сила для сотрудничества.'),
  ],
}
