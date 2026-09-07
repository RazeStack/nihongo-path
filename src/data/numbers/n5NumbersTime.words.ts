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

export const N5_NUMBERS_TIME_CATEGORIES = [
  'Числа 1-10',
  'Сотни и валюта',
  'Час',
  'Минуты',
  'Дни недели',
  'Даты',
  'Счётчики',
] as const

/**
 * Числа и время — намеренно ограничены "нейтральными" контекстами (番, 円),
 * чтобы не тонуть в счётчиках (助数詞) уже на первом уроке чисел. Полная
 * система счётчиков (人, 枚, 本...) — тема для отдельного будущего блока.
 */
export const N5_NUMBERS_TIME_WORDS: VocabWord[] = [
  // Числа 1-10
  word('num-1', 'Числа 1-10', '一', 'いち', 'ichi', '1 (один)', '一番好きです。', 'Ichiban suki desu.', 'Нравится больше всего (букв. «номер один нравится»).'),
  word('num-2', 'Числа 1-10', '二', 'に', 'ni', '2 (два)', '二番目です。', 'Nibanme desu.', 'Это второй по счёту.'),
  word('num-3', 'Числа 1-10', '三', 'さん', 'san', '3 (три)', '三番です。', 'Sanban desu.', 'Номер три.'),
  word('num-4', 'Числа 1-10', '四', 'よん', 'yon', '4 (четыре)', '四番です。', 'Yonban desu.', 'Номер четыре.'),
  word('num-5', 'Числа 1-10', '五', 'ご', 'go', '5 (пять)', '五番です。', 'Goban desu.', 'Номер пять.'),
  word('num-6', 'Числа 1-10', '六', 'ろく', 'roku', '6 (шесть)', '六番です。', 'Rokuban desu.', 'Номер шесть.'),
  word('num-7', 'Числа 1-10', '七', 'なな', 'nana', '7 (семь)', '七番です。', 'Nanaban desu.', 'Номер семь.'),
  word('num-8', 'Числа 1-10', '八', 'はち', 'hachi', '8 (восемь)', '八番です。', 'Hachiban desu.', 'Номер восемь.'),
  word('num-9', 'Числа 1-10', '九', 'きゅう', 'kyuu', '9 (девять)', '九番です。', 'Kyuuban desu.', 'Номер девять.'),
  word('num-10', 'Числа 1-10', '十', 'じゅう', 'juu', '10 (десять)', '十番です。', 'Juuban desu.', 'Номер десять.'),

  // Сотни и валюта
  word('num-100', 'Сотни и валюта', '百', 'ひゃく', 'hyaku', '100 (сто)', '百円です。', 'Hyakuen desu.', 'Это 100 йен.'),
  word('num-1000', 'Сотни и валюта', '千', 'せん', 'sen', '1000 (тысяча)', '千円です。', 'Sen\'en desu.', 'Это 1000 йен.'),
  word('num-yen', 'Сотни и валюта', '円', 'えん', 'en', 'йена (валюта)', 'これは百円です。', 'Kore wa hyakuen desu.', 'Это 100 йен.'),

  // Час
  word('time-nanji', 'Час', '何時', 'なんじ', 'nanji', 'который час?', '今何時ですか。', 'Ima nanji desu ka.', 'Сейчас который час?'),
  word('time-4', 'Час', '四時', 'よじ', 'yoji', '4 часа (особое чтение!)', '四時に行きます。', 'Yoji ni ikimasu.', 'Пойду в 4 часа.'),
  word('time-7', 'Час', '七時', 'しちじ', 'shichiji', '7 часов (особое чтение!)', '七時に起きます。', 'Shichiji ni okimasu.', 'Встаю в 7 часов.'),
  word('time-9', 'Час', '九時', 'くじ', 'kuji', '9 часов (особое чтение!)', '九時に寝ます。', 'Kuji ni nemasu.', 'Ложусь спать в 9 часов.'),

  // Минуты
  word('time-nanpun', 'Минуты', '何分', 'なんぷん', 'nanpun', 'сколько минут?', '何分ですか。', 'Nanpun desu ka.', 'Сколько минут?'),
  word('time-1min', 'Минуты', '一分', 'いっぷん', 'ippun', '1 минута', '一分待ってください。', 'Ippun matte kudasai.', 'Подождите одну минуту.'),
  word('time-3min', 'Минуты', '三分', 'さんぷん', 'sanpun', '3 минуты', '三分かかります。', 'Sanpun kakarimasu.', 'Займёт 3 минуты.'),
  word('time-10min', 'Минуты', '十分', 'じゅっぷん', 'juppun', '10 минут', '十分待ちました。', 'Juppun machimashita.', 'Подождал 10 минут.'),

  // Дни недели
  word('day-getsu', 'Дни недели', '月曜日', 'げつようび', 'getsuyoubi', 'понедельник', '月曜日から働きます。', 'Getsuyoubi kara hatarakimasu.', 'Работаю с понедельника.'),
  word('day-ka', 'Дни недели', '火曜日', 'かようび', 'kayoubi', 'вторник', '火曜日にテストがあります。', 'Kayoubi ni tesuto ga arimasu.', 'Во вторник будет тест.'),
  word('day-sui', 'Дни недели', '水曜日', 'すいようび', 'suiyoubi', 'среда', '水曜日は休みです。', 'Suiyoubi wa yasumi desu.', 'Среда — выходной.'),
  word('day-moku', 'Дни недели', '木曜日', 'もくようび', 'mokuyoubi', 'четверг', '木曜日に会いましょう。', 'Mokuyoubi ni aimashou.', 'Встретимся в четверг.'),
  word('day-kin', 'Дни недели', '金曜日', 'きんようび', 'kinyoubi', 'пятница', '金曜日が好きです。', 'Kinyoubi ga suki desu.', 'Мне нравится пятница.'),
  word('day-do', 'Дни недели', '土曜日', 'どようび', 'doyoubi', 'суббота', '土曜日に映画を見ます。', 'Doyoubi ni eiga wo mimasu.', 'В субботу смотрю фильм.'),
  word('day-nichi', 'Дни недели', '日曜日', 'にちようび', 'nichiyoubi', 'воскресенье', '日曜日は休みです。', 'Nichiyoubi wa yasumi desu.', 'Воскресенье — выходной.'),

  // Даты — числа месяца читаются нерегулярно, особенно с 1 по 10.
  word('date-1', 'Даты', '一日', 'ついたち', 'tsuitachi', '1 число месяца', '今日は一日です。', 'Kyou wa tsuitachi desu.', 'Сегодня первое число.'),
  word('date-2', 'Даты', '二日', 'ふつか', 'futsuka', '2 число месяца', '二日に会います。', 'Futsuka ni aimasu.', 'Встретимся второго числа.'),
  word('date-3', 'Даты', '三日', 'みっか', 'mikka', '3 число месяца', '三日から休みです。', 'Mikka kara yasumi desu.', 'С третьего числа выходные.'),
  word('date-4', 'Даты', '四日', 'よっか', 'yokka', '4 число месяца', '四日に来ます。', 'Yokka ni kimasu.', 'Приду четвёртого.'),
  word('date-5', 'Даты', '五日', 'いつか', 'itsuka', '5 число месяца', '五日はテストです。', 'Itsuka wa tesuto desu.', 'Пятого — тест.'),
  word('date-6', 'Даты', '六日', 'むいか', 'muika', '6 число месяца', '六日に行きます。', 'Muika ni ikimasu.', 'Поеду шестого.'),
  word('date-7', 'Даты', '七日', 'なのか', 'nanoka', '7 число месяца', '七日から旅行します。', 'Nanoka kara ryokou shimasu.', 'С седьмого числа путешествую.'),
  word('date-8', 'Даты', '八日', 'ようか', 'youka', '8 число месяца', '八日に帰ります。', 'Youka ni kaerimasu.', 'Вернусь восьмого.'),
  word('date-9', 'Даты', '九日', 'ここのか', 'kokonoka', '9 число месяца', '九日は誕生日です。', 'Kokonoka wa tanjoubi desu.', 'Девятого — день рождения.'),
  word('date-10', 'Даты', '十日', 'とおか', 'tooka', '10 число месяца', '十日まで働きます。', 'Tooka made hatarakimasu.', 'Работаю до десятого.'),
  word('date-14', 'Даты', '十四日', 'じゅうよっか', 'juuyokka', '14 число месяца', '十四日に始まります。', 'Juuyokka ni hajimarimasu.', 'Начнётся четырнадцатого.'),
  word('date-20', 'Даты', '二十日', 'はつか', 'hatsuka', '20 число месяца', '二十日に終わります。', 'Hatsuka ni owarimasu.', 'Закончится двадцатого.'),
  word('date-24', 'Даты', '二十四日', 'にじゅうよっか', 'nijuuyokka', '24 число месяца', '二十四日は休みです。', 'Nijuuyokka wa yasumi desu.', 'Двадцать четвёртого — выходной.'),

  // Счётчики — числительное меняет форму в зависимости от того, ЧТО считают.
  word('count-hitori', 'Счётчики', '一人', 'ひとり', 'hitori', '1 человек (особое чтение)', '一人で行きます。', 'Hitori de ikimasu.', 'Иду один.'),
  word('count-futari', 'Счётчики', '二人', 'ふたり', 'futari', '2 человека (особое чтение)', '二人で話します。', 'Futari de hanashimasu.', 'Разговариваем вдвоём.'),
  word('count-sannin', 'Счётчики', '三人', 'さんにん', 'sannin', '3 человека', '三人家族です。', 'San\'nin kazoku desu.', 'Семья из трёх человек.'),
  word('count-yonin', 'Счётчики', '四人', 'よにん', 'yonin', '4 человека', '四人で住んでいます。', 'Yonin de sundeimasu.', 'Живём вчетвером.'),
  word('count-nannin', 'Счётчики', '何人', 'なんにん', 'nannin', 'сколько человек?', '何人家族ですか。', 'Nannin kazoku desu ka.', 'Сколько человек в семье?'),
  word('count-ichimai', 'Счётчики', '一枚', 'いちまい', 'ichimai', '1 штука (плоский предмет: бумага, билет)', '紙を一枚ください。', 'Kami wo ichimai kudasai.', 'Дайте один лист бумаги.'),
  word('count-nimai', 'Счётчики', '二枚', 'にまい', 'nimai', '2 штуки (плоский предмет)', 'きっぷを二枚買いました。', 'Kippu wo nimai kaimashita.', 'Купил(а) два билета.'),
  word('count-nanmai', 'Счётчики', '何枚', 'なんまい', 'nanmai', 'сколько штук (плоских предметов)?', '何枚必要ですか。', 'Nanmai hitsuyou desu ka.', 'Сколько штук нужно?'),
  word('count-ippon', 'Счётчики', '一本', 'いっぽん', 'ippon', '1 штука (длинный предмет: бутылка, карандаш)', 'ペンを一本買いました。', 'Pen wo ippon kaimashita.', 'Купил(а) одну ручку.'),
  word('count-nihon', 'Счётчики', '二本', 'にほん', 'nihon', '2 штуки (длинный предмет)', '木が二本あります。', 'Ki ga nihon arimasu.', 'Есть два дерева.'),
]
