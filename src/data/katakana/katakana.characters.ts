import type { KanaChar } from '@/types/content'

function char(id: string, char: string, romaji: string, row: string, japanese: string, exampleRomaji: string, translation: string, note?: string): KanaChar {
  return { id, char, romaji, script: 'katakana', row, example: { japanese, romaji: exampleRomaji, translation }, note }
}

/** Те же 46 звуков, что и в хирагане, но другим начертанием — используются в основном для заимствованных слов. */
export const KATAKANA_CHARACTERS: KanaChar[] = [
  char('kata-a', 'ア', 'a', 'vowels', 'アイス', 'aisu', 'мороженое'),
  char('kata-i', 'イ', 'i', 'vowels', 'イタリア', 'itaria', 'Италия'),
  char('kata-u', 'ウ', 'u', 'vowels', 'ウイルス', 'uirusu', 'вирус'),
  char('kata-e', 'エ', 'e', 'vowels', 'エレベーター', 'erebe-ta-', 'лифт'),
  char('kata-o', 'オ', 'o', 'vowels', 'オレンジ', 'orenji', 'апельсин'),

  char('kata-ka', 'カ', 'ka', 'k', 'カメラ', 'kamera', 'камера'),
  char('kata-ki', 'キ', 'ki', 'k', 'キロ', 'kiro', 'километр / кг'),
  char('kata-ku', 'ク', 'ku', 'k', 'クラス', 'kurasu', 'класс'),
  char('kata-ke', 'ケ', 'ke', 'k', 'ケーキ', 'ke-ki', 'торт'),
  char('kata-ko', 'コ', 'ko', 'k', 'コーヒー', 'ko-hi-', 'кофе'),

  char('kata-sa', 'サ', 'sa', 's', 'サラダ', 'sarada', 'салат'),
  char('kata-shi', 'シ', 'shi', 's', 'シート', 'shi-to', 'лист / сиденье', 'Читается «щи»-подобно, как и し в хирагане.'),
  char('kata-su', 'ス', 'su', 's', 'スキー', 'suki-', 'лыжи'),
  char('kata-se', 'セ', 'se', 's', 'セーター', 'se-ta-', 'свитер'),
  char('kata-so', 'ソ', 'so', 's', 'ソファ', 'sofa', 'диван', 'Похож на ン (n) и ツ (tsu) — различай по направлению штриха.'),

  char('kata-ta', 'タ', 'ta', 't', 'タクシー', 'takushi-', 'такси'),
  char('kata-chi', 'チ', 'chi', 't', 'チーズ', 'chi-zu', 'сыр'),
  char('kata-tsu', 'ツ', 'tsu', 't', 'ツアー', 'tsua-', 'тур', 'Похож на シ (shi) и ン (n) — различай по направлению штриха.'),
  char('kata-te', 'テ', 'te', 't', 'テレビ', 'terebi', 'телевизор'),
  char('kata-to', 'ト', 'to', 't', 'トマト', 'tomato', 'помидор'),

  char('kata-na', 'ナ', 'na', 'n', 'バナナ', 'banana', 'банан'),
  char('kata-ni', 'ニ', 'ni', 'n', 'テニス', 'tenisu', 'теннис'),
  char('kata-nu', 'ヌ', 'nu', 'n', 'ヌードル', 'nu-doru', 'лапша быстрого приготовления'),
  char('kata-ne', 'ネ', 'ne', 'n', 'ネクタイ', 'nekutai', 'галстук'),
  char('kata-no', 'ノ', 'no', 'n', 'ノート', 'no-to', 'тетрадь'),

  char('kata-ha', 'ハ', 'ha', 'h', 'ハム', 'hamu', 'ветчина'),
  char('kata-hi', 'ヒ', 'hi', 'h', 'ヒーター', 'hi-ta-', 'обогреватель'),
  char('kata-fu', 'フ', 'fu', 'h', 'フォーク', 'fo-ku', 'вилка'),
  char('kata-he', 'ヘ', 'he', 'h', 'ヘルメット', 'herumetto', 'шлем'),
  char('kata-ho', 'ホ', 'ho', 'h', 'ホテル', 'hoteru', 'отель'),

  char('kata-ma', 'マ', 'ma', 'm', 'マスク', 'masuku', 'маска'),
  char('kata-mi', 'ミ', 'mi', 'm', 'ミルク', 'miruku', 'молоко'),
  char('kata-mu', 'ム', 'mu', 'm', 'ムード', 'mu-do', 'настроение, атмосфера'),
  char('kata-me', 'メ', 'me', 'm', 'メニュー', 'menyu-', 'меню'),
  char('kata-mo', 'モ', 'mo', 'm', 'モデル', 'moderu', 'модель'),

  char('kata-ya', 'ヤ', 'ya', 'y', 'ヤード', 'ya-do', 'ярд'),
  char('kata-yu', 'ユ', 'yu', 'y', 'ユーモア', 'yu-moa', 'юмор'),
  char('kata-yo', 'ヨ', 'yo', 'y', 'ヨーグルト', 'yo-guruto', 'йогурт'),

  char('kata-ra', 'ラ', 'ra', 'r', 'ラジオ', 'rajio', 'радио'),
  char('kata-ri', 'リ', 'ri', 'r', 'リスト', 'risuto', 'список'),
  char('kata-ru', 'ル', 'ru', 'r', 'ルール', 'ru-ru', 'правило'),
  char('kata-re', 'レ', 're', 'r', 'レストラン', 'resutoran', 'ресторан'),
  char('kata-ro', 'ロ', 'ro', 'r', 'ロボット', 'robotto', 'робот'),

  char('kata-wa', 'ワ', 'wa', 'w', 'ワイン', 'wain', 'вино'),
  char('kata-wo', 'ヲ', 'wo', 'w', 'ヲ', 'wo', 'частица (устаревшее употребление)', 'В катакане почти не используется — сохранился только в старых телеграммах и как курьёз. Встретить его в современном тексте практически невозможно.'),
  char('kata-n', 'ン', 'n', 'w', 'パン', 'pan', 'хлеб', 'Похож на ソ (so) и ツ (tsu) — различай по направлению штриха.'),
]

export const KATAKANA_ROWS: { key: string; label: string }[] = [
  { key: 'vowels', label: 'Гласные' },
  { key: 'k', label: 'Ряд K' },
  { key: 's', label: 'Ряд S' },
  { key: 't', label: 'Ряд T' },
  { key: 'n', label: 'Ряд N' },
  { key: 'h', label: 'Ряд H' },
  { key: 'm', label: 'Ряд M' },
  { key: 'y', label: 'Ряд Y' },
  { key: 'r', label: 'Ряд R' },
  { key: 'w', label: 'Ряд W и Н' },
]
