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
    jlptLevel: 'n4',
    meaning,
    onyomi,
    kunyomi,
    relatedWords,
    example: { japanese: exampleJapanese, romaji: exampleRomaji, translation: exampleTranslation },
  }
}

export const N4_KANJI_GROUPS = ['Работа', 'Учёба', 'Природа', 'Понятия и чувства'] as const

/** 24 кандзи N4 — почти все уже встречались как целые слова в блоке Словарь N4, здесь разбираются как отдельные знаки. */
export const N4_KANJI_ENTRIES: Record<(typeof N4_KANJI_GROUPS)[number], KanjiEntry[]> = {
  Работа: [
    kanji('n4kj-kai', '会', 'встреча, собрание', ['かい'], ['あう'], [rw('会社', 'かいしゃ', 'kaisha', 'компания'), rw('会う', 'あう', 'au', 'встречаться')], '友達に会います。', 'Tomodachi ni aimasu.', 'Встречаюсь с другом.'),
    kanji('n4kj-sha', '社', 'компания, храм', ['しゃ'], [], [rw('会社', 'かいしゃ', 'kaisha', 'компания'), rw('社会', 'しゃかい', 'shakai', 'общество')], '会社で働きます。', 'Kaisha de hatarakimasu.', 'Работаю в компании.'),
    kanji('n4kj-dou', '働', 'работать', ['どう'], ['はたらく'], [rw('働く', 'はたらく', 'hataraku', 'работать')], '毎日働きます。', 'Mainichi hatarakimasu.', 'Работаю каждый день.'),
    kanji('n4kj-kyuu', '休', 'отдых', ['きゅう'], ['やすむ'], [rw('休み', 'やすみ', 'yasumi', 'выходной'), rw('休む', 'やすむ', 'yasumu', 'отдыхать')], '明日は休みです。', 'Ashita wa yasumi desu.', 'Завтра выходной.'),
    kanji('n4kj-shi', '試', 'пробовать', ['し'], ['こころみる'], [rw('試験', 'しけん', 'shiken', 'экзамен')], '明日試験があります。', 'Ashita shiken ga arimasu.', 'Завтра экзамен.'),
    kanji('n4kj-ken', '験', 'проверка, опыт', ['けん'], [], [rw('試験', 'しけん', 'shiken', 'экзамен'), rw('経験', 'けいけん', 'keiken', 'опыт')], 'いい経験でした。', 'Ii keiken deshita.', 'Это был хороший опыт.'),
  ],
  Учёба: [
    kanji('n4kj-shuku', '宿', 'ночлег', ['しゅく'], ['やど'], [rw('宿題', 'しゅくだい', 'shukudai', 'домашнее задание')], '宿題をします。', 'Shukudai wo shimasu.', 'Делаю домашнее задание.'),
    kanji('n4kj-dai', '題', 'тема, задание', ['だい'], [], [rw('宿題', 'しゅくだい', 'shukudai', 'домашнее задание'), rw('問題', 'もんだい', 'mondai', 'проблема, вопрос')], 'この問題は難しいです。', 'Kono mondai wa muzukashii desu.', 'Этот вопрос трудный.'),
    kanji('n4kj-kaku', '覚', 'запоминать', ['かく'], ['おぼえる'], [rw('覚える', 'おぼえる', 'oboeru', 'запоминать')], '単語を覚えます。', 'Tango wo oboemasu.', 'Запоминаю слова.'),
    kanji('n4kj-kyou2', '教', 'учить', ['きょう'], ['おしえる'], [rw('教える', 'おしえる', 'oshieru', 'преподавать'), rw('教室', 'きょうしつ', 'kyoushitsu', 'класс, аудитория')], '先生が教えます。', 'Sensei ga oshiemasu.', 'Учитель преподаёт.'),
    kanji('n4kj-bun', '分', 'часть, понимать', ['ぶん', 'ふん'], ['わかる'], [rw('分かる', 'わかる', 'wakaru', 'понимать'), rw('三分', 'さんぷん', 'sanpun', '3 минуты')], '質問が分かりません。', 'Shitsumon ga wakarimasen.', 'Не понимаю вопрос.'),
    kanji('n4kj-nan', '難', 'трудный', ['なん'], ['むずかしい'], [rw('難しい', 'むずかしい', 'muzukashii', 'трудный')], 'この試験は難しいです。', 'Kono shiken wa muzukashii desu.', 'Этот экзамен трудный.'),
  ],
  Природа: [
    kanji('n4kj-ten', '天', 'небо, погода', ['てん'], [], [rw('天気', 'てんき', 'tenki', 'погода')], '今日はいい天気です。', 'Kyou wa ii tenki desu.', 'Сегодня хорошая погода.'),
    kanji('n4kj-u', '雨', 'дождь', ['う'], ['あめ'], [rw('雨', 'あめ', 'ame', 'дождь')], '雨が降っています。', 'Ame ga futteimasu.', 'Идёт дождь.'),
    kanji('n4kj-fuu', '風', 'ветер', ['ふう'], ['かぜ'], [rw('風', 'かぜ', 'kaze', 'ветер'), rw('台風', 'たいふう', 'taifuu', 'тайфун')], '風が強いです。', 'Kaze ga tsuyoi desu.', 'Ветер сильный.'),
    kanji('n4kj-kuu', '空', 'небо, пустой', ['くう'], ['そら'], [rw('空', 'そら', 'sora', 'небо'), rw('空港', 'くうこう', 'kuukou', 'аэропорт')], '空が青いです。', 'Sora ga aoi desu.', 'Небо голубое.'),
  ],
  'Понятия и чувства': [
    kanji('n4kj-shin', '心', 'сердце, душа', ['しん'], ['こころ'], [rw('心配', 'しんぱい', 'shinpai', 'беспокойство')], '心配しないでください。', 'Shinpai shinaide kudasai.', 'Не волнуйтесь.'),
    kanji('n4kj-hai', '配', 'распределять', ['はい'], ['くばる'], [rw('心配', 'しんぱい', 'shinpai', 'беспокойство')], '心配です。', 'Shinpai desu.', 'Я волнуюсь.'),
    kanji('n4kj-kei', '経', 'проходить (через)', ['けい'], [], [rw('経験', 'けいけん', 'keiken', 'опыт')], 'いい経験でした。', 'Ii keiken deshita.', 'Это был хороший опыт.'),
    kanji('n4kj-yaku', '約', 'обещание, около', ['やく'], [], [rw('約束', 'やくそく', 'yakusoku', 'обещание')], '約束を守ります。', 'Yakusoku wo mamorimasu.', 'Держу обещание.'),
    kanji('n4kj-soku', '束', 'связка, пучок', ['そく'], ['たば'], [rw('約束', 'やくそく', 'yakusoku', 'обещание')], '花束をもらいました。', 'Hanataba wo moraimashita.', 'Получил букет цветов.'),
    kanji('n4kj-ki2', '機', 'машина, случай', ['き'], [], [rw('機会', 'きかい', 'kikai', 'возможность'), rw('飛行機', 'ひこうき', 'hikouki', 'самолёт')], 'いい機会です。', 'Ii kikai desu.', 'Хорошая возможность.'),
    kanji('n4kj-hitsu', '必', 'непременно', ['ひつ'], ['かならず'], [rw('必要', 'ひつよう', 'hitsuyou', 'необходимость')], 'お金が必要です。', 'Okane ga hitsuyou desu.', 'Деньги необходимы.'),
    kanji('n4kj-you', '要', 'нужно', ['よう'], ['いる'], [rw('必要', 'ひつよう', 'hitsuyou', 'необходимость')], 'これは必要です。', 'Kore wa hitsuyou desu.', 'Это необходимо.'),
  ],
}
