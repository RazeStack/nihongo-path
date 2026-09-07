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
  char('hira-he', 'へ', 'he', 'h', 'へや', 'heya', 'комната', 'Как частица направления («в сторону, куда») читается «e» — так же, как частица は читается «wa». Это тоже грамматическое правило, а не альтернативное чтение самого знака.'),
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

  // Дакутэн (゛) — два маленьких штриха в правом верхнем углу превращают глухой согласный в звонкий.
  char('hira-ga', 'が', 'ga', 'dakuten-g', 'がいこく', 'gaikoku', 'заграница'),
  char('hira-gi', 'ぎ', 'gi', 'dakuten-g', 'ぎんこう', 'ginkou', 'банк'),
  char('hira-gu', 'ぐ', 'gu', 'dakuten-g', 'どうぐ', 'dougu', 'инструмент, приспособление'),
  char('hira-ge', 'げ', 'ge', 'dakuten-g', 'げんき', 'genki', 'бодрый, здоровый'),
  char('hira-go', 'ご', 'go', 'dakuten-g', 'ごはん', 'gohan', 'рис / еда'),

  char('hira-za', 'ざ', 'za', 'dakuten-z', 'ざっし', 'zasshi', 'журнал'),
  char('hira-ji', 'じ', 'ji', 'dakuten-z', 'じかん', 'jikan', 'время'),
  char('hira-zu', 'ず', 'zu', 'dakuten-z', 'かず', 'kazu', 'количество, число'),
  char('hira-ze', 'ぜ', 'ze', 'dakuten-z', 'かぜ', 'kaze', 'ветер / простуда'),
  char('hira-zo', 'ぞ', 'zo', 'dakuten-z', 'ぞう', 'zou', 'слон'),

  char('hira-da', 'だ', 'da', 'dakuten-d', 'だいがく', 'daigaku', 'университет'),
  char('hira-dji', 'ぢ', 'ji', 'dakuten-d', 'はなぢ', 'hanaji', 'носовое кровотечение', 'Звучит абсолютно так же, как じ. Пишется ぢ только тогда, когда знак исторически получен озвончением ち внутри сложного слова (鼻+血 → はなぢ) — в самостоятельных словах вместо этого звука почти всегда пишут じ.'),
  char('hira-dzu', 'づ', 'zu', 'dakuten-d', 'つづく', 'tsuzuku', 'продолжаться', 'Звучит абсолютно так же, как ず. Пишется づ в основном при озвончении つ на стыке частей слова или при удвоении корня (続く, つづみ) — во всех остальных случаях этот звук пишут ず.'),
  char('hira-de', 'で', 'de', 'dakuten-d', 'でんわ', 'denwa', 'телефон'),
  char('hira-do', 'ど', 'do', 'dakuten-d', 'どようび', 'doyoubi', 'суббота'),

  char('hira-ba', 'ば', 'ba', 'dakuten-b', 'ばしょ', 'basho', 'место'),
  char('hira-bi', 'び', 'bi', 'dakuten-b', 'たび', 'tabi', 'путешествие'),
  char('hira-bu', 'ぶ', 'bu', 'dakuten-b', 'ぶんか', 'bunka', 'культура'),
  char('hira-be', 'べ', 'be', 'dakuten-b', 'べつ', 'betsu', 'отдельный, другой'),
  char('hira-bo', 'ぼ', 'bo', 'dakuten-b', 'ぼうし', 'boushi', 'шляпа'),

  // Хандакутэн (゜) — маленький кружок превращает は-ряд в ряд «п».
  char('hira-pa', 'ぱ', 'pa', 'handakuten-p', 'いっぱい', 'ippai', 'полный, много', 'Ряд P почти не встречается в исконно японских словах — в основном это заимствования и ономатопея (звукоподражания).'),
  char('hira-pi', 'ぴ', 'pi', 'handakuten-p', 'えんぴつ', 'enpitsu', 'карандаш'),
  char('hira-pu', 'ぷ', 'pu', 'handakuten-p', 'きっぷ', 'kippu', 'билет'),
  char('hira-pe', 'ぺ', 'pe', 'handakuten-p', 'かんぺき', 'kanpeki', 'совершенный, идеальный'),
  char('hira-po', 'ぽ', 'po', 'handakuten-p', 'さんぽ', 'sanpo', 'прогулка'),

  // Ёон — маленькие や/ゆ/よ после знаков на -i сливаются с ними в один слог.
  char('hira-kya', 'きゃ', 'kya', 'yoon-k', 'きゃく', 'kyaku', 'гость, клиент'),
  char('hira-kyu', 'きゅ', 'kyu', 'yoon-k', 'きゅうり', 'kyuuri', 'огурец'),
  char('hira-kyo', 'きょ', 'kyo', 'yoon-k', 'きょう', 'kyou', 'сегодня'),

  char('hira-sha', 'しゃ', 'sha', 'yoon-s', 'かいしゃ', 'kaisha', 'компания'),
  char('hira-shu', 'しゅ', 'shu', 'yoon-s', 'しゅみ', 'shumi', 'хобби'),
  char('hira-sho', 'しょ', 'sho', 'yoon-s', 'しょくじ', 'shokuji', 'приём пищи'),

  char('hira-cha', 'ちゃ', 'cha', 'yoon-t', 'おちゃ', 'ocha', 'чай'),
  char('hira-chu', 'ちゅ', 'chu', 'yoon-t', 'ちゅうい', 'chuui', 'внимание, осторожность'),
  char('hira-cho', 'ちょ', 'cho', 'yoon-t', 'ちょうど', 'choudo', 'точно, как раз'),

  char('hira-nya', 'にゃ', 'nya', 'yoon-n', 'こんにゃく', 'konnyaku', 'конняку (желе из корня коньяку)'),
  char('hira-nyu', 'にゅ', 'nyu', 'yoon-n', 'にゅうがく', 'nyuugaku', 'поступление в учебное заведение'),
  char('hira-nyo', 'にょ', 'nyo', 'yoon-n', 'にょう', 'nyou', 'моча', 'Один из самых редких слогов хираганы — почти не встречается за пределами этого и ещё пары медицинских слов.'),

  char('hira-hya', 'ひゃ', 'hya', 'yoon-h', 'ひゃく', 'hyaku', 'сто'),
  char('hira-hyu', 'ひゅ', 'hyu', 'yoon-h', 'ひゅうひゅう', 'hyuuhyuu', 'свист ветра (звукоподражание)', 'Очень редкий слог — встречается почти исключительно в звукоподражаниях.'),
  char('hira-hyo', 'ひょ', 'hyo', 'yoon-h', 'ひょう', 'hyou', 'таблица'),

  char('hira-mya', 'みゃ', 'mya', 'yoon-m', 'みゃく', 'myaku', 'пульс'),
  char('hira-myu', 'みゅ', 'myu', 'yoon-m', 'みゅーじあむ', 'myuujiamu', 'музей', 'Практически не встречается в родных японских словах — используется почти исключительно для передачи иностранных слов вроде «мьюзиум»; обычно такие слова пишут катаканой (ミュージアム).'),
  char('hira-myo', 'みょ', 'myo', 'yoon-m', 'みょうじ', 'myouji', 'фамилия'),

  char('hira-rya', 'りゃ', 'rya', 'yoon-r', 'しょうりゃく', 'shouryaku', 'сокращение, опущение'),
  char('hira-ryu', 'りゅ', 'ryu', 'yoon-r', 'りゅう', 'ryuu', 'дракон'),
  char('hira-ryo', 'りょ', 'ryo', 'yoon-r', 'りょこう', 'ryokou', 'путешествие, поездка'),

  char('hira-gya', 'ぎゃ', 'gya', 'yoon-g', 'ぎゃく', 'gyaku', 'обратный, противоположный'),
  char('hira-gyu', 'ぎゅ', 'gyu', 'yoon-g', 'ぎゅうにゅう', 'gyuunyuu', 'молоко'),
  char('hira-gyo', 'ぎょ', 'gyo', 'yoon-g', 'きんぎょ', 'kingyo', 'золотая рыбка'),

  char('hira-ja', 'じゃ', 'ja', 'yoon-j', 'じゃま', 'jama', 'помеха'),
  char('hira-ju', 'じゅ', 'ju', 'yoon-j', 'じゅぎょう', 'jugyou', 'урок, занятие'),
  char('hira-jo', 'じょ', 'jo', 'yoon-j', 'じょうず', 'jouzu', 'умелый, искусный'),

  char('hira-bya', 'びゃ', 'bya', 'yoon-b', 'さんびゃく', 'sanbyaku', 'триста'),
  char('hira-byu', 'びゅ', 'byu', 'yoon-b', 'びゅーびゅー', 'byuubyuu', 'вой сильного ветра (звукоподражание)', 'Очень редкий слог — почти всегда только в звукоподражаниях.'),
  char('hira-byo', 'びょ', 'byo', 'yoon-b', 'びょうき', 'byouki', 'болезнь'),

  char('hira-pya', 'ぴゃ', 'pya', 'yoon-p', 'ろっぴゃく', 'roppyaku', 'шестьсот'),
  char('hira-pyu', 'ぴゅ', 'pyu', 'yoon-p', 'ぴゅーぴゅー', 'pyuupyuu', 'свист ветра или брызг (звукоподражание)'),
  char('hira-pyo', 'ぴょ', 'pyo', 'yoon-p', 'ぴょんぴょん', 'pyonpyon', 'прыг-прыг (звукоподражание)'),
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
  { key: 'dakuten-g', label: 'Дакутэн: が-ряд' },
  { key: 'dakuten-z', label: 'Дакутэн: ざ-ряд' },
  { key: 'dakuten-d', label: 'Дакутэн: だ-ряд' },
  { key: 'dakuten-b', label: 'Дакутэн: ば-ряд' },
  { key: 'handakuten-p', label: 'Хандакутэн: ぱ-ряд' },
  { key: 'yoon-k', label: 'Ёон: きゃ きゅ きょ' },
  { key: 'yoon-s', label: 'Ёон: しゃ しゅ しょ' },
  { key: 'yoon-t', label: 'Ёон: ちゃ ちゅ ちょ' },
  { key: 'yoon-n', label: 'Ёон: にゃ にゅ にょ' },
  { key: 'yoon-h', label: 'Ёон: ひゃ ひゅ ひょ' },
  { key: 'yoon-m', label: 'Ёон: みゃ みゅ みょ' },
  { key: 'yoon-r', label: 'Ёон: りゃ りゅ りょ' },
  { key: 'yoon-g', label: 'Ёон: ぎゃ ぎゅ ぎょ' },
  { key: 'yoon-j', label: 'Ёон: じゃ じゅ じょ' },
  { key: 'yoon-b', label: 'Ёон: びゃ びゅ びょ' },
  { key: 'yoon-p', label: 'Ёон: ぴゃ ぴゅ ぴょ' },
]
