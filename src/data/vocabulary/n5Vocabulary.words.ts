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

export const N5_VOCAB_CATEGORIES = [
  'Приветствия',
  'Люди',
  'Семья',
  'Еда',
  'Напитки',
  'Дом',
  'Транспорт',
  'Время',
  'Места',
  'Учёба',
  'Работа',
  'Погода',
  'Цвета',
  'Животные',
  'Тело',
  'Одежда',
  'Повседневные действия',
  'Наречия',
  'Вопросительные слова',
  'Прилагательные',
  'Глаголы',
  'Спорт и хобби',
  'Покупки и деньги',
  'Здоровье',
  'Природа и времена года',
  'Школьные предметы',
  'Направления',
  'Профессии',
  'Канцелярия и вещи',
  'Чувства',
  'Общение и техника',
  'Страны и места',
  'Количество и местоимения',
  'Личные данные',
  'Праздники и события',
  'Указательные слова',
  'Основные ответы',
  'Абстрактные понятия',
] as const

/** Более 140 базовых слов N5 по 19 темам — архитектура рассчитана на дальнейший рост. */
export const N5_VOCABULARY_WORDS: VocabWord[] = [
  // Приветствия
  word('voc-ohayou', 'Приветствия', 'おはようございます', 'おはようございます', 'ohayou gozaimasu', 'доброе утро', 'おはようございます、先生。', 'Ohayou gozaimasu, sensei.', 'Доброе утро, учитель.'),
  word('voc-konnichiwa', 'Приветствия', 'こんにちは', 'こんにちは', 'konnichiwa', 'добрый день, здравствуйте', 'こんにちは、田中さん。', 'Konnichiwa, Tanaka-san.', 'Здравствуйте, господин Танака.'),
  word('voc-konbanwa', 'Приветствия', 'こんばんは', 'こんばんは', 'konbanwa', 'добрый вечер', 'こんばんは、お元気ですか。', 'Konbanwa, ogenki desu ka.', 'Добрый вечер, как ваши дела?'),
  word('voc-sayounara', 'Приветствия', 'さようなら', 'さようなら', 'sayounara', 'до свидания', 'さようなら、また明日。', 'Sayounara, mata ashita.', 'До свидания, до завтра.'),
  word('voc-arigatou', 'Приветствия', 'ありがとうございます', 'ありがとうございます', 'arigatou gozaimasu', 'спасибо', '手伝ってくれて、ありがとうございます。', 'Tetsudatte kurete, arigatou gozaimasu.', 'Спасибо, что помогли.'),
  word('voc-sumimasen', 'Приветствия', 'すみません', 'すみません', 'sumimasen', 'извините / простите', 'すみません、駅はどこですか。', 'Sumimasen, eki wa doko desu ka.', 'Извините, где станция?'),
  word('voc-hajimemashite', 'Приветствия', 'はじめまして', 'はじめまして', 'hajimemashite', 'приятно познакомиться', 'はじめまして、田中です。', 'Hajimemashite, Tanaka desu.', 'Приятно познакомиться, я Танака.'),
  word('voc-oyasumi', 'Приветствия', 'おやすみなさい', 'おやすみなさい', 'oyasuminasai', 'спокойной ночи', 'もう寝ます。おやすみなさい。', 'Mou nemasu. Oyasuminasai.', 'Уже ложусь спать. Спокойной ночи.'),
  word('voc-itadakimasu', 'Приветствия', 'いただきます', 'いただきます', 'itadakimasu', 'приступаю к еде (перед едой)', 'いただきます。', 'Itadakimasu.', '(Говорят перед началом еды — «принимаю с благодарностью».)'),
  word('voc-gochisousama', 'Приветствия', 'ごちそうさまでした', 'ごちそうさまでした', 'gochisousama deshita', 'спасибо за еду (после еды)', 'ごちそうさまでした。おいしかったです。', 'Gochisousama deshita. Oishikatta desu.', 'Спасибо за еду. Было вкусно.'),

  // Люди
  word('voc-hito', 'Люди', '人', 'ひと', 'hito', 'человек', 'あの人はだれですか。', 'Ano hito wa dare desu ka.', 'Кто тот человек?'),
  word('voc-tomodachi', 'Люди', '友達', 'ともだち', 'tomodachi', 'друг', '友達と話します。', 'Tomodachi to hanashimasu.', 'Разговариваю с другом.'),
  word('voc-sensei', 'Люди', '先生', 'せんせい', 'sensei', 'учитель', '先生はやさしいです。', 'Sensei wa yasashii desu.', 'Учитель добрый.'),
  word('voc-gakusei', 'Люди', '学生', 'がくせい', 'gakusei', 'студент', 'わたしは学生です。', 'Watashi wa gakusei desu.', 'Я студент.'),
  word('voc-kazoku', 'Люди', '家族', 'かぞく', 'kazoku', 'семья', '家族は四人です。', 'Kazoku wa yonin desu.', 'В семье четыре человека.'),
  word('voc-kodomo', 'Люди', '子供', 'こども', 'kodomo', 'ребёнок', '子供が好きです。', 'Kodomo ga suki desu.', 'Мне нравятся дети.'),

  // Семья — обрати внимание: у японцев отдельные слова для СВОЕЙ семьи (скромно) и семьи СОБЕСЕДНИКА (уважительно).
  word('voc-chichi', 'Семья', '父', 'ちち', 'chichi', 'отец (о своём, скромно)', 'わたしの父は医者です。', 'Watashi no chichi wa isha desu.', 'Мой отец — врач.'),
  word('voc-otousan', 'Семья', 'お父さん', 'おとうさん', 'otousan', 'отец (уважительно, о чужом или обращение)', 'お父さんは元気ですか。', 'Otousan wa genki desu ka.', 'Как поживает ваш отец?'),
  word('voc-haha', 'Семья', '母', 'はは', 'haha', 'мать (о своей, скромно)', 'わたしの母は先生です。', 'Watashi no haha wa sensei desu.', 'Моя мать — учитель.'),
  word('voc-okaasan', 'Семья', 'お母さん', 'おかあさん', 'okaasan', 'мать (уважительно, о чужой или обращение)', 'お母さんはどこですか。', 'Okaasan wa doko desu ka.', 'Где ваша мама?'),
  word('voc-ani', 'Семья', '兄', 'あに', 'ani', 'старший брат (о своём)', '兄は会社員です。', 'Ani wa kaishain desu.', 'Мой старший брат — офисный работник.'),
  word('voc-ane', 'Семья', '姉', 'あね', 'ane', 'старшая сестра (о своей)', '姉は東京に住んでいます。', 'Ane wa Toukyou ni sundeimasu.', 'Моя старшая сестра живёт в Токио.'),
  word('voc-otouto', 'Семья', '弟', 'おとうと', 'otouto', 'младший брат', '弟は学生です。', 'Otouto wa gakusei desu.', 'Мой младший брат — студент.'),
  word('voc-imouto', 'Семья', '妹', 'いもうと', 'imouto', 'младшая сестра', '妹は十歳です。', 'Imouto wa jussai desu.', 'Моей младшей сестре десять лет.'),
  word('voc-ryoushin', 'Семья', '両親', 'りょうしん', 'ryoushin', 'родители', '両親と話します。', 'Ryoushin to hanashimasu.', 'Разговариваю с родителями.'),
  word('voc-kyoudai', 'Семья', '兄弟', 'きょうだい', 'kyoudai', 'братья и сёстры', '兄弟がいますか。', 'Kyoudai ga imasu ka.', 'У тебя есть братья/сёстры?'),

  // Еда
  word('voc-mizu', 'Еда', '水', 'みず', 'mizu', 'вода', '水を飲みます。', 'Mizu wo nomimasu.', 'Пью воду.'),
  word('voc-gohan', 'Еда', 'ご飯', 'ごはん', 'gohan', 'рис / еда', 'ご飯を食べます。', 'Gohan wo tabemasu.', 'Ем рис (еду).'),
  word('voc-niku', 'Еда', '肉', 'にく', 'niku', 'мясо', '肉は高いです。', 'Niku wa takai desu.', 'Мясо дорогое.'),
  word('voc-sakana', 'Еда', '魚', 'さかな', 'sakana', 'рыба', '魚が好きです。', 'Sakana ga suki desu.', 'Мне нравится рыба.'),
  word('voc-yasai', 'Еда', '野菜', 'やさい', 'yasai', 'овощи', '野菜を食べます。', 'Yasai wo tabemasu.', 'Ем овощи.'),
  word('voc-kudamono', 'Еда', '果物', 'くだもの', 'kudamono', 'фрукты', '果物は甘いです。', 'Kudamono wa amai desu.', 'Фрукты сладкие.'),
  word('voc-pan', 'Еда', 'パン', 'パン', 'pan', 'хлеб', '朝パンを食べます。', 'Asa pan wo tabemasu.', 'Утром ем хлеб.'),
  word('voc-tamago', 'Еда', '卵', 'たまご', 'tamago', 'яйцо', '卵を買いました。', 'Tamago wo kaimashita.', 'Купил(а) яйца.'),

  // Напитки
  word('voc-ocha', 'Напитки', 'お茶', 'おちゃ', 'ocha', 'чай (зелёный)', '朝お茶を飲みます。', 'Asa ocha wo nomimasu.', 'Утром пью чай.'),
  word('voc-koucha', 'Напитки', '紅茶', 'こうちゃ', 'koucha', 'чёрный чай', '紅茶が好きです。', 'Koucha ga suki desu.', 'Мне нравится чёрный чай.'),
  word('voc-kohi', 'Напитки', 'コーヒー', 'コーヒー', 'ko-hi-', 'кофе', '毎朝コーヒーを飲みます。', 'Maiasa ko-hi- wo nomimasu.', 'Каждое утро пью кофе.'),
  word('voc-gyuunyuu', 'Напитки', '牛乳', 'ぎゅうにゅう', 'gyuunyuu', 'молоко', '牛乳を飲みます。', 'Gyuunyuu wo nomimasu.', 'Пью молоко.'),
  word('voc-juusu', 'Напитки', 'ジュース', 'ジュース', 'ju-su', 'сок', 'オレンジジュースを飲みます。', 'Orenji ju-su wo nomimasu.', 'Пью апельсиновый сок.'),
  word('voc-biiru', 'Напитки', 'ビール', 'ビール', 'bi-ru', 'пиво', 'ビールを飲みますか。', 'Bi-ru wo nomimasu ka.', 'Будете пиво?'),
  word('voc-osake', 'Напитки', 'お酒', 'おさけ', 'osake', 'алкоголь, саке', 'お酒はあまり飲みません。', 'Osake wa amari nomimasen.', 'Алкоголь почти не пью.'),

  // Дом
  word('voc-ie', 'Дом', '家', 'いえ', 'ie', 'дом', '家に帰ります。', 'Ie ni kaerimasu.', 'Возвращаюсь домой.'),
  word('voc-heya', 'Дом', '部屋', 'へや', 'heya', 'комната', '部屋はきれいです。', 'Heya wa kirei desu.', 'Комната чистая.'),
  word('voc-mado', 'Дом', '窓', 'まど', 'mado', 'окно', '窓を開けます。', 'Mado wo akemasu.', 'Открываю окно.'),
  word('voc-isu', 'Дом', 'いす', 'いす', 'isu', 'стул', 'いすに座ります。', 'Isu ni suwarimasu.', 'Сажусь на стул.'),
  word('voc-teburu', 'Дом', 'テーブル', 'テーブル', 'te-buru', 'стол', 'テーブルの上に本があります。', 'Te-buru no ue ni hon ga arimasu.', 'На столе есть книга.'),
  word('voc-hon', 'Дом', '本', 'ほん', 'hon', 'книга', '本を読みます。', 'Hon wo yomimasu.', 'Читаю книгу.'),
  word('voc-doa', 'Дом', 'ドア', 'ドア', 'doa', 'дверь', 'ドアを閉めます。', 'Doa wo shimemasu.', 'Закрываю дверь.'),
  word('voc-denwa', 'Дом', '電話', 'でんわ', 'denwa', 'телефон', '電話をかけます。', 'Denwa wo kakemasu.', 'Звоню по телефону.'),

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
  word('voc-yuubinkyoku', 'Места', '郵便局', 'ゆうびんきょく', 'yuubinkyoku', 'почта', '郵便局で切手を買います。', 'Yuubinkyoku de kitte wo kaimasu.', 'Покупаю марки на почте.'),
  word('voc-depaato', 'Места', 'デパート', 'デパート', 'depa-to', 'универмаг', 'デパートで買い物します。', 'Depa-to de kaimono shimasu.', 'Хожу за покупками в универмаг.'),
  word('voc-resutoran', 'Места', 'レストラン', 'レストラン', 'resutoran', 'ресторан', 'レストランで食べます。', 'Resutoran de tabemasu.', 'Ем в ресторане.'),
  word('voc-hoteru', 'Места', 'ホテル', 'ホテル', 'hoteru', 'отель', 'ホテルに泊まります。', 'Hoteru ni tomarimasu.', 'Останавливаюсь в отеле.'),
  word('voc-daigaku', 'Места', '大学', 'だいがく', 'daigaku', 'университет', '大学で勉強します。', 'Daigaku de benkyoushimasu.', 'Учусь в университете.'),
  word('voc-kaisha', 'Места', '会社', 'かいしゃ', 'kaisha', 'компания, офис', '会社で働きます。', 'Kaisha de hatarakimasu.', 'Работаю в компании.'),

  // Учёба
  word('voc-benkyou', 'Учёба', '勉強', 'べんきょう', 'benkyou', 'учёба', '毎日勉強します。', 'Mainichi benkyoushimasu.', 'Каждый день учусь.'),
  word('voc-shukudai', 'Учёба', '宿題', 'しゅくだい', 'shukudai', 'домашнее задание', '宿題をします。', 'Shukudai wo shimasu.', 'Делаю домашнее задание.'),
  word('voc-tesuto', 'Учёба', 'テスト', 'テスト', 'tesuto', 'тест, экзамен', '明日テストがあります。', 'Ashita tesuto ga arimasu.', 'Завтра будет тест.'),
  word('voc-gakkou', 'Учёба', '学校', 'がっこう', 'gakkou', 'школа', '学校に行きます。', 'Gakkou ni ikimasu.', 'Иду в школу.'),
  word('voc-kurasu', 'Учёба', 'クラス', 'クラス', 'kurasu', 'класс, урок', 'クラスは九時からです。', 'Kurasu wa ku-ji kara desu.', 'Урок начинается с 9 часов.'),
  word('voc-kyoushitsu', 'Учёба', '教室', 'きょうしつ', 'kyoushitsu', 'класс (комната)', '教室で勉強します。', 'Kyoushitsu de benkyoushimasu.', 'Учусь в классе.'),
  word('voc-jisho', 'Учёба', '辞書', 'じしょ', 'jisho', 'словарь', '辞書で調べます。', 'Jisho de shirabemasu.', 'Смотрю в словаре.'),
  word('voc-noto', 'Учёба', 'ノート', 'ノート', 'no-to', 'тетрадь', 'ノートに書きます。', 'No-to ni kakimasu.', 'Пишу в тетради.'),

  // Работа
  word('voc-shigoto', 'Работа', '仕事', 'しごと', 'shigoto', 'работа', '仕事は忙しいです。', 'Shigoto wa isogashii desu.', 'Работа напряжённая.'),
  word('voc-kaishain', 'Работа', '会社員', 'かいしゃいん', 'kaishain', 'офисный работник', '兄は会社員です。', 'Ani wa kaishain desu.', 'Мой старший брат — офисный работник.'),
  word('voc-isha', 'Работа', '医者', 'いしゃ', 'isha', 'врач', '母は医者です。', 'Haha wa isha desu.', 'Моя мама — врач.'),
  word('voc-kaigi', 'Работа', '会議', 'かいぎ', 'kaigi', 'совещание', '午後会議があります。', 'Gogo kaigi ga arimasu.', 'После обеда будет совещание.'),
  word('voc-yasumi', 'Работа', '休み', 'やすみ', 'yasumi', 'выходной, отдых', '今日は休みです。', 'Kyou wa yasumi desu.', 'Сегодня выходной.'),

  // Погода
  word('voc-tenki', 'Погода', '天気', 'てんき', 'tenki', 'погода', '今日は天気がいいです。', 'Kyou wa tenki ga ii desu.', 'Сегодня хорошая погода.'),
  word('voc-ame', 'Погода', '雨', 'あめ', 'ame', 'дождь', '雨が降っています。', 'Ame ga futteimasu.', 'Идёт дождь.'),
  word('voc-yuki', 'Погода', '雪', 'ゆき', 'yuki', 'снег', '雪が降りました。', 'Yuki ga furimashita.', 'Выпал снег.'),
  word('voc-kaze', 'Погода', '風', 'かぜ', 'kaze', 'ветер', '風が強いです。', 'Kaze ga tsuyoi desu.', 'Ветер сильный.'),
  word('voc-hare', 'Погода', '晴れ', 'はれ', 'hare', 'ясная погода', '明日は晴れです。', 'Ashita wa hare desu.', 'Завтра будет ясно.'),
  word('voc-kumori', 'Погода', '曇り', 'くもり', 'kumori', 'облачно', '今日は曇りです。', 'Kyou wa kumori desu.', 'Сегодня облачно.'),
  word('voc-atsui', 'Погода', '暑い', 'あつい', 'atsui', 'жаркий (о погоде)', '夏は暑いです。', 'Natsu wa atsui desu.', 'Летом жарко.'),
  word('voc-samui', 'Погода', '寒い', 'さむい', 'samui', 'холодный (о погоде)', '冬は寒いです。', 'Fuyu wa samui desu.', 'Зимой холодно.'),

  // Цвета
  word('voc-aka', 'Цвета', '赤', 'あか', 'aka', 'красный', '赤いりんごを買いました。', 'Akai ringo wo kaimashita.', 'Купил(а) красное яблоко.'),
  word('voc-ao', 'Цвета', '青', 'あお', 'ao', 'синий, голубой', '空は青いです。', 'Sora wa aoi desu.', 'Небо синее.'),
  word('voc-kiiro', 'Цвета', '黄色', 'きいろ', 'kiiro', 'жёлтый', 'バナナは黄色です。', 'Banana wa kiiro desu.', 'Банан жёлтый.'),
  word('voc-shiro', 'Цвета', '白', 'しろ', 'shiro', 'белый', '白いシャツを着ます。', 'Shiroi shatsu wo kimasu.', 'Ношу белую рубашку.'),
  word('voc-kuro', 'Цвета', '黒', 'くろ', 'kuro', 'чёрный', '黒いかばんです。', 'Kuroi kaban desu.', 'Это чёрная сумка.'),
  word('voc-midori', 'Цвета', '緑', 'みどり', 'midori', 'зелёный', '緑が好きです。', 'Midori ga suki desu.', 'Мне нравится зелёный (цвет).'),
  word('voc-chairo', 'Цвета', '茶色', 'ちゃいろ', 'chairo', 'коричневый', '茶色のくつです。', 'Chairo no kutsu desu.', 'Это коричневая обувь.'),
  word('voc-iro', 'Цвета', '色', 'いろ', 'iro', 'цвет', 'どんな色が好きですか。', 'Donna iro ga suki desu ka.', 'Какой цвет тебе нравится?'),

  // Животные
  word('voc-inu', 'Животные', '犬', 'いぬ', 'inu', 'собака', '犬を飼っています。', 'Inu wo katteimasu.', 'Держу (у меня есть) собаку.'),
  word('voc-neko', 'Животные', '猫', 'ねこ', 'neko', 'кошка', '猫が好きです。', 'Neko ga suki desu.', 'Мне нравятся кошки.'),
  word('voc-tori', 'Животные', '鳥', 'とり', 'tori', 'птица', '鳥が飛んでいます。', 'Tori ga tondeimasu.', 'Птица летит.'),
  word('voc-uma', 'Животные', '馬', 'うま', 'uma', 'лошадь', '馬に乗ります。', 'Uma ni norimasu.', 'Сажусь на лошадь.'),
  word('voc-ushi', 'Животные', '牛', 'うし', 'ushi', 'корова', '牛がいます。', 'Ushi ga imasu.', 'Есть корова.'),
  word('voc-doubutsu', 'Животные', '動物', 'どうぶつ', 'doubutsu', 'животное', '動物が好きです。', 'Doubutsu ga suki desu.', 'Мне нравятся животные.'),

  // Тело
  word('voc-atama', 'Тело', '頭', 'あたま', 'atama', 'голова', '頭が痛いです。', 'Atama ga itai desu.', 'Голова болит.'),
  word('voc-kao', 'Тело', '顔', 'かお', 'kao', 'лицо', '顔を洗います。', 'Kao wo araimasu.', 'Умываю лицо.'),
  word('voc-me', 'Тело', '目', 'め', 'me', 'глаз', '目が大きいです。', 'Me ga ookii desu.', 'Глаза большие.'),
  word('voc-mimi', 'Тело', '耳', 'みみ', 'mimi', 'ухо', '耳がいたいです。', 'Mimi ga itai desu.', 'Ухо болит.'),
  word('voc-kuchi', 'Тело', '口', 'くち', 'kuchi', 'рот', '口を開けてください。', 'Kuchi wo akete kudasai.', 'Откройте рот, пожалуйста.'),
  word('voc-te', 'Тело', '手', 'て', 'te', 'рука (кисть)', '手を洗います。', 'Te wo araimasu.', 'Мою руки.'),
  word('voc-ashi', 'Тело', '足', 'あし', 'ashi', 'нога, ступня', '足が痛いです。', 'Ashi ga itai desu.', 'Нога болит.'),
  word('voc-onaka', 'Тело', 'お腹', 'おなか', 'onaka', 'живот', 'お腹がすきました。', 'Onaka ga sukimashita.', 'Я проголодался(-лась) (буквально «живот опустел»).'),

  // Одежда
  word('voc-fuku', 'Одежда', '服', 'ふく', 'fuku', 'одежда', '新しい服を買いました。', 'Atarashii fuku wo kaimashita.', 'Купил(а) новую одежду.'),
  word('voc-shatsu', 'Одежда', 'シャツ', 'シャツ', 'shatsu', 'рубашка', '白いシャツを着ます。', 'Shiroi shatsu wo kimasu.', 'Ношу белую рубашку.'),
  word('voc-zubon', 'Одежда', 'ズボン', 'ズボン', 'zubon', 'брюки', 'ズボンをはきます。', 'Zubon wo hakimasu.', 'Надеваю брюки.'),
  word('voc-kutsu', 'Одежда', '靴', 'くつ', 'kutsu', 'обувь', '靴をぬぎます。', 'Kutsu wo nugimasu.', 'Снимаю обувь.'),
  word('voc-boushi', 'Одежда', '帽子', 'ぼうし', 'boushi', 'шляпа', '帽子をかぶります。', 'Boushi wo kaburimasu.', 'Надеваю шляпу.'),
  word('voc-kutsushita', 'Одежда', '靴下', 'くつした', 'kutsushita', 'носки', '靴下をはきます。', 'Kutsushita wo hakimasu.', 'Надеваю носки.'),

  // Повседневные действия
  word('voc-okiru', 'Повседневные действия', '起きる', 'おきる', 'okiru', 'просыпаться, вставать', '七時に起きます。', 'Shichi-ji ni okimasu.', 'Встаю в 7 часов.'),
  word('voc-neru', 'Повседневные действия', '寝る', 'ねる', 'neru', 'ложиться спать', '十一時に寝ます。', 'Juuichi-ji ni nemasu.', 'Ложусь спать в 11.'),
  word('voc-kau', 'Повседневные действия', '買う', 'かう', 'kau', 'покупать', '果物を買います。', 'Kudamono wo kaimasu.', 'Покупаю фрукты.'),
  word('voc-hataraku', 'Повседневные действия', '働く', 'はたらく', 'hataraku', 'работать', '会社で働きます。', 'Kaisha de hatarakimasu.', 'Работаю в компании.'),
  word('voc-yasumu', 'Повседневные действия', '休む', 'やすむ', 'yasumu', 'отдыхать', '週末は休みます。', 'Shuumatsu wa yasumimasu.', 'На выходных отдыхаю.'),
  word('voc-tsukau', 'Повседневные действия', '使う', 'つかう', 'tsukau', 'использовать', 'コンピューターを使います。', 'Konpyu-ta- wo tsukaimasu.', 'Использую компьютер.'),
  word('voc-au', 'Повседневные действия', '会う', 'あう', 'au', 'встречаться (с кем-то)', '友達に会います。', 'Tomodachi ni aimasu.', 'Встречаюсь с другом.'),
  word('voc-matsu', 'Повседневные действия', '待つ', 'まつ', 'matsu', 'ждать', 'ここで待ちます。', 'Koko de machimasu.', 'Жду здесь.'),

  // Наречия
  word('voc-yoku', 'Наречия', 'よく', 'よく', 'yoku', 'часто / хорошо', 'よく映画を見ます。', 'Yoku eiga wo mimasu.', 'Часто смотрю фильмы.'),
  word('voc-tokidoki', 'Наречия', 'ときどき', 'ときどき', 'tokidoki', 'иногда', 'ときどき公園に行きます。', 'Tokidoki kouen ni ikimasu.', 'Иногда хожу в парк.'),
  word('voc-amari', 'Наречия', 'あまり', 'あまり', 'amari', 'не очень (обычно с отрицанием)', '肉はあまり食べません。', 'Niku wa amari tabemasen.', 'Мясо почти не ем.'),
  word('voc-zenzen', 'Наречия', 'ぜんぜん', 'ぜんぜん', 'zenzen', 'совсем не (с отрицанием)', 'お酒はぜんぜん飲みません。', 'Osake wa zenzen nomimasen.', 'Алкоголь вообще не пью.'),
  word('voc-itsumo', 'Наречия', 'いつも', 'いつも', 'itsumo', 'всегда', 'いつもコーヒーを飲みます。', 'Itsumo ko-hi- wo nomimasu.', 'Всегда пью кофе.'),
  word('voc-takusan', 'Наречия', 'たくさん', 'たくさん', 'takusan', 'много', 'たくさん水を飲みます。', 'Takusan mizu wo nomimasu.', 'Пью много воды.'),
  word('voc-sukoshi', 'Наречия', 'すこし', 'すこし', 'sukoshi', 'немного', '日本語がすこしわかります。', 'Nihongo ga sukoshi wakarimasu.', 'Немного понимаю японский.'),
  word('voc-mou', 'Наречия', 'もう', 'もう', 'mou', 'уже', 'もう食べました。', 'Mou tabemashita.', 'Уже поел(а).'),
  word('voc-mada', 'Наречия', 'まだ', 'まだ', 'mada', 'ещё (не)', 'まだ食べていません。', 'Mada tabeteimasen.', 'Ещё не ел(а).'),

  // Вопросительные слова
  word('voc-nani', 'Вопросительные слова', '何', 'なに', 'nani', 'что', '何が好きですか。', 'Nani ga suki desu ka.', 'Что тебе нравится?'),
  word('voc-dare', 'Вопросительные слова', 'だれ', 'だれ', 'dare', 'кто', 'あの人はだれですか。', 'Ano hito wa dare desu ka.', 'Кто тот человек?'),
  word('voc-doko', 'Вопросительные слова', 'どこ', 'どこ', 'doko', 'где', 'トイレはどこですか。', 'Toire wa doko desu ka.', 'Где туалет?'),
  word('voc-itsu', 'Вопросительные слова', 'いつ', 'いつ', 'itsu', 'когда', '誕生日はいつですか。', 'Tanjoubi wa itsu desu ka.', 'Когда у тебя день рождения?'),
  word('voc-dou', 'Вопросительные слова', 'どう', 'どう', 'dou', 'как', 'これはどうですか。', 'Kore wa dou desu ka.', 'Как насчёт этого? / Как это?'),
  word('voc-doushite', 'Вопросительные слова', 'どうして', 'どうして', 'doushite', 'почему', 'どうして遅いですか。', 'Doushite osoi desu ka.', 'Почему ты опоздал?'),
  word('voc-ikutsu', 'Вопросительные слова', 'いくつ', 'いくつ', 'ikutsu', 'сколько (штук) / сколько лет', 'りんごはいくつですか。', 'Ringo wa ikutsu desu ka.', 'Сколько яблок?'),
  word('voc-ikura', 'Вопросительные слова', 'いくら', 'いくら', 'ikura', 'сколько стоит', 'これはいくらですか。', 'Kore wa ikura desu ka.', 'Сколько это стоит?'),
  word('voc-dochira', 'Вопросительные слова', 'どちら', 'どちら', 'dochira', 'который (из двух), куда (вежливо)', 'コーヒーと紅茶とどちらが好きですか。', 'Ko-hi- to koucha to dochira ga suki desu ka.', 'Что тебе больше нравится — кофе или чай?'),
  word('voc-dono', 'Вопросительные слова', 'どの', 'どの', 'dono', 'какой (перед существительным)', 'どの本がいいですか。', 'Dono hon ga ii desu ka.', 'Какая книга хорошая?'),

  // Прилагательные
  word('voc-tanoshii', 'Прилагательные', '楽しい', 'たのしい', 'tanoshii', 'весёлый, приятный', 'パーティーは楽しかったです。', 'Pa-ti- wa tanoshikatta desu.', 'Вечеринка была весёлой.'),
  word('voc-muzukashii', 'Прилагательные', '難しい', 'むずかしい', 'muzukashii', 'сложный', 'この問題は難しいです。', 'Kono mondai wa muzukashii desu.', 'Эта задача сложная.'),
  word('voc-kantan', 'Прилагательные', '簡単', 'かんたん', 'kantan', 'простой, лёгкий (na-прилагательное)', 'このテストは簡単でした。', 'Kono tesuto wa kantan deshita.', 'Этот тест был простым.'),
  word('voc-omoshiroi', 'Прилагательные', '面白い', 'おもしろい', 'omoshiroi', 'интересный', 'この本は面白いです。', 'Kono hon wa omoshiroi desu.', 'Эта книга интересная.'),
  word('voc-hayai', 'Прилагательные', '速い', 'はやい', 'hayai', 'быстрый', '新幹線は速いです。', 'Shinkansen wa hayai desu.', 'Синкансэн быстрый.'),
  word('voc-osoi', 'Прилагательные', '遅い', 'おそい', 'osoi', 'медленный, поздний', '今日は遅く起きました。', 'Kyou wa osoku okimashita.', 'Сегодня встал(а) поздно.'),
  word('voc-tsuyoi', 'Прилагательные', '強い', 'つよい', 'tsuyoi', 'сильный', '彼はとても強いです。', 'Kare wa totemo tsuyoi desu.', 'Он очень сильный.'),
  word('voc-yowai', 'Прилагательные', '弱い', 'よわい', 'yowai', 'слабый', 'このお茶は弱いです。', 'Kono ocha wa yowai desu.', 'Этот чай слабый (некрепкий).'),
  word('voc-omoi', 'Прилагательные', '重い', 'おもい', 'omoi', 'тяжёлый', 'このかばんは重いです。', 'Kono kaban wa omoi desu.', 'Эта сумка тяжёлая.'),
  word('voc-karui', 'Прилагательные', '軽い', 'かるい', 'karui', 'лёгкий (по весу)', 'このかばんは軽いです。', 'Kono kaban wa karui desu.', 'Эта сумка лёгкая.'),
  word('voc-akarui', 'Прилагательные', '明るい', 'あかるい', 'akarui', 'светлый', 'この部屋は明るいです。', 'Kono heya wa akarui desu.', 'Эта комната светлая.'),
  word('voc-kurai', 'Прилагательные', '暗い', 'くらい', 'kurai', 'тёмный', '外は暗いです。', 'Soto wa kurai desu.', 'На улице темно.'),
  word('voc-chikai', 'Прилагательные', '近い', 'ちかい', 'chikai', 'близкий', '駅は近いです。', 'Eki wa chikai desu.', 'Станция близко.'),
  word('voc-tooi', 'Прилагательные', '遠い', 'とおい', 'tooi', 'далёкий', '学校は遠いです。', 'Gakkou wa tooi desu.', 'Школа далеко.'),
  word('voc-hiroi', 'Прилагательные', '広い', 'ひろい', 'hiroi', 'просторный', 'この部屋は広いです。', 'Kono heya wa hiroi desu.', 'Эта комната просторная.'),
  word('voc-semai', 'Прилагательные', '狭い', 'せまい', 'semai', 'тесный', 'この部屋は狭いです。', 'Kono heya wa semai desu.', 'Эта комната тесная.'),
  word('voc-amai', 'Прилагательные', '甘い', 'あまい', 'amai', 'сладкий', 'このケーキは甘いです。', 'Kono ke-ki wa amai desu.', 'Этот торт сладкий.'),
  word('voc-karai', 'Прилагательные', '辛い', 'からい', 'karai', 'острый (о вкусе)', 'このカレーは辛いです。', 'Kono kare- wa karai desu.', 'Это карри острое.'),
  word('voc-itai', 'Прилагательные', '痛い', 'いたい', 'itai', 'больной, болит', '頭が痛いです。', 'Atama ga itai desu.', 'Голова болит.'),
  word('voc-nemui', 'Прилагательные', '眠い', 'ねむい', 'nemui', 'сонный', 'とても眠いです。', 'Totemo nemui desu.', 'Очень хочется спать.'),
  word('voc-taisetsu', 'Прилагательные', '大切', 'たいせつ', 'taisetsu', 'важный (na-прилагательное)', '家族は大切です。', 'Kazoku wa taisetsu desu.', 'Семья важна.'),
  word('voc-daijoubu', 'Прилагательные', '大丈夫', 'だいじょうぶ', 'daijoubu', 'в порядке, нормально (na-прилагательное)', '大丈夫ですか。', 'Daijoubu desu ka.', 'Всё в порядке?'),
  word('voc-jouzu', 'Прилагательные', '上手', 'じょうず', 'jouzu', 'умелый (na-прилагательное)', '彼は料理が上手です。', 'Kare wa ryouri ga jouzu desu.', 'Он умело готовит.'),
  word('voc-heta', 'Прилагательные', '下手', 'へた', 'heta', 'неумелый (na-прилагательное)', '私は歌が下手です。', 'Watashi wa uta ga heta desu.', 'Я плохо пою.'),
  word('voc-shinsetsu', 'Прилагательные', '親切', 'しんせつ', 'shinsetsu', 'добрый, заботливый (na-прилагательное)', '田中さんは親切です。', 'Tanaka-san wa shinsetsu desu.', 'Господин Танака добрый.'),
  word('voc-taihen', 'Прилагательные', '大変', 'たいへん', 'taihen', 'тяжело, ужасно (na-прилагательное)', '今日は大変でした。', 'Kyou wa taihen deshita.', 'Сегодня было тяжело.'),

  // Глаголы
  word('voc-iu', 'Глаголы', '言う', 'いう', 'iu', 'говорить, сказать', '「はい」と言いました。', '"Hai" to iimashita.', 'Сказал(а) «да».'),
  word('voc-deru', 'Глаголы', '出る', 'でる', 'deru', 'выходить', '家を出ます。', 'Ie wo demasu.', 'Выхожу из дома.'),
  word('voc-hairu', 'Глаголы', '入る', 'はいる', 'hairu', 'входить', '部屋に入ります。', 'Heya ni hairimasu.', 'Вхожу в комнату.'),
  word('voc-tatsu', 'Глаголы', '立つ', 'たつ', 'tatsu', 'стоять', 'ここに立ってください。', 'Koko ni tatte kudasai.', 'Встаньте здесь, пожалуйста.'),
  word('voc-suwaru', 'Глаголы', '座る', 'すわる', 'suwaru', 'садиться', 'いすに座ります。', 'Isu ni suwarimasu.', 'Сажусь на стул.'),
  word('voc-aruku', 'Глаголы', '歩く', 'あるく', 'aruku', 'ходить пешком', '駅まで歩きます。', 'Eki made arukimasu.', 'Иду пешком до станции.'),
  word('voc-hashiru', 'Глаголы', '走る', 'はしる', 'hashiru', 'бежать', '公園で走ります。', 'Kouen de hashirimasu.', 'Бегаю в парке.'),
  word('voc-noru', 'Глаголы', '乗る', 'のる', 'noru', 'садиться (на транспорт)', 'バスに乗ります。', 'Basu ni norimasu.', 'Сажусь на автобус.'),
  word('voc-oriru', 'Глаголы', '降りる', 'おりる', 'oriru', 'выходить (из транспорта)', '駅で降ります。', 'Eki de orimasu.', 'Выхожу на станции.'),
  word('voc-motsu', 'Глаголы', '持つ', 'もつ', 'motsu', 'держать, иметь при себе', 'かばんを持っています。', 'Kaban wo motteimasu.', 'У меня с собой сумка.'),
  word('voc-shiru', 'Глаголы', '知る', 'しる', 'shiru', 'знать', 'その人を知っています。', 'Sono hito wo shitteimasu.', 'Я знаю этого человека.'),
  word('voc-omou', 'Глаголы', '思う', 'おもう', 'omou', 'думать', 'いいと思います。', 'Ii to omoimasu.', 'Думаю, что это хорошо.'),
  word('voc-oshieru', 'Глаголы', '教える', 'おしえる', 'oshieru', 'учить (кого-то), сообщать', '日本語を教えます。', 'Nihongo wo oshiemasu.', 'Преподаю японский.'),
  word('voc-narau', 'Глаголы', '習う', 'ならう', 'narau', 'учиться (чему-то), обучаться', 'ピアノを習っています。', 'Piano wo naratteimasu.', 'Учусь играть на пианино.'),
  word('voc-kaeru2', 'Глаголы', '帰る', 'かえる', 'kaeru', 'возвращаться (домой)', '七時に帰ります。', 'Shichi-ji ni kaerimasu.', 'Возвращаюсь домой в 7.'),
  word('voc-kiru2', 'Глаголы', '着る', 'きる', 'kiru', 'надевать (одежду)', 'コートを着ます。', 'Ko-to wo kimasu.', 'Надеваю пальто.'),
  word('voc-nugu', 'Глаголы', '脱ぐ', 'ぬぐ', 'nugu', 'снимать (одежду, обувь)', '靴を脱ぎます。', 'Kutsu wo nugimasu.', 'Снимаю обувь.'),
  word('voc-arau', 'Глаголы', '洗う', 'あらう', 'arau', 'мыть', '手を洗います。', 'Te wo araimasu.', 'Мою руки.'),
  word('voc-souji', 'Глаголы', '掃除する', 'そうじする', 'souji suru', 'убираться', '部屋を掃除します。', 'Heya wo souji shimasu.', 'Убираюсь в комнате.'),
  word('voc-sentaku', 'Глаголы', '洗濯する', 'せんたくする', 'sentaku suru', 'стирать', '毎日洗濯します。', 'Mainichi sentaku shimasu.', 'Каждый день стираю.'),
  word('voc-ryouri', 'Глаголы', '料理する', 'りょうりする', 'ryouri suru', 'готовить еду', '晩ご飯を料理します。', 'Bangohan wo ryouri shimasu.', 'Готовлю ужин.'),
  word('voc-oyogu', 'Глаголы', '泳ぐ', 'およぐ', 'oyogu', 'плавать', '海で泳ぎます。', 'Umi de oyogimasu.', 'Плаваю в море.'),
  word('voc-utau', 'Глаголы', '歌う', 'うたう', 'utau', 'петь', '歌を歌います。', 'Uta wo utaimasu.', 'Пою песню.'),
  word('voc-odoru', 'Глаголы', '踊る', 'おどる', 'odoru', 'танцевать', 'パーティーで踊ります。', 'Pa-ti- de odorimasu.', 'Танцую на вечеринке.'),
  word('voc-warau', 'Глаголы', '笑う', 'わらう', 'warau', 'смеяться', '大きい声で笑います。', 'Ookii koe de waraimasu.', 'Смеюсь громко.'),
  word('voc-naku', 'Глаголы', '泣く', 'なく', 'naku', 'плакать', '映画を見て泣きました。', 'Eiga wo mite nakimashita.', 'Посмотрел(а) фильм и заплакал(а).'),
  word('voc-akeru', 'Глаголы', '開ける', 'あける', 'akeru', 'открывать', '窓を開けます。', 'Mado wo akemasu.', 'Открываю окно.'),
  word('voc-shimeru', 'Глаголы', '閉める', 'しめる', 'shimeru', 'закрывать', 'ドアを閉めます。', 'Doa wo shimemasu.', 'Закрываю дверь.'),
  word('voc-wasureru', 'Глаголы', '忘れる', 'わすれる', 'wasureru', 'забывать', '名前を忘れました。', 'Namae wo wasuremashita.', 'Забыл(а) имя.'),
  word('voc-oboeru', 'Глаголы', '覚える', 'おぼえる', 'oboeru', 'запоминать', '漢字を覚えます。', 'Kanji wo oboemasu.', 'Запоминаю кандзи.'),

  // Спорт и хобби
  word('voc-supootsu', 'Спорт и хобби', 'スポーツ', 'スポーツ', 'supo-tsu', 'спорт', 'スポーツが好きです。', 'Supo-tsu ga suki desu.', 'Мне нравится спорт.'),
  word('voc-sakkaa', 'Спорт и хобби', 'サッカー', 'サッカー', 'sakka-', 'футбол', 'サッカーをします。', 'Sakka- wo shimasu.', 'Играю в футбол.'),
  word('voc-yakyuu', 'Спорт и хобби', '野球', 'やきゅう', 'yakyuu', 'бейсбол', '野球を見ます。', 'Yakyuu wo mimasu.', 'Смотрю бейсбол.'),
  word('voc-suiei', 'Спорт и хобби', '水泳', 'すいえい', 'suiei', 'плавание', '水泳が趣味です。', 'Suiei ga shumi desu.', 'Плавание — моё хобби.'),
  word('voc-geemu', 'Спорт и хобби', 'ゲーム', 'ゲーム', 'ge-mu', 'игра', 'ゲームをします。', 'Ge-mu wo shimasu.', 'Играю в игры.'),
  word('voc-shashin', 'Спорт и хобби', '写真', 'しゃしん', 'shashin', 'фотография', '写真を撮ります。', 'Shashin wo torimasu.', 'Делаю фотографию.'),
  word('voc-e', 'Спорт и хобби', '絵', 'え', 'e', 'картина, рисунок', '絵を描きます。', 'E wo kakimasu.', 'Рисую картину.'),
  word('voc-dansu', 'Спорт и хобби', 'ダンス', 'ダンス', 'dansu', 'танец', 'ダンスを習っています。', 'Dansu wo naratteimasu.', 'Учусь танцевать.'),
  word('voc-uta', 'Спорт и хобби', '歌', 'うた', 'uta', 'песня', '好きな歌があります。', 'Suki na uta ga arimasu.', 'Есть любимая песня.'),
  word('voc-ryokou', 'Спорт и хобби', '旅行', 'りょこう', 'ryokou', 'путешествие', '旅行が好きです。', 'Ryokou ga suki desu.', 'Мне нравится путешествовать.'),

  // Покупки и деньги
  word('voc-nedan', 'Покупки и деньги', '値段', 'ねだん', 'nedan', 'цена', '値段が高いです。', 'Nedan ga takai desu.', 'Цена высокая.'),
  word('voc-saifu', 'Покупки и деньги', '財布', 'さいふ', 'saifu', 'кошелёк', '財布を忘れました。', 'Saifu wo wasuremashita.', 'Забыл(а) кошелёк.'),
  word('voc-kaado', 'Покупки и деньги', 'カード', 'カード', 'ka-do', 'карта (банковская)', 'カードで払います。', 'Ka-do de haraimasu.', 'Плачу картой.'),
  word('voc-genkin', 'Покупки и деньги', '現金', 'げんきん', 'genkin', 'наличные', '現金がありません。', 'Genkin ga arimasen.', 'Нет наличных.'),
  word('voc-reshiito', 'Покупки и деньги', 'レシート', 'レシート', 'reshi-to', 'чек (об оплате)', 'レシートをください。', 'Reshi-to wo kudasai.', 'Дайте чек, пожалуйста.'),
  word('voc-otsuri', 'Покупки и деньги', 'お釣り', 'おつり', 'otsuri', 'сдача', 'お釣りをどうぞ。', 'Otsuri wo douzo.', 'Ваша сдача.'),
  word('voc-waribiki', 'Покупки и деньги', '割引', 'わりびき', 'waribiki', 'скидка', '割引がありますか。', 'Waribiki ga arimasu ka.', 'Есть скидка?'),
  word('voc-haraimasu', 'Покупки и деньги', '払う', 'はらう', 'harau', 'платить', 'お金を払います。', 'Okane wo haraimasu.', 'Плачу деньги.'),

  // Здоровье
  word('voc-byouki', 'Здоровье', '病気', 'びょうき', 'byouki', 'болезнь', '病気になりました。', 'Byouki ni narimashita.', 'Заболел(а).'),
  word('voc-kusuri', 'Здоровье', '薬', 'くすり', 'kusuri', 'лекарство', '薬を飲みます。', 'Kusuri wo nomimasu.', 'Пью лекарство.'),
  word('voc-netsu', 'Здоровье', '熱', 'ねつ', 'netsu', 'температура, жар', '熱があります。', 'Netsu ga arimasu.', 'У меня температура.'),
  word('voc-zutsuu', 'Здоровье', '頭痛', 'ずつう', 'zutsuu', 'головная боль', '頭痛がします。', 'Zutsuu ga shimasu.', 'Голова болит (ощущается головная боль).'),
  word('voc-kazehiki', 'Здоровье', '風邪', 'かぜ', 'kaze', 'простуда', '風邪をひきました。', 'Kaze wo hikimashita.', 'Простудился(-лась).', ),
  word('voc-kega', 'Здоровье', '怪我', 'けが', 'kega', 'травма, ранение', '怪我をしました。', 'Kega wo shimashita.', 'Получил(а) травму.'),

  // Природа и времена года
  word('voc-haru', 'Природа и времена года', '春', 'はる', 'haru', 'весна', '春が好きです。', 'Haru ga suki desu.', 'Мне нравится весна.'),
  word('voc-natsu', 'Природа и времена года', '夏', 'なつ', 'natsu', 'лето', '夏は暑いです。', 'Natsu wa atsui desu.', 'Летом жарко.'),
  word('voc-aki', 'Природа и времена года', '秋', 'あき', 'aki', 'осень', '秋はきれいです。', 'Aki wa kirei desu.', 'Осень красивая.'),
  word('voc-fuyu', 'Природа и времена года', '冬', 'ふゆ', 'fuyu', 'зима', '冬は寒いです。', 'Fuyu wa samui desu.', 'Зимой холодно.'),
  word('voc-kisetsu', 'Природа и времена года', '季節', 'きせつ', 'kisetsu', 'время года', 'どの季節が好きですか。', 'Dono kisetsu ga suki desu ka.', 'Какое время года тебе нравится?'),
  word('voc-hana', 'Природа и времена года', '花', 'はな', 'hana', 'цветок', '花がきれいです。', 'Hana ga kirei desu.', 'Цветы красивые.'),
  word('voc-sora', 'Природа и времена года', '空', 'そら', 'sora', 'небо', '空が青いです。', 'Sora ga aoi desu.', 'Небо синее.'),
  word('voc-umi', 'Природа и времена года', '海', 'うみ', 'umi', 'море', '海で泳ぎます。', 'Umi de oyogimasu.', 'Плаваю в море.'),
  word('voc-hoshi', 'Природа и времена года', '星', 'ほし', 'hoshi', 'звезда', '星がきれいです。', 'Hoshi ga kirei desu.', 'Звёзды красивые.'),
  word('voc-tsuki2', 'Природа и времена года', '月', 'つき', 'tsuki', 'луна', '月がきれいです。', 'Tsuki ga kirei desu.', 'Луна красивая.'),

  // Школьные предметы
  word('voc-suugaku', 'Школьные предметы', '数学', 'すうがく', 'suugaku', 'математика', '数学を勉強します。', 'Suugaku wo benkyoushimasu.', 'Изучаю математику.'),
  word('voc-rekishi', 'Школьные предметы', '歴史', 'れきし', 'rekishi', 'история', '歴史が好きです。', 'Rekishi ga suki desu.', 'Мне нравится история.'),
  word('voc-eigo', 'Школьные предметы', '英語', 'えいご', 'eigo', 'английский язык', '英語を習っています。', 'Eigo wo naratteimasu.', 'Учу английский.'),
  word('voc-taiiku', 'Школьные предметы', '体育', 'たいいく', 'taiiku', 'физкультура', '体育が好きです。', 'Taiiku ga suki desu.', 'Мне нравится физкультура.'),
  word('voc-rika', 'Школьные предметы', '理科', 'りか', 'rika', 'естествознание', '理科のテストがあります。', 'Rika no tesuto ga arimasu.', 'Будет тест по естествознанию.'),
  word('voc-bijutsu', 'Школьные предметы', '美術', 'びじゅつ', 'bijutsu', 'изобразительное искусство', '美術が得意です。', 'Bijutsu ga tokui desu.', 'У меня хорошо получается рисовать.'),

  // Направления
  word('voc-migi', 'Направления', '右', 'みぎ', 'migi', 'право, направо', '右に曲がってください。', 'Migi ni magatte kudasai.', 'Поверните направо, пожалуйста.'),
  word('voc-hidari', 'Направления', '左', 'ひだり', 'hidari', 'лево, налево', '左に曲がってください。', 'Hidari ni magatte kudasai.', 'Поверните налево, пожалуйста.'),
  word('voc-mae', 'Направления', '前', 'まえ', 'mae', 'перед, впереди', '駅の前にあります。', 'Eki no mae ni arimasu.', 'Это перед станцией.'),
  word('voc-ushiro', 'Направления', '後ろ', 'うしろ', 'ushiro', 'сзади', '後ろに立ってください。', 'Ushiro ni tatte kudasai.', 'Встаньте сзади, пожалуйста.'),
  word('voc-naka2', 'Направления', '中', 'なか', 'naka', 'внутри, в', '箱の中にあります。', 'Hako no naka ni arimasu.', 'Это внутри коробки.'),
  word('voc-soto', 'Направления', '外', 'そと', 'soto', 'снаружи', '外は寒いです。', 'Soto wa samui desu.', 'На улице холодно.'),
  word('voc-chikaku', 'Направления', '近く', 'ちかく', 'chikaku', 'поблизости', '近くに銀行があります。', 'Chikaku ni ginkou ga arimasu.', 'Поблизости есть банк.'),
  word('voc-tonari', 'Направления', '隣', 'となり', 'tonari', 'соседний, рядом', '隣に座ってください。', 'Tonari ni suwatte kudasai.', 'Сядьте рядом, пожалуйста.'),

  // Профессии
  word('voc-shufu', 'Профессии', '主婦', 'しゅふ', 'shufu', 'домохозяйка', '母は主婦です。', 'Haha wa shufu desu.', 'Моя мама — домохозяйка.'),
  word('voc-tenin', 'Профессии', '店員', 'てんいん', 'ten\'in', 'продавец', '店員に聞きます。', 'Ten\'in ni kikimasu.', 'Спрашиваю у продавца.'),
  word('voc-keisatsukan', 'Профессии', '警察官', 'けいさつかん', 'keisatsukan', 'полицейский', '警察官が立っています。', 'Keisatsukan ga tatteimasu.', 'Стоит полицейский.'),
  word('voc-kangoshi', 'Профессии', '看護師', 'かんごし', 'kangoshi', 'медсестра, медбрат', '姉は看護師です。', 'Ane wa kangoshi desu.', 'Моя старшая сестра — медсестра.'),
  word('voc-ryourinin', 'Профессии', '料理人', 'りょうりにん', 'ryourinin', 'повар', '兄は料理人です。', 'Ani wa ryourinin desu.', 'Мой старший брат — повар.'),
  word('voc-kashu', 'Профессии', '歌手', 'かしゅ', 'kashu', 'певец, певица', '彼女は歌手です。', 'Kanojo wa kashu desu.', 'Она певица.'),
  word('voc-gaka', 'Профессии', '画家', 'がか', 'gaka', 'художник', '有名な画家です。', 'Yuumei na gaka desu.', 'Это известный художник.'),

  // Дом (продолжение — мебель и части дома)
  word('voc-beddo', 'Дом', 'ベッド', 'ベッド', 'beddo', 'кровать', 'ベッドで寝ます。', 'Beddo de nemasu.', 'Сплю на кровати.'),
  word('voc-reizouko', 'Дом', '冷蔵庫', 'れいぞうこ', 'reizouko', 'холодильник', '冷蔵庫に牛乳があります。', 'Reizouko ni gyuunyuu ga arimasu.', 'В холодильнике есть молоко.'),
  word('voc-denki', 'Дом', '電気', 'でんき', 'denki', 'свет, электричество', '電気をつけます。', 'Denki wo tsukemasu.', 'Включаю свет.'),
  word('voc-kagi', 'Дом', '鍵', 'かぎ', 'kagi', 'ключ', '鍵をかけます。', 'Kagi wo kakemasu.', 'Запираю на ключ.'),
  word('voc-kagami', 'Дом', '鏡', 'かがみ', 'kagami', 'зеркало', '鏡を見ます。', 'Kagami wo mimasu.', 'Смотрюсь в зеркало.'),
  word('voc-toire', 'Дом', 'トイレ', 'トイレ', 'toire', 'туалет', 'トイレはどこですか。', 'Toire wa doko desu ka.', 'Где туалет?'),
  word('voc-ofuro', 'Дом', 'お風呂', 'おふろ', 'ofuro', 'ванна', 'お風呂に入ります。', 'Ofuro ni hairimasu.', 'Принимаю ванну.'),
  word('voc-daidokoro', 'Дом', '台所', 'だいどころ', 'daidokoro', 'кухня', '台所で料理します。', 'Daidokoro de ryouri shimasu.', 'Готовлю на кухне.'),
  word('voc-niwa', 'Дом', '庭', 'にわ', 'niwa', 'сад, двор', '庭に花があります。', 'Niwa ni hana ga arimasu.', 'В саду есть цветы.'),

  // Канцелярия и вещи
  word('voc-keshigomu', 'Канцелярия и вещи', '消しゴム', 'けしゴム', 'keshigomu', 'ластик', '消しゴムを貸してください。', 'Keshigomu wo kashite kudasai.', 'Одолжите ластик, пожалуйста.'),
  word('voc-jougi', 'Канцелярия и вещи', '定規', 'じょうぎ', 'jougi', 'линейка', '定規で線を引きます。', 'Jougi de sen wo hikimasu.', 'Провожу линию линейкой.'),
  word('voc-hasami', 'Канцелярия и вещи', 'はさみ', 'はさみ', 'hasami', 'ножницы', 'はさみで切ります。', 'Hasami de kirimasu.', 'Режу ножницами.'),
  word('voc-nori', 'Канцелярия и вещи', 'のり', 'のり', 'nori', 'клей', 'のりで貼ります。', 'Nori de harimasu.', 'Клею клеем.'),
  word('voc-kaban', 'Канцелярия и вещи', 'かばん', 'かばん', 'kaban', 'сумка, портфель', 'かばんに入れます。', 'Kaban ni iremasu.', 'Кладу в сумку.'),
  word('voc-megane', 'Канцелярия и вещи', 'めがね', 'めがね', 'megane', 'очки', 'めがねをかけます。', 'Megane wo kakemasu.', 'Надеваю очки.'),
  word('voc-enpitsu', 'Канцелярия и вещи', '鉛筆', 'えんぴつ', 'enpitsu', 'карандаш', '鉛筆で書きます。', 'Enpitsu de kakimasu.', 'Пишу карандашом.'),

  // Время (продолжение — части суток и периоды)
  word('voc-asa', 'Время', '朝', 'あさ', 'asa', 'утро', '朝、走ります。', 'Asa, hashirimasu.', 'Утром бегаю.'),
  word('voc-hiru', 'Время', '昼', 'ひる', 'hiru', 'день, полдень', '昼ご飯を食べます。', 'Hirugohan wo tabemasu.', 'Ем обед.'),
  word('voc-yoru', 'Время', '夜', 'よる', 'yoru', 'ночь, вечер', '夜、勉強します。', 'Yoru, benkyoushimasu.', 'Вечером учусь.'),
  word('voc-yuugata', 'Время', '夕方', 'ゆうがた', 'yuugata', 'вечер (перед закатом)', '夕方に帰ります。', 'Yuugata ni kaerimasu.', 'Возвращаюсь вечером.'),
  word('voc-maiban', 'Время', '毎晩', 'まいばん', 'maiban', 'каждый вечер', '毎晩本を読みます。', 'Maiban hon wo yomimasu.', 'Каждый вечер читаю книгу.'),
  word('voc-konshuu', 'Время', '今週', 'こんしゅう', 'konshuu', 'на этой неделе', '今週は忙しいです。', 'Konshuu wa isogashii desu.', 'На этой неделе я занят.'),
  word('voc-kongetsu', 'Время', '今月', 'こんげつ', 'kongetsu', 'в этом месяце', '今月旅行します。', 'Kongetsu ryokou shimasu.', 'В этом месяце путешествую.'),
  word('voc-raigetsu', 'Время', '来月', 'らいげつ', 'raigetsu', 'в следующем месяце', '来月日本に行きます。', 'Raigetsu nihon ni ikimasu.', 'В следующем месяце еду в Японию.'),
  word('voc-sengetsu', 'Время', '先月', 'せんげつ', 'sengetsu', 'в прошлом месяце', '先月忙しかったです。', 'Sengetsu isogashikatta desu.', 'В прошлом месяце был(а) занят(а).'),

  // Чувства
  word('voc-ureshii', 'Чувства', '嬉しい', 'うれしい', 'ureshii', 'радостный', '会えて嬉しいです。', 'Aete ureshii desu.', 'Рад(а) встрече.'),
  word('voc-kanashii', 'Чувства', '悲しい', 'かなしい', 'kanashii', 'грустный', 'その映画は悲しかったです。', 'Sono eiga wa kanashikatta desu.', 'Тот фильм был грустным.'),
  word('voc-kowai', 'Чувства', '怖い', 'こわい', 'kowai', 'страшный', 'この映画は怖いです。', 'Kono eiga wa kowai desu.', 'Этот фильм страшный.'),
  word('voc-sabishii', 'Чувства', '寂しい', 'さびしい', 'sabishii', 'одинокий, тоскливый', '一人で寂しいです。', 'Hitori de sabishii desu.', 'Одиноко одному(-ой).'),
  word('voc-hazukashii', 'Чувства', '恥ずかしい', 'はずかしい', 'hazukashii', 'стыдный, неловкий', 'とても恥ずかしいです。', 'Totemo hazukashii desu.', 'Очень неловко.'),
  word('voc-shinpai', 'Чувства', '心配', 'しんぱい', 'shinpai', 'беспокойство (na-прилагательное)', '心配しないでください。', 'Shinpai shinaide kudasai.', 'Не беспокойтесь, пожалуйста.'),
  word('voc-bikkuri', 'Чувства', 'びっくりする', 'びっくりする', 'bikkuri suru', 'удивляться', 'びっくりしました。', 'Bikkuri shimashita.', 'Удивился(-лась).'),

  // Общение и техника
  word('voc-meru-suru', 'Общение и техника', 'メールする', 'メールする', 'me-ru suru', 'писать имейл', '友達にメールします。', 'Tomodachi ni me-ru shimasu.', 'Пишу другу имейл.'),
  word('voc-okuru', 'Общение и техника', '送る', 'おくる', 'okuru', 'отправлять, провожать', '手紙を送ります。', 'Tegami wo okurimasu.', 'Отправляю письмо.'),
  word('voc-morau', 'Общение и техника', 'もらう', 'もらう', 'morau', 'получать (от кого-то)', 'プレゼントをもらいました。', 'Purezento wo moraimashita.', 'Получил(а) подарок.'),
  word('voc-ageru', 'Общение и техника', 'あげる', 'あげる', 'ageru', 'давать (кому-то)', '友達に花をあげます。', 'Tomodachi ni hana wo agemasu.', 'Дарю другу цветы.'),
  word('voc-kureru', 'Общение и техника', 'くれる', 'くれる', 'kureru', 'давать (мне)', '友達がプレゼントをくれました。', 'Tomodachi ga purezento wo kuremashita.', 'Друг подарил мне подарок.'),
  word('voc-denwasuru', 'Общение и техника', '電話する', 'でんわする', 'denwa suru', 'звонить по телефону', '母に電話します。', 'Haha ni denwa shimasu.', 'Звоню маме.'),
  word('voc-sumaho', 'Общение и техника', 'スマホ', 'スマホ', 'sumaho', 'смартфон', 'スマホを使います。', 'Sumaho wo tsukaimasu.', 'Пользуюсь смартфоном.'),
  word('voc-intaanetto', 'Общение и техника', 'インターネット', 'インターネット', 'inta-netto', 'интернет', 'インターネットで調べます。', 'Inta-netto de shirabemasu.', 'Ищу в интернете.'),
  word('voc-meeru', 'Общение и техника', 'メール', 'メール', 'me-ru', 'имейл', 'メールを送ります。', 'Me-ru wo okurimasu.', 'Отправляю имейл.'),
  word('voc-konpyuutaa', 'Общение и техника', 'コンピューター', 'コンピューター', 'konpyu-ta-', 'компьютер', 'コンピューターを使います。', 'Konpyu-ta- wo tsukaimasu.', 'Пользуюсь компьютером.'),

  // Дом (продолжение — повседневные предметы)
  word('voc-nimotsu', 'Дом', '荷物', 'にもつ', 'nimotsu', 'багаж, вещи', '荷物が重いです。', 'Nimotsu ga omoi desu.', 'Багаж тяжёлый.'),
  word('voc-kasa', 'Дом', '傘', 'かさ', 'kasa', 'зонт', '傘を持っていきます。', 'Kasa wo motte ikimasu.', 'Возьму с собой зонт.'),
  word('voc-tokei', 'Дом', '時計', 'とけい', 'tokei', 'часы', '時計を見ます。', 'Tokei wo mimasu.', 'Смотрю на часы.'),
  word('voc-terebi', 'Дом', 'テレビ', 'テレビ', 'terebi', 'телевизор', 'テレビを見ます。', 'Terebi wo mimasu.', 'Смотрю телевизор.'),
  word('voc-rajio', 'Дом', 'ラジオ', 'ラジオ', 'rajio', 'радио', 'ラジオを聞きます。', 'Rajio wo kikimasu.', 'Слушаю радио.'),
  word('voc-shinbun', 'Дом', '新聞', 'しんぶん', 'shinbun', 'газета', '新聞を読みます。', 'Shinbun wo yomimasu.', 'Читаю газету.'),
  word('voc-zasshi', 'Дом', '雑誌', 'ざっし', 'zasshi', 'журнал', '雑誌を買います。', 'Zasshi wo kaimasu.', 'Покупаю журнал.'),
  word('voc-kitte', 'Дом', '切手', 'きって', 'kitte', 'почтовая марка', '切手を貼ります。', 'Kitte wo harimasu.', 'Клею марку.'),
  word('voc-hagaki', 'Дом', '葉書', 'はがき', 'hagaki', 'открытка', '葉書を書きます。', 'Hagaki wo kakimasu.', 'Пишу открытку.'),
  word('voc-tegami', 'Дом', '手紙', 'てがみ', 'tegami', 'письмо', '手紙を書きます。', 'Tegami wo kakimasu.', 'Пишу письмо.'),

  // Страны и места
  word('voc-nihon', 'Страны и места', '日本', 'にほん', 'nihon', 'Япония', '日本に住んでいます。', 'Nihon ni sundeimasu.', 'Живу в Японии.'),
  word('voc-amerika', 'Страны и места', 'アメリカ', 'アメリカ', 'amerika', 'США, Америка', 'アメリカから来ました。', 'Amerika kara kimashita.', 'Приехал(а) из США.'),
  word('voc-chuugoku', 'Страны и места', '中国', 'ちゅうごく', 'chuugoku', 'Китай', '中国語を勉強します。', 'Chuugokugo wo benkyoushimasu.', 'Изучаю китайский язык.'),
  word('voc-kankoku', 'Страны и места', '韓国', 'かんこく', 'kankoku', 'Корея', '韓国に行きたいです。', 'Kankoku ni ikitai desu.', 'Хочу поехать в Корею.'),
  word('voc-gaikoku', 'Страны и места', '外国', 'がいこく', 'gaikoku', 'заграница, иностранное государство', '外国に住みたいです。', 'Gaikoku ni sumitai desu.', 'Хочу жить за границей.'),
  word('voc-sekai', 'Страны и места', '世界', 'せかい', 'sekai', 'мир (планета)', '世界を旅行したいです。', 'Sekai wo ryokou shitai desu.', 'Хочу попутешествовать по миру.'),
  word('voc-chikatetsu', 'Страны и места', '地下鉄', 'ちかてつ', 'chikatetsu', 'метро', '地下鉄で行きます。', 'Chikatetsu de ikimasu.', 'Еду на метро.'),
  word('voc-kuukou', 'Страны и места', '空港', 'くうこう', 'kuukou', 'аэропорт', '空港まで送ります。', 'Kuukou made okurimasu.', 'Провожу до аэропорта.'),
  word('voc-takushii', 'Страны и места', 'タクシー', 'タクシー', 'takushi-', 'такси', 'タクシーに乗ります。', 'Takushi- ni norimasu.', 'Сажусь в такси.'),

  // Количество и местоимения
  word('voc-zenbu', 'Количество и местоимения', '全部', 'ぜんぶ', 'zenbu', 'всё, полностью', '全部食べました。', 'Zenbu tabemashita.', 'Съел(а) всё.'),
  word('voc-jibun', 'Количество и местоимения', '自分', 'じぶん', 'jibun', 'сам, себя', '自分で作りました。', 'Jibun de tsukurimashita.', 'Сделал(а) сам(а).'),
  word('voc-minna', 'Количество и местоимения', 'みんな', 'みんな', 'minna', 'все (люди)', 'みんな元気です。', 'Minna genki desu.', 'Все бодры.'),
  word('voc-dareka', 'Количество и местоимения', '誰か', 'だれか', 'dareka', 'кто-то', '誰か来ました。', 'Dareka kimashita.', 'Кто-то пришёл.'),
  word('voc-nanimo', 'Количество и местоимения', '何も', 'なにも', 'nanimo', 'ничего (с отрицанием)', '何も食べませんでした。', 'Nanimo tabemasen deshita.', 'Ничего не ел(а).'),
  word('voc-kare', 'Количество и местоимения', '彼', 'かれ', 'kare', 'он / парень', '彼は学生です。', 'Kare wa gakusei desu.', 'Он студент.'),
  word('voc-kanojo', 'Количество и местоимения', '彼女', 'かのじょ', 'kanojo', 'она / девушка', '彼女は先生です。', 'Kanojo wa sensei desu.', 'Она учитель.'),
  word('voc-anata', 'Количество и местоимения', 'あなた', 'あなた', 'anata', 'ты, вы', 'あなたは学生ですか。', 'Anata wa gakusei desu ka.', 'Ты студент?'),

  // Приветствия (продолжение — устойчивые фразы)
  word('voc-douitashimashite', 'Приветствия', 'どういたしまして', 'どういたしまして', 'douitashimashite', 'пожалуйста, не за что', 'どういたしまして。', 'Douitashimashite.', 'Не за что.'),
  word('voc-ogenkidesuka', 'Приветствия', 'お元気ですか', 'おげんきですか', 'ogenki desu ka', 'как ваши дела?', 'お元気ですか。', 'Ogenki desu ka.', 'Как ваши дела?'),
  word('voc-hisashiburi', 'Приветствия', '久しぶり', 'ひさしぶり', 'hisashiburi', 'давно не виделись', '久しぶりですね。', 'Hisashiburi desu ne.', 'Давно не виделись, правда?'),
  word('voc-ganbatte', 'Приветствия', '頑張ってください', 'がんばってください', 'ganbatte kudasai', 'удачи, постарайся', '頑張ってください。', 'Ganbatte kudasai.', 'Постарайся, пожалуйста.'),
  word('voc-otsukaresama', 'Приветствия', 'お疲れ様でした', 'おつかれさまでした', 'otsukaresama deshita', 'спасибо за труд (после работы)', 'お疲れ様でした。', 'Otsukaresama deshita.', 'Спасибо за труд (говорят коллегам после работы).'),

  // Еда (продолжение — блюда и приправы)
  word('voc-shouyu', 'Еда', '醤油', 'しょうゆ', 'shouyu', 'соевый соус', '醤油をかけます。', 'Shouyu wo kakemasu.', 'Поливаю соевым соусом.'),
  word('voc-shio', 'Еда', '塩', 'しお', 'shio', 'соль', '塩を入れます。', 'Shio wo iremasu.', 'Добавляю соль.'),
  word('voc-satou', 'Еда', '砂糖', 'さとう', 'satou', 'сахар', '砂糖は甘いです。', 'Satou wa amai desu.', 'Сахар сладкий.'),
  word('voc-miso', 'Еда', '味噌', 'みそ', 'miso', 'мисо (соевая паста)', '味噌汁が好きです。', 'Misoshiru ga suki desu.', 'Мне нравится мисо-суп.'),
  word('voc-toufu', 'Еда', '豆腐', 'とうふ', 'toufu', 'тофу', '豆腐を食べます。', 'Toufu wo tabemasu.', 'Ем тофу.'),
  word('voc-nattou', 'Еда', '納豆', 'なっとう', 'nattou', 'натто (ферментированные соевые бобы)', '納豆が好きじゃないです。', 'Nattou ga suki janai desu.', 'Мне не нравится натто.'),
  word('voc-sushi', 'Еда', '寿司', 'すし', 'sushi', 'суши', '寿司を食べます。', 'Sushi wo tabemasu.', 'Ем суши.'),
  word('voc-tenpura', 'Еда', '天ぷら', 'てんぷら', 'tenpura', 'темпура', '天ぷらを作ります。', 'Tenpura wo tsukurimasu.', 'Готовлю темпуру.'),
  word('voc-raamen', 'Еда', 'ラーメン', 'ラーメン', 'ra-men', 'рамен', 'ラーメンを食べます。', 'Ra-men wo tabemasu.', 'Ем рамен.'),
  word('voc-karee', 'Еда', 'カレー', 'カレー', 'kare-', 'карри', 'カレーを作ります。', 'Kare- wo tsukurimasu.', 'Готовлю карри.'),
  word('voc-sandoicchi', 'Еда', 'サンドイッチ', 'サンドイッチ', 'sandoicchi', 'бутерброд', 'サンドイッチを食べます。', 'Sandoicchi wo tabemasu.', 'Ем бутерброд.'),
  word('voc-keeki', 'Еда', 'ケーキ', 'ケーキ', 'ke-ki', 'торт', 'ケーキを食べます。', 'Ke-ki wo tabemasu.', 'Ем торт.'),
  word('voc-chokoreeto', 'Еда', 'チョコレート', 'チョコレート', 'chokore-to', 'шоколад', 'チョコレートが好きです。', 'Chokore-to ga suki desu.', 'Мне нравится шоколад.'),
  word('voc-aisu', 'Еда', 'アイス', 'アイス', 'aisu', 'мороженое', 'アイスを食べます。', 'Aisu wo tabemasu.', 'Ем мороженое.'),
  word('voc-asagohan', 'Еда', '朝ご飯', 'あさごはん', 'asagohan', 'завтрак', '朝ご飯を食べます。', 'Asagohan wo tabemasu.', 'Ем завтрак.'),
  word('voc-hirugohan', 'Еда', '昼ご飯', 'ひるごはん', 'hirugohan', 'обед', '昼ご飯を食べます。', 'Hirugohan wo tabemasu.', 'Ем обед.'),
  word('voc-bangohan', 'Еда', '晩ご飯', 'ばんごはん', 'bangohan', 'ужин', '晩ご飯を食べます。', 'Bangohan wo tabemasu.', 'Ем ужин.'),

  // Животные (продолжение)
  word('voc-usagi', 'Животные', 'うさぎ', 'うさぎ', 'usagi', 'кролик', 'うさぎがいます。', 'Usagi ga imasu.', 'Есть кролик.'),
  word('voc-raion', 'Животные', 'ライオン', 'ライオン', 'raion', 'лев', '動物園でライオンを見ました。', 'Doubutsuen de raion wo mimashita.', 'Видел(а) льва в зоопарке.'),

  // Одежда (продолжение)
  word('voc-sukaato', 'Одежда', 'スカート', 'スカート', 'suka-to', 'юбка', 'スカートをはきます。', 'Suka-to wo hakimasu.', 'Надеваю юбку.'),
  word('voc-nekutai', 'Одежда', 'ネクタイ', 'ネクタイ', 'nekutai', 'галстук', 'ネクタイをします。', 'Nekutai wo shimasu.', 'Надеваю галстук.'),

  // Глаголы (продолжение)
  word('voc-kimeru', 'Глаголы', '決める', 'きめる', 'kimeru', 'решать', '場所を決めます。', 'Basho wo kimemasu.', 'Определяю место.'),
  word('voc-hajimeru', 'Глаголы', '始める', 'はじめる', 'hajimeru', 'начинать', '仕事を始めます。', 'Shigoto wo hajimemasu.', 'Начинаю работу.'),
  word('voc-owaru', 'Глаголы', '終わる', 'おわる', 'owaru', 'заканчиваться', '仕事が終わります。', 'Shigoto ga owarimasu.', 'Работа заканчивается.'),
  word('voc-tsuzukeru', 'Глаголы', '続ける', 'つづける', 'tsuzukeru', 'продолжать', '勉強を続けます。', 'Benkyou wo tsuzukemasu.', 'Продолжаю учиться.'),
  word('voc-sagasu', 'Глаголы', '探す', 'さがす', 'sagasu', 'искать', '本を探します。', 'Hon wo sagashimasu.', 'Ищу книгу.'),
  word('voc-mitsukeru', 'Глаголы', '見つける', 'みつける', 'mitsukeru', 'находить', '本を見つけました。', 'Hon wo mitsukemashita.', 'Нашёл(-шла) книгу.'),
  word('voc-ganbaru', 'Глаголы', '頑張る', 'がんばる', 'ganbaru', 'стараться', 'テストを頑張ります。', 'Tesuto wo ganbarimasu.', 'Стараюсь для теста.'),
  word('voc-tetsudau', 'Глаголы', '手伝う', 'てつだう', 'tetsudau', 'помогать', '母を手伝います。', 'Haha wo tetsudaimasu.', 'Помогаю маме.'),
  word('voc-yobu', 'Глаголы', '呼ぶ', 'よぶ', 'yobu', 'звать', 'タクシーを呼びます。', 'Takushi- wo yobimasu.', 'Вызываю такси.'),
  word('voc-erabu', 'Глаголы', '選ぶ', 'えらぶ', 'erabu', 'выбирать', 'プレゼントを選びます。', 'Purezento wo erabimasu.', 'Выбираю подарок.'),
  word('voc-ireru', 'Глаголы', '入れる', 'いれる', 'ireru', 'класть внутрь', 'かばんに本を入れます。', 'Kaban ni hon wo iremasu.', 'Кладу книгу в сумку.'),
  word('voc-dasu', 'Глаголы', '出す', 'だす', 'dasu', 'доставать, вынимать', 'かばんから本を出します。', 'Kaban kara hon wo dashimasu.', 'Достаю книгу из сумки.'),
  word('voc-kasu', 'Глаголы', '貸す', 'かす', 'kasu', 'давать взаймы, одалживать (кому-то)', '本を貸します。', 'Hon wo kashimasu.', 'Одалживаю книгу.'),
  word('voc-kariru', 'Глаголы', '借りる', 'かりる', 'kariru', 'занимать, брать взаймы', '本を借ります。', 'Hon wo karimasu.', 'Беру книгу взаймы.'),
  word('voc-tomaru', 'Глаголы', '泊まる', 'とまる', 'tomaru', 'останавливаться, ночевать', 'ホテルに泊まります。', 'Hoteru ni tomarimasu.', 'Останавливаюсь в отеле.'),
  word('voc-asobu', 'Глаголы', '遊ぶ', 'あそぶ', 'asobu', 'играть, веселиться', '公園で遊びます。', 'Kouen de asobimasu.', 'Играю в парке.'),
  word('voc-chigau', 'Глаголы', '違う', 'ちがう', 'chigau', 'отличаться, быть неверным', 'それは違います。', 'Sore wa chigaimasu.', 'Это неверно (не то).'),
  word('voc-hajimaru', 'Глаголы', '始まる', 'はじまる', 'hajimaru', 'начинаться (само)', '授業が始まります。', 'Jugyou ga hajimarimasu.', 'Урок начинается.'),

  // Транспорт (продолжение)
  word('voc-fune', 'Транспорт', '船', 'ふね', 'fune', 'корабль, лодка', '船で行きます。', 'Fune de ikimasu.', 'Плыву на корабле.'),
  word('voc-shingou', 'Транспорт', '信号', 'しんごう', 'shingou', 'светофор', '信号で止まります。', 'Shingou de tomarimasu.', 'Останавливаюсь на светофоре.'),
  word('voc-hashi', 'Транспорт', '橋', 'はし', 'hashi', 'мост', '橋を渡ります。', 'Hashi wo watarimasu.', 'Перехожу мост.'),

  // Погода (продолжение)
  word('voc-hareru', 'Погода', '晴れる', 'はれる', 'hareru', 'проясняться', '明日は晴れるでしょう。', 'Ashita wa hareru deshou.', 'Завтра, наверное, будет ясно.'),
  word('voc-kumoru', 'Погода', '曇る', 'くもる', 'kumoru', 'быть облачным', '今日は曇っています。', 'Kyou wa kumotteimasu.', 'Сегодня облачно.'),
  word('voc-suzushii', 'Погода', '涼しい', 'すずしい', 'suzushii', 'прохладный', '秋は涼しいです。', 'Aki wa suzushii desu.', 'Осенью прохладно.'),
  word('voc-atatakai', 'Погода', '暖かい', 'あたたかい', 'atatakai', 'тёплый (о погоде)', '春は暖かいです。', 'Haru wa atatakai desu.', 'Весной тепло.'),
  word('voc-taifuu', 'Погода', '台風', 'たいふう', 'taifuu', 'тайфун', '台風が来ます。', 'Taifuu ga kimasu.', 'Идёт тайфун.'),

  // Прилагательные (продолжение)
  word('voc-yuumei', 'Прилагательные', '有名', 'ゆうめい', 'yuumei', 'известный (na-прилагательное)', '有名なレストランです。', 'Yuumei na resutoran desu.', 'Это известный ресторан.'),
  word('voc-fuben', 'Прилагательные', '不便', 'ふべん', 'fuben', 'неудобный (na-прилагательное)', 'この駅は不便です。', 'Kono eki wa fuben desu.', 'Эта станция неудобная.'),
  word('voc-tokubetsu', 'Прилагательные', '特別', 'とくべつ', 'tokubetsu', 'особый (na-прилагательное)', '特別な日です。', 'Tokubetsu na hi desu.', 'Это особый день.'),
  word('voc-futsuu', 'Прилагательные', '普通', 'ふつう', 'futsuu', 'обычный (na-прилагательное)', '普通の日です。', 'Futsuu no hi desu.', 'Это обычный день.'),
  word('voc-onaji', 'Прилагательные', '同じ', 'おなじ', 'onaji', 'одинаковый, тот же самый', '同じ本を持っています。', 'Onaji hon wo motteimasu.', 'У меня такая же книга.'),
  word('voc-wakai', 'Прилагательные', '若い', 'わかい', 'wakai', 'молодой', '彼は若いです。', 'Kare wa wakai desu.', 'Он молодой.'),

  // Время (продолжение)
  word('voc-hanbun', 'Время', '半分', 'はんぶん', 'hanbun', 'половина', '半分食べました。', 'Hanbun tabemashita.', 'Съел(а) половину.'),
  word('voc-shuumatsu', 'Время', '週末', 'しゅうまつ', 'shuumatsu', 'выходные', '週末は休みです。', 'Shuumatsu wa yasumi desu.', 'На выходных отдыхаю.'),
  word('voc-heijitsu', 'Время', '平日', 'へいじつ', 'heijitsu', 'будний день', '平日は忙しいです。', 'Heijitsu wa isogashii desu.', 'В будние дни я занят.'),

  // Личные данные
  word('voc-namae', 'Личные данные', '名前', 'なまえ', 'namae', 'имя', '名前を書いてください。', 'Namae wo kaite kudasai.', 'Напишите имя, пожалуйста.'),
  word('voc-juusho', 'Личные данные', '住所', 'じゅうしょ', 'juusho', 'адрес', '住所を教えてください。', 'Juusho wo oshiete kudasai.', 'Сообщите ваш адрес, пожалуйста.'),
  word('voc-denwabangou', 'Личные данные', '電話番号', 'でんわばんごう', 'denwa bangou', 'номер телефона', '電話番号は何ですか。', 'Denwa bangou wa nan desu ka.', 'Какой у вас номер телефона?'),

  // Наречия (продолжение)
  word('voc-totemo', 'Наречия', 'とても', 'とても', 'totemo', 'очень', 'とても暑いです。', 'Totemo atsui desu.', 'Очень жарко.'),
  word('voc-chotto', 'Наречия', 'ちょっと', 'ちょっと', 'chotto', 'немного, чуть-чуть', 'ちょっと待ってください。', 'Chotto matte kudasai.', 'Подождите чуть-чуть.'),
  word('voc-sugu', 'Наречия', 'すぐ', 'すぐ', 'sugu', 'сразу', 'すぐ行きます。', 'Sugu ikimasu.', 'Сейчас же иду.'),
  word('voc-ichiban', 'Наречия', '一番', 'いちばん', 'ichiban', 'больше всего, номер один', 'これが一番好きです。', 'Kore ga ichiban suki desu.', 'Это нравится больше всего.'),
  word('voc-yappari', 'Наречия', 'やっぱり', 'やっぱり', 'yappari', 'всё-таки, как и ожидалось', 'やっぱり日本語は難しいです。', 'Yappari nihongo wa muzukashii desu.', 'Всё-таки японский сложный.'),
  word('voc-zehi', 'Наречия', 'ぜひ', 'ぜひ', 'zehi', 'обязательно, непременно', 'ぜひ来てください。', 'Zehi kite kudasai.', 'Обязательно приходите.'),

  // Прилагательные (продолжение)
  word('voc-kirai', 'Прилагательные', '嫌い', 'きらい', 'kirai', 'неприятный, не нравится (na-прилагательное)', '納豆が嫌いです。', 'Nattou ga kirai desu.', 'Мне не нравится натто.'),
  word('voc-tokui', 'Прилагательные', '得意', 'とくい', 'tokui', 'умелый в чём-то (na-прилагательное)', '料理が得意です。', 'Ryouri ga tokui desu.', 'Я хорошо готовлю.'),
  word('voc-nigate', 'Прилагательные', '苦手', 'にがて', 'nigate', 'слабый в чём-то, не даётся (na-прилагательное)', '数学が苦手です。', 'Suugaku ga nigate desu.', 'Математика мне не даётся.'),
  word('voc-hitsuyou', 'Прилагательные', '必要', 'ひつよう', 'hitsuyou', 'необходимый (na-прилагательное)', 'お金が必要です。', 'Okane ga hitsuyou desu.', 'Нужны деньги.'),
  word('voc-jiyuu', 'Прилагательные', '自由', 'じゆう', 'jiyuu', 'свободный (na-прилагательное)', '時間が自由です。', 'Jikan ga jiyuu desu.', 'Время свободное.'),

  // Глаголы (продолжение)
  word('voc-shinu', 'Глаголы', '死ぬ', 'しぬ', 'shinu', 'умирать', '魚が死にました。', 'Sakana ga shinimashita.', 'Рыба умерла.'),
  word('voc-tobu', 'Глаголы', '飛ぶ', 'とぶ', 'tobu', 'летать', '鳥が飛びます。', 'Tori ga tobimasu.', 'Птица летит.'),
  word('voc-noboru', 'Глаголы', '登る', 'のぼる', 'noboru', 'подниматься, взбираться', '山に登ります。', 'Yama ni noborimasu.', 'Поднимаюсь в горы.'),
  word('voc-sawaru', 'Глаголы', '触る', 'さわる', 'sawaru', 'трогать', '手で触ります。', 'Te de sawarimasu.', 'Трогаю рукой.'),
  word('voc-aku', 'Глаголы', '開く', 'あく', 'aku', 'открываться (само)', 'ドアが開きます。', 'Doa ga akimasu.', 'Дверь открывается.'),
  word('voc-shimaru', 'Глаголы', '閉まる', 'しまる', 'shimaru', 'закрываться (само)', 'ドアが閉まります。', 'Doa ga shimarimasu.', 'Дверь закрывается.'),
  word('voc-naoru', 'Глаголы', '治る', 'なおる', 'naoru', 'выздоравливать', '病気が治りました。', 'Byouki ga naorimashita.', 'Болезнь прошла (выздоровел(а)).'),

  // Места (продолжение — город)
  word('voc-kousaten', 'Места', '交差点', 'こうさてん', 'kousaten', 'перекрёсток', '交差点を渡ります。', 'Kousaten wo watarimasu.', 'Перехожу перекрёсток.'),
  word('voc-saka', 'Места', '坂', 'さか', 'saka', 'склон, горка', '坂を上ります。', 'Saka wo noborimasu.', 'Поднимаюсь по склону.'),
  word('voc-kado', 'Места', '角', 'かど', 'kado', 'угол', '角を曲がります。', 'Kado wo magarimasu.', 'Поворачиваю за угол.'),
  word('voc-chizu', 'Места', '地図', 'ちず', 'chizu', 'карта (местности)', '地図を見ます。', 'Chizu wo mimasu.', 'Смотрю на карту.'),
  word('voc-tatemono', 'Места', '建物', 'たてもの', 'tatemono', 'здание', 'あの建物は高いです。', 'Ano tatemono wa takai desu.', 'То здание высокое.'),
  word('voc-biru', 'Места', 'ビル', 'ビル', 'biru', 'здание (многоэтажное)', '新しいビルです。', 'Atarashii biru desu.', 'Это новое здание.'),

  // Праздники и события
  word('voc-tanjoubi', 'Праздники и события', '誕生日', 'たんじょうび', 'tanjoubi', 'день рождения', '誕生日はいつですか。', 'Tanjoubi wa itsu desu ka.', 'Когда у тебя день рождения?'),
  word('voc-kurisumasu', 'Праздники и события', 'クリスマス', 'クリスマス', 'kurisumasu', 'Рождество', 'クリスマスが好きです。', 'Kurisumasu ga suki desu.', 'Мне нравится Рождество.'),
  word('voc-oshougatsu', 'Праздники и события', 'お正月', 'おしょうがつ', 'oshougatsu', 'Новый год (японский праздник)', 'お正月に家族と会います。', 'Oshougatsu ni kazoku to aimasu.', 'На Новый год встречаюсь с семьёй.'),
  word('voc-matsuri', 'Праздники и события', '祭り', 'まつり', 'matsuri', 'фестиваль', '夏祭りに行きます。', 'Natsu matsuri ni ikimasu.', 'Иду на летний фестиваль.'),

  // Работа (продолжение)
  word('voc-kaigi2', 'Работа', '会議', 'かいぎ', 'kaigi', 'совещание', '会議は三時からです。', 'Kaigi wa san-ji kara desu.', 'Совещание начинается в 3.'),
  word('voc-yotei', 'Работа', '予定', 'よてい', 'yotei', 'план, расписание', '今日の予定は何ですか。', 'Kyou no yotei wa nan desu ka.', 'Какие планы на сегодня?'),
  word('voc-yakusoku', 'Работа', '約束', 'やくそく', 'yakusoku', 'обещание, договорённость', '友達と約束しました。', 'Tomodachi to yakusoku shimashita.', 'Договорился(-лась) с другом.'),

  // Учёба (продолжение)
  word('voc-shitsumon', 'Учёба', '質問', 'しつもん', 'shitsumon', 'вопрос', '質問がありますか。', 'Shitsumon ga arimasu ka.', 'Есть вопросы?'),
  word('voc-kotae', 'Учёба', '答え', 'こたえ', 'kotae', 'ответ', '答えを書きます。', 'Kotae wo kakimasu.', 'Пишу ответ.'),
  word('voc-mondai', 'Учёба', '問題', 'もんだい', 'mondai', 'задача, проблема', 'この問題は難しいです。', 'Kono mondai wa muzukashii desu.', 'Эта задача сложная.'),
  word('voc-shiken', 'Учёба', '試験', 'しけん', 'shiken', 'экзамен', '試験を受けます。', 'Shiken wo ukemasu.', 'Сдаю экзамен.'),

  // Дом (продолжение — гигиена)
  word('voc-sekken', 'Дом', '石鹸', 'せっけん', 'sekken', 'мыло', '石鹸で手を洗います。', 'Sekken de te wo araimasu.', 'Мою руки с мылом.'),
  word('voc-taoru', 'Дом', 'タオル', 'タオル', 'taoru', 'полотенце', 'タオルで拭きます。', 'Taoru de fukimasu.', 'Вытираю полотенцем.'),
  word('voc-ha', 'Тело', '歯', 'は', 'ha', 'зуб', '歯を磨きます。', 'Ha wo migakimasu.', 'Чищу зубы.'),

  // Указательные слова
  word('voc-kore', 'Указательные слова', 'これ', 'これ', 'kore', 'это (рядом с говорящим)', 'これは本です。', 'Kore wa hon desu.', 'Это книга.'),
  word('voc-sore', 'Указательные слова', 'それ', 'それ', 'sore', 'то (рядом со слушающим)', 'それは何ですか。', 'Sore wa nan desu ka.', 'Что это (у тебя)?'),
  word('voc-are', 'Указательные слова', 'あれ', 'あれ', 'are', 'вон то (далеко от обоих)', 'あれは山です。', 'Are wa yama desu.', 'Вон то — гора.'),
  word('voc-koko', 'Указательные слова', 'ここ', 'ここ', 'koko', 'здесь', 'ここに座ってください。', 'Koko ni suwatte kudasai.', 'Сядьте здесь, пожалуйста.'),
  word('voc-soko', 'Указательные слова', 'そこ', 'そこ', 'soko', 'там (рядом со слушающим)', 'そこに置いてください。', 'Soko ni oite kudasai.', 'Положите там, пожалуйста.'),
  word('voc-asoko', 'Указательные слова', 'あそこ', 'あそこ', 'asoko', 'вон там (далеко от обоих)', 'あそこにあります。', 'Asoko ni arimasu.', 'Это вон там.'),
  word('voc-dore', 'Указательные слова', 'どれ', 'どれ', 'dore', 'который (из трёх и более)', 'どれがいいですか。', 'Dore ga ii desu ka.', 'Который хорош?'),
  word('voc-kochira', 'Указательные слова', 'こちら', 'こちら', 'kochira', 'сюда, это (вежливо)', 'こちらへどうぞ。', 'Kochira e douzo.', 'Сюда, пожалуйста.'),
  word('voc-sochira', 'Указательные слова', 'そちら', 'そちら', 'sochira', 'туда, то (вежливо, к собеседнику)', 'そちらはいかがですか。', 'Sochira wa ikaga desu ka.', 'А как у вас?'),
  word('voc-achira', 'Указательные слова', 'あちら', 'あちら', 'achira', 'вон туда (вежливо)', 'あちらにあります。', 'Achira ni arimasu.', 'Это вон там.'),

  // Основные ответы
  word('voc-hai', 'Основные ответы', 'はい', 'はい', 'hai', 'да', 'はい、そうです。', 'Hai, sou desu.', 'Да, это так.'),
  word('voc-iie', 'Основные ответы', 'いいえ', 'いいえ', 'iie', 'нет', 'いいえ、違います。', 'Iie, chigaimasu.', 'Нет, не так.'),

  // Канцелярия и вещи (продолжение)
  word('voc-hako', 'Канцелярия и вещи', '箱', 'はこ', 'hako', 'коробка', '箱に入れます。', 'Hako ni iremasu.', 'Кладу в коробку.'),
  word('voc-fukuro', 'Канцелярия и вещи', '袋', 'ふくろ', 'fukuro', 'пакет, мешок', '袋に入れます。', 'Fukuro ni iremasu.', 'Кладу в пакет.'),
  word('voc-pen', 'Канцелярия и вещи', 'ペン', 'ペン', 'pen', 'ручка', 'ペンで書きます。', 'Pen de kakimasu.', 'Пишу ручкой.'),

  // Глаголы (продолжение)
  word('voc-osu', 'Глаголы', '押す', 'おす', 'osu', 'нажимать, толкать', 'ボタンを押します。', 'Botan wo oshimasu.', 'Нажимаю кнопку.'),
  word('voc-hiku', 'Глаголы', '引く', 'ひく', 'hiku', 'тянуть', 'ドアを引きます。', 'Doa wo hikimasu.', 'Тяну дверь.'),
  word('voc-nageru', 'Глаголы', '投げる', 'なげる', 'nageru', 'бросать', 'ボールを投げます。', 'Bo-ru wo nagemasu.', 'Бросаю мяч.'),
  word('voc-toru', 'Глаголы', '取る', 'とる', 'toru', 'брать, взять', 'それを取ってください。', 'Sore wo totte kudasai.', 'Возьмите это, пожалуйста.'),
  word('voc-oku', 'Глаголы', '置く', 'おく', 'oku', 'класть, ставить', '机の上に置きます。', 'Tsukue no ue ni okimasu.', 'Кладу на стол.'),
  word('voc-hakobu', 'Глаголы', '運ぶ', 'はこぶ', 'hakobu', 'нести, перевозить', '荷物を運びます。', 'Nimotsu wo hakobimasu.', 'Несу багаж.'),
  word('voc-naosu', 'Глаголы', '直す', 'なおす', 'naosu', 'чинить, исправлять', '車を直します。', 'Kuruma wo naoshimasu.', 'Чиню машину.'),
  word('voc-kowasu', 'Глаголы', '壊す', 'こわす', 'kowasu', 'ломать', 'おもちゃを壊しました。', 'Omocha wo kowashimashita.', 'Сломал(а) игрушку.'),
  word('voc-kowareru', 'Глаголы', '壊れる', 'こわれる', 'kowareru', 'ломаться (само)', 'テレビが壊れました。', 'Terebi ga kowaremashita.', 'Телевизор сломался.'),
  word('voc-tsukareru', 'Глаголы', '疲れる', 'つかれる', 'tsukareru', 'уставать', '今日は疲れました。', 'Kyou wa tsukaremashita.', 'Сегодня устал(а).'),

  // Здоровье (продолжение)
  word('voc-guai', 'Здоровье', '具合', 'ぐあい', 'guai', 'самочувствие, состояние', '具合が悪いです。', 'Guai ga warui desu.', 'Плохое самочувствие.'),

  // Абстрактные понятия
  word('voc-imi', 'Абстрактные понятия', '意味', 'いみ', 'imi', 'значение, смысл', 'この言葉の意味は何ですか。', 'Kono kotoba no imi wa nan desu ka.', 'Каково значение этого слова?'),
  word('voc-kimochi', 'Абстрактные понятия', '気持ち', 'きもち', 'kimochi', 'чувство, настроение', 'いい気持ちです。', 'Ii kimochi desu.', 'Хорошее самочувствие/настроение.'),
  word('voc-youji', 'Абстрактные понятия', '用事', 'ようじ', 'youji', 'дело, занятость', '用事があります。', 'Youji ga arimasu.', 'У меня есть дела.'),

  // Места (продолжение — учреждения культуры)
  word('voc-bijutsukan', 'Места', '美術館', 'びじゅつかん', 'bijutsukan', 'художественный музей', '美術館に行きます。', 'Bijutsukan ni ikimasu.', 'Иду в художественный музей.'),
  word('voc-hakubutsukan', 'Места', '博物館', 'はくぶつかん', 'hakubutsukan', 'музей', '博物館は面白いです。', 'Hakubutsukan wa omoshiroi desu.', 'Музей интересный.'),
  word('voc-eigakan', 'Места', '映画館', 'えいがかん', 'eigakan', 'кинотеатр', '映画館で映画を見ます。', 'Eigakan de eiga wo mimasu.', 'Смотрю фильм в кинотеатре.'),

  // Глаголы (продолжение — ключевые базовые глаголы)
  word('voc-wakaru', 'Глаголы', '分かる', 'わかる', 'wakaru', 'понимать', '日本語が分かります。', 'Nihongo ga wakarimasu.', 'Понимаю японский.'),
  word('voc-naru', 'Глаголы', 'なる', 'なる', 'naru', 'становиться', '先生になります。', 'Sensei ni narimasu.', 'Стану учителем.'),
  word('voc-aru', 'Глаголы', 'ある', 'ある', 'aru', 'быть, иметься (о неодушевлённом)', '時間があります。', 'Jikan ga arimasu.', 'Есть время.'),
  word('voc-iru2', 'Глаголы', 'いる', 'いる', 'iru', 'быть, находиться (об одушевлённом)', '猫がいます。', 'Neko ga imasu.', 'Есть кошка.'),
  word('voc-kekkonsuru', 'Глаголы', '結婚する', 'けっこんする', 'kekkon suru', 'жениться, выходить замуж', '来年結婚します。', 'Rainen kekkon shimasu.', 'В следующем году поженимся.'),
  word('voc-chuumon', 'Глаголы', '注文する', 'ちゅうもんする', 'chuumon suru', 'заказывать', 'コーヒーを注文します。', 'Ko-hi- wo chuumon shimasu.', 'Заказываю кофе.'),
  word('voc-yoyaku', 'Глаголы', '予約する', 'よやくする', 'yoyaku suru', 'бронировать', 'ホテルを予約します。', 'Hoteru wo yoyaku shimasu.', 'Бронирую отель.'),

  // Еда (продолжение — рестораны)
  word('voc-menyuu', 'Еда', 'メニュー', 'メニュー', 'menyu-', 'меню', 'メニューを見ます。', 'Menyu- wo mimasu.', 'Смотрю меню.'),
  word('voc-okaikei', 'Еда', 'お会計', 'おかいけい', 'okaikei', 'счёт (в ресторане)', 'お会計をお願いします。', 'Okaikei wo onegai shimasu.', 'Счёт, пожалуйста.'),

  // Страны и места (продолжение — путешествия)
  word('voc-pasupooto', 'Страны и места', 'パスポート', 'パスポート', 'pasupo-to', 'паспорт', 'パスポートを見せてください。', 'Pasupo-to wo misete kudasai.', 'Покажите паспорт, пожалуйста.'),
  word('voc-chiketto', 'Страны и места', 'チケット', 'チケット', 'chiketto', 'билет', 'チケットを買います。', 'Chiketto wo kaimasu.', 'Покупаю билет.'),

  // Работа (продолжение)
  word('voc-kaisha2', 'Работа', '会社', 'かいしゃ', 'kaisha', 'компания, фирма', '会社で働きます。', 'Kaisha de hatarakimasu.', 'Работаю в компании.'),
  word('voc-ofisu', 'Работа', 'オフィス', 'オフィス', 'ofisu', 'офис', 'オフィスに行きます。', 'Ofisu ni ikimasu.', 'Иду в офис.'),
  word('voc-douryou', 'Работа', '同僚', 'どうりょう', 'douryou', 'коллега', '同僚と話します。', 'Douryou to hanashimasu.', 'Разговариваю с коллегой.'),
  word('voc-arubaito', 'Работа', 'アルバイト', 'アルバイト', 'arubaito', 'подработка, работа с частичной занятостью', 'アルバイトをしています。', 'Arubaito wo shiteimasu.', 'Подрабатываю.'),

  // Наречия (продолжение)
  word('voc-motto', 'Наречия', 'もっと', 'もっと', 'motto', 'больше, ещё', 'もっと食べたいです。', 'Motto tabetai desu.', 'Хочу съесть ещё.'),
  word('voc-daitai', 'Наречия', 'だいたい', 'だいたい', 'daitai', 'примерно, в основном', 'だいたい分かりました。', 'Daitai wakarimashita.', 'В основном понял(а).'),

  // Семья (продолжение)
  word('voc-akachan', 'Семья', '赤ちゃん', 'あかちゃん', 'akachan', 'младенец', '赤ちゃんがかわいいです。', 'Akachan ga kawaii desu.', 'Младенец милый.'),

  // Прилагательные (продолжение)
  word('voc-isogashii', 'Прилагательные', '忙しい', 'いそがしい', 'isogashii', 'занятый', '今日は忙しいです。', 'Kyou wa isogashii desu.', 'Сегодня я занят.'),
  word('voc-sugoi', 'Прилагательные', 'すごい', 'すごい', 'sugoi', 'потрясающий, крутой', 'すごいですね。', 'Sugoi desu ne.', 'Это потрясающе, правда?'),
  word('voc-abunai', 'Прилагательные', '危ない', 'あぶない', 'abunai', 'опасный', '火は危ないです。', 'Hi wa abunai desu.', 'Огонь опасен.'),
  word('voc-sukunai', 'Прилагательные', '少ない', 'すくない', 'sukunai', 'малочисленный, немного', '学生が少ないです。', 'Gakusei ga sukunai desu.', 'Студентов мало.'),
  word('voc-ooi', 'Прилагательные', '多い', 'おおい', 'ooi', 'многочисленный, много', '人が多いです。', 'Hito ga ooi desu.', 'Людей много.'),

  // Наречия (продолжение)
  word('voc-iroiro', 'Наречия', 'いろいろ', 'いろいろ', 'iroiro', 'разный, разнообразный', 'いろいろな本があります。', 'Iroiro na hon ga arimasu.', 'Есть разные книги.'),
  word('voc-tokuni', 'Наречия', '特に', 'とくに', 'tokuni', 'особенно', '特に忙しいです。', 'Tokuni isogashii desu.', 'Особенно занят.'),

  // Еда (продолжение — конкретные продукты)
  word('voc-banana', 'Еда', 'バナナ', 'バナナ', 'banana', 'банан', 'バナナを食べます。', 'Banana wo tabemasu.', 'Ем банан.'),
  word('voc-ringo', 'Еда', 'りんご', 'りんご', 'ringo', 'яблоко', 'りんごを買います。', 'Ringo wo kaimasu.', 'Покупаю яблоко.'),
  word('voc-mikan', 'Еда', 'みかん', 'みかん', 'mikan', 'мандарин', 'みかんを食べます。', 'Mikan wo tabemasu.', 'Ем мандарин.'),
  word('voc-tomato', 'Еда', 'トマト', 'トマト', 'tomato', 'помидор', 'トマトが好きです。', 'Tomato ga suki desu.', 'Мне нравятся помидоры.'),
  word('voc-ninjin', 'Еда', 'にんじん', 'にんじん', 'ninjin', 'морковь', 'にんじんを切ります。', 'Ninjin wo kirimasu.', 'Режу морковь.'),
  word('voc-kyuuri', 'Еда', 'きゅうり', 'きゅうり', 'kyuuri', 'огурец', 'きゅうりを食べます。', 'Kyuuri wo tabemasu.', 'Ем огурец.'),

  // Абстрактные понятия (продолжение)
  word('voc-basho', 'Абстрактные понятия', '場所', 'ばしょ', 'basho', 'место', 'いい場所です。', 'Ii basho desu.', 'Хорошее место.'),
  word('voc-mono', 'Абстрактные понятия', '物', 'もの', 'mono', 'вещь, предмет', 'これは何の物ですか。', 'Kore wa nan no mono desu ka.', 'Что это за вещь?'),
  word('voc-koto', 'Абстрактные понятия', '事', 'こと', 'koto', 'дело, факт (абстрактное)', 'それはいいことです。', 'Sore wa ii koto desu.', 'Это хорошее дело.'),
  word('voc-kibun', 'Абстрактные понятия', '気分', 'きぶん', 'kibun', 'настроение, самочувствие', '今日は気分がいいです。', 'Kyou wa kibun ga ii desu.', 'Сегодня хорошее настроение.'),

  // Погода (продолжение)
  word('voc-tenki2', 'Погода', '天気', 'てんき', 'tenki', 'погода', '今日はいい天気です。', 'Kyou wa ii tenki desu.', 'Сегодня хорошая погода.'),

  // Время (продолжение)
  word('voc-mainichi', 'Время', '毎日', 'まいにち', 'mainichi', 'каждый день', '毎日勉強します。', 'Mainichi benkyoushimasu.', 'Каждый день учусь.'),

  // Учёба (продолжение)
  word('voc-kyoukasho', 'Учёба', '教科書', 'きょうかしょ', 'kyoukasho', 'учебник', '教科書を開いてください。', 'Kyoukasho wo hiraite kudasai.', 'Откройте учебник, пожалуйста.'),
  word('voc-kokuban', 'Учёба', '黒板', 'こくばん', 'kokuban', 'доска (классная)', '黒板を見てください。', 'Kokuban wo mite kudasai.', 'Посмотрите на доску, пожалуйста.'),

  // Погода (продолжение)
  word('voc-kion', 'Погода', '気温', 'きおん', 'kion', 'температура воздуха', '今日の気温は何度ですか。', 'Kyou no kion wa nando desu ka.', 'Какая сегодня температура воздуха?'),

  // Прилагательные (продолжение)
  word('voc-nigiyaka', 'Прилагательные', '賑やか', 'にぎやか', 'nigiyaka', 'оживлённый, шумный (na-прилагательное)', 'この町は賑やかです。', 'Kono machi wa nigiyaka desu.', 'Этот город оживлённый.'),

  // Тело (продолжение)
  word('voc-koe', 'Тело', '声', 'こえ', 'koe', 'голос', '大きい声で話します。', 'Ookii koe de hanashimasu.', 'Говорю громким голосом.'),

  // Абстрактные понятия (продолжение)
  word('voc-oto', 'Абстрактные понятия', '音', 'おと', 'oto', 'звук', '変な音がします。', 'Hen na oto ga shimasu.', 'Слышен странный звук.'),

  // Места (продолжение — типы населённых пунктов)
  word('voc-machi', 'Места', '町', 'まち', 'machi', 'город, район', 'にぎやかな町です。', 'Nigiyaka na machi desu.', 'Это оживлённый город.'),
  word('voc-mura', 'Места', '村', 'むら', 'mura', 'деревня', '小さい村です。', 'Chiisai mura desu.', 'Это маленькая деревня.'),
  word('voc-shi', 'Места', '市', 'し', 'shi', 'город (административная единица)', '大阪市に住んでいます。', 'Oosaka-shi ni sundeimasu.', 'Живу в городе Осака.'),

  // Направления (продолжение)
  word('voc-higashi', 'Направления', '東', 'ひがし', 'higashi', 'восток', '東に行きます。', 'Higashi ni ikimasu.', 'Иду на восток.'),
  word('voc-nishi', 'Направления', '西', 'にし', 'nishi', 'запад', '西に住んでいます。', 'Nishi ni sundeimasu.', 'Живу на западе.'),
  word('voc-minami', 'Направления', '南', 'みなみ', 'minami', 'юг', '南は暖かいです。', 'Minami wa atatakai desu.', 'Юг тёплый.'),
  word('voc-kita', 'Направления', '北', 'きた', 'kita', 'север', '北は寒いです。', 'Kita wa samui desu.', 'Север холодный.'),

  // Природа и времена года (продолжение)
  word('voc-ki2', 'Природа и времена года', '木', 'き', 'ki', 'дерево', '木の下で休みます。', 'Ki no shita de yasumimasu.', 'Отдыхаю под деревом.'),
  word('voc-kusa', 'Природа и времена года', '草', 'くさ', 'kusa', 'трава', '草の上に座ります。', 'Kusa no ue ni suwarimasu.', 'Сажусь на траву.'),
  word('voc-ishi', 'Природа и времена года', '石', 'いし', 'ishi', 'камень', '石を投げます。', 'Ishi wo nagemasu.', 'Бросаю камень.'),
  word('voc-kumo', 'Природа и времена года', '雲', 'くも', 'kumo', 'облако', '雲がきれいです。', 'Kumo ga kirei desu.', 'Облака красивые.'),

  // Места (продолжение)
  word('voc-jinja', 'Места', '神社', 'じんじゃ', 'jinja', 'синтоистское святилище', '神社に行きます。', 'Jinja ni ikimasu.', 'Иду в синтоистское святилище.'),
  word('voc-otera', 'Места', 'お寺', 'おてら', 'otera', 'буддийский храм', 'お寺を見学します。', 'Otera wo kengaku shimasu.', 'Осматриваю храм.'),

  // Тело (продолжение)
  word('voc-kami2', 'Тело', '髪', 'かみ', 'kami', 'волосы', '髪が長いです。', 'Kami ga nagai desu.', 'Волосы длинные.'),
  word('voc-se', 'Тело', '背', 'せ', 'se', 'спина, рост', '背が高いです。', 'Se ga takai desu.', 'Высокий рост.'),
  word('voc-yubi', 'Тело', '指', 'ゆび', 'yubi', 'палец', '指が痛いです。', 'Yubi ga itai desu.', 'Палец болит.'),

  // Люди (продолжение)
  word('voc-otona', 'Люди', '大人', 'おとな', 'otona', 'взрослый', '大人になりました。', 'Otona ni narimashita.', 'Стал(а) взрослым(-ой).'),
  word('voc-wakamono', 'Люди', '若者', 'わかもの', 'wakamono', 'молодёжь', '若者に人気です。', 'Wakamono ni ninki desu.', 'Популярно среди молодёжи.'),

  // Глаголы (продолжение — готовка)
  word('voc-atatameru', 'Глаголы', '温める', 'あたためる', 'atatameru', 'подогревать', 'ご飯を温めます。', 'Gohan wo atatamemasu.', 'Подогреваю еду.'),
  word('voc-hiyasu', 'Глаголы', '冷やす', 'ひやす', 'hiyasu', 'охлаждать', 'ジュースを冷やします。', 'Ju-su wo hiyashimasu.', 'Охлаждаю сок.'),

  // Прилагательные (продолжение)
  word('voc-warui', 'Прилагательные', '悪い', 'わるい', 'warui', 'плохой', '天気が悪いです。', 'Tenki ga warui desu.', 'Плохая погода.'),

  // Вопросительные слова (продолжение)
  word('voc-naze', 'Вопросительные слова', 'なぜ', 'なぜ', 'naze', 'почему', 'なぜ遅れましたか。', 'Naze okuremashita ka.', 'Почему опоздал(а)?'),
  word('voc-donna', 'Вопросительные слова', 'どんな', 'どんな', 'donna', 'какой, что за', 'どんな音楽が好きですか。', 'Donna ongaku ga suki desu ka.', 'Какая музыка тебе нравится?'),

  // Наречия (продолжение)
  word('voc-sakki', 'Наречия', 'さっき', 'さっき', 'sakki', 'только что, недавно', 'さっき電話しました。', 'Sakki denwa shimashita.', 'Только что позвонил(а).'),
  word('voc-korekara', 'Наречия', 'これから', 'これから', 'korekara', 'отныне, с этого момента', 'これから頑張ります。', 'Korekara ganbarimasu.', 'Отныне буду стараться.'),

  // Глаголы (продолжение)
  word('voc-tsuzuku', 'Глаголы', '続く', 'つづく', 'tsuzuku', 'продолжаться (само)', '雨が続いています。', 'Ame ga tsuzuiteimasu.', 'Дождь продолжается.'),
  word('voc-kimaru', 'Глаголы', '決まる', 'きまる', 'kimaru', 'решаться, определяться (само)', '日にちが決まりました。', 'Hinichi ga kimarimashita.', 'Дата определилась.'),
  word('voc-kawaru', 'Глаголы', '変わる', 'かわる', 'kawaru', 'меняться (само)', '天気が変わりました。', 'Tenki ga kawarimashita.', 'Погода изменилась.'),
  word('voc-kaeru3', 'Глаголы', '変える', 'かえる', 'kaeru', 'менять (что-то)', '予定を変えます。', 'Yotei wo kaemasu.', 'Меняю планы.'),
  word('voc-fueru', 'Глаголы', '増える', 'ふえる', 'fueru', 'увеличиваться', '学生が増えました。', 'Gakusei ga fuemashita.', 'Число студентов увеличилось.'),
  word('voc-heru', 'Глаголы', '減る', 'へる', 'heru', 'уменьшаться', 'お金が減りました。', 'Okane ga herimashita.', 'Денег стало меньше.'),

  // Одежда (продолжение)
  word('voc-tebukuro', 'Одежда', '手袋', 'てぶくろ', 'tebukuro', 'перчатки', '手袋をします。', 'Tebukuro wo shimasu.', 'Надеваю перчатки.'),

  // Праздники и события (продолжение)
  word('voc-hanabi', 'Праздники и события', '花火', 'はなび', 'hanabi', 'фейерверк', '花火を見ます。', 'Hanabi wo mimasu.', 'Смотрю фейерверк.'),

  // Страны и места (продолжение — билеты)
  word('voc-kippu', 'Страны и места', 'きっぷ', 'きっぷ', 'kippu', 'билет (на поезд/автобус)', 'きっぷを買います。', 'Kippu wo kaimasu.', 'Покупаю билет.'),

  // Прилагательные (продолжение)
  word('voc-tsumaranai', 'Прилагательные', 'つまらない', 'つまらない', 'tsumaranai', 'скучный, неинтересный', 'この映画はつまらないです。', 'Kono eiga wa tsumaranai desu.', 'Этот фильм скучный.'),
  word('voc-hima', 'Прилагательные', '暇', 'ひま', 'hima', 'свободный, скучающий (na-прилагательное)', '今日は暇です。', 'Kyou wa hima desu.', 'Сегодня я свободен(-на).'),

  // Вопросительные слова (продолжение)
  word('voc-donokurai', 'Вопросительные слова', 'どのくらい', 'どのくらい', 'dono kurai', 'насколько, сколько времени', 'どのくらいかかりますか。', 'Dono kurai kakarimasu ka.', 'Сколько времени это займёт?'),
  word('voc-moshi', 'Вопросительные слова', 'もし', 'もし', 'moshi', 'если', 'もし雨が降ったら。', 'Moshi ame ga futtara.', 'Если пойдёт дождь.'),

  // Спорт и хобби (продолжение)
  word('voc-shumi', 'Спорт и хобби', '趣味', 'しゅみ', 'shumi', 'хобби', '趣味は何ですか。', 'Shumi wa nan desu ka.', 'Какое у тебя хобби?'),

  // Покупки и деньги (продолжение)
  word('voc-osatsu', 'Покупки и деньги', 'お札', 'おさつ', 'osatsu', 'банкнота', 'お札を出します。', 'Osatsu wo dashimasu.', 'Достаю банкноту.'),
  word('voc-kozeni', 'Покупки и деньги', '小銭', 'こぜに', 'kozeni', 'мелочь (монеты)', '小銭がありません。', 'Kozeni ga arimasen.', 'Нет мелочи.'),

  // Наречия (продолжение)
  word('voc-tabun', 'Наречия', 'たぶん', 'たぶん', 'tabun', 'наверное, возможно', 'たぶん明日雨が降ります。', 'Tabun ashita ame ga furimasu.', 'Наверное, завтра пойдёт дождь.'),
  word('voc-kitto', 'Наречия', 'きっと', 'きっと', 'kitto', 'точно, наверняка', 'きっと大丈夫です。', 'Kitto daijoubu desu.', 'Точно всё будет в порядке.'),

  // Дом (продолжение — техника)
  word('voc-eakon', 'Дом', 'エアコン', 'エアコン', 'eakon', 'кондиционер', 'エアコンをつけます。', 'Eakon wo tsukemasu.', 'Включаю кондиционер.'),
  word('voc-hiitaa', 'Дом', 'ヒーター', 'ヒーター', 'hi-ta-', 'обогреватель', 'ヒーターをつけます。', 'Hi-ta- wo tsukemasu.', 'Включаю обогреватель.'),

  // Дом (продолжение — кухонная утварь)
  word('voc-furaipan', 'Дом', 'フライパン', 'フライパン', 'furaipan', 'сковородка', 'フライパンで焼きます。', 'Furaipan de yakimasu.', 'Жарю на сковородке.'),
  word('voc-nabe', 'Дом', 'なべ', 'なべ', 'nabe', 'кастрюля', 'なべで煮ます。', 'Nabe de nimasu.', 'Варю в кастрюле.'),
  word('voc-osara', 'Дом', 'お皿', 'おさら', 'osara', 'тарелка', 'お皿を洗います。', 'Osara wo araimasu.', 'Мою тарелку.'),
  word('voc-koppu', 'Дом', 'コップ', 'コップ', 'koppu', 'стакан', 'コップに水を入れます。', 'Koppu ni mizu wo iremasu.', 'Наливаю воду в стакан.'),
  word('voc-hashi2', 'Дом', 'はし', 'はし', 'hashi', 'палочки для еды', 'はしで食べます。', 'Hashi de tabemasu.', 'Ем палочками.'),
  word('voc-supuun', 'Дом', 'スプーン', 'スプーン', 'supu-n', 'ложка', 'スプーンを使います。', 'Supu-n wo tsukaimasu.', 'Пользуюсь ложкой.'),
  word('voc-fooku', 'Дом', 'フォーク', 'フォーク', 'fo-ku', 'вилка', 'フォークで食べます。', 'Fo-ku de tabemasu.', 'Ем вилкой.'),
  word('voc-seetaa', 'Одежда', 'セーター', 'セーター', 'se-ta-', 'свитер', 'セーターを着ます。', 'Se-ta- wo kimasu.', 'Надеваю свитер.'),
  word('voc-kooto', 'Одежда', 'コート', 'コート', 'ko-to', 'пальто', 'コートを着ます。', 'Ko-to wo kimasu.', 'Надеваю пальто.'),
  word('voc-pajama', 'Одежда', 'パジャマ', 'パジャマ', 'pajama', 'пижама', 'パジャマを着ます。', 'Pajama wo kimasu.', 'Надеваю пижаму.'),

  // Тело (продолжение)
  word('voc-karada', 'Тело', '体', 'からだ', 'karada', 'тело', '体が大きいです。', 'Karada ga ookii desu.', 'Тело крупное.'),

  // Семья (продолжение — расширенная семья)
  word('voc-sofu', 'Семья', '祖父', 'そふ', 'sofu', 'дедушка (о своём, скромно)', '祖父は元気です。', 'Sofu wa genki desu.', 'Мой дедушка бодрый.'),
  word('voc-sobo', 'Семья', '祖母', 'そぼ', 'sobo', 'бабушка (о своей, скромно)', '祖母は九十歳です。', 'Sobo wa kyuujussai desu.', 'Моей бабушке 90 лет.'),
  word('voc-ojiisan', 'Семья', 'おじいさん', 'おじいさん', 'ojiisan', 'дедушка (уважительно/обращение)', 'おじいさんに会います。', 'Ojiisan ni aimasu.', 'Встречаюсь с дедушкой.'),
  word('voc-obaasan', 'Семья', 'おばあさん', 'おばあさん', 'obaasan', 'бабушка (уважительно/обращение)', 'おばあさんは優しいです。', 'Obaasan wa yasashii desu.', 'Бабушка добрая.'),
  word('voc-ojisan', 'Семья', 'おじさん', 'おじさん', 'ojisan', 'дядя', 'おじさんの家に行きます。', 'Ojisan no ie ni ikimasu.', 'Иду к дяде.'),
  word('voc-obasan', 'Семья', 'おばさん', 'おばさん', 'obasan', 'тётя', 'おばさんに手紙を書きます。', 'Obasan ni tegami wo kakimasu.', 'Пишу письмо тёте.'),
  word('voc-itoko', 'Семья', 'いとこ', 'いとこ', 'itoko', 'двоюродный брат/сестра', 'いとこと遊びます。', 'Itoko to asobimasu.', 'Играю с двоюродным братом/сестрой.'),

  // Погода (продолжение)
  word('voc-tenkiyohou', 'Погода', '天気予報', 'てんきよほう', 'tenki yohou', 'прогноз погоды', '天気予報を見ます。', 'Tenki yohou wo mimasu.', 'Смотрю прогноз погоды.'),
  word('voc-niji', 'Погода', '虹', 'にじ', 'niji', 'радуга', '虹がきれいです。', 'Niji ga kirei desu.', 'Радуга красивая.'),

  // Общение и техника (продолжение)
  word('voc-nyuusu', 'Общение и техника', 'ニュース', 'ニュース', 'nyu-su', 'новости', 'ニュースを見ます。', 'Nyu-su wo mimasu.', 'Смотрю новости.'),

  // Приветствия (продолжение — бытовые фразы)
  word('voc-kiwotsukete', 'Приветствия', '気をつけて', 'きをつけて', 'ki wo tsukete', 'будь осторожен(на)', '気をつけてください。', 'Ki wo tsukete kudasai.', 'Будьте осторожны, пожалуйста.'),
  word('voc-odaijini', 'Приветствия', 'お大事に', 'おだいじに', 'odaiji ni', 'выздоравливай(те)', 'お大事にしてください。', 'Odaiji ni shite kudasai.', 'Выздоравливайте, пожалуйста.'),
  word('voc-ittekimasu', 'Приветствия', 'いってきます', 'いってきます', 'ittekimasu', 'ухожу (говорят, выходя из дома)', 'いってきます。', 'Ittekimasu.', 'Ухожу! (уходя из дома)'),
  word('voc-itterasshai', 'Приветствия', 'いってらっしゃい', 'いってらっしゃい', 'itterasshai', 'счастливого пути (провожая)', 'いってらっしゃい。', 'Itterasshai.', 'Счастливого пути! (провожая из дома)'),
  word('voc-tadaima', 'Приветствия', 'ただいま', 'ただいま', 'tadaima', 'я дома (возвращаясь)', 'ただいま。', 'Tadaima.', 'Я дома! (возвращаясь)'),
  word('voc-okaerinasai', 'Приветствия', 'おかえりなさい', 'おかえりなさい', 'okaerinasai', 'с возвращением', 'おかえりなさい。', 'Okaerinasai.', 'С возвращением!'),

  // Места (продолжение)
  word('voc-inaka', 'Места', '田舎', 'いなか', 'inaka', 'деревня, провинция', '田舎に住んでいます。', 'Inaka ni sundeimasu.', 'Живу в деревне.'),
  word('voc-tokai', 'Места', '都会', 'とかい', 'tokai', 'город, мегаполис', '都会に住みたいです。', 'Tokai ni sumitai desu.', 'Хочу жить в мегаполисе.'),

  // Глаголы (продолжение)
  word('voc-kakeru', 'Глаголы', '掛ける', 'かける', 'kakeru', 'вешать, звонить (по телефону)', '電話をかけます。', 'Denwa wo kakemasu.', 'Звоню по телефону.'),
  word('voc-mukaeru', 'Глаголы', '迎える', 'むかえる', 'mukaeru', 'встречать (кого-то), принимать', '駅で迎えます。', 'Eki de mukaemasu.', 'Встречаю на станции.'),
  word('voc-todoku', 'Глаголы', '届く', 'とどく', 'todoku', 'доставляться, приходить (о посылке)', '荷物が届きました。', 'Nimotsu ga todokimashita.', 'Посылка пришла.'),
  word('voc-todokeru', 'Глаголы', '届ける', 'とどける', 'todokeru', 'доставлять', '荷物を届けます。', 'Nimotsu wo todokemasu.', 'Доставляю посылку.'),
  word('voc-wataru', 'Глаголы', '渡る', 'わたる', 'wataru', 'переходить', '道を渡ります。', 'Michi wo watarimasu.', 'Перехожу дорогу.'),
  word('voc-watasu', 'Глаголы', '渡す', 'わたす', 'watasu', 'передавать', 'これを渡します。', 'Kore wo watashimasu.', 'Передаю это.'),
  word('voc-norikaeru', 'Глаголы', '乗り換える', 'のりかえる', 'norikaeru', 'пересаживаться (на транспорт)', '電車を乗り換えます。', 'Densha wo norikaemasu.', 'Пересаживаюсь на другой поезд.'),

  // Наречия (продолжение)
  word('voc-mochiron', 'Наречия', 'もちろん', 'もちろん', 'mochiron', 'конечно', 'もちろん行きます。', 'Mochiron ikimasu.', 'Конечно пойду.'),
  word('voc-tashikani', 'Наречия', 'たしかに', 'たしかに', 'tashikani', 'действительно, точно', 'たしかにそうですね。', 'Tashikani sou desu ne.', 'Действительно, так и есть.'),

  // Глаголы (продолжение — кулинария)
  word('voc-yaku', 'Глаголы', '焼く', 'やく', 'yaku', 'жарить, печь', '魚を焼きます。', 'Sakana wo yakimasu.', 'Жарю рыбу.'),
  word('voc-niru', 'Глаголы', '煮る', 'にる', 'niru', 'варить', '野菜を煮ます。', 'Yasai wo nimasu.', 'Варю овощи.'),
  word('voc-mazeru', 'Глаголы', '混ぜる', 'まぜる', 'mazeru', 'смешивать', '卵を混ぜます。', 'Tamago wo mazemasu.', 'Смешиваю яйца.'),

  // Еда (продолжение — японские блюда)
  word('voc-bentou', 'Еда', '弁当', 'べんとう', 'bentou', 'бэнто (обед в коробке)', '弁当を作ります。', 'Bentou wo tsukurimasu.', 'Готовлю бэнто.'),
  word('voc-onigiri', 'Еда', 'おにぎり', 'おにぎり', 'onigiri', 'онигири (рисовый колобок)', 'おにぎりを食べます。', 'Onigiri wo tabemasu.', 'Ем онигири.'),
  word('voc-udon', 'Еда', 'うどん', 'うどん', 'udon', 'удон (лапша)', 'うどんを食べます。', 'Udon wo tabemasu.', 'Ем удон.'),
  word('voc-soba', 'Еда', 'そば', 'そば', 'soba', 'соба (гречневая лапша)', 'そばが好きです。', 'Soba ga suki desu.', 'Мне нравится соба.'),

  // Транспорт (продолжение)
  word('voc-basutei', 'Транспорт', 'バス停', 'バスてい', 'basutei', 'автобусная остановка', 'バス停で待ちます。', 'Basutei de machimasu.', 'Жду на автобусной остановке.'),
  word('voc-hoomu', 'Транспорт', 'ホーム', 'ホーム', 'ho-mu', 'платформа (на станции)', 'ホームで待ちます。', 'Ho-mu de machimasu.', 'Жду на платформе.'),

  // Погода (продолжение)
  word('voc-tsuyu', 'Погода', '梅雨', 'つゆ', 'tsuyu', 'сезон дождей', '梅雨は雨が多いです。', 'Tsuyu wa ame ga ooi desu.', 'В сезон дождей часто идут дожди.'),
  word('voc-koori', 'Погода', '氷', 'こおり', 'koori', 'лёд', '氷が溶けます。', 'Koori ga tokemasu.', 'Лёд тает.'),

  // Природа и времена года (продолжение)
  word('voc-taiyou', 'Природа и времена года', '太陽', 'たいよう', 'taiyou', 'солнце', '太陽が明るいです。', 'Taiyou ga akarui desu.', 'Солнце яркое.'),
  word('voc-nami', 'Природа и времена года', '波', 'なみ', 'nami', 'волна', '波が高いです。', 'Nami ga takai desu.', 'Волны высокие.'),

  // Тело (продолжение)
  word('voc-kokoro', 'Тело', '心', 'こころ', 'kokoro', 'сердце, душа', '心が温かいです。', 'Kokoro ga atatakai desu.', 'Душа тёплая (добрый человек).'),

  // Числа и счётчики
  word('voc-ikkai', 'Количество и местоимения', '一回', 'いっかい', 'ikkai', 'один раз', '一回だけ食べました。', 'Ikkai dake tabemashita.', 'Съел(а) только один раз.'),
  word('voc-nankai', 'Количество и местоимения', '何回', 'なんかい', 'nankai', 'сколько раз', '何回行きましたか。', 'Nankai ikimashita ka.', 'Сколько раз ходил(а)?'),

  // Прилагательные (продолжение)
  word('voc-heiki', 'Прилагательные', '平気', 'へいき', 'heiki', 'в порядке, не парюсь (na-прилагательное)', '平気です。', 'Heiki desu.', 'Всё в порядке (я не переживаю).'),
  word('voc-betsuni', 'Прилагательные', '別に', 'べつに', 'betsuni', 'не особо, ничего особенного (обычно с отрицанием)', '別に忙しくないです。', 'Betsuni isogashikunai desu.', 'Не особо занят(а).'),

  // Учёба (продолжение)
  word('voc-chikoku', 'Учёба', '遅刻する', 'ちこくする', 'chikoku suru', 'опаздывать', '学校に遅刻しました。', 'Gakkou ni chikoku shimashita.', 'Опоздал(а) в школу.'),
  word('voc-kesseki', 'Учёба', '欠席する', 'けっせきする', 'kesseki suru', 'отсутствовать (на занятии)', '今日は欠席します。', 'Kyou wa kesseki shimasu.', 'Сегодня буду отсутствовать.'),
  word('voc-shusseki', 'Учёба', '出席する', 'しゅっせきする', 'shusseki suru', 'присутствовать (на занятии)', '会議に出席します。', 'Kaigi ni shusseki shimasu.', 'Присутствую на совещании.'),

  // Работа (продолжение)
  word('voc-kyuuryou', 'Работа', '給料', 'きゅうりょう', 'kyuuryou', 'зарплата', '給料をもらいました。', 'Kyuuryou wo moraimashita.', 'Получил(а) зарплату.'),
  word('voc-kyuukei', 'Работа', '休憩', 'きゅうけい', 'kyuukei', 'перерыв', '休憩しましょう。', 'Kyuukei shimashou.', 'Давайте сделаем перерыв.'),

  // Спорт и хобби (продолжение — досуг)
  word('voc-yuuenchi', 'Спорт и хобби', '遊園地', 'ゆうえんち', 'yuuenchi', 'парк развлечений', '遊園地に行きます。', 'Yuuenchi ni ikimasu.', 'Иду в парк развлечений.'),
  word('voc-doubutsuen', 'Спорт и хобби', '動物園', 'どうぶつえん', 'doubutsuen', 'зоопарк', '動物園でパンダを見ました。', 'Doubutsuen de panda wo mimashita.', 'Видел(а) панду в зоопарке.'),
  word('voc-suizokukan', 'Спорт и хобби', '水族館', 'すいぞくかん', 'suizokukan', 'аквариум', '水族館は楽しいです。', 'Suizokukan wa tanoshii desu.', 'В аквариуме весело.'),

  // Покупки и деньги (продолжение)
  word('voc-chokin', 'Покупки и деньги', '貯金する', 'ちょきんする', 'chokin suru', 'копить деньги', 'お金を貯金します。', 'Okane wo chokin shimasu.', 'Коплю деньги.'),
  word('voc-kasegu', 'Покупки и деньги', '稼ぐ', 'かせぐ', 'kasegu', 'зарабатывать', 'お金を稼ぎます。', 'Okane wo kasegimasu.', 'Зарабатываю деньги.'),

  // Общение и техника (продолжение)
  word('voc-juuden', 'Общение и техника', '充電する', 'じゅうでんする', 'juuden suru', 'заряжать (телефон, батарею)', 'スマホを充電します。', 'Sumaho wo juuden shimasu.', 'Заряжаю смартфон.'),

  // Страны и места (продолжение)
  word('voc-kankou', 'Страны и места', '観光する', 'かんこうする', 'kankou suru', 'осматривать достопримечательности', '京都を観光します。', 'Kyouto wo kankou shimasu.', 'Осматриваю достопримечательности Киото.'),
  word('voc-onsen', 'Страны и места', '温泉', 'おんせん', 'onsen', 'горячий источник', '温泉に入ります。', 'Onsen ni hairimasu.', 'Принимаю ванну в горячем источнике.'),

  // Приветствия (продолжение — вежливые фразы)
  word('voc-yoroshiku', 'Приветствия', 'よろしくお願いします', 'よろしくおねがいします', 'yoroshiku onegaishimasu', 'прошу любить и жаловать, рассчитываю на вас', 'よろしくお願いします。', 'Yoroshiku onegaishimasu.', 'Прошу любить и жаловать.'),
  word('voc-onegaishimasu', 'Приветствия', 'お願いします', 'おねがいします', 'onegaishimasu', 'пожалуйста, прошу', 'これをお願いします。', 'Kore wo onegaishimasu.', 'Это, пожалуйста.'),
  word('voc-shitsureishimasu', 'Приветствия', '失礼します', 'しつれいします', 'shitsurei shimasu', 'извините (входя/уходя/перебивая)', '失礼します。', 'Shitsurei shimasu.', 'Извините (разрешите войти/уйти).'),

  // Глаголы (продолжение — реакции)
  word('voc-odoroku', 'Глаголы', '驚く', 'おどろく', 'odoroku', 'удивляться', 'その話に驚きました。', 'Sono hanashi ni odorokimashita.', 'Удивился(-лась) этой истории.'),
  word('voc-komaru', 'Глаголы', '困る', 'こまる', 'komaru', 'быть в затруднении', 'お金がなくて困っています。', 'Okane ga nakute komatteimasu.', 'В затруднении из-за нехватки денег.'),
  word('voc-anshinsuru', 'Глаголы', '安心する', 'あんしんする', 'anshin suru', 'успокаиваться', 'それを聞いて安心しました。', 'Sore wo kiite anshin shimashita.', 'Услышав это, успокоился(-лась).'),

  // Прилагательные (продолжение)
  word('voc-yasashii', 'Прилагательные', '優しい', 'やさしい', 'yasashii', 'добрый', '先生は優しいです。', 'Sensei wa yasashii desu.', 'Учитель добрый.'),
  word('voc-kibishii', 'Прилагательные', '厳しい', 'きびしい', 'kibishii', 'строгий', '先生は厳しいです。', 'Sensei wa kibishii desu.', 'Учитель строгий.'),
  word('voc-oishii', 'Прилагательные', '美味しい', 'おいしい', 'oishii', 'вкусный', 'この料理は美味しいです。', 'Kono ryouri wa oishii desu.', 'Это блюдо вкусное.'),
  word('voc-mazui', 'Прилагательные', 'まずい', 'まずい', 'mazui', 'невкусный', 'この料理はまずいです。', 'Kono ryouri wa mazui desu.', 'Это блюдо невкусное.'),

  // Еда (продолжение)
  word('voc-aji', 'Еда', '味', 'あじ', 'aji', 'вкус', 'いい味です。', 'Ii aji desu.', 'Хороший вкус.'),

  // Время (продолжение)
  word('voc-shourai', 'Время', '将来', 'しょうらい', 'shourai', 'будущее', '将来の夢は何ですか。', 'Shourai no yume wa nan desu ka.', 'Какая у тебя мечта на будущее?'),

  // Глаголы (продолжение)
  word('voc-sakebu', 'Глаголы', '叫ぶ', 'さけぶ', 'sakebu', 'кричать', '大きい声で叫びました。', 'Ookii koe de sakebimashita.', 'Крикнул(а) громким голосом.'),
  word('voc-okoru', 'Глаголы', '怒る', 'おこる', 'okoru', 'злиться', '先生が怒りました。', 'Sensei ga okorimashita.', 'Учитель разозлился.'),
  word('voc-ayamaru', 'Глаголы', '謝る', 'あやまる', 'ayamaru', 'извиняться', '友達に謝りました。', 'Tomodachi ni ayamarimashita.', 'Извинился(-лась) перед другом.'),
  word('voc-yurusu', 'Глаголы', '許す', 'ゆるす', 'yurusu', 'прощать, разрешать', '彼を許しました。', 'Kare wo yurushimashita.', 'Простил(а) его.'),
  word('voc-shinjiru', 'Глаголы', '信じる', 'しんじる', 'shinjiru', 'верить', 'あなたを信じています。', 'Anata wo shinjiteimasu.', 'Я тебе верю.'),
  word('voc-mamoru', 'Глаголы', '守る', 'まもる', 'mamoru', 'защищать, соблюдать', '約束を守ります。', 'Yakusoku wo mamorimasu.', 'Держу обещание.'),
  word('voc-sodateru', 'Глаголы', '育てる', 'そだてる', 'sodateru', 'воспитывать, выращивать', '子供を育てます。', 'Kodomo wo sodatemasu.', 'Воспитываю ребёнка.'),
  word('voc-sodatsu', 'Глаголы', '育つ', 'そだつ', 'sodatsu', 'расти (само)', '子供が育ちます。', 'Kodomo ga sodachimasu.', 'Ребёнок растёт.'),

  // Абстрактные понятия (продолжение)
  word('voc-seikatsu', 'Абстрактные понятия', '生活', 'せいかつ', 'seikatsu', 'жизнь, быт', '日本での生活は楽しいです。', 'Nihon de no seikatsu wa tanoshii desu.', 'Жизнь в Японии интересная.'),
  word('voc-shuukan', 'Абстрактные понятия', '習慣', 'しゅうかん', 'shuukan', 'привычка', 'いい習慣です。', 'Ii shuukan desu.', 'Хорошая привычка.'),
  word('voc-aisatsu', 'Абстрактные понятия', '挨拶', 'あいさつ', 'aisatsu', 'приветствие', '挨拶をします。', 'Aisatsu wo shimasu.', 'Здороваюсь.'),

  // Места (продолжение — учреждения)
  word('voc-yuubin', 'Места', '郵便', 'ゆうびん', 'yuubin', 'почта (система)', '郵便で送ります。', 'Yuubin de okurimasu.', 'Отправляю по почте.'),
  word('voc-keisatsu', 'Места', '警察', 'けいさつ', 'keisatsu', 'полиция', '警察に電話します。', 'Keisatsu ni denwa shimasu.', 'Звоню в полицию.'),
  word('voc-shiyakusho', 'Места', '市役所', 'しやくしょ', 'shiyakusho', 'мэрия, горсовет', '市役所に行きます。', 'Shiyakusho ni ikimasu.', 'Иду в мэрию.'),

  // Покупки и деньги (продолжение)
  word('voc-shiharau', 'Покупки и деньги', '支払う', 'しはらう', 'shiharau', 'оплачивать', 'カードで支払います。', 'Ka-do de shiharaimasu.', 'Оплачиваю картой.'),
  word('voc-muryou', 'Покупки и деньги', '無料', 'むりょう', 'muryou', 'бесплатно', 'これは無料です。', 'Kore wa muryou desu.', 'Это бесплатно.'),
  word('voc-yuuryou', 'Покупки и деньги', '有料', 'ゆうりょう', 'yuuryou', 'платный', 'ここは有料です。', 'Koko wa yuuryou desu.', 'Здесь платно.'),

  // Прилагательные (продолжение)
  word('voc-mezurashii', 'Прилагательные', '珍しい', 'めずらしい', 'mezurashii', 'редкий, необычный', '珍しい花です。', 'Mezurashii hana desu.', 'Это редкий цветок.'),
  word('voc-subarashii', 'Прилагательные', '素晴らしい', 'すばらしい', 'subarashii', 'прекрасный, замечательный', '素晴らしい景色です。', 'Subarashii keshiki desu.', 'Прекрасный пейзаж.'),
  word('voc-rippa', 'Прилагательные', '立派', 'りっぱ', 'rippa', 'прекрасный, великолепный (na-прилагательное)', '立派な家です。', 'Rippa na ie desu.', 'Это великолепный дом.'),

  // Наречия (продолжение)
  word('voc-dekirudake', 'Наречия', 'できるだけ', 'できるだけ', 'dekirudake', 'насколько возможно', 'できるだけ早く来てください。', 'Dekirudake hayaku kite kudasai.', 'Приходите как можно раньше, пожалуйста.'),

  // Транспорт (продолжение)
  word('voc-tsuukin', 'Транспорт', '通勤する', 'つうきんする', 'tsuukin suru', 'ездить на работу', '電車で通勤します。', 'Densha de tsuukin shimasu.', 'Езжу на работу на поезде.'),
  word('voc-juutai', 'Транспорт', '渋滞', 'じゅうたい', 'juutai', 'пробка (дорожная)', '道が渋滞しています。', 'Michi ga juutai shiteimasu.', 'На дороге пробка.'),

  // Учёба (продолжение)
  word('voc-sotsugyou', 'Учёба', '卒業する', 'そつぎょうする', 'sotsugyou suru', 'заканчивать учёбу', '大学を卒業しました。', 'Daigaku wo sotsugyou shimashita.', 'Закончил(а) университет.'),
  word('voc-nyuugaku', 'Учёба', '入学する', 'にゅうがくする', 'nyuugaku suru', 'поступать в учебное заведение', '大学に入学します。', 'Daigaku ni nyuugaku shimasu.', 'Поступаю в университет.'),

  // Общение и техника (продолжение)
  word('voc-shoukai', 'Общение и техника', '紹介する', 'しょうかいする', 'shoukai suru', 'представлять, знакомить', '友達を紹介します。', 'Tomodachi wo shoukai shimasu.', 'Представляю друга.'),
  word('voc-setsumei', 'Общение и техника', '説明する', 'せつめいする', 'setsumei suru', 'объяснять', '問題を説明します。', 'Mondai wo setsumei shimasu.', 'Объясняю задачу.'),
  word('voc-soudan', 'Общение и техника', '相談する', 'そうだんする', 'soudan suru', 'советоваться', '先生に相談します。', 'Sensei ni soudan shimasu.', 'Советуюсь с учителем.'),
  word('voc-renraku', 'Общение и техника', '連絡する', 'れんらくする', 'renraku suru', 'связываться, сообщать', '友達に連絡します。', 'Tomodachi ni renraku shimasu.', 'Связываюсь с другом.'),

  // Глаголы (продолжение — восприятие)
  word('voc-mieru', 'Глаголы', '見える', 'みえる', 'mieru', 'быть видимым', '山が見えます。', 'Yama ga miemasu.', 'Видна гора.'),
  word('voc-kikoeru', 'Глаголы', '聞こえる', 'きこえる', 'kikoeru', 'быть слышимым', '音楽が聞こえます。', 'Ongaku ga kikoemasu.', 'Слышна музыка.'),
  word('voc-yorokobu', 'Глаголы', '喜ぶ', 'よろこぶ', 'yorokobu', 'радоваться', 'プレゼントを見て喜びました。', 'Purezento wo mite yorokobimashita.', 'Обрадовался(-лась), увидев подарок.'),
  word('voc-tanoshimu', 'Глаголы', '楽しむ', 'たのしむ', 'tanoshimu', 'наслаждаться', '旅行を楽しみます。', 'Ryokou wo tanoshimimasu.', 'Наслаждаюсь путешествием.'),
  word('voc-hikkosu', 'Глаголы', '引っ越す', 'ひっこす', 'hikkosu', 'переезжать', '来月引っ越します。', 'Raigetsu hikkoshimasu.', 'В следующем месяце переезжаю.'),
  word('voc-sumu', 'Глаголы', '住む', 'すむ', 'sumu', 'жить (проживать)', '東京に住んでいます。', 'Toukyou ni sundeimasu.', 'Живу в Токио.'),
  word('voc-naoru2', 'Глаголы', '直る', 'なおる', 'naoru', 'чиниться, исправляться (само)', '車が直りました。', 'Kuruma ga naorimashita.', 'Машина починилась.'),
  word('voc-toru2', 'Глаголы', '撮る', 'とる', 'toru', 'фотографировать, снимать', '写真を撮ります。', 'Shashin wo torimasu.', 'Делаю фотографию.'),

  // Семья (продолжение — отношения)
  word('voc-koibito', 'Семья', '恋人', 'こいびと', 'koibito', 'возлюбленный, возлюбленная', '恋人がいます。', 'Koibito ga imasu.', 'У меня есть возлюбленный(-ая).'),
  word('voc-kareshi', 'Семья', '彼氏', 'かれし', 'kareshi', 'парень (в отношениях)', '彼氏を紹介します。', 'Kareshi wo shoukai shimasu.', 'Знакомлю со своим парнем.'),

  // Животные (продолжение)
  word('voc-mushi', 'Животные', '虫', 'むし', 'mushi', 'насекомое', '虫が嫌いです。', 'Mushi ga kirai desu.', 'Мне не нравятся насекомые.'),
  word('voc-chou', 'Животные', '蝶', 'ちょう', 'chou', 'бабочка', '蝶がきれいです。', 'Chou ga kirei desu.', 'Бабочка красивая.'),
  word('voc-zou', 'Животные', 'ぞう', 'ぞう', 'zou', 'слон', '動物園でぞうを見ました。', 'Doubutsuen de zou wo mimashita.', 'Видел(а) слона в зоопарке.'),
  word('voc-kuma', 'Животные', 'くま', 'くま', 'kuma', 'медведь', 'くまは大きいです。', 'Kuma wa ookii desu.', 'Медведь большой.'),
  word('voc-buta', 'Животные', 'ぶた', 'ぶた', 'buta', 'свинья', 'ぶたを飼っています。', 'Buta wo katteimasu.', 'Держу свинью.'),
  word('voc-niwatori', 'Животные', 'にわとり', 'にわとり', 'niwatori', 'курица', 'にわとりがいます。', 'Niwatori ga imasu.', 'Есть курица.'),

  // Количество и местоимения (продолжение)
  word('voc-ikko', 'Количество и местоимения', '一個', 'いっこ', 'ikko', 'одна штука (универсальный счётчик)', 'りんごを一個ください。', 'Ringo wo ikko kudasai.', 'Дайте одно яблоко, пожалуйста.'),
  word('voc-nanko', 'Количество и местоимения', '何個', 'なんこ', 'nanko', 'сколько штук', '何個いりますか。', 'Nanko irimasu ka.', 'Сколько штук нужно?'),

  // Основные ответы (продолжение)
  word('voc-soudesu', 'Основные ответы', 'そうです', 'そうです', 'sou desu', 'это так, верно', 'はい、そうです。', 'Hai, sou desu.', 'Да, это так.'),

  // Общение и техника (продолжение)
  word('voc-pasuwaado', 'Общение и техника', 'パスワード', 'パスワード', 'pasuwa-do', 'пароль', 'パスワードを入力します。', 'Pasuwa-do wo nyuuryoku shimasu.', 'Ввожу пароль.'),
  word('voc-apuri', 'Общение и техника', 'アプリ', 'アプリ', 'apuri', 'приложение', '新しいアプリを使います。', 'Atarashii apuri wo tsukaimasu.', 'Пользуюсь новым приложением.'),

  // Страны и места (продолжение)
  word('voc-shuppatsu', 'Страны и места', '出発する', 'しゅっぱつする', 'shuppatsu suru', 'отправляться', '九時に出発します。', 'Ku-ji ni shuppatsu shimasu.', 'Отправляюсь в 9.'),
  word('voc-touchaku', 'Страны и места', '到着する', 'とうちゃくする', 'touchaku suru', 'прибывать', '空港に到着しました。', 'Kuukou ni touchaku shimashita.', 'Прибыл(а) в аэропорт.'),
  word('voc-annai', 'Страны и места', '案内する', 'あんないする', 'annai suru', 'проводить экскурсию, показывать дорогу', '町を案内します。', 'Machi wo annai shimasu.', 'Показываю город.'),

  // Погода (продолжение — природные явления)
  word('voc-jishin', 'Погода', '地震', 'じしん', 'jishin', 'землетрясение', '地震がありました。', 'Jishin ga arimashita.', 'Было землетрясение.'),
  word('voc-kaminari', 'Погода', '雷', 'かみなり', 'kaminari', 'гром, молния', '雷が鳴っています。', 'Kaminari ga natteimasu.', 'Гремит гром.'),

  // Еда (продолжение — овощи и мясо)
  word('voc-tamanegi', 'Еда', 'たまねぎ', 'たまねぎ', 'tamanegi', 'лук', 'たまねぎを切ります。', 'Tamanegi wo kirimasu.', 'Режу лук.'),
  word('voc-jagaimo', 'Еда', 'じゃがいも', 'じゃがいも', 'jagaimo', 'картофель', 'じゃがいもを食べます。', 'Jagaimo wo tabemasu.', 'Ем картофель.'),
  word('voc-gyuuniku', 'Еда', '牛肉', 'ぎゅうにく', 'gyuuniku', 'говядина', '牛肉を焼きます。', 'Gyuuniku wo yakimasu.', 'Жарю говядину.'),
  word('voc-butaniku', 'Еда', '豚肉', 'ぶたにく', 'butaniku', 'свинина', '豚肉が好きです。', 'Butaniku ga suki desu.', 'Мне нравится свинина.'),
  word('voc-toriniku', 'Еда', '鶏肉', 'とりにく', 'toriniku', 'курятина', '鶏肉を食べます。', 'Toriniku wo tabemasu.', 'Ем курятину.'),

  // Глаголы (продолжение)
  word('voc-sanposuru', 'Глаголы', '散歩する', 'さんぽする', 'sanpo suru', 'гулять', '公園を散歩します。', 'Kouen wo sanpo shimasu.', 'Гуляю в парке.'),
  word('voc-kaimonosuru', 'Глаголы', '買い物する', 'かいものする', 'kaimono suru', 'делать покупки', 'デパートで買い物します。', 'Depa-to de kaimono shimasu.', 'Делаю покупки в универмаге.'),
  word('voc-nemuru', 'Глаголы', '眠る', 'ねむる', 'nemuru', 'спать (о состоянии сна)', 'よく眠りました。', 'Yoku nemurimashita.', 'Хорошо поспал(а).'),
  word('voc-kangaeru', 'Глаголы', '考える', 'かんがえる', 'kangaeru', 'размышлять, обдумывать', 'よく考えます。', 'Yoku kangaemasu.', 'Хорошо обдумываю.'),

  // Наречия (продолжение — связки)
  word('voc-sorede', 'Наречия', 'それで', 'それで', 'sorede', 'и вот, итак', 'それでどうなりましたか。', 'Sorede dou narimashita ka.', 'И что в итоге получилось?'),
  word('voc-jaa', 'Наречия', 'じゃあ', 'じゃあ', 'jaa', 'ну тогда, ну что ж', 'じゃあ、行きましょう。', 'Jaa, ikimashou.', 'Ну тогда пойдём.'),

  // Абстрактные понятия (продолжение)
  word('voc-iken', 'Абстрактные понятия', '意見', 'いけん', 'iken', 'мнение', '意見を聞かせてください。', 'Iken wo kikasete kudasai.', 'Скажите ваше мнение, пожалуйста.'),
  word('voc-riyuu', 'Абстрактные понятия', '理由', 'りゆう', 'riyuu', 'причина', '理由を教えてください。', 'Riyuu wo oshiete kudasai.', 'Скажите причину, пожалуйста.'),
  word('voc-kekka', 'Абстрактные понятия', '結果', 'けっか', 'kekka', 'результат', 'テストの結果はよかったです。', 'Tesuto no kekka wa yokatta desu.', 'Результат теста был хорошим.'),

  // Дом (продолжение — уборка)
  word('voc-soujiki', 'Дом', '掃除機', 'そうじき', 'soujiki', 'пылесос', '掃除機をかけます。', 'Soujiki wo kakemasu.', 'Пылесошу.'),
  word('voc-gomi', 'Дом', 'ゴミ', 'ゴミ', 'gomi', 'мусор', 'ゴミを捨てます。', 'Gomi wo sutemasu.', 'Выбрасываю мусор.'),
  word('voc-gomibako', 'Дом', 'ゴミ箱', 'ゴミばこ', 'gomibako', 'мусорное ведро', 'ゴミ箱に入れます。', 'Gomibako ni iremasu.', 'Кладу в мусорное ведро.'),

  // Транспорт (продолжение)
  word('voc-untensuru', 'Транспорт', '運転する', 'うんてんする', 'unten suru', 'водить машину', '車を運転します。', 'Kuruma wo unten shimasu.', 'Вожу машину.'),
  word('voc-menkyo', 'Транспорт', '免許', 'めんきょ', 'menkyo', 'водительские права', '免許を持っています。', 'Menkyo wo motteimasu.', 'У меня есть водительские права.'),
  word('voc-shinkansen', 'Транспорт', '新幹線', 'しんかんせん', 'shinkansen', 'синкансэн (скоростной поезд)', '新幹線で行きます。', 'Shinkansen de ikimasu.', 'Еду на синкансэне.'),

  // Абстрактные понятия (продолжение — язык)
  word('voc-tango', 'Абстрактные понятия', '単語', 'たんご', 'tango', 'слово (лексическая единица)', '単語を覚えます。', 'Tango wo oboemasu.', 'Запоминаю слова.'),
  word('voc-bun', 'Абстрактные понятия', '文', 'ぶん', 'bun', 'предложение', '文を書きます。', 'Bun wo kakimasu.', 'Пишу предложение.'),
  word('voc-bunpou', 'Абстрактные понятия', '文法', 'ぶんぽう', 'bunpou', 'грамматика', '文法を勉強します。', 'Bunpou wo benkyoushimasu.', 'Изучаю грамматику.'),
  word('voc-hatsuon', 'Абстрактные понятия', '発音', 'はつおん', 'hatsuon', 'произношение', '発音が難しいです。', 'Hatsuon ga muzukashii desu.', 'Произношение сложное.'),

  // Здоровье (продолжение)
  word('voc-kaji', 'Здоровье', '火事', 'かじ', 'kaji', 'пожар', '火事がありました。', 'Kaji ga arimashita.', 'Был пожар.'),
  word('voc-jiko', 'Здоровье', '事故', 'じこ', 'jiko', 'авария, несчастный случай', '事故がありました。', 'Jiko ga arimashita.', 'Произошла авария.'),
  word('voc-kiken', 'Здоровье', '危険', 'きけん', 'kiken', 'опасность (na-прилагательное)', 'ここは危険です。', 'Koko wa kiken desu.', 'Здесь опасно.'),
  word('voc-kenkou', 'Здоровье', '健康', 'けんこう', 'kenkou', 'здоровье (na-прилагательное)', '健康が大切です。', 'Kenkou ga taisetsu desu.', 'Здоровье важно.'),

  // Работа (продолжение)
  word('voc-mensetsu', 'Работа', '面接', 'めんせつ', 'mensetsu', 'собеседование', '面接を受けます。', 'Mensetsu wo ukemasu.', 'Прохожу собеседование.'),

  // Личные данные (продолжение)
  word('voc-myouji', 'Личные данные', '名字', 'みょうじ', 'myouji', 'фамилия', '名字は何ですか。', 'Myouji wa nan desu ka.', 'Как ваша фамилия?'),

  // Цвета (продолжение)
  word('voc-pinku', 'Цвета', 'ピンク', 'ピンク', 'pinku', 'розовый', 'ピンクが好きです。', 'Pinku ga suki desu.', 'Мне нравится розовый.'),
  word('voc-murasaki', 'Цвета', '紫', 'むらさき', 'murasaki', 'фиолетовый', '紫の花です。', 'Murasaki no hana desu.', 'Это фиолетовый цветок.'),

  // Одежда (продолжение)
  word('voc-mizugi', 'Одежда', '水着', 'みずぎ', 'mizugi', 'купальник', '水着を着ます。', 'Mizugi wo kimasu.', 'Надеваю купальник.'),

  // Спорт и хобби (продолжение)
  word('voc-tenisu2', 'Спорт и хобби', 'テニス', 'テニス', 'tenisu', 'теннис', 'テニスをします。', 'Tenisu wo shimasu.', 'Играю в теннис.'),
  word('voc-gorufu', 'Спорт и хобби', 'ゴルフ', 'ゴルフ', 'gorufu', 'гольф', 'ゴルフをします。', 'Gorufu wo shimasu.', 'Играю в гольф.'),

  // Еда (продолжение — текстура и температура)
  word('voc-katai', 'Еда', '硬い', 'かたい', 'katai', 'твёрдый', 'このパンは硬いです。', 'Kono pan wa katai desu.', 'Этот хлеб твёрдый.'),
  word('voc-yawarakai', 'Еда', '柔らかい', 'やわらかい', 'yawarakai', 'мягкий', 'このパンは柔らかいです。', 'Kono pan wa yawarakai desu.', 'Этот хлеб мягкий.'),
  word('voc-atatakai2', 'Еда', '温かい', 'あたたかい', 'atatakai', 'тёплый (о еде, напитке)', '温かいお茶です。', 'Atatakai ocha desu.', 'Это тёплый чай.'),
  word('voc-tsumetai', 'Еда', '冷たい', 'つめたい', 'tsumetai', 'холодный (на ощупь, о еде)', '冷たい水です。', 'Tsumetai mizu desu.', 'Это холодная вода.'),

  // Глаголы (продолжение)
  word('voc-shitsumonsuru', 'Глаголы', '質問する', 'しつもんする', 'shitsumon suru', 'задавать вопрос', '先生に質問します。', 'Sensei ni shitsumon shimasu.', 'Задаю вопрос учителю.'),
  word('voc-kotaeru', 'Глаголы', '答える', 'こたえる', 'kotaeru', 'отвечать', '質問に答えます。', 'Shitsumon ni kotaemasu.', 'Отвечаю на вопрос.'),

  // Время (продолжение)
  word('voc-genzai', 'Время', '現在', 'げんざい', 'genzai', 'настоящее время, сейчас', '現在、東京に住んでいます。', 'Genzai, Toukyou ni sundeimasu.', 'В настоящее время живу в Токио.'),
  word('voc-kako', 'Время', '過去', 'かこ', 'kako', 'прошлое', '過去のことです。', 'Kako no koto desu.', 'Это дело прошлого.'),

  // Приветствия (продолжение — междометия)
  word('voc-ee', 'Приветствия', 'ええ', 'ええ', 'ee', 'ага, да (неформально)', 'ええ、そうです。', 'Ee, sou desu.', 'Ага, это так.'),
  word('voc-anou', 'Приветствия', 'あのう', 'あのう', 'anou', 'эм... (заполнитель паузы)', 'あのう、すみません。', 'Anou, sumimasen.', 'Эм... извините.'),
  word('voc-nee', 'Приветствия', 'ねえ', 'ねえ', 'nee', 'эй (привлечение внимания)', 'ねえ、聞いて。', 'Nee, kiite.', 'Эй, послушай.'),

  // Учёба (продолжение — ступени образования)
  word('voc-daigakusei', 'Учёба', '大学生', 'だいがくせい', 'daigakusei', 'студент университета', '大学生です。', 'Daigakusei desu.', 'Я студент университета.'),
  word('voc-koukousei', 'Учёба', '高校生', 'こうこうせい', 'koukousei', 'старшеклассник', '高校生です。', 'Koukousei desu.', 'Я старшеклассник.'),
  word('voc-chuugakusei', 'Учёба', '中学生', 'ちゅうがくせい', 'chuugakusei', 'ученик средней школы', '中学生です。', 'Chuugakusei desu.', 'Я ученик средней школы.'),
  word('voc-shougakusei', 'Учёба', '小学生', 'しょうがくせい', 'shougakusei', 'ученик начальной школы', '小学生です。', 'Shougakusei desu.', 'Я ученик начальной школы.'),

  // Люди (продолжение)
  word('voc-dansei', 'Люди', '男性', 'だんせい', 'dansei', 'мужчина (официально)', '男性が立っています。', 'Dansei ga tatteimasu.', 'Стоит мужчина.'),
  word('voc-josei', 'Люди', '女性', 'じょせい', 'josei', 'женщина (официально)', '女性が話しています。', 'Josei ga hanashiteimasu.', 'Женщина разговаривает.'),

  // Общение и техника (продолжение)
  word('voc-purintaa', 'Общение и техника', 'プリンター', 'プリンター', 'purinta-', 'принтер', 'プリンターで印刷します。', 'Purinta- de insatsu shimasu.', 'Печатаю на принтере.'),
  word('voc-kopiisuru', 'Общение и техника', 'コピーする', 'コピーする', 'kopi- suru', 'копировать', '書類をコピーします。', 'Shorui wo kopi- shimasu.', 'Копирую документ.'),
  word('voc-fairu', 'Общение и техника', 'ファイル', 'ファイル', 'fairu', 'файл', 'ファイルを送ります。', 'Fairu wo okurimasu.', 'Отправляю файл.'),
  word('voc-sukejuuru', 'Общение и техника', 'スケジュール', 'スケジュール', 'sukeju-ru', 'расписание', 'スケジュールを確認します。', 'Sukeju-ru wo kakunin shimasu.', 'Проверяю расписание.'),

  // Места (продолжение)
  word('voc-kouban', 'Места', '交番', 'こうばん', 'kouban', 'полицейский пост', '交番で聞きます。', 'Kouban de kikimasu.', 'Спрашиваю в полицейском посту.'),
  word('voc-ichiba', 'Места', '市場', 'いちば', 'ichiba', 'рынок', '市場で買います。', 'Ichiba de kaimasu.', 'Покупаю на рынке.'),

  // Еда (продолжение)
  word('voc-sarada', 'Еда', 'サラダ', 'サラダ', 'sarada', 'салат', 'サラダを食べます。', 'Sarada wo tabemasu.', 'Ем салат.'),
  word('voc-suupu', 'Еда', 'スープ', 'スープ', 'su-pu', 'суп', 'スープを飲みます。', 'Su-pu wo nomimasu.', 'Ем суп (пью суп).'),
  word('voc-jamu', 'Еда', 'ジャム', 'ジャム', 'jamu', 'варенье', 'パンにジャムをつけます。', 'Pan ni jamu wo tsukemasu.', 'Намазываю варенье на хлеб.'),

  // Глаголы (продолжение)
  word('voc-kanjiru', 'Глаголы', '感じる', 'かんじる', 'kanjiru', 'чувствовать', '寒さを感じます。', 'Samusa wo kanjimasu.', 'Чувствую холод.'),

  // Абстрактные понятия (продолжение)
  word('voc-tsumori', 'Абстрактные понятия', 'つもり', 'つもり', 'tsumori', 'намерение (собираюсь сделать)', '明日行くつもりです。', 'Ashita iku tsumori desu.', 'Собираюсь пойти завтра.'),
  word('voc-wasuremono', 'Абстрактные понятия', '忘れ物', 'わすれもの', 'wasuremono', 'забытая вещь', '忘れ物をしました。', 'Wasuremono wo shimashita.', 'Забыл(а) вещь.'),
  word('voc-otoshimono', 'Абстрактные понятия', '落とし物', 'おとしもの', 'otoshimono', 'потерянная вещь', '落とし物を探しています。', 'Otoshimono wo sagashiteimasu.', 'Ищу потерянную вещь.'),

  // Люди (продолжение)
  word('voc-minasan', 'Люди', '皆さん', 'みなさん', 'minasan', 'все вы (вежливо)', '皆さん、こんにちは。', 'Minasan, konnichiwa.', 'Здравствуйте, все!'),
  word('voc-okyakusan', 'Люди', 'お客さん', 'おきゃくさん', 'okyakusan', 'гость, клиент', 'お客さんが来ました。', 'Okyakusan ga kimashita.', 'Пришёл гость.'),

  // Учёба (продолжение)
  word('voc-zu', 'Учёба', '図', 'ず', 'zu', 'диаграмма, схема', '図を見てください。', 'Zu wo mite kudasai.', 'Посмотрите на схему, пожалуйста.'),
  word('voc-hyou', 'Учёба', '表', 'ひょう', 'hyou', 'таблица', '表を作ります。', 'Hyou wo tsukurimasu.', 'Составляю таблицу.'),

  // Общение и техника (продолжение)
  word('voc-kopiiki', 'Общение и техника', 'コピー機', 'コピーき', 'kopi-ki', 'копировальный аппарат', 'コピー機を使います。', 'Kopi-ki wo tsukaimasu.', 'Пользуюсь копировальным аппаратом.'),

  // Канцелярия и вещи (продолжение — гигиена)
  word('voc-shanpuu', 'Канцелярия и вещи', 'シャンプー', 'シャンプー', 'shanpu-', 'шампунь', 'シャンプーを使います。', 'Shanpu- wo tsukaimasu.', 'Пользуюсь шампунем.'),
  word('voc-haburashi', 'Канцелярия и вещи', '歯ブラシ', 'はブラシ', 'ha burashi', 'зубная щётка', '歯ブラシで磨きます。', 'Ha burashi de migakimasu.', 'Чищу зубной щёткой.'),
  word('voc-hamigakiko', 'Канцелярия и вещи', '歯磨き粉', 'はみがきこ', 'hamigakiko', 'зубная паста', '歯磨き粉をつけます。', 'Hamigakiko wo tsukemasu.', 'Наношу зубную пасту.'),

  // Еда (продолжение — фрукты)
  word('voc-remon', 'Еда', 'レモン', 'レモン', 'remon', 'лимон', 'レモンはすっぱいです。', 'Remon wa suppai desu.', 'Лимон кислый.'),
  word('voc-ichigo', 'Еда', 'いちご', 'いちご', 'ichigo', 'клубника', 'いちごが好きです。', 'Ichigo ga suki desu.', 'Мне нравится клубника.'),
  word('voc-budou', 'Еда', 'ぶどう', 'ぶどう', 'budou', 'виноград', 'ぶどうを食べます。', 'Budou wo tabemasu.', 'Ем виноград.'),
  word('voc-momo', 'Еда', 'もも', 'もも', 'momo', 'персик', 'ももは甘いです。', 'Momo wa amai desu.', 'Персик сладкий.'),

  // Направления (продолжение)
  word('voc-ue', 'Направления', '上', 'うえ', 'ue', 'верх, наверху', '机の上にあります。', 'Tsukue no ue ni arimasu.', 'Это на столе.'),
  word('voc-shita', 'Направления', '下', 'した', 'shita', 'низ, внизу', 'いすの下にあります。', 'Isu no shita ni arimasu.', 'Это под стулом.'),
  word('voc-aida', 'Направления', '間', 'あいだ', 'aida', 'между', '本と本の間にあります。', 'Hon to hon no aida ni arimasu.', 'Это между книгами.'),

  // Наречия (продолжение)
  word('voc-dewa', 'Наречия', 'では', 'では', 'dewa', 'ну что ж, тогда (формально)', 'では、始めましょう。', 'Dewa, hajimemashou.', 'Ну что ж, давайте начнём.'),
  word('voc-sate', 'Наречия', 'さて', 'さて', 'sate', 'итак, ну что ж (смена темы)', 'さて、次の話をしましょう。', 'Sate, tsugi no hanashi wo shimashou.', 'Итак, поговорим о следующем.'),

  // Праздники и события (продолжение)
  word('voc-omiyage', 'Праздники и события', 'お土産', 'おみやげ', 'omiyage', 'сувенир', 'お土産を買いました。', 'Omiyage wo kaimashita.', 'Купил(а) сувенир.'),

  // Время (продолжение)
  word('voc-saikin', 'Время', '最近', 'さいきん', 'saikin', 'в последнее время', '最近忙しいです。', 'Saikin isogashii desu.', 'В последнее время я занят.'),
  word('voc-saisho', 'Время', '最初', 'さいしょ', 'saisho', 'сначала, первый раз', '最初に会いました。', 'Saisho ni aimashita.', 'Встретились в первый раз.'),
  word('voc-saigo', 'Время', '最後', 'さいご', 'saigo', 'в конце, последний', '最後に食べます。', 'Saigo ni tabemasu.', 'Ем в конце.'),

  // Наречия (продолжение)
  word('voc-choudo', 'Наречия', 'ちょうど', 'ちょうど', 'choudo', 'ровно, как раз', 'ちょうど三時です。', 'Choudo san-ji desu.', 'Ровно 3 часа.'),
  word('voc-dandan', 'Наречия', 'だんだん', 'だんだん', 'dandan', 'постепенно', 'だんだん寒くなります。', 'Dandan samuku narimasu.', 'Постепенно становится холоднее.'),
  word('voc-kyuuni', 'Наречия', '急に', 'きゅうに', 'kyuuni', 'внезапно', '急に雨が降りました。', 'Kyuuni ame ga furimashita.', 'Внезапно пошёл дождь.'),
  word('voc-isshoni', 'Наречия', '一緒に', 'いっしょに', 'isshoni', 'вместе', '一緒に行きましょう。', 'Isshoni ikimashou.', 'Пойдём вместе.'),
  word('voc-chanto', 'Наречия', 'ちゃんと', 'ちゃんと', 'chanto', 'как следует, должным образом', 'ちゃんと勉強してください。', 'Chanto benkyoushite kudasai.', 'Учитесь как следует, пожалуйста.'),
  word('voc-douyatte', 'Наречия', 'どうやって', 'どうやって', 'douyatte', 'как именно, каким способом', 'どうやって行きますか。', 'Douyatte ikimasu ka.', 'Как ты туда доберёшься?'),

  // Цвета (продолжение)
  word('voc-haiiro', 'Цвета', '灰色', 'はいいろ', 'haiiro', 'серый', '灰色のねこです。', 'Haiiro no neko desu.', 'Это серая кошка.'),
  word('voc-kin\'iro', 'Цвета', '金色', 'きんいろ', 'kin\'iro', 'золотой (цвет)', '金色の時計です。', 'Kin\'iro no tokei desu.', 'Это золотые часы.'),

  // Еда (продолжение)
  word('voc-tonkatsu', 'Еда', 'とんかつ', 'とんかつ', 'tonkatsu', 'тонкацу (жареная свиная котлета)', 'とんかつを食べます。', 'Tonkatsu wo tabemasu.', 'Ем тонкацу.'),

  // Семья (продолжение)
  word('voc-okosan', 'Семья', 'お子さん', 'おこさん', 'okosan', 'ваш ребёнок (вежливо)', 'お子さんは何歳ですか。', 'Okosan wa nansai desu ka.', 'Сколько лет вашему ребёнку?'),
  word('voc-musuko', 'Семья', '息子', 'むすこ', 'musuko', 'сын', '息子は学生です。', 'Musuko wa gakusei desu.', 'Мой сын студент.'),
  word('voc-musume', 'Семья', '娘', 'むすめ', 'musume', 'дочь', '娘は元気です。', 'Musume wa genki desu.', 'Моя дочь бодрая.'),

  // Страны и места (продолжение)
  word('voc-doitsu', 'Страны и места', 'ドイツ', 'ドイツ', 'doitsu', 'Германия', 'ドイツに住んでいます。', 'Doitsu ni sundeimasu.', 'Живу в Германии.'),
  word('voc-furansu', 'Страны и места', 'フランス', 'フランス', 'furansu', 'Франция', 'フランスに行きたいです。', 'Furansu ni ikitai desu.', 'Хочу поехать во Францию.'),
  word('voc-igirisu', 'Страны и места', 'イギリス', 'イギリス', 'igirisu', 'Великобритания', 'イギリスから来ました。', 'Igirisu kara kimashita.', 'Приехал(а) из Великобритании.'),
  word('voc-tokkyuu', 'Страны и места', '特急', 'とっきゅう', 'tokkyuu', 'экспресс (поезд)', '特急に乗ります。', 'Tokkyuu ni norimasu.', 'Сажусь на экспресс.'),

  // Глаголы (продолжение)
  word('voc-junbisuru', 'Глаголы', '準備する', 'じゅんびする', 'junbi suru', 'готовиться, подготавливать', '旅行の準備をします。', 'Ryokou no junbi wo shimasu.', 'Готовлюсь к путешествию.'),
  word('voc-katazukeru', 'Глаголы', '片付ける', 'かたづける', 'katazukeru', 'убирать, приводить в порядок', '部屋を片付けます。', 'Heya wo katazukemasu.', 'Убираюсь в комнате.'),
  word('voc-atsumeru', 'Глаголы', '集める', 'あつめる', 'atsumeru', 'собирать (коллекционировать)', '切手を集めます。', 'Kitte wo atsumemasu.', 'Собираю марки.'),
  word('voc-atsumaru', 'Глаголы', '集まる', 'あつまる', 'atsumaru', 'собираться (о людях)', '友達が集まります。', 'Tomodachi ga atsumarimasu.', 'Собираются друзья.'),
  word('voc-youisuru', 'Глаголы', '用意する', 'よういする', 'youi suru', 'готовить, подготавливать', '夕食を用意します。', 'Yuushoku wo youi shimasu.', 'Готовлю ужин.'),
  word('voc-kiniiru', 'Глаголы', '気に入る', 'きにいる', 'kiniiru', 'нравиться, приходиться по душе', 'この服が気に入りました。', 'Kono fuku ga kiniirimashita.', 'Эта одежда мне понравилась.'),

  // Спорт и хобби (продолжение)
  word('voc-senshu', 'Спорт и хобби', '選手', 'せんしゅ', 'senshu', 'спортсмен', '有名な選手です。', 'Yuumei na senshu desu.', 'Это известный спортсмен.'),

  // Абстрактные понятия (продолжение)
  word('voc-sewa', 'Абстрактные понятия', '世話', 'せわ', 'sewa', 'забота, уход', '子供の世話をします。', 'Kodomo no sewa wo shimasu.', 'Забочусь о ребёнке.'),

  // Прилагательные (продолжение)
  word('voc-hen', 'Прилагательные', '変', 'へん', 'hen', 'странный (na-прилагательное)', 'それは変ですね。', 'Sore wa hen desu ne.', 'Это странно, правда?'),

  // Время (продолжение)
  word('voc-tsugi', 'Время', '次', 'つぎ', 'tsugi', 'следующий', '次の駅で降ります。', 'Tsugi no eki de orimasu.', 'Выхожу на следующей станции.'),
  word('voc-kondo', 'Время', '今度', 'こんど', 'kondo', 'в следующий раз, на этот раз', '今度一緒に行きましょう。', 'Kondo isshoni ikimashou.', 'Давай в следующий раз пойдём вместе.'),
]
