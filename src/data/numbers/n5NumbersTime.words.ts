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

export const N5_NUMBERS_TIME_CATEGORIES = ['Числа 1-10', 'Сотни и валюта', 'Час', 'Минуты'] as const

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
]
