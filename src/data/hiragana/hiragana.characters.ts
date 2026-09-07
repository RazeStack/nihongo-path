import type { KanaChar } from '@/types/content'

function char(id: string, char: string, romaji: string, row: string, japanese: string, exampleRomaji: string, translation: string, note?: string): KanaChar {
  return { id, char, romaji, script: 'hiragana', row, example: { japanese, romaji: exampleRomaji, translation }, note }
}

/** Базовые 46 знаков годзюон, сгруппированные по рядам — так же, как их учат в любом учебнике. */
export const HIRAGANA_CHARACTERS: KanaChar[] = [
  char('hira-a', 'あ', 'a', 'vowels', 'あさ', 'asa', 'утро'),
  char('hira-i', 'い', 'i', 'vowels', 'いぬ', 'inu', 'собака'),
  char('hira-u', 'う', 'u', 'vowels', 'うみ', 'umi', 'море'),
  char('hira-e', 'え', 'e', 'vowels', 'えき', 'eki', 'станция'),
  char('hira-o', 'お', 'o', 'vowels', 'おかね', 'okane', 'деньги'),

  char('hira-ka', 'か', 'ka', 'k', 'かさ', 'kasa', 'зонт'),
  char('hira-ki', 'き', 'ki', 'k', 'きつね', 'kitsune', 'лиса'),
  char('hira-ku', 'く', 'ku', 'k', 'くつ', 'kutsu', 'обувь'),
  char('hira-ke', 'け', 'ke', 'k', 'けさ', 'kesa', 'сегодня утром'),
  char('hira-ko', 'こ', 'ko', 'k', 'こども', 'kodomo', 'ребёнок'),

  char('hira-sa', 'さ', 'sa', 's', 'さかな', 'sakana', 'рыба'),
  char('hira-shi', 'し', 'shi', 's', 'しろ', 'shiro', 'белый', 'Читается «щи»-подобно, а не «си» — не путай с суффиксом романизации.'),
  char('hira-su', 'す', 'su', 's', 'すし', 'sushi', 'суши'),
  char('hira-se', 'せ', 'se', 's', 'せんせい', 'sensei', 'учитель'),
  char('hira-so', 'そ', 'so', 's', 'そら', 'sora', 'небо'),

  char('hira-ta', 'た', 'ta', 't', 'たまご', 'tamago', 'яйцо'),
  char('hira-chi', 'ち', 'chi', 't', 'ちず', 'chizu', 'карта', 'Читается «чи», выбивается из ряда た-た-た-те-то.'),
  char('hira-tsu', 'つ', 'tsu', 't', 'つき', 'tsuki', 'луна', 'Читается «цу», а не «ту».'),
  char('hira-te', 'て', 'te', 't', 'てがみ', 'tegami', 'письмо'),
  char('hira-to', 'と', 'to', 't', 'とり', 'tori', 'птица'),

  char('hira-na', 'な', 'na', 'n', 'なつ', 'natsu', 'лето'),
  char('hira-ni', 'に', 'ni', 'n', 'にく', 'niku', 'мясо'),
  char('hira-nu', 'ぬ', 'nu', 'n', 'ぬの', 'nuno', 'ткань'),
  char('hira-ne', 'ね', 'ne', 'n', 'ねこ', 'neko', 'кошка'),
  char('hira-no', 'の', 'no', 'n', 'のみもの', 'nomimono', 'напиток'),

  char('hira-ha', 'は', 'ha', 'h', 'はな', 'hana', 'цветок', 'Как частица темы читается «wa» — это отдельное грамматическое правило, не свойство самого знака.'),
  char('hira-hi', 'ひ', 'hi', 'h', 'ひと', 'hito', 'человек'),
  char('hira-fu', 'ふ', 'fu', 'h', 'ふゆ', 'fuyu', 'зима', 'Читается мягко, среднее между «фу» и «ху».'),
  char('hira-he', 'へ', 'he', 'h', 'へや', 'heya', 'комната'),
  char('hira-ho', 'ほ', 'ho', 'h', 'ほん', 'hon', 'книга'),

  char('hira-ma', 'ま', 'ma', 'm', 'まど', 'mado', 'окно'),
  char('hira-mi', 'み', 'mi', 'm', 'みず', 'mizu', 'вода'),
  char('hira-mu', 'む', 'mu', 'm', 'むし', 'mushi', 'насекомое'),
  char('hira-me', 'め', 'me', 'm', 'めがね', 'megane', 'очки'),
  char('hira-mo', 'も', 'mo', 'm', 'もも', 'momo', 'персик'),

  char('hira-ya', 'や', 'ya', 'y', 'やま', 'yama', 'гора'),
  char('hira-yu', 'ゆ', 'yu', 'y', 'ゆき', 'yuki', 'снег'),
  char('hira-yo', 'よ', 'yo', 'y', 'よる', 'yoru', 'ночь'),

  char('hira-ra', 'ら', 'ra', 'r', 'らいねん', 'rainen', 'следующий год'),
  char('hira-ri', 'り', 'ri', 'r', 'りんご', 'ringo', 'яблоко'),
  char('hira-ru', 'る', 'ru', 'r', 'るす', 'rusu', 'отсутствие дома'),
  char('hira-re', 'れ', 're', 'r', 'れきし', 'rekishi', 'история'),
  char('hira-ro', 'ろ', 'ro', 'r', 'ろうそく', 'rousoku', 'свеча'),

  char('hira-wa', 'わ', 'wa', 'w', 'わたし', 'watashi', 'я'),
  char('hira-wo', 'を', 'wo', 'w', '水を', 'mizu wo', 'воду (частица объекта)', 'Произносится так же, как お. Сегодня используется почти исключительно как частица-показатель объекта действия — отдельный знак для чтения слов не нужен.'),
  char('hira-n', 'ん', 'n', 'w', 'みかん', 'mikan', 'мандарин', 'Единственный знак хираганы, обозначающий согласный без гласной. Никогда не стоит в начале слова.'),
]

export const HIRAGANA_ROWS: { key: string; label: string }[] = [
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
