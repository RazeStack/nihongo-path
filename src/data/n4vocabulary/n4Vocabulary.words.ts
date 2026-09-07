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
    jlptLevel: 'n4',
    category,
    japanese,
    kana,
    romaji,
    translation,
    example: { japanese: exampleJapanese, romaji: exampleRomaji, translation: exampleTranslation },
  }
}

export const N4_VOCAB_CATEGORIES = [
  'Работа',
  'Учёба',
  'Природа и погода',
  'Эмоции',
  'Абстрактные понятия',
  'Общество и культура',
  'Технологии и медиа',
  'Отношения',
  'Путешествия',
  'Здоровье и спорт',
  'Личность и характер',
  'Глаголы',
  'Прилагательные',
  'Наречия',
  'Повседневные ситуации',
  'Еда',
] as const

/** Более 600 слов N4 — на ступень абстрактнее N5: работа, учёба, погода, чувства, общество, технологии, отношения и другие темы. */
export const N4_VOCABULARY_WORDS: VocabWord[] = [
  // Работа
  word('n4voc-shigoto', 'Работа', '仕事', 'しごと', 'shigoto', 'работа', '毎日仕事に行きます。', 'Mainichi shigoto ni ikimasu.', 'Каждый день хожу на работу.'),
  word('n4voc-kaisha', 'Работа', '会社', 'かいしゃ', 'kaisha', 'компания', '会社で働きます。', 'Kaisha de hatarakimasu.', 'Работаю в компании.'),
  word('n4voc-hataraku', 'Работа', '働く', 'はたらく', 'hataraku', 'работать', '毎日働きます。', 'Mainichi hatarakimasu.', 'Работаю каждый день.'),
  word('n4voc-kyuuryou', 'Работа', '給料', 'きゅうりょう', 'kyuuryou', 'зарплата', '給料をもらいます。', 'Kyuuryou wo moraimasu.', 'Получаю зарплату.'),
  word('n4voc-yasumi', 'Работа', '休み', 'やすみ', 'yasumi', 'выходной, отпуск', '明日は休みです。', 'Ashita wa yasumi desu.', 'Завтра выходной.'),
  word('n4voc-isogashii', 'Работа', '忙しい', 'いそがしい', 'isogashii', 'занятой', '今日は忙しいです。', 'Kyou wa isogashii desu.', 'Сегодня я занят.'),

  // Учёба
  word('n4voc-shiken', 'Учёба', '試験', 'しけん', 'shiken', 'экзамен', '明日試験があります。', 'Ashita shiken ga arimasu.', 'Завтра экзамен.'),
  word('n4voc-shukudai', 'Учёба', '宿題', 'しゅくだい', 'shukudai', 'домашнее задание', '宿題をします。', 'Shukudai wo shimasu.', 'Делаю домашнее задание.'),
  word('n4voc-oboeru', 'Учёба', '覚える', 'おぼえる', 'oboeru', 'запоминать', '単語を覚えます。', 'Tango wo oboemasu.', 'Запоминаю слова.'),
  word('n4voc-oshieru', 'Учёба', '教える', 'おしえる', 'oshieru', 'учить, преподавать', '先生が日本語を教えます。', 'Sensei ga nihongo wo oshiemasu.', 'Учитель преподаёт японский.'),
  word('n4voc-wakaru', 'Учёба', '分かる', 'わかる', 'wakaru', 'понимать', '質問が分かりません。', 'Shitsumon ga wakarimasen.', 'Не понимаю вопрос.'),
  word('n4voc-muzukashii', 'Учёба', '難しい', 'むずかしい', 'muzukashii', 'трудный', 'この試験は難しいです。', 'Kono shiken wa muzukashii desu.', 'Этот экзамен трудный.'),

  // Природа и погода
  word('n4voc-tenki', 'Природа и погода', '天気', 'てんき', 'tenki', 'погода', '今日はいい天気です。', 'Kyou wa ii tenki desu.', 'Сегодня хорошая погода.'),
  word('n4voc-ame', 'Природа и погода', '雨', 'あめ', 'ame', 'дождь', '明日雨が降るそうです。', 'Ashita ame ga furu sou desu.', 'Говорят, завтра будет дождь.'),
  word('n4voc-yuki', 'Природа и погода', '雪', 'ゆき', 'yuki', 'снег', '雪が降っています。', 'Yuki ga futteimasu.', 'Идёт снег.'),
  word('n4voc-hare', 'Природа и погода', '晴れ', 'はれ', 'hare', 'ясная погода', '明日は晴れです。', 'Ashita wa hare desu.', 'Завтра ясно.'),
  word('n4voc-kaze', 'Природа и погода', '風', 'かぜ', 'kaze', 'ветер', '風が強いです。', 'Kaze ga tsuyoi desu.', 'Ветер сильный.'),
  word('n4voc-sora', 'Природа и погода', '空', 'そら', 'sora', 'небо', '空が青いです。', 'Sora ga aoi desu.', 'Небо голубое.'),

  // Эмоции
  word('n4voc-ureshii', 'Эмоции', '嬉しい', 'うれしい', 'ureshii', 'радостный', '会えて嬉しいです。', 'Aete ureshii desu.', 'Рад встрече.'),
  word('n4voc-kanashii', 'Эмоции', '悲しい', 'かなしい', 'kanashii', 'грустный', '悲しい映画でした。', 'Kanashii eiga deshita.', 'Это был грустный фильм.'),
  word('n4voc-shinpai', 'Эмоции', '心配', 'しんぱい', 'shinpai', 'беспокойство', '心配しないでください。', 'Shinpai shinaide kudasai.', 'Не волнуйтесь.'),
  word('n4voc-bikkuri', 'Эмоции', 'びっくりする', 'びっくりする', 'bikkuri suru', 'удивляться', 'そのニュースにびっくりしました。', 'Sono nyuusu ni bikkuri shimashita.', 'Удивился этой новости.'),
  word('n4voc-tanoshii', 'Эмоции', '楽しい', 'たのしい', 'tanoshii', 'весёлый, приятный', '旅行は楽しかったです。', 'Ryokou wa tanoshikatta desu.', 'Поездка была весёлая.'),
  word('n4voc-kowai', 'Эмоции', '怖い', 'こわい', 'kowai', 'страшный', 'この映画は怖いです。', 'Kono eiga wa kowai desu.', 'Этот фильм страшный.'),

  // Абстрактные понятия
  word('n4voc-imi', 'Абстрактные понятия', '意味', 'いみ', 'imi', 'значение', 'この言葉の意味が分かりません。', 'Kono kotoba no imi ga wakarimasen.', 'Не понимаю значение этого слова.'),
  word('n4voc-riyuu', 'Абстрактные понятия', '理由', 'りゆう', 'riyuu', 'причина', '理由を教えてください。', 'Riyuu wo oshiete kudasai.', 'Пожалуйста, скажите причину.'),
  word('n4voc-keiken', 'Абстрактные понятия', '経験', 'けいけん', 'keiken', 'опыт', 'いい経験でした。', 'Ii keiken deshita.', 'Это был хороший опыт.'),
  word('n4voc-yakusoku', 'Абстрактные понятия', '約束', 'やくそく', 'yakusoku', 'обещание', '約束を守ります。', 'Yakusoku wo mamorimasu.', 'Держу обещание.'),
  word('n4voc-kikai', 'Абстрактные понятия', '機会', 'きかい', 'kikai', 'возможность, случай', 'いい機会です。', 'Ii kikai desu.', 'Хорошая возможность.'),
  word('n4voc-hitsuyou', 'Абстрактные понятия', '必要', 'ひつよう', 'hitsuyou', 'необходимость', 'お金が必要です。', 'Okane ga hitsuyou desu.', 'Деньги необходимы.'),

  // Общество и культура
  word('n4voc-shakai', 'Общество и культура', '社会', 'しゃかい', 'shakai', 'общество', '社会について考えます。', 'Shakai ni tsuite kangaemasu.', 'Размышляю об обществе.'),
  word('n4voc-bunka', 'Общество и культура', '文化', 'ぶんか', 'bunka', 'культура', '日本の文化に興味があります。', 'Nihon no bunka ni kyoumi ga arimasu.', 'Интересуюсь японской культурой.'),
  word('n4voc-dentou', 'Общество и культура', '伝統', 'でんとう', 'dentou', 'традиция', '伝統を守ります。', 'Dentou wo mamorimasu.', 'Соблюдаю традиции.'),
  word('n4voc-kankyou', 'Общество и культура', '環境', 'かんきょう', 'kankyou', 'окружающая среда', '環境を守りましょう。', 'Kankyou wo mamorimashou.', 'Давайте беречь окружающую среду.'),
  word('n4voc-shizen', 'Общество и культура', '自然', 'しぜん', 'shizen', 'природа', '自然が好きです。', 'Shizen ga suki desu.', 'Мне нравится природа.'),
  word('n4voc-chikyuu', 'Общество и культура', '地球', 'ちきゅう', 'chikyuu', 'Земля (планета)', '地球は丸いです。', 'Chikyuu wa marui desu.', 'Земля круглая.'),
  word('n4voc-kokusai', 'Общество и культура', '国際', 'こくさい', 'kokusai', 'международный', '国際会議に出席します。', 'Kokusai kaigi ni shusseki shimasu.', 'Присутствую на международной конференции.'),
  word('n4voc-gaikokujin', 'Общество и культура', '外国人', 'がいこくじん', 'gaikokujin', 'иностранец', '外国人がたくさんいます。', 'Gaikokujin ga takusan imasu.', 'Здесь много иностранцев.'),
  word('n4voc-seiji', 'Общество и культура', '政治', 'せいじ', 'seiji', 'политика', '政治に興味がありません。', 'Seiji ni kyoumi ga arimasen.', 'Не интересуюсь политикой.'),
  word('n4voc-keizai', 'Общество и культура', '経済', 'けいざい', 'keizai', 'экономика', '経済のニュースを見ます。', 'Keizai no nyu-su wo mimasu.', 'Смотрю новости экономики.'),
  word('n4voc-houritsu', 'Общество и культура', '法律', 'ほうりつ', 'houritsu', 'закон', '法律を守ります。', 'Houritsu wo mamorimasu.', 'Соблюдаю закон.'),

  // Технологии и медиа
  word('n4voc-keitai', 'Технологии и медиа', '携帯電話', 'けいたいでんわ', 'keitai denwa', 'мобильный телефон', '携帯電話をなくしました。', 'Keitai denwa wo nakushimashita.', 'Потерял(а) мобильный телефон.'),
  word('n4voc-hoomupeji', 'Технологии и медиа', 'ホームページ', 'ホームページ', 'ho-mupe-ji', 'веб-страница', 'ホームページを作ります。', 'Ho-mupe-ji wo tsukurimasu.', 'Создаю веб-страницу.'),
  word('n4voc-koukoku', 'Технологии и медиа', '広告', 'こうこく', 'koukoku', 'реклама', '広告が多いです。', 'Koukoku ga ooi desu.', 'Много рекламы.'),
  word('n4voc-bangumi', 'Технологии и медиа', '番組', 'ばんぐみ', 'bangumi', 'телепрограмма', '面白い番組を見ました。', 'Omoshiroi bangumi wo mimashita.', 'Посмотрел(а) интересную программу.'),
  word('n4voc-housousuru', 'Технологии и медиа', '放送する', 'ほうそうする', 'housou suru', 'вещать, транслировать', 'ニュースを放送します。', 'Nyu-su wo housou shimasu.', 'Транслирую новости.'),
  word('n4voc-kiji', 'Технологии и медиа', '記事', 'きじ', 'kiji', 'статья', '新聞の記事を読みます。', 'Shinbun no kiji wo yomimasu.', 'Читаю газетную статью.'),
  word('n4voc-jouhou', 'Технологии и медиа', '情報', 'じょうほう', 'jouhou', 'информация', '情報を集めます。', 'Jouhou wo atsumemasu.', 'Собираю информацию.'),
  word('n4voc-deeta', 'Технологии и медиа', 'データ', 'データ', 'de-ta', 'данные', 'データを送ります。', 'De-ta wo okurimasu.', 'Отправляю данные.'),

  // Отношения
  word('n4voc-yuujou', 'Отношения', '友情', 'ゆうじょう', 'yuujou', 'дружба', '友情は大切です。', 'Yuujou wa taisetsu desu.', 'Дружба важна.'),
  word('n4voc-tsukiau', 'Отношения', '付き合う', 'つきあう', 'tsukiau', 'встречаться (романтически), общаться', '三年付き合っています。', 'San-nen tsukiatteimasu.', 'Встречаемся три года.'),
  word('n4voc-wakareru', 'Отношения', '別れる', 'わかれる', 'wakareru', 'расставаться', '彼と別れました。', 'Kare to wakaremashita.', 'Рассталась с ним.'),
  word('n4voc-nakagaii', 'Отношения', '仲がいい', 'なかがいい', 'naka ga ii', 'в хороших отношениях', '姉と仲がいいです。', 'Ane to naka ga ii desu.', 'У меня хорошие отношения со старшей сестрой.'),
  word('n4voc-kenkasuru', 'Отношения', 'けんかする', 'けんかする', 'kenka suru', 'ссориться', '友達とけんかしました。', 'Tomodachi to kenka shimashita.', 'Поссорился(-лась) с другом.'),
  word('n4voc-shinraisuru', 'Отношения', '信頼する', 'しんらいする', 'shinrai suru', 'доверять', '彼を信頼しています。', 'Kare wo shinrai shiteimasu.', 'Я доверяю ему.'),

  // Путешествия
  word('n4voc-shucchou', 'Путешествия', '出張', 'しゅっちょう', 'shucchou', 'командировка', '来週出張します。', 'Raishuu shucchou shimasu.', 'На следующей неделе еду в командировку.'),
  word('n4voc-kaigai', 'Путешествия', '海外', 'かいがい', 'kaigai', 'заграница', '海外に住みたいです。', 'Kaigai ni sumitai desu.', 'Хочу жить за границей.'),
  word('n4voc-kikokusuru', 'Путешествия', '帰国する', 'きこくする', 'kikoku suru', 'возвращаться на родину', '来月帰国します。', 'Raigetsu kikoku shimasu.', 'В следующем месяце возвращаюсь на родину.'),

  // Здоровье и спорт
  word('n4voc-daietto', 'Здоровье и спорт', 'ダイエットする', 'ダイエットする', 'daietto suru', 'сидеть на диете', 'ダイエットしています。', 'Daietto shiteimasu.', 'Сижу на диете.'),
  word('n4voc-futoru', 'Здоровье и спорт', '太る', 'ふとる', 'futoru', 'толстеть', '最近太りました。', 'Saikin futorimashita.', 'В последнее время растолстел(а).'),
  word('n4voc-yaseru', 'Здоровье и спорт', '痩せる', 'やせる', 'yaseru', 'худеть', 'ダイエットして痩せました。', 'Daietto shite yasemashita.', 'Похудел(а), сидя на диете.'),
  word('n4voc-undousuru', 'Здоровье и спорт', '運動する', 'うんどうする', 'undou suru', 'заниматься спортом', '毎日運動します。', 'Mainichi undou shimasu.', 'Каждый день занимаюсь спортом.'),
  word('n4voc-tairyoku', 'Здоровье и спорт', '体力', 'たいりょく', 'tairyoku', 'физическая сила, выносливость', '体力がありません。', 'Tairyoku ga arimasen.', 'Нет физической выносливости.'),

  // Личность и характер
  word('n4voc-seikaku', 'Личность и характер', '性格', 'せいかく', 'seikaku', 'характер', 'いい性格です。', 'Ii seikaku desu.', 'Хороший характер.'),
  word('n4voc-majime', 'Личность и характер', 'まじめ', 'まじめ', 'majime', 'серьёзный, добросовестный', 'まじめな学生です。', 'Majime na gakusei desu.', 'Это серьёзный студент.'),
  word('n4voc-ganko', 'Личность и характер', '頑固', 'がんこ', 'ganko', 'упрямый', '祖父は頑固です。', 'Sofu wa ganko desu.', 'Мой дедушка упрямый.'),
  word('n4voc-sunao', 'Личность и характер', '素直', 'すなお', 'sunao', 'послушный, искренний', '素直な子供です。', 'Sunao na kodomo desu.', 'Это послушный ребёнок.'),
  word('n4voc-nonbiri', 'Личность и характер', 'のんびり', 'のんびり', 'nonbiri', 'неторопливый, беззаботный', 'のんびりした性格です。', 'Nonbiri shita seikaku desu.', 'У него неторопливый характер.'),
  word('n4voc-sekkyokuteki', 'Личность и характер', '積極的', 'せっきょくてき', 'sekkyokuteki', 'активный, деятельный', '積極的な人です。', 'Sekkyokuteki na hito desu.', 'Это активный человек.'),
  word('n4voc-shoukyokuteki', 'Личность и характер', '消極的', 'しょうきょくてき', 'shoukyokuteki', 'пассивный, нерешительный', '消極的にならないでください。', 'Shoukyokuteki ni naranaide kudasai.', 'Не будьте пассивным, пожалуйста.'),

  // Глаголы
  word('n4voc-akirameru', 'Глаголы', '諦める', 'あきらめる', 'akirameru', 'сдаваться, отказываться от чего-то', '夢を諦めません。', 'Yume wo akiramemasen.', 'Не откажусь от мечты.'),
  word('n4voc-chousensuru', 'Глаголы', '挑戦する', 'ちょうせんする', 'chousen suru', 'бросать вызов, пробовать', '新しいことに挑戦します。', 'Atarashii koto ni chousen shimasu.', 'Пробую что-то новое.'),
  word('n4voc-shippaisuru', 'Глаголы', '失敗する', 'しっぱいする', 'shippai suru', 'терпеть неудачу', '試験に失敗しました。', 'Shiken ni shippai shimashita.', 'Провалил(а) экзамен.'),
  word('n4voc-seikousuru', 'Глаголы', '成功する', 'せいこうする', 'seikou suru', 'преуспевать, добиваться успеха', '仕事で成功しました。', 'Shigoto de seikou shimashita.', 'Добился(-лась) успеха в работе.'),
  word('n4voc-doryokusuru', 'Глаголы', '努力する', 'どりょくする', 'doryoku suru', 'прилагать усилия', '合格のために努力します。', 'Goukaku no tame ni doryoku shimasu.', 'Прилагаю усилия, чтобы сдать экзамен.'),
  word('n4voc-kotowaru', 'Глаголы', '断る', 'ことわる', 'kotowaru', 'отказывать(ся)', '誘いを断りました。', 'Sasoi wo kotowarimashita.', 'Отказался(-лась) от приглашения.'),
  word('n4voc-kuraberu', 'Глаголы', '比べる', 'くらべる', 'kuraberu', 'сравнивать', '二つを比べます。', 'Futatsu wo kurabemasu.', 'Сравниваю два варианта.'),
  word('n4voc-mayou', 'Глаголы', '迷う', 'まよう', 'mayou', 'колебаться, теряться', 'どちらにするか迷っています。', 'Dochira ni suru ka mayotteimasu.', 'Колеблюсь, что выбрать.'),
  word('n4voc-nayamu', 'Глаголы', '悩む', 'なやむ', 'nayamu', 'переживать, мучиться раздумьями', '将来のことで悩んでいます。', 'Shourai no koto de nayandeimasu.', 'Переживаю о будущем.'),

  // Прилагательные
  word('n4voc-fukuzatsu', 'Прилагательные', '複雑', 'ふくざつ', 'fukuzatsu', 'сложный, запутанный', '複雑な問題です。', 'Fukuzatsu na mondai desu.', 'Это сложная проблема.'),
  word('n4voc-juubun', 'Прилагательные', '十分', 'じゅうぶん', 'juubun', 'достаточный', 'これで十分です。', 'Kore de juubun desu.', 'Этого достаточно.'),
  word('n4voc-fuan', 'Прилагательные', '不安', 'ふあん', 'fuan', 'тревожный, беспокоящийся', '将来が不安です。', 'Shourai ga fuan desu.', 'Тревожусь за будущее.'),
  word('n4voc-zannen', 'Прилагательные', '残念', 'ざんねん', 'zannen', 'досадный, жаль', '残念です。', 'Zannen desu.', 'Как жаль.'),
  word('n4voc-igai', 'Прилагательные', '意外', 'いがい', 'igai', 'неожиданный', '意外な結果でした。', 'Igai na kekka deshita.', 'Это был неожиданный результат.'),
  word('n4voc-tekitou', 'Прилагательные', '適当', 'てきとう', 'tekitou', 'подходящий, приемлемый (иногда — халтурный)', '適当な場所を選びます。', 'Tekitou na basho wo erabimasu.', 'Выбираю подходящее место.'),
  word('n4voc-fushigi', 'Прилагательные', '不思議', 'ふしぎ', 'fushigi', 'удивительный, загадочный', '不思議な話です。', 'Fushigi na hanashi desu.', 'Это загадочная история.'),

  // Наречия
  word('n4voc-yatto', 'Наречия', 'やっと', 'やっと', 'yatto', 'наконец-то', 'やっと終わりました。', 'Yatto owarimashita.', 'Наконец-то закончилось.'),
  word('n4voc-toutou', 'Наречия', 'とうとう', 'とうとう', 'toutou', 'в конце концов, так и не', 'とうとう来ませんでした。', 'Toutou kimasen deshita.', 'Так и не пришёл.'),
  word('n4voc-wazato', 'Наречия', 'わざと', 'わざと', 'wazato', 'нарочно', 'わざと壊しました。', 'Wazato kowashimashita.', 'Сломал(а) нарочно.'),
  word('n4voc-wazawaza', 'Наречия', 'わざわざ', 'わざわざ', 'wazawaza', 'специально ради этого', 'わざわざ来てくれました。', 'Wazawaza kite kuremashita.', 'Специально пришёл ради меня.'),
  word('n4voc-sekkaku', 'Наречия', 'せっかく', 'せっかく', 'sekkaku', 'с таким трудом, раз уж представился случай', 'せっかく来たのに、休みでした。', 'Sekkaku kita noni, yasumi deshita.', 'Столько сил потратил(а), чтобы прийти, а оказалось закрыто.'),
  word('n4voc-nantonaku', 'Наречия', 'なんとなく', 'なんとなく', 'nantonaku', 'как-то так, без особой причины', 'なんとなく分かります。', 'Nantonaku wakarimasu.', 'Как-то интуитивно понимаю.'),

  // Повседневные ситуации
  word('n4voc-hikkoshi', 'Повседневные ситуации', '引っ越し', 'ひっこし', 'hikkoshi', 'переезд', '引っ越しを手伝います。', 'Hikkoshi wo tetsudaimasu.', 'Помогаю с переездом.'),
  word('n4voc-konbini', 'Повседневные ситуации', 'コンビニ', 'コンビニ', 'konbini', 'магазин у дома (комбини)', 'コンビニで買います。', 'Konbini de kaimasu.', 'Покупаю в комбини.'),
  word('n4voc-suupaa', 'Повседневные ситуации', 'スーパー', 'スーパー', 'su-pa-', 'супермаркет', 'スーパーで買い物します。', 'Su-pa- de kaimono shimasu.', 'Делаю покупки в супермаркете.'),
  word('n4voc-zangyousuru', 'Повседневные ситуации', '残業する', 'ざんぎょうする', 'zangyou suru', 'работать сверхурочно', '今日は残業します。', 'Kyou wa zangyou shimasu.', 'Сегодня работаю сверхурочно.'),

  // Эмоции (продолжение)
  word('n4voc-kandousuru', 'Эмоции', '感動する', 'かんどうする', 'kandou suru', 'быть тронутым, впечатляться', 'その映画に感動しました。', 'Sono eiga ni kandou shimashita.', 'Был(а) тронут(а) этим фильмом.'),
  word('n4voc-kinchousuru', 'Эмоции', '緊張する', 'きんちょうする', 'kinchou suru', 'нервничать, волноваться', '面接で緊張しました。', 'Mensetsu de kinchou shimashita.', 'Нервничал(а) на собеседовании.'),
  word('n4voc-gakkarisuru', 'Эмоции', 'がっかりする', 'がっかりする', 'gakkari suru', 'разочаровываться', '結果にがっかりしました。', 'Kekka ni gakkari shimashita.', 'Разочаровался(-лась) результатом.'),

  // Учёба (продолжение)
  word('n4voc-daigakuin', 'Учёба', '大学院', 'だいがくいん', 'daigakuin', 'аспирантура, магистратура', '大学院で研究します。', 'Daigakuin de kenkyuu shimasu.', 'Занимаюсь исследованиями в аспирантуре.'),
  word('n4voc-senmon', 'Учёба', '専門', 'せんもん', 'senmon', 'специальность', '専門は経済学です。', 'Senmon wa keizaigaku desu.', 'Моя специальность — экономика.'),
  word('n4voc-sotsugyou', 'Учёба', '卒業', 'そつぎょう', 'sotsugyou', 'выпуск, окончание учёбы', '卒業おめでとうございます。', 'Sotsugyou omedetou gozaimasu.', 'Поздравляю с окончанием учёбы.'),
  word('n4voc-shingakusuru', 'Учёба', '進学する', 'しんがくする', 'shingaku suru', 'поступать на следующую ступень обучения', '大学に進学します。', 'Daigaku ni shingaku shimasu.', 'Поступаю в университет.'),
  word('n4voc-ryuugakusuru', 'Учёба', '留学する', 'りゅうがくする', 'ryuugaku suru', 'учиться за границей', '日本に留学します。', 'Nihon ni ryuugaku shimasu.', 'Еду учиться в Японию.'),

  // Работа (продолжение)
  word('n4voc-shuushokusuru', 'Работа', '就職する', 'しゅうしょくする', 'shuushoku suru', 'трудоустраиваться', '来年就職します。', 'Rainen shuushoku shimasu.', 'В следующем году устраиваюсь на работу.'),
  word('n4voc-taishokusuru', 'Работа', '退職する', 'たいしょくする', 'taishoku suru', 'увольняться, выходить на пенсию', '来月退職します。', 'Raigetsu taishoku shimasu.', 'В следующем месяце увольняюсь.'),
  word('n4voc-shoushinsuru', 'Работа', '昇進する', 'しょうしんする', 'shoushin suru', 'получать повышение', '部長に昇進しました。', 'Buchou ni shoushin shimashita.', 'Получил(а) повышение до начальника отдела.'),
  word('n4voc-keiyaku', 'Работа', '契約', 'けいやく', 'keiyaku', 'контракт', '契約を結びます。', 'Keiyaku wo musubimasu.', 'Заключаю контракт.'),
  word('n4voc-seishain', 'Работа', '正社員', 'せいしゃいん', 'seishain', 'штатный сотрудник', '正社員になりました。', 'Seishain ni narimashita.', 'Стал(а) штатным сотрудником.'),

  // Общество и культура (продолжение)
  word('n4voc-jiken', 'Общество и культура', '事件', 'じけん', 'jiken', 'инцидент, происшествие', '大きい事件がありました。', 'Ookii jiken ga arimashita.', 'Произошёл крупный инцидент.'),
  word('n4voc-saigai', 'Общество и культура', '災害', 'さいがい', 'saigai', 'бедствие', '自然災害が心配です。', 'Shizen saigai ga shinpai desu.', 'Беспокоюсь о стихийных бедствиях.'),

  // Глаголы (продолжение)
  word('n4voc-shimesu', 'Глаголы', '示す', 'しめす', 'shimesu', 'показывать, указывать', 'データを示します。', 'De-ta wo shimeshimasu.', 'Показываю данные.'),
  word('n4voc-mitomeru', 'Глаголы', '認める', 'みとめる', 'mitomeru', 'признавать', '失敗を認めます。', 'Shippai wo mitomemasu.', 'Признаю ошибку.'),
  word('n4voc-utagau', 'Глаголы', '疑う', 'うたがう', 'utagau', 'сомневаться, подозревать', '彼の話を疑っています。', 'Kare no hanashi wo utagatteimasu.', 'Сомневаюсь в его словах.'),
  word('n4voc-hantaisuru', 'Глаголы', '反対する', 'はんたいする', 'hantai suru', 'возражать, быть против', 'その意見に反対します。', 'Sono iken ni hantai shimasu.', 'Я против этого мнения.'),
  word('n4voc-sanseisuru', 'Глаголы', '賛成する', 'さんせいする', 'sansei suru', 'соглашаться, поддерживать', 'その意見に賛成します。', 'Sono iken ni sansei shimasu.', 'Я поддерживаю это мнение.'),

  // Наречия (продолжение)
  word('n4voc-tsumari', 'Наречия', 'つまり', 'つまり', 'tsumari', 'то есть, иными словами', 'つまり、行かないということですね。', 'Tsumari, ikanai to iu koto desu ne.', 'То есть, ты не пойдёшь, так?'),
  word('n4voc-mushiro', 'Наречия', 'むしろ', 'むしろ', 'mushiro', 'скорее уж, вернее', 'むしろこちらの方がいいです。', 'Mushiro kochira no hou ga ii desu.', 'Скорее уж вот это лучше подходит.'),
  word('n4voc-kaette', 'Наречия', 'かえって', 'かえって', 'kaette', 'наоборот, вопреки ожиданиям', '薬を飲んだら、かえって悪くなりました。', 'Kusuri wo nondara, kaette waruku narimashita.', 'Выпил лекарство, но стало только хуже.'),
  word('n4voc-kekkyoku', 'Наречия', '結局', 'けっきょく', 'kekkyoku', 'в итоге, в конце концов', '結局行きませんでした。', 'Kekkyoku ikimasen deshita.', 'В итоге не пошёл(шла).'),

  // Абстрактные понятия (продолжение)
  word('n4voc-baai', 'Абстрактные понятия', '場合', 'ばあい', 'baai', 'случай, ситуация', '雨の場合は行きません。', 'Ame no baai wa ikimasen.', 'В случае дождя не пойду.'),
  word('n4voc-ippou', 'Абстрактные понятия', '一方', 'いっぽう', 'ippou', 'с одной стороны, в то же время', '父は厳しい。一方、母は優しいです。', 'Chichi wa kibishii. Ippou, haha wa yasashii desu.', 'Отец строгий. С другой стороны, мама добрая.'),
  word('n4voc-taido', 'Абстрактные понятия', '態度', 'たいど', 'taido', 'отношение, манера поведения', '彼の態度が悪いです。', 'Kare no taido ga warui desu.', 'У него плохое поведение.'),
  word('n4voc-inshou', 'Абстрактные понятия', '印象', 'いんしょう', 'inshou', 'впечатление', 'いい印象を持ちました。', 'Ii inshou wo mochimashita.', 'Осталось хорошее впечатление.'),
  word('n4voc-kikkake', 'Абстрактные понятия', 'きっかけ', 'きっかけ', 'kikkake', 'повод, начало чего-то', '日本語を勉強するきっかけは何ですか。', 'Nihongo wo benkyou suru kikkake wa nan desu ka.', 'Что стало поводом начать учить японский?'),
  word('n4voc-eikyou', 'Абстрактные понятия', '影響', 'えいきょう', 'eikyou', 'влияние', '天気に影響されます。', 'Tenki ni eikyou saremasu.', 'Подвержен(а) влиянию погоды.'),
  word('n4voc-kankei', 'Абстрактные понятия', '関係', 'かんけい', 'kankei', 'отношение, связь', 'いい関係です。', 'Ii kankei desu.', 'Хорошие отношения.'),
  word('n4voc-naiyou', 'Абстрактные понятия', '内容', 'ないよう', 'naiyou', 'содержание', '本の内容を説明します。', 'Hon no naiyou wo setsumei shimasu.', 'Объясняю содержание книги.'),
  word('n4voc-joukyou', 'Абстрактные понятия', '状況', 'じょうきょう', 'joukyou', 'ситуация, обстановка', '今の状況を教えてください。', 'Ima no joukyou wo oshiete kudasai.', 'Расскажите о текущей ситуации.'),
  word('n4voc-joutai', 'Абстрактные понятия', '状態', 'じょうたい', 'joutai', 'состояние', '体の状態がよくないです。', 'Karada no joutai ga yokunai desu.', 'Состояние организма не очень хорошее.'),
  word('n4voc-genin', 'Абстрактные понятия', '原因', 'げんいん', 'genin', 'причина (первопричина события)', '事故の原因を調べます。', 'Jiko no genin wo shirabemasu.', 'Расследую причину аварии.'),
  word('n4voc-mokuteki', 'Абстрактные понятия', '目的', 'もくてき', 'mokuteki', 'цель', '旅行の目的は何ですか。', 'Ryokou no mokuteki wa nan desu ka.', 'Какова цель поездки?'),
  word('n4voc-houhou', 'Абстрактные понятия', '方法', 'ほうほう', 'houhou', 'способ, метод', 'いい方法を考えます。', 'Ii houhou wo kangaemasu.', 'Придумываю хороший способ.'),
  word('n4voc-otagai', 'Абстрактные понятия', 'お互い', 'おたがい', 'otagai', 'друг друга, взаимно', 'お互いに助けます。', 'Otagai ni tasukemasu.', 'Помогаем друг другу.'),

  // Повседневные ситуации (продолжение — документы и правила)
  word('n4voc-shiryou', 'Повседневные ситуации', '資料', 'しりょう', 'shiryou', 'материалы, документы', '資料を準備します。', 'Shiryou wo junbi shimasu.', 'Готовлю материалы.'),
  word('n4voc-shorui', 'Повседневные ситуации', '書類', 'しょるい', 'shorui', 'документы', '書類にサインします。', 'Shorui ni sain shimasu.', 'Подписываю документы.'),
  word('n4voc-sain', 'Повседневные ситуации', 'サイン', 'サイン', 'sain', 'подпись', 'サインをお願いします。', 'Sain wo onegai shimasu.', 'Подпишите, пожалуйста.'),
  word('n4voc-kyoka', 'Повседневные ситуации', '許可', 'きょか', 'kyoka', 'разрешение', '許可をもらいました。', 'Kyoka wo moraimashita.', 'Получил(а) разрешение.'),
  word('n4voc-kisoku', 'Повседневные ситуации', '規則', 'きそく', 'kisoku', 'правило', '規則を守ります。', 'Kisoku wo mamorimasu.', 'Соблюдаю правила.'),
  word('n4voc-ruuru', 'Повседневные ситуации', 'ルール', 'ルール', 'ru-ru', 'правило (заимствованное)', 'ルールを覚えます。', 'Ru-ru wo oboemasu.', 'Запоминаю правила.'),

  // Эмоции (продолжение)
  word('n4voc-hyoujou', 'Эмоции', '表情', 'ひょうじょう', 'hyoujou', 'выражение лица', '嬉しい表情です。', 'Ureshii hyoujou desu.', 'Радостное выражение лица.'),
  word('n4voc-egao', 'Эмоции', '笑顔', 'えがお', 'egao', 'улыбающееся лицо, улыбка', 'いつも笑顔です。', 'Itsumo egao desu.', 'Всегда с улыбкой.'),

  // Глаголы (продолжение)
  word('n4voc-kigatsuku', 'Глаголы', '気がつく', 'きがつく', 'ki ga tsuku', 'замечать', '間違いに気がつきました。', 'Machigai ni ki ga tsukimashita.', 'Заметил(а) ошибку.'),
  word('n4voc-souzousuru', 'Глаголы', '想像する', 'そうぞうする', 'souzou suru', 'воображать', '未来を想像します。', 'Mirai wo souzou shimasu.', 'Представляю будущее.'),
  word('n4voc-kitaisuru', 'Глаголы', '期待する', 'きたいする', 'kitai suru', 'ожидать, надеяться', '結果を期待します。', 'Kekka wo kitai shimasu.', 'Надеюсь на хороший результат.'),
  word('n4voc-kakuninsuru', 'Глаголы', '確認する', 'かくにんする', 'kakunin suru', 'подтверждать, проверять', '予定を確認します。', 'Yotei wo kakunin shimasu.', 'Проверяю расписание.'),
  word('n4voc-koshousuru', 'Глаголы', '故障する', 'こしょうする', 'koshou suru', 'ломаться (о технике)', 'パソコンが故障しました。', 'Pasokon ga koshou shimashita.', 'Компьютер сломался.'),
  word('n4voc-shuurisuru', 'Глаголы', '修理する', 'しゅうりする', 'shuuri suru', 'ремонтировать', '車を修理します。', 'Kuruma wo shuuri shimasu.', 'Ремонтирую машину.'),
  word('n4voc-henkousuru', 'Глаголы', '変更する', 'へんこうする', 'henkou suru', 'изменять (расписание, план)', '予定を変更します。', 'Yotei wo henkou shimasu.', 'Меняю расписание.'),
  word('n4voc-kyanserusuru', 'Глаголы', 'キャンセルする', 'キャンセルする', 'kyanseru suru', 'отменять', '予約をキャンセルします。', 'Yoyaku wo kyanseru shimasu.', 'Отменяю бронирование.'),
  word('n4voc-sonsuru', 'Глаголы', '損する', 'そんする', 'sonsuru', 'терпеть убыток', 'お金を損しました。', 'Okane wo sonshimashita.', 'Понёс(ла) финансовые потери.'),
  word('n4voc-tokusuru', 'Глаголы', '得する', 'とくする', 'tokusuru', 'получать выгоду', 'この買い物は得しました。', 'Kono kaimono wa tokushimashita.', 'На этой покупке я выиграл(а).'),
  word('n4voc-shuchousuru', 'Глаголы', '主張する', 'しゅちょうする', 'shuchou suru', 'утверждать, настаивать', '自分の意見を主張します。', 'Jibun no iken wo shuchou shimasu.', 'Отстаиваю своё мнение.'),
  word('n4voc-rikaisuru', 'Глаголы', '理解する', 'りかいする', 'rikai suru', 'понимать (глубоко, вдумчиво)', '説明を理解しました。', 'Setsumei wo rikai shimashita.', 'Понял(а) объяснение.'),
  word('n4voc-nattokusuru', 'Глаголы', '納得する', 'なっとくする', 'nattoku suru', 'убеждаться, соглашаться (осознанно)', '説明を聞いて納得しました。', 'Setsumei wo kiite nattoku shimashita.', 'Выслушал(а) объяснение и согласился(-лась).'),
  word('n4voc-kegasuru', 'Глаголы', '怪我する', 'けがする', 'kega suru', 'получать травму', 'サッカーで怪我しました。', 'Sakka- de kega shimashita.', 'Получил(а) травму, играя в футбол.'),
  word('n4voc-nyuuinsuru', 'Глаголы', '入院する', 'にゅういんする', 'nyuuin suru', 'ложиться в больницу', '一週間入院しました。', 'Isshuukan nyuuin shimashita.', 'Лежал(а) в больнице неделю.'),
  word('n4voc-taiinsuru', 'Глаголы', '退院する', 'たいいんする', 'taiin suru', 'выписываться из больницы', '明日退院します。', 'Ashita taiin shimasu.', 'Завтра выписываюсь из больницы.'),
  word('n4voc-shujutsusuru', 'Глаголы', '手術する', 'しゅじゅつする', 'shujutsu suru', 'делать операцию', '手術を受けました。', 'Shujutsu wo ukemashita.', 'Перенёс(ла) операцию.'),

  // Абстрактные понятия (продолжение)
  word('n4voc-kanousei', 'Абстрактные понятия', '可能性', 'かのうせい', 'kanousei', 'возможность, вероятность', '成功の可能性があります。', 'Seikou no kanousei ga arimasu.', 'Есть вероятность успеха.'),
  word('n4voc-jouken', 'Абстрактные понятия', '条件', 'じょうけん', 'jouken', 'условие', '条件を確認します。', 'Jouken wo kakunin shimasu.', 'Проверяю условия.'),

  // Прилагательные (продолжение)
  word('n4voc-seikaku2', 'Прилагательные', '正確', 'せいかく', 'seikaku', 'точный', '正確な情報です。', 'Seikaku na jouhou desu.', 'Это точная информация.'),

  // Наречия (продолжение)
  word('n4voc-toriaezu', 'Наречия', 'とりあえず', 'とりあえず', 'toriaezu', 'для начала, пока что', 'とりあえずビールをください。', 'Toriaezu bi-ru wo kudasai.', 'Для начала пива, пожалуйста.'),
  word('n4voc-ichiou', 'Наречия', '一応', 'いちおう', 'ichiou', 'на всякий случай, в общем-то', '一応連絡します。', 'Ichiou renraku shimasu.', 'На всякий случай свяжусь.'),

  // Путешествия (продолжение)
  word('n4voc-annaijo', 'Путешествия', '案内所', 'あんないじょ', 'annaijo', 'информационная стойка', '案内所で聞きます。', 'Annaijo de kikimasu.', 'Спрашиваю на информационной стойке.'),

  // Природа и погода (продолжение)
  word('n4voc-arashi', 'Природа и погода', '嵐', 'あらし', 'arashi', 'шторм', '嵐が来ています。', 'Arashi ga kiteimasu.', 'Приближается шторм.'),
  word('n4voc-kiri', 'Природа и погода', '霧', 'きり', 'kiri', 'туман', '霧が出ています。', 'Kiri ga deteimasu.', 'Стоит туман.'),
  word('n4voc-shitsudo', 'Природа и погода', '湿度', 'しつど', 'shitsudo', 'влажность', '湿度が高いです。', 'Shitsudo ga takai desu.', 'Влажность высокая.'),
  word('n4voc-kikou', 'Природа и погода', '気候', 'きこう', 'kikou', 'климат', '日本の気候は湿気が多いです。', 'Nihon no kikou wa shikke ga ooi desu.', 'В японском климате много влажности.'),

  // Здоровье и спорт (продолжение)
  word('n4voc-taichou', 'Здоровье и спорт', '体調', 'たいちょう', 'taichou', 'самочувствие, состояние здоровья', '体調が悪いです。', 'Taichou ga warui desu.', 'Плохое самочувствие.'),

  // Общество и культура (продолжение)
  word('n4voc-shuukyou', 'Общество и культура', '宗教', 'しゅうきょう', 'shuukyou', 'религия', '宗教について話します。', 'Shuukyou ni tsuite hanashimasu.', 'Говорю о религии.'),
  word('n4voc-manaa', 'Общество и культура', 'マナー', 'マナー', 'mana-', 'манеры, этикет', 'マナーを守ります。', 'Mana- wo mamorimasu.', 'Соблюдаю этикет.'),

  // Личность и характер (продолжение)
  word('n4voc-yasashisa', 'Личность и характер', '優しさ', 'やさしさ', 'yasashisa', 'доброта', '彼の優しさに感謝します。', 'Kare no yasashisa ni kansha shimasu.', 'Благодарен(-рна) за его доброту.'),
  word('n4voc-jishin2', 'Личность и характер', '自信', 'じしん', 'jishin', 'уверенность в себе', '自信がありません。', 'Jishin ga arimasen.', 'Нет уверенности в себе.'),

  // Абстрактные понятия (продолжение)
  word('n4voc-joudan', 'Абстрактные понятия', '冗談', 'じょうだん', 'joudan', 'шутка', '冗談を言います。', 'Joudan wo iimasu.', 'Шучу.'),
  word('n4voc-himitsu', 'Абстрактные понятия', '秘密', 'ひみつ', 'himitsu', 'секрет', '秘密を守ります。', 'Himitsu wo mamorimasu.', 'Храню секрет.'),
  word('n4voc-uwasa', 'Абстрактные понятия', '噂', 'うわさ', 'uwasa', 'слух, сплетня', '噂を聞きました。', 'Uwasa wo kikimashita.', 'Услышал(а) слух.'),

  // Глаголы (продолжение)
  word('n4voc-homeru', 'Глаголы', '褒める', 'ほめる', 'homeru', 'хвалить', '先生に褒められました。', 'Sensei ni homeraremashita.', 'Учитель похвалил меня.'),
  word('n4voc-shikaru', 'Глаголы', '叱る', 'しかる', 'shikaru', 'ругать, делать выговор', '母に叱られました。', 'Haha ni shikararemashita.', 'Мама отругала меня.'),
  word('n4voc-nareru', 'Глаголы', '慣れる', 'なれる', 'nareru', 'привыкать', '新しい仕事に慣れました。', 'Atarashii shigoto ni naremashita.', 'Привык(ла) к новой работе.'),

  // Технологии и медиа (продолжение)
  word('n4voc-pasokon', 'Технологии и медиа', 'パソコン', 'パソコン', 'pasokon', 'персональный компьютер', 'パソコンで仕事します。', 'Pasokon de shigoto shimasu.', 'Работаю за компьютером.'),

  // Общество и культура (продолжение)
  word('n4voc-yosan', 'Общество и культура', '予算', 'よさん', 'yosan', 'бюджет', '予算が足りません。', 'Yosan ga tarimasen.', 'Бюджета не хватает.'),
  word('n4voc-zeikin', 'Общество и культура', '税金', 'ぜいきん', 'zeikin', 'налог', '税金を払います。', 'Zeikin wo haraimasu.', 'Плачу налоги.'),
  word('n4voc-hoken', 'Общество и культура', '保険', 'ほけん', 'hoken', 'страховка', '保険に入っています。', 'Hoken ni haitteimasu.', 'У меня есть страховка.'),
  word('n4voc-heiwa', 'Общество и культура', '平和', 'へいわ', 'heiwa', 'мир (отсутствие войны)', '平和を願います。', 'Heiwa wo negaimasu.', 'Желаю мира.'),
  word('n4voc-sensou', 'Общество и культура', '戦争', 'せんそう', 'sensou', 'война', '戦争について学びます。', 'Sensou ni tsuite manabimasu.', 'Изучаю историю войн.'),

  // Учёба (продолжение)
  word('n4voc-juku', 'Учёба', '塾', 'じゅく', 'juku', 'курсы дополнительного образования', '塾に通っています。', 'Juku ni kayotteimasu.', 'Хожу на дополнительные курсы.'),

  // Глаголы (продолжение)
  word('n4voc-okureru', 'Глаголы', '遅れる', 'おくれる', 'okureru', 'опаздывать', '電車が遅れました。', 'Densha ga okuremashita.', 'Поезд опоздал.'),
  word('n4voc-maniau', 'Глаголы', '間に合う', 'まにあう', 'maniau', 'успевать вовремя', '電車に間に合いました。', 'Densha ni maniaimashita.', 'Успел(а) на поезд.'),
  word('n4voc-awateru', 'Глаголы', '慌てる', 'あわてる', 'awateru', 'суетиться, паниковать', '慌てないでください。', 'Awatenaide kudasai.', 'Не паникуйте, пожалуйста.'),
  word('n4voc-ochitsuku', 'Глаголы', '落ち着く', 'おちつく', 'ochitsuku', 'успокаиваться', '落ち着いてください。', 'Ochitsuite kudasai.', 'Успокойтесь, пожалуйста.'),
  word('n4voc-ukaru', 'Глаголы', '受かる', 'うかる', 'ukaru', 'успешно сдавать (экзамен)', '試験に受かりました。', 'Shiken ni ukarimashita.', 'Сдал(а) экзамен.'),
  word('n4voc-kinisuru', 'Глаголы', '気にする', 'きにする', 'ki ni suru', 'беспокоиться о чём-то', '小さいことを気にしないでください。', 'Chiisai koto wo ki ni shinaide kudasai.', 'Не беспокойтесь о мелочах.'),
  word('n4voc-kininaru', 'Глаголы', '気になる', 'きになる', 'ki ni naru', 'интересовать, беспокоить (кого-то)', '結果が気になります。', 'Kekka ga ki ni narimasu.', 'Интересует результат.'),

  // Прилагательные (продолжение)
  word('n4voc-mottainai', 'Прилагательные', 'もったいない', 'もったいない', 'mottainai', 'расточительно, жаль (о ресурсе)', '食べ物を捨てるのはもったいないです。', 'Tabemono wo suteru no wa mottainai desu.', 'Жаль выбрасывать еду.'),
  word('n4voc-mendou', 'Прилагательные', '面倒', 'めんどう', 'mendou', 'хлопотный, утомительный (na-прилагательное)', 'この仕事は面倒です。', 'Kono shigoto wa mendou desu.', 'Эта работа хлопотная.'),
  word('n4voc-otonashii', 'Прилагательные', '大人しい', 'おとなしい', 'otonashii', 'тихий, послушный', '大人しい子供です。', 'Otonashii kodomo desu.', 'Это тихий ребёнок.'),
  word('n4voc-reisei', 'Прилагательные', '冷静', 'れいせい', 'reisei', 'спокойный, хладнокровный (na-прилагательное)', '冷静に考えます。', 'Reisei ni kangaemasu.', 'Спокойно обдумываю.'),
  word('n4voc-muri', 'Прилагательные', '無理', 'むり', 'muri', 'невозможно, через силу (na-прилагательное)', 'それは無理です。', 'Sore wa muri desu.', 'Это невозможно.'),

  // Наречия (продолжение)
  word('n4voc-aikawarazu', 'Наречия', '相変わらず', 'あいかわらず', 'aikawarazu', 'как всегда, без изменений', '相変わらず忙しいです。', 'Aikawarazu isogashii desu.', 'Как всегда занят(а).'),
  word('n4voc-masumasu', 'Наречия', 'ますます', 'ますます', 'masumasu', 'всё больше и больше', 'ますます暑くなります。', 'Masumasu atsuku narimasu.', 'Становится всё жарче.'),
  word('n4voc-isshoukenmei', 'Наречия', '一生懸命', 'いっしょうけんめい', 'isshoukenmei', 'изо всех сил', '一生懸命勉強します。', 'Isshoukenmei benkyou shimasu.', 'Учусь изо всех сил.'),

  // Абстрактные понятия (продолжение)
  word('n4voc-jama', 'Абстрактные понятия', '邪魔', 'じゃま', 'jama', 'помеха (na-прилагательное/существительное)', 'お邪魔します。', 'Ojama shimasu.', 'Извините за беспокойство (входя в чужой дом).'),

  // Глаголы (продолжение)
  word('n4voc-fuyasu', 'Глаголы', '増やす', 'ふやす', 'fuyasu', 'увеличивать (что-то)', '貯金を増やします。', 'Chokin wo fuyashimasu.', 'Увеличиваю сбережения.'),
  word('n4voc-herasu', 'Глаголы', '減らす', 'へらす', 'herasu', 'уменьшать (что-то)', '体重を減らします。', 'Taijuu wo herashimasu.', 'Снижаю вес.'),
  word('n4voc-kuwaeru', 'Глаголы', '加える', 'くわえる', 'kuwaeru', 'добавлять', '塩を加えます。', 'Shio wo kuwaemasu.', 'Добавляю соль.'),
  word('n4voc-natsukashii', 'Глаголы', '懐かしい', 'なつかしい', 'natsukashii', 'вызывающий ностальгию', 'この歌は懐かしいです。', 'Kono uta wa natsukashii desu.', 'Эта песня навевает ностальгию.'),
  word('n4voc-konzatsusuru', 'Глаголы', '混雑する', 'こんざつする', 'konzatsu suru', 'быть переполненным, загруженным', '電車が混雑しています。', 'Densha ga konzatsu shiteimasu.', 'Поезд переполнен.'),
  word('n4voc-gamansuru', 'Глаголы', '我慢する', 'がまんする', 'gaman suru', 'терпеть', '痛みを我慢します。', 'Itami wo gaman shimasu.', 'Терплю боль.'),
  word('n4voc-enryosuru', 'Глаголы', '遠慮する', 'えんりょする', 'enryo suru', 'стесняться, воздерживаться', '遠慮しないでください。', 'Enryo shinaide kudasai.', 'Не стесняйтесь, пожалуйста.'),

  // Абстрактные понятия (продолжение)
  word('n4voc-henka', 'Абстрактные понятия', '変化', 'へんか', 'henka', 'изменение', '大きい変化がありました。', 'Ookii henka ga arimashita.', 'Произошло большое изменение.'),
  word('n4voc-okagede', 'Абстрактные понятия', 'お陰で', 'おかげで', 'okagede', 'благодаря', 'あなたのお陰で成功しました。', 'Anata no okagede seikou shimashita.', 'Благодаря вам добился(-лась) успеха.'),
  word('n4voc-sei', 'Абстрактные понятия', 'せい', 'せい', 'sei', 'из-за (негативная причина)', '雨のせいで遅れました。', 'Ame no sei de okuremashita.', 'Опоздал(а) из-за дождя.'),

  // Наречия (продолжение)
  word('n4voc-jitsuwa', 'Наречия', '実は', 'じつは', 'jitsuwa', 'на самом деле, честно говоря', '実は、日本語が話せません。', 'Jitsuwa, nihongo ga hanasemasen.', 'На самом деле, я не говорю по-японски.'),

  // Наречия (продолжение)
  word('n4voc-tatoeba', 'Наречия', 'たとえば', 'たとえば', 'tatoeba', 'например', 'たとえば、寿司やラーメンです。', 'Tatoeba, sushi ya ra-men desu.', 'Например, суши или рамен.'),
  word('n4voc-kanari', 'Наречия', 'かなり', 'かなり', 'kanari', 'довольно, весьма', 'かなり難しいです。', 'Kanari muzukashii desu.', 'Довольно сложно.'),

  // Абстрактные понятия (продолжение)
  word('n4voc-rei', 'Абстрактные понятия', '例', 'れい', 'rei', 'пример', '例を挙げます。', 'Rei wo agemasu.', 'Приведу пример.'),
  word('n4voc-aite', 'Абстрактные понятия', '相手', 'あいて', 'aite', 'партнёр, собеседник', '相手の話を聞きます。', 'Aite no hanashi wo kikimasu.', 'Слушаю собеседника.'),
  word('n4voc-zen\'in', 'Абстрактные понятия', '全員', 'ぜんいん', 'zen\'in', 'все (люди), все члены', '全員集まりました。', 'Zen\'in atsumarimashita.', 'Все собрались.'),
  word('n4voc-sekinin', 'Абстрактные понятия', '責任', 'せきにん', 'sekinin', 'ответственность', '責任を持ちます。', 'Sekinin wo mochimasu.', 'Беру на себя ответственность.'),
  word('n4voc-shikaku', 'Абстрактные понятия', '資格', 'しかく', 'shikaku', 'квалификация', '資格を取ります。', 'Shikaku wo torimasu.', 'Получаю квалификацию.'),
  word('n4voc-chansu', 'Абстрактные понятия', 'チャンス', 'チャンス', 'chansu', 'шанс', 'いいチャンスです。', 'Ii chansu desu.', 'Хороший шанс.'),
  word('n4voc-meritto', 'Абстрактные понятия', 'メリット', 'メリット', 'meritto', 'преимущество', 'この方法にはメリットがあります。', 'Kono houhou ni wa meritto ga arimasu.', 'У этого способа есть преимущества.'),
  word('n4voc-demeritto', 'Абстрактные понятия', 'デメリット', 'デメリット', 'demeritto', 'недостаток', 'デメリットも考えます。', 'Demeritto mo kangaemasu.', 'Учитываю и недостатки.'),

  // Прилагательные (продолжение)
  word('n4voc-koi', 'Прилагательные', '濃い', 'こい', 'koi', 'насыщенный, крепкий (вкус, цвет)', 'このコーヒーは濃いです。', 'Kono ko-hi- wa koi desu.', 'Этот кофе крепкий.'),
  word('n4voc-usui', 'Прилагательные', '薄い', 'うすい', 'usui', 'слабый, тонкий (вкус, толщина)', 'このお茶は薄いです。', 'Kono ocha wa usui desu.', 'Этот чай слабый.'),
  word('n4voc-hade', 'Прилагательные', '派手', 'はで', 'hade', 'яркий, броский (na-прилагательное)', '派手な服です。', 'Hade na fuku desu.', 'Это яркая одежда.'),
  word('n4voc-jimi', 'Прилагательные', '地味', 'じみ', 'jimi', 'неприметный, скромный (na-прилагательное)', '地味な色が好きです。', 'Jimi na iro ga suki desu.', 'Мне нравятся неприметные цвета.'),

  // Глаголы (продолжение)
  word('n4voc-tsutsumu', 'Глаголы', '包む', 'つつむ', 'tsutsumu', 'заворачивать', 'プレゼントを包みます。', 'Purezento wo tsutsumimasu.', 'Заворачиваю подарок.'),
  word('n4voc-kubaru', 'Глаголы', '配る', 'くばる', 'kubaru', 'раздавать', '資料を配ります。', 'Shiryou wo kubarimasu.', 'Раздаю материалы.'),
  word('n4voc-haitatsusuru', 'Глаголы', '配達する', 'はいたつする', 'haitatsu suru', 'доставлять', '荷物を配達します。', 'Nimotsu wo haitatsu shimasu.', 'Доставляю посылку.'),
  word('n4voc-tantousuru', 'Глаголы', '担当する', 'たんとうする', 'tantou suru', 'отвечать за что-то (по работе)', 'この仕事を担当しています。', 'Kono shigoto wo tantou shiteimasu.', 'Отвечаю за эту работу.'),
  word('n4voc-happyousuru', 'Глаголы', '発表する', 'はっぴょうする', 'happyou suru', 'делать доклад, презентацию', '研究を発表します。', 'Kenkyuu wo happyou shimasu.', 'Представляю исследование.'),
  word('n4voc-sankasuru', 'Глаголы', '参加する', 'さんかする', 'sanka suru', 'участвовать', 'イベントに参加します。', 'Ibento ni sanka shimasu.', 'Участвую в мероприятии.'),
  word('n4voc-sasaeru', 'Глаголы', '支える', 'ささえる', 'sasaeru', 'поддерживать', '家族を支えます。', 'Kazoku wo sasaemasu.', 'Поддерживаю семью.'),
  word('n4voc-susumeru', 'Глаголы', '勧める', 'すすめる', 'susumeru', 'рекомендовать', 'この本を勧めます。', 'Kono hon wo susumemasu.', 'Рекомендую эту книгу.'),

  // Дом (продолжение)
  word('n4voc-beranda', 'Общество и культура', 'ベランダ', 'ベランダ', 'beranda', 'балкон', 'ベランダで洗濯物を干します。', 'Beranda de sentakumono wo hoshimasu.', 'Сушу бельё на балконе.'),
  word('n4voc-ibento', 'Общество и культура', 'イベント', 'イベント', 'ibento', 'мероприятие', 'イベントに行きます。', 'Ibento ni ikimasu.', 'Иду на мероприятие.'),

  // Природа и погода (продолжение)
  word('n4voc-shokubutsu', 'Природа и погода', '植物', 'しょくぶつ', 'shokubutsu', 'растение', '植物を育てます。', 'Shokubutsu wo sodatemasu.', 'Выращиваю растения.'),
  word('n4voc-mori', 'Природа и погода', '森', 'もり', 'mori', 'лес', '森を歩きます。', 'Mori wo arukimasu.', 'Иду по лесу.'),
  word('n4voc-mizuumi', 'Природа и погода', '湖', 'みずうみ', 'mizuumi', 'озеро', '湖がきれいです。', 'Mizuumi ga kirei desu.', 'Озеро красивое.'),

  // Технологии и медиа (продолжение)
  word('n4voc-shisutemu', 'Технологии и медиа', 'システム', 'システム', 'shisutemu', 'система', '新しいシステムを使います。', 'Atarashii shisutemu wo tsukaimasu.', 'Пользуюсь новой системой.'),
  word('n4voc-saabisu', 'Технологии и медиа', 'サービス', 'サービス', 'sa-bisu', 'сервис, услуга', 'いいサービスです。', 'Ii sa-bisu desu.', 'Хороший сервис.'),

  // Абстрактные понятия (продолжение)
  word('n4voc-shuunyuu', 'Абстрактные понятия', '収入', 'しゅうにゅう', 'shuunyuu', 'доход', '収入が増えました。', 'Shuunyuu ga fuemashita.', 'Доход увеличился.'),
  word('n4voc-chokin2', 'Абстрактные понятия', '貯金', 'ちょきん', 'chokin', 'сбережения', '貯金があります。', 'Chokin ga arimasu.', 'Есть сбережения.'),
  word('n4voc-kenri', 'Абстрактные понятия', '権利', 'けんり', 'kenri', 'право', '権利を守ります。', 'Kenri wo mamorimasu.', 'Защищаю право.'),
  word('n4voc-gimu', 'Абстрактные понятия', '義務', 'ぎむ', 'gimu', 'обязанность', '義務を果たします。', 'Gimu wo hatashimasu.', 'Выполняю обязанность.'),
  word('n4voc-kigen', 'Абстрактные понятия', '期限', 'きげん', 'kigen', 'срок, дедлайн', '期限を守ります。', 'Kigen wo mamorimasu.', 'Соблюдаю срок.'),
  word('n4voc-shimekiri', 'Абстрактные понятия', '締め切り', 'しめきり', 'shimekiri', 'крайний срок', '締め切りは明日です。', 'Shimekiri wa ashita desu.', 'Крайний срок — завтра.'),

  // Учёба (продолжение)
  word('n4voc-teema', 'Учёба', 'テーマ', 'テーマ', 'te-ma', 'тема', 'テーマを決めます。', 'Te-ma wo kimemasu.', 'Определяю тему.'),
  word('n4voc-repooto', 'Учёба', 'レポート', 'レポート', 'repo-to', 'отчёт, доклад', 'レポートを書きます。', 'Repo-to wo kakimasu.', 'Пишу отчёт.'),

  // Еда (продолжение)
  word('n4voc-zairyou', 'Еда', '材料', 'ざいりょう', 'zairyou', 'ингредиенты', '材料を準備します。', 'Zairyou wo junbi shimasu.', 'Готовлю ингредиенты.'),
  word('n4voc-reshipi', 'Еда', 'レシピ', 'レシピ', 'reshipi', 'рецепт', 'レシピを見ます。', 'Reshipi wo mimasu.', 'Смотрю рецепт.'),

  // Глаголы (продолжение)
  word('n4voc-shuuchuusuru', 'Глаголы', '集中する', 'しゅうちゅうする', 'shuuchuu suru', 'концентрироваться', '勉強に集中します。', 'Benkyou ni shuuchuu shimasu.', 'Концентрируюсь на учёбе.'),
  word('n4voc-ochikomu', 'Глаголы', '落ち込む', 'おちこむ', 'ochikomu', 'впадать в уныние', '失敗して落ち込みました。', 'Shippai shite ochikomimashita.', 'Расстроился(-лась) из-за неудачи.'),

  // Прилагательные (продолжение)
  word('n4voc-kurushii', 'Прилагательные', '苦しい', 'くるしい', 'kurushii', 'мучительный, тяжёлый', '呼吸が苦しいです。', 'Kokyuu ga kurushii desu.', 'Тяжело дышать.'),
  word('n4voc-tsurai', 'Прилагательные', '辛い', 'つらい', 'tsurai', 'тяжело, мучительно (морально)', '別れは辛いです。', 'Wakare wa tsurai desu.', 'Расставание — это тяжело.'),

  // Путешествия (продолжение)
  word('n4voc-man\'in', 'Путешествия', '満員', 'まんいん', 'man\'in', 'переполненный (о транспорте)', '電車が満員です。', 'Densha ga man\'in desu.', 'Поезд переполнен.'),

  // Абстрактные понятия (продолжение)
  word('n4voc-guuzen', 'Абстрактные понятия', '偶然', 'ぐうぜん', 'guuzen', 'случайно, случайность', '偶然会いました。', 'Guuzen aimashita.', 'Случайно встретились.'),
  word('n4voc-fuman', 'Абстрактные понятия', '不満', 'ふまん', 'fuman', 'недовольство', '不満があります。', 'Fuman ga arimasu.', 'Есть недовольство.'),
  word('n4voc-reigi', 'Абстрактные понятия', '礼儀', 'れいぎ', 'reigi', 'этикет, манеры', '礼儀を守ります。', 'Reigi wo mamorimasu.', 'Соблюдаю этикет.'),
  word('n4voc-joushiki', 'Абстрактные понятия', '常識', 'じょうしき', 'joushiki', 'здравый смысл', 'それは常識です。', 'Sore wa joushiki desu.', 'Это здравый смысл.'),

  // Отношения (продолжение)
  word('n4voc-dokushin', 'Отношения', '独身', 'どくしん', 'dokushin', 'холост, не замужем', '独身です。', 'Dokushin desu.', 'Я не женат/не замужем.'),

  // Глаголы (продолжение)
  word('n4voc-manzokusuru', 'Глаголы', '満足する', 'まんぞくする', 'manzoku suru', 'быть довольным', '結果に満足しています。', 'Kekka ni manzoku shiteimasu.', 'Доволен(-льна) результатом.'),
  word('n4voc-sasou', 'Глаголы', '誘う', 'さそう', 'sasou', 'приглашать', '友達を誘います。', 'Tomodachi wo sasoimasu.', 'Приглашаю друга.'),
  word('n4voc-shoutaisuru', 'Глаголы', '招待する', 'しょうたいする', 'shoutai suru', 'приглашать (формально)', 'パーティーに招待します。', 'Pa-ti- ni shoutai shimasu.', 'Приглашаю на вечеринку.'),
  word('n4voc-kinshisuru', 'Глаголы', '禁止する', 'きんしする', 'kinshi suru', 'запрещать', '喫煙を禁止します。', 'Kitsuen wo kinshi shimasu.', 'Запрещаю курение.'),
  word('n4voc-shitagau', 'Глаголы', '従う', 'したがう', 'shitagau', 'подчиняться, следовать', '規則に従います。', 'Kisoku ni shitagaimasu.', 'Следую правилам.'),

  // Наречия (продолжение)
  word('n4voc-ijou', 'Наречия', '以上', 'いじょう', 'ijou', 'и больше, не менее', '十人以上います。', 'Juu-nin ijou imasu.', 'Есть не менее десяти человек.'),
  word('n4voc-ika', 'Наречия', '以下', 'いか', 'ika', 'и меньше, не более', '十人以下です。', 'Juu-nin ika desu.', 'Не более десяти человек.'),
  word('n4voc-inai', 'Наречия', '以内', 'いない', 'inai', 'в пределах', '一週間以内に返事します。', 'Isshuukan inai ni henji shimasu.', 'Отвечу в течение недели.'),
  word('n4voc-sonotame', 'Наречия', 'そのため', 'そのため', 'sono tame', 'по этой причине', 'そのため、遅れました。', 'Sono tame, okuremashita.', 'По этой причине опоздал(а).'),
  word('n4voc-shitagatte', 'Наречия', 'したがって', 'したがって', 'shitagatte', 'следовательно', '雨です。したがって、中止します。', 'Ame desu. Shitagatte, chuushi shimasu.', 'Дождь. Следовательно, отменяем.'),
  word('n4voc-tadashi', 'Наречия', 'ただし', 'ただし', 'tadashi', 'однако, но при этом (уточнение)', '入場は無料です。ただし、予約が必要です。', 'Nyuujou wa muryou desu. Tadashi, yoyaku ga hitsuyou desu.', 'Вход бесплатный. Однако требуется бронь.'),

  // Глаголы (продолжение)
  word('n4voc-hottosuru', 'Глаголы', 'ほっとする', 'ほっとする', 'hotto suru', 'вздохнуть с облегчением', '結果を聞いてほっとしました。', 'Kekka wo kiite hotto shimashita.', 'Услышал(а) результат и вздохнул(а) с облегчением.'),
  word('n4voc-dokidokisuru', 'Глаголы', 'どきどきする', 'どきどきする', 'dokidoki suru', 'сердце колотится (от волнения)', '発表の前にどきどきします。', 'Happyou no mae ni dokidoki shimasu.', 'Перед докладом сердце колотится.'),
  word('n4voc-iraira', 'Глаголы', 'いらいらする', 'いらいらする', 'iraira suru', 'раздражаться', '渋滞にいらいらしました。', 'Juutai ni iraira shimashita.', 'Раздражился(-лась) из-за пробки.'),

  // Общество и культура (продолжение)
  word('n4voc-toshiyori', 'Общество и культура', '年寄り', 'としより', 'toshiyori', 'пожилой человек', 'お年寄りに親切にします。', 'Otoshiyori ni shinsetsu ni shimasu.', 'Я добр(а) к пожилым людям.'),
  word('n4voc-kaiteki', 'Общество и культура', '快適', 'かいてき', 'kaiteki', 'комфортный (na-прилагательное)', '快適な部屋です。', 'Kaiteki na heya desu.', 'Это комфортная комната.'),

  // Наречия (продолжение)
  word('n4voc-tokorode', 'Наречия', 'ところで', 'ところで', 'tokorode', 'кстати (смена темы)', 'ところで、明日は暇ですか。', 'Tokorode, ashita wa hima desu ka.', 'Кстати, ты завтра свободен?'),

  // Эмоции (продолжение)
  word('n4voc-kimochiii', 'Эмоции', '気持ちいい', 'きもちいい', 'kimochi ii', 'приятно (ощущение)', '風が気持ちいいです。', 'Kaze ga kimochi ii desu.', 'Ветер приятный.'),
  word('n4voc-kimochiwarui', 'Эмоции', '気持ち悪い', 'きもちわるい', 'kimochi warui', 'неприятно, тошнит', '気持ち悪いです。', 'Kimochi warui desu.', 'Меня подташнивает.'),

  // Абстрактные понятия (продолжение)
  word('n4voc-osusume', 'Абстрактные понятия', 'おすすめ', 'おすすめ', 'osusume', 'рекомендация', 'おすすめは何ですか。', 'Osusume wa nan desu ka.', 'Что порекомендуете?'),
  word('n4voc-bamen', 'Абстрактные понятия', '場面', 'ばめん', 'bamen', 'сцена, ситуация', 'その場面を覚えています。', 'Sono bamen wo oboeteimasu.', 'Помню ту сцену.'),
  word('n4voc-tachiba', 'Абстрактные понятия', '立場', 'たちば', 'tachiba', 'позиция, точка зрения', '相手の立場で考えます。', 'Aite no tachiba de kangaemasu.', 'Смотрю с точки зрения собеседника.'),

  // Повседневные ситуации (продолжение)
  word('n4voc-chuushajou', 'Повседневные ситуации', '駐車場', 'ちゅうしゃじょう', 'chuushajou', 'парковка', '駐車場に車を止めます。', 'Chuushajou ni kuruma wo tomemasu.', 'Ставлю машину на парковку.'),
  word('n4voc-erebeetaa', 'Повседневные ситуации', 'エレベーター', 'エレベーター', 'erebe-ta-', 'лифт', 'エレベーターで上がります。', 'Erebe-ta- de agarimasu.', 'Поднимаюсь на лифте.'),
  word('n4voc-esukareetaa', 'Повседневные ситуации', 'エスカレーター', 'エスカレーター', 'esukare-ta-', 'эскалатор', 'エスカレーターに乗ります。', 'Esukare-ta- ni norimasu.', 'Захожу на эскалатор.'),

  // Абстрактные понятия (продолжение)
  word('n4voc-jissaini', 'Абстрактные понятия', '実際に', 'じっさいに', 'jissai ni', 'на самом деле', '実際に行ってみました。', 'Jissai ni itte mimashita.', 'На самом деле сходил(а) и посмотрел(а).'),
  word('n4voc-genjitsu', 'Абстрактные понятия', '現実', 'げんじつ', 'genjitsu', 'реальность', '現実を見ます。', 'Genjitsu wo mimasu.', 'Смотрю на реальность.'),
  word('n4voc-risou', 'Абстрактные понятия', '理想', 'りそう', 'risou', 'идеал', '理想の生活です。', 'Risou no seikatsu desu.', 'Это идеальная жизнь.'),
  word('n4voc-koudou', 'Абстрактные понятия', '行動', 'こうどう', 'koudou', 'действие, поведение', '行動が大切です。', 'Koudou ga taisetsu desu.', 'Важны действия.'),
  word('n4voc-toji', 'Абстрактные понятия', '当時', 'とうじ', 'touji', 'в то время, тогда', '当時は学生でした。', 'Touji wa gakusei deshita.', 'Тогда я был(а) студентом(-кой).'),
  word('n4voc-gendai', 'Абстрактные понятия', '現代', 'げんだい', 'gendai', 'современность, наши дни', '現代の社会です。', 'Gendai no shakai desu.', 'Это современное общество.'),
  word('n4voc-machigai', 'Абстрактные понятия', '間違い', 'まちがい', 'machigai', 'ошибка', '間違いを直します。', 'Machigai wo naoshimasu.', 'Исправляю ошибку.'),
  word('n4voc-shudan', 'Абстрактные понятия', '手段', 'しゅだん', 'shudan', 'средство, способ', 'いい手段です。', 'Ii shudan desu.', 'Хороший способ.'),
  word('n4voc-kouka', 'Абстрактные понятия', '効果', 'こうか', 'kouka', 'эффект', 'いい効果がありました。', 'Ii kouka ga arimashita.', 'Был хороший эффект.'),

  // Прилагательные (продолжение)
  word('n4voc-tadashii', 'Прилагательные', '正しい', 'ただしい', 'tadashii', 'правильный', '正しい答えです。', 'Tadashii kotae desu.', 'Это правильный ответ.'),

  // Глаголы (продолжение)
  word('n4voc-koudousuru', 'Глаголы', '行動する', 'こうどうする', 'koudou suru', 'действовать', 'すぐに行動します。', 'Sugu ni koudou shimasu.', 'Сразу же действую.'),
  word('n4voc-machigaeru', 'Глаголы', '間違える', 'まちがえる', 'machigaeru', 'ошибаться, путать', '道を間違えました。', 'Michi wo machigaemashita.', 'Перепутал(а) дорогу.'),
  word('n4voc-tanomu', 'Глаголы', '頼む', 'たのむ', 'tanomu', 'просить, полагаться на', '友達に頼みます。', 'Tomodachi ni tanomimasu.', 'Прошу друга.'),
  word('n4voc-tayoru', 'Глаголы', '頼る', 'たよる', 'tayoru', 'полагаться на', '家族に頼っています。', 'Kazoku ni tayotteimasu.', 'Полагаюсь на семью.'),
  word('n4voc-makaseru', 'Глаголы', '任せる', 'まかせる', 'makaseru', 'поручать, доверять', 'この仕事を任せます。', 'Kono shigoto wo makasemasu.', 'Поручаю эту работу.'),

  // Наречия (продолжение)
  word('n4voc-fudan', 'Наречия', '普段', 'ふだん', 'fudan', 'обычно, в повседневности', '普段は家にいます。', 'Fudan wa ie ni imasu.', 'Обычно я дома.'),
  word('n4voc-nakanaka', 'Наречия', 'なかなか', 'なかなか', 'nakanaka', 'довольно / никак не (с отрицанием)', 'なかなか難しいです。', 'Nakanaka muzukashii desu.', 'Довольно сложно.'),
]
