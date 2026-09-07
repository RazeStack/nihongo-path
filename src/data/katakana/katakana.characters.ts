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

  // Дакутэн (゛) — те же звонкие пары, что и в хирагане, но угловатым начертанием.
  char('kata-ga', 'ガ', 'ga', 'dakuten-g', 'ガム', 'gamu', 'жвачка'),
  char('kata-gi', 'ギ', 'gi', 'dakuten-g', 'ギター', 'gita-', 'гитара'),
  char('kata-gu', 'グ', 'gu', 'dakuten-g', 'グラス', 'gurasu', 'стакан'),
  char('kata-ge', 'ゲ', 'ge', 'dakuten-g', 'ゲーム', 'ge-mu', 'игра'),
  char('kata-go', 'ゴ', 'go', 'dakuten-g', 'ゴム', 'gomu', 'резина'),

  char('kata-za', 'ザ', 'za', 'dakuten-z', 'ピザ', 'piza', 'пицца'),
  char('kata-ji', 'ジ', 'ji', 'dakuten-z', 'ジュース', 'ju-su', 'сок'),
  char('kata-zu', 'ズ', 'zu', 'dakuten-z', 'サイズ', 'saizu', 'размер'),
  char('kata-ze', 'ゼ', 'ze', 'dakuten-z', 'ゼロ', 'zero', 'ноль'),
  char('kata-zo', 'ゾ', 'zo', 'dakuten-z', 'ゾーン', 'zo-n', 'зона'),

  char('kata-da', 'ダ', 'da', 'dakuten-d', 'ダンス', 'dansu', 'танец'),
  char('kata-dji', 'ヂ', 'ji', 'dakuten-d', 'ヂ', 'ji', 'редкий вариант знака じ', 'В катакане практически не используется — заимствованные слова со звуком «джи» почти всегда пишут через ジ.'),
  char('kata-dzu', 'ヅ', 'zu', 'dakuten-d', 'ヅ', 'zu', 'редкий вариант знака ズ', 'В катакане почти не встречается — вместо него используют ズ.'),
  char('kata-de', 'デ', 'de', 'dakuten-d', 'デパート', 'depa-to', 'универмаг'),
  char('kata-do', 'ド', 'do', 'dakuten-d', 'ドア', 'doa', 'дверь'),

  char('kata-ba', 'バ', 'ba', 'dakuten-b', 'バス', 'basu', 'автобус'),
  char('kata-bi', 'ビ', 'bi', 'dakuten-b', 'テレビ', 'terebi', 'телевизор'),
  char('kata-bu', 'ブ', 'bu', 'dakuten-b', 'ブログ', 'burogu', 'блог'),
  char('kata-be', 'ベ', 'be', 'dakuten-b', 'ベッド', 'beddo', 'кровать'),
  char('kata-bo', 'ボ', 'bo', 'dakuten-b', 'ボタン', 'botan', 'кнопка'),

  // Хандакутэн (゜) — ряд P: в катакане встречается гораздо чаще, чем в хирагане, потому что заимствований со звуком «п» очень много.
  char('kata-pa', 'パ', 'pa', 'handakuten-p', 'パン', 'pan', 'хлеб'),
  char('kata-pi', 'ピ', 'pi', 'handakuten-p', 'ピアノ', 'piano', 'пианино'),
  char('kata-pu', 'プ', 'pu', 'handakuten-p', 'プール', 'pu-ru', 'бассейн'),
  char('kata-pe', 'ペ', 'pe', 'handakuten-p', 'ペン', 'pen', 'ручка'),
  char('kata-po', 'ポ', 'po', 'handakuten-p', 'ポスト', 'posuto', 'почтовый ящик'),

  // Ёон — те же слитные слоги, что и в хирагане.
  char('kata-kya', 'キャ', 'kya', 'yoon-k', 'キャンプ', 'kyanpu', 'кемпинг, поход'),
  char('kata-kyu', 'キュ', 'kyu', 'yoon-k', 'キュー', 'kyu-', 'очередь / кий'),
  char('kata-kyo', 'キョ', 'kyo', 'yoon-k', 'トウキョウ', 'toukyou', 'Токио (иногда встречается катаканой в стилизованных надписях)'),

  char('kata-sha', 'シャ', 'sha', 'yoon-s', 'シャツ', 'shatsu', 'рубашка'),
  char('kata-shu', 'シュ', 'shu', 'yoon-s', 'シュークリーム', 'shu-kuri-mu', 'заварное пирожное'),
  char('kata-sho', 'ショ', 'sho', 'yoon-s', 'ショップ', 'shoppu', 'магазин'),

  char('kata-cha', 'チャ', 'cha', 'yoon-t', 'チャンス', 'chansu', 'шанс'),
  char('kata-chu', 'チュ', 'chu', 'yoon-t', 'チューブ', 'chu-bu', 'тюбик'),
  char('kata-cho', 'チョ', 'cho', 'yoon-t', 'チョコレート', 'chokore-to', 'шоколад'),

  char('kata-nya', 'ニャ', 'nya', 'yoon-n', 'コンニャク', 'konnyaku', 'конняку (то же слово, что и в хирагане, иногда пишут катаканой)'),
  char('kata-nyu', 'ニュ', 'nyu', 'yoon-n', 'ニュース', 'nyu-su', 'новости'),
  char('kata-nyo', 'ニョ', 'nyo', 'yoon-n', 'ニョッキ', 'nyokki', 'ньокки (блюдо)'),

  char('kata-hya', 'ヒャ', 'hya', 'yoon-h', 'ヒャッハー', 'hyahha-', 'возглас азарта/безумия (в основном в комиксах)', 'Редкий слог, чаще встречается в звукоподражаниях и репликах персонажей, чем в обычной лексике.'),
  char('kata-hyu', 'ヒュ', 'hyu', 'yoon-h', 'ヒューズ', 'hyu-zu', 'предохранитель'),
  char('kata-hyo', 'ヒョ', 'hyo', 'yoon-h', 'ヒョウ', 'hyou', 'леопард'),

  char('kata-mya', 'ミャ', 'mya', 'yoon-m', 'ミャンマー', 'myanma-', 'Мьянма'),
  char('kata-myu', 'ミュ', 'myu', 'yoon-m', 'ミュージック', 'myu-jikku', 'музыка'),
  char('kata-myo', 'ミョ', 'myo', 'yoon-m', 'ミョウガ', 'myouga', 'мёга (японский имбирь, часто пишут катаканой)'),

  char('kata-rya', 'リャ', 'rya', 'yoon-r', 'リャマ', 'ryama', 'лама (животное)'),
  char('kata-ryu', 'リュ', 'ryu', 'yoon-r', 'リュック', 'ryukku', 'рюкзак'),
  char('kata-ryo', 'リョ', 'ryo', 'yoon-r', 'リョコウ', 'ryokou', '«путешествие» — то же слово, что りょこう, иногда пишут катаканой для стиля'),

  char('kata-gya', 'ギャ', 'gya', 'yoon-g', 'ギャグ', 'gyagu', 'шутка, гэг'),
  char('kata-gyu', 'ギュ', 'gyu', 'yoon-g', 'ギュウニュウ', 'gyuunyuu', '«молоко» — то же слово, что ぎゅうにゅう'),
  char('kata-gyo', 'ギョ', 'gyo', 'yoon-g', 'ギョーザ', 'gyo-za', 'гёдза (пельмени)'),

  char('kata-ja', 'ジャ', 'ja', 'yoon-j', 'ジャム', 'jamu', 'варенье'),
  char('kata-ju', 'ジュ', 'ju', 'yoon-j', 'ジュース', 'ju-su', 'сок'),
  char('kata-jo', 'ジョ', 'jo', 'yoon-j', 'ジョギング', 'jogingu', 'бег трусцой'),

  char('kata-bya', 'ビャ', 'bya', 'yoon-b', 'ビャクダン', 'byakudan', 'сандаловое дерево', 'Редкий слог даже в катакане — почти не встречается за пределами узкоспециальных терминов.'),
  char('kata-byu', 'ビュ', 'byu', 'yoon-b', 'インタビュー', 'intabyu-', 'интервью'),
  char('kata-byo', 'ビョ', 'byo', 'yoon-b', 'ビョウ', 'byou', 'кнопка-гвоздик (канцелярская)'),

  char('kata-pya', 'ピャ', 'pya', 'yoon-p', 'ピャ', 'pya', 'редкий слог без устоявшегося частотного слова', 'Один из самых редких слогов всей системы письма — практически не встречается даже в заимствованиях.'),
  char('kata-pyu', 'ピュ', 'pyu', 'yoon-p', 'コンピューター', 'konpyu-ta-', 'компьютер'),
  char('kata-pyo', 'ピョ', 'pyo', 'yoon-p', 'ピョンヤン', 'pyonyan', 'Пхеньян'),

  // Расширенная катакана — сочетания для звуков, которых нет в стандартном годзюон,
  // но которые нужны, чтобы точнее передавать иностранные слова (v, f+гласный, ti/di, wi/we/wo и т.п.).
  char('kata-fa', 'ファ', 'fa', 'ext-f', 'ファン', 'fan', 'фанат / вентилятор'),
  char('kata-fi', 'フィ', 'fi', 'ext-f', 'フィルム', 'firumu', 'плёнка'),
  char('kata-fe', 'フェ', 'fe', 'ext-f', 'フェス', 'fesu', 'фестиваль'),
  char('kata-fo', 'フォ', 'fo', 'ext-f', 'フォーク', 'fo-ku', 'вилка'),

  char('kata-va', 'ヴァ', 'va', 'ext-v', 'ヴァイオリン', 'vaiorin', 'скрипка', 'Знак ヴ (u с дакутэн) передаёт звук «v», которого нет в родной японской фонетике. Многие носители на практике произносят его как «b» — バイオリン тоже широко встречается.'),
  char('kata-vi', 'ヴィ', 'vi', 'ext-v', 'ヴィーガン', 'vi-gan', 'веган'),
  char('kata-vu', 'ヴ', 'vu', 'ext-v', 'ヴ', 'vu', 'звук «v» без гласного, основа для всего ряда ヴ'),
  char('kata-ve', 'ヴェ', 've', 'ext-v', 'ヴェール', 've-ru', 'вуаль'),
  char('kata-vo', 'ヴォ', 'vo', 'ext-v', 'ヴォーカル', 'vo-karu', 'вокал'),

  char('kata-ti', 'ティ', 'ti', 'ext-t', 'パーティー', 'pa-ti-', 'вечеринка', 'Передаёт «ти» отдельно от «chi» (チ) — нужен, чтобы не терять разницу между этими звуками в заимствованиях.'),
  char('kata-di', 'ディ', 'di', 'ext-t', 'ディズニー', 'dizuni-', 'Дисней'),
  char('kata-tu', 'トゥ', 'tu', 'ext-t', 'トゥデイ', 'tudei', '«сегодня» (today, редко, в основном в названиях)'),
  char('kata-du', 'ドゥ', 'du', 'ext-t', 'ヒンドゥー', 'hindu-', 'индуистский (как в ヒンドゥー教)'),

  char('kata-wi', 'ウィ', 'wi', 'ext-w', 'ウィンドウ', 'windou', 'окно (напр. в интерфейсе)'),
  char('kata-we', 'ウェ', 'we', 'ext-w', 'ウェブ', 'webu', 'веб'),
  char('kata-wo2', 'ウォ', 'wo', 'ext-w', 'ウォーター', 'wo-ta-', 'вода (water, в названиях брендов и т.п.)'),

  char('kata-she', 'シェ', 'she', 'ext-sh', 'シェフ', 'shefu', 'шеф-повар'),
  char('kata-je', 'ジェ', 'je', 'ext-sh', 'ジェット', 'jetto', 'реактивный самолёт'),
  char('kata-che', 'チェ', 'che', 'ext-sh', 'チェック', 'chekku', 'проверка / клетчатый узор'),
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
  { key: 'dakuten-g', label: 'Дакутэн: ガ-ряд' },
  { key: 'dakuten-z', label: 'Дакутэн: ザ-ряд' },
  { key: 'dakuten-d', label: 'Дакутэн: ダ-ряд' },
  { key: 'dakuten-b', label: 'Дакутэн: バ-ряд' },
  { key: 'handakuten-p', label: 'Хандакутэн: パ-ряд' },
  { key: 'yoon-k', label: 'Ёон: キャ キュ キョ' },
  { key: 'yoon-s', label: 'Ёон: シャ シュ ショ' },
  { key: 'yoon-t', label: 'Ёон: チャ チュ チョ' },
  { key: 'yoon-n', label: 'Ёон: ニャ ニュ ニョ' },
  { key: 'yoon-h', label: 'Ёон: ヒャ ヒュ ヒョ' },
  { key: 'yoon-m', label: 'Ёон: ミャ ミュ ミョ' },
  { key: 'yoon-r', label: 'Ёон: リャ リュ リョ' },
  { key: 'yoon-g', label: 'Ёон: ギャ ギュ ギョ' },
  { key: 'yoon-j', label: 'Ёон: ジャ ジュ ジョ' },
  { key: 'yoon-b', label: 'Ёон: ビャ ビュ ビョ' },
  { key: 'yoon-p', label: 'Ёон: ピャ ピュ ピョ' },
  { key: 'ext-f', label: 'Расширенная катакана: ФА ФИ ФЕ ФО' },
  { key: 'ext-v', label: 'Расширенная катакана: ヴ (звук V)' },
  { key: 'ext-t', label: 'Расширенная катакана: ТИ ДИ ТУ ДУ' },
  { key: 'ext-w', label: 'Расширенная катакана: ウィ ウェ ウォ' },
  { key: 'ext-sh', label: 'Расширенная катакана: シェ ジェ チェ' },
]
