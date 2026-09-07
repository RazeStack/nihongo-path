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
    jlptLevel: 'n5',
    category,
    japanese,
    kana,
    romaji,
    translation,
    example: { japanese: exampleJapanese, romaji: exampleRomaji, translation: exampleTranslation },
  }
}

export const N5_VOCAB_CATEGORIES = ['Люди', 'Еда', 'Дом', 'Транспорт', 'Время', 'Места'] as const

/** 36 базовых слов N5 по 6 темам — демонстрационный набор, архитектура рассчитана на сотни слов. */
export const N5_VOCABULARY_WORDS: VocabWord[] = [
  // Люди
  word('voc-hito', 'Люди', '人', 'ひと', 'hito', 'человек', 'あの人はだれですか。', 'Ano hito wa dare desu ka.', 'Кто тот человек?'),
  word('voc-tomodachi', 'Люди', '友達', 'ともだち', 'tomodachi', 'друг', '友達と話します。', 'Tomodachi to hanashimasu.', 'Разговариваю с другом.'),
  word('voc-sensei', 'Люди', '先生', 'せんせい', 'sensei', 'учитель', '先生はやさしいです。', 'Sensei wa yasashii desu.', 'Учитель добрый.'),
  word('voc-gakusei', 'Люди', '学生', 'がくせい', 'gakusei', 'студент', 'わたしは学生です。', 'Watashi wa gakusei desu.', 'Я студент.'),
  word('voc-kazoku', 'Люди', '家族', 'かぞく', 'kazoku', 'семья', '家族は四人です。', 'Kazoku wa yonin desu.', 'В семье четыре человека.'),
  word('voc-kodomo', 'Люди', '子供', 'こども', 'kodomo', 'ребёнок', '子供が好きです。', 'Kodomo ga suki desu.', 'Мне нравятся дети.'),

  // Еда
  word('voc-mizu', 'Еда', '水', 'みず', 'mizu', 'вода', '水を飲みます。', 'Mizu wo nomimasu.', 'Пью воду.'),
  word('voc-gohan', 'Еда', 'ご飯', 'ごはん', 'gohan', 'рис / еда', 'ご飯を食べます。', 'Gohan wo tabemasu.', 'Ем рис (еду).'),
  word('voc-niku', 'Еда', '肉', 'にく', 'niku', 'мясо', '肉は高いです。', 'Niku wa takai desu.', 'Мясо дорогое.'),
  word('voc-sakana', 'Еда', '魚', 'さかな', 'sakana', 'рыба', '魚が好きです。', 'Sakana ga suki desu.', 'Мне нравится рыба.'),
  word('voc-yasai', 'Еда', '野菜', 'やさい', 'yasai', 'овощи', '野菜を食べます。', 'Yasai wo tabemasu.', 'Ем овощи.'),
  word('voc-kudamono', 'Еда', '果物', 'くだもの', 'kudamono', 'фрукты', '果物は甘いです。', 'Kudamono wa amai desu.', 'Фрукты сладкие.'),

  // Дом
  word('voc-ie', 'Дом', '家', 'いえ', 'ie', 'дом', '家に帰ります。', 'Ie ni kaerimasu.', 'Возвращаюсь домой.'),
  word('voc-heya', 'Дом', '部屋', 'へや', 'heya', 'комната', '部屋はきれいです。', 'Heya wa kirei desu.', 'Комната чистая.'),
  word('voc-mado', 'Дом', '窓', 'まど', 'mado', 'окно', '窓を開けます。', 'Mado wo akemasu.', 'Открываю окно.'),
  word('voc-isu', 'Дом', 'いす', 'いす', 'isu', 'стул', 'いすに座ります。', 'Isu ni suwarimasu.', 'Сажусь на стул.'),
  word('voc-teburu', 'Дом', 'テーブル', 'テーブル', 'te-buru', 'стол', 'テーブルの上に本があります。', 'Te-buru no ue ni hon ga arimasu.', 'На столе есть книга.'),
  word('voc-hon', 'Дом', '本', 'ほん', 'hon', 'книга', '本を読みます。', 'Hon wo yomimasu.', 'Читаю книгу.'),

  // Транспорт
  word('voc-kuruma', 'Транспорт', '車', 'くるま', 'kuruma', 'машина', '車で行きます。', 'Kuruma de ikimasu.', 'Еду на машине.'),
  word('voc-densha', 'Транспорт', '電車', 'でんしゃ', 'densha', 'поезд', '電車に乗ります。', 'Densha ni norimasu.', 'Сажусь на поезд.'),
  word('voc-basu', 'Транспорт', 'バス', 'バス', 'basu', 'автобус', 'バスを待ちます。', 'Basu wo machimasu.', 'Жду автобус.'),
  word('voc-jitensha', 'Транспорт', '自転車', 'じてんしゃ', 'jitensha', 'велосипед', '自転車で学校に行きます。', 'Jitensha de gakkou ni ikimasu.', 'Еду в школу на велосипеде.'),
  word('voc-hikouki', 'Транспорт', '飛行機', 'ひこうき', 'hikouki', 'самолёт', '飛行機で日本に行きます。', 'Hikouki de nihon ni ikimasu.', 'Лечу в Японию на самолёте.'),
  word('voc-michi', 'Транспорт', '道', 'みち', 'michi', 'дорога', 'この道は長いです。', 'Kono michi wa nagai desu.', 'Эта дорога длинная.'),

  // Время
  word('voc-kyou', 'Время', '今日', 'きょう', 'kyou', 'сегодня', '今日は忙しいです。', 'Kyou wa isogashii desu.', 'Сегодня я занят.'),
  word('voc-ashita', 'Время', '明日', 'あした', 'ashita', 'завтра', '明日学校に行きます。', 'Ashita gakkou ni ikimasu.', 'Завтра иду в школу.'),
  word('voc-kinou', 'Время', '昨日', 'きのう', 'kinou', 'вчера', '昨日映画を見ました。', 'Kinou eiga wo mimashita.', 'Вчера смотрел фильм.'),
  word('voc-ima', 'Время', '今', 'いま', 'ima', 'сейчас', '今何時ですか。', 'Ima nanji desu ka.', 'Сейчас который час?'),
  word('voc-jikan', 'Время', '時間', 'じかん', 'jikan', 'время', '時間がありません。', 'Jikan ga arimasen.', 'Нет времени.'),
  word('voc-shuu', 'Время', '週', 'しゅう', 'shuu', 'неделя', '来週日本に行きます。', 'Raishuu nihon ni ikimasu.', 'На следующей неделе поеду в Японию.'),

  // Места
  word('voc-eki', 'Места', '駅', 'えき', 'eki', 'станция', '駅はどこですか。', 'Eki wa doko desu ka.', 'Где станция?'),
  word('voc-byouin', 'Места', '病院', 'びょういん', 'byouin', 'больница', '病院に行きます。', 'Byouin ni ikimasu.', 'Иду в больницу.'),
  word('voc-ginkou', 'Места', '銀行', 'ぎんこう', 'ginkou', 'банк', '銀行でお金をおろします。', 'Ginkou de okane wo oroshimasu.', 'Снимаю деньги в банке.'),
  word('voc-kouen', 'Места', '公園', 'こうえん', 'kouen', 'парк', '公園で遊びます。', 'Kouen de asobimasu.', 'Играю в парке.'),
  word('voc-mise', 'Места', '店', 'みせ', 'mise', 'магазин', 'この店は安いです。', 'Kono mise wa yasui desu.', 'Этот магазин дешёвый.'),
  word('voc-toshokan', 'Места', '図書館', 'としょかん', 'toshokan', 'библиотека', '図書館で勉強します。', 'Toshokan de benkyou shimasu.', 'Учусь в библиотеке.'),
]
