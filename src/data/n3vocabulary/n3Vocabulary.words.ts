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
    jlptLevel: 'n3',
    category,
    japanese,
    kana,
    romaji,
    translation,
    example: { japanese: exampleJapanese, romaji: exampleRomaji, translation: exampleTranslation },
  }
}

export const N3_VOCAB_CATEGORIES = [
  'Общество',
  'Технологии',
  'Экономика',
  'Отношения',
  'Формальная лексика',
  'Медиа и новости',
  'Наука',
  'Психология и эмоции',
  'Работа и карьера',
  'Природа и экология',
  'Абстрактные понятия',
  'Устойчивые выражения',
  'Глаголы',
  'Прилагательные',
  'Наречия',
] as const

/** Более 300 слов N3 — общество/технологии/экономика/отношения и устойчивые вежливые выражения (кэйго). */
export const N3_VOCABULARY_WORDS: VocabWord[] = [
  // Общество
  word('n3voc-shakai', 'Общество', '社会', 'しゃかい', 'shakai', 'общество', '現代社会は複雑です。', 'Gendai shakai wa fukuzatsu desu.', 'Современное общество сложное.'),
  word('n3voc-seiji', 'Общество', '政治', 'せいじ', 'seiji', 'политика', '政治に興味があります。', 'Seiji ni kyoumi ga arimasu.', 'Интересуюсь политикой.'),
  word('n3voc-bunka', 'Общество', '文化', 'ぶんか', 'bunka', 'культура', '日本の文化が好きです。', 'Nihon no bunka ga suki desu.', 'Мне нравится японская культура.'),
  word('n3voc-kankyou', 'Общество', '環境', 'かんきょう', 'kankyou', 'окружающая среда', '環境を守ります。', 'Kankyou wo mamorimasu.', 'Защищаем окружающую среду.'),
  word('n3voc-jinkou', 'Общество', '人口', 'じんこう', 'jinkou', 'население', '人口が増えています。', 'Jinkou ga fueteimasu.', 'Население растёт.'),
  word('n3voc-kokusai', 'Общество', '国際', 'こくさい', 'kokusai', 'международный', '国際会議に出ます。', 'Kokusai kaigi ni demasu.', 'Участвую в международной конференции.'),

  // Технологии
  word('n3voc-gijutsu', 'Технологии', '技術', 'ぎじゅつ', 'gijutsu', 'технология', '技術が進んでいます。', 'Gijutsu ga susundeimasu.', 'Технологии развиваются.'),
  word('n3voc-jouhou', 'Технологии', '情報', 'じょうほう', 'jouhou', 'информация', 'インターネットで情報を集めます。', 'Intaanetto de jouhou wo atsumemasu.', 'Собираю информацию в интернете.'),
  word('n3voc-hatten', 'Технологии', '発展', 'はってん', 'hatten', 'развитие', 'この国は発展しています。', 'Kono kuni wa hatten shiteimasu.', 'Эта страна развивается.'),
  word('n3voc-riyou', 'Технологии', '利用する', 'りようする', 'riyou suru', 'использовать', 'このアプリを利用します。', 'Kono apuri wo riyou shimasu.', 'Использую это приложение.'),
  word('n3voc-eikyou', 'Технологии', '影響', 'えいきょう', 'eikyou', 'влияние', '天気に影響されます。', 'Tenki ni eikyou saremasu.', 'Подвержен влиянию погоды.'),
  word('n3voc-kanou', 'Технологии', '可能', 'かのう', 'kanou', 'возможность, возможный', 'それは可能です。', 'Sore wa kanou desu.', 'Это возможно.'),

  // Экономика
  word('n3voc-keizai', 'Экономика', '経済', 'けいざい', 'keizai', 'экономика', '経済が成長しています。', 'Keizai ga seichou shiteimasu.', 'Экономика растёт.'),
  word('n3voc-nedan', 'Экономика', '値段', 'ねだん', 'nedan', 'цена', 'この値段は高いです。', 'Kono nedan wa takai desu.', 'Эта цена высокая.'),
  word('n3voc-uru', 'Экономика', '売る', 'うる', 'uru', 'продавать', '家を売ります。', 'Ie wo urimasu.', 'Продаю дом.'),
  word('n3voc-kau', 'Экономика', '買う', 'かう', 'kau', 'покупать', '新しい車を買いました。', 'Atarashii kuruma wo kaimashita.', 'Купил новую машину.'),
  word('n3voc-fueru', 'Экономика', '増える', 'ふえる', 'fueru', 'увеличиваться', '人口が増えます。', 'Jinkou ga fuemasu.', 'Население увеличивается.'),
  word('n3voc-heru', 'Экономика', '減る', 'へる', 'heru', 'уменьшаться', 'お金が減りました。', 'Okane ga herimashita.', 'Денег стало меньше.'),

  // Отношения
  word('n3voc-kankei', 'Отношения', '関係', 'かんけい', 'kankei', 'отношения', 'いい関係を作ります。', 'Ii kankei wo tsukurimasu.', 'Строю хорошие отношения.'),
  word('n3voc-shinrai', 'Отношения', '信頼', 'しんらい', 'shinrai', 'доверие', '彼を信頼しています。', 'Kare wo shinrai shiteimasu.', 'Я доверяю ему.'),
  word('n3voc-gokai', 'Отношения', '誤解', 'ごかい', 'gokai', 'недопонимание', '誤解がありました。', 'Gokai ga arimashita.', 'Было недопонимание.'),
  word('n3voc-ayamaru', 'Отношения', '謝る', 'あやまる', 'ayamaru', 'извиняться', 'すぐに謝りました。', 'Sugu ni ayamarimashita.', 'Сразу извинился.'),
  word('n3voc-kyouryoku', 'Отношения', '協力する', 'きょうりょくする', 'kyouryoku suru', 'сотрудничать', 'みんなで協力しましょう。', 'Minna de kyouryoku shimashou.', 'Давайте сотрудничать все вместе.'),
  word('n3voc-taido', 'Отношения', '態度', 'たいど', 'taido', 'отношение, поведение', '彼の態度が変わりました。', 'Kare no taido ga kawarimashita.', 'Его отношение изменилось.'),

  // Формальная лексика
  word('n3voc-haiken', 'Формальная лексика', '拝見する', 'はいけんする', 'haiken suru', 'смотреть (скромно о себе)', '資料を拝見しました。', 'Shiryou wo haiken shimashita.', 'Я ознакомился с материалами.'),
  word('n3voc-moushiwake', 'Формальная лексика', '申し訳ございません', 'もうしわけございません', 'moushiwake gozaimasen', 'искренне прошу прощения', '遅れて申し訳ございません。', 'Okurete moushiwake gozaimasen.', 'Извините за опоздание.'),
  word('n3voc-shouchi', 'Формальная лексика', '承知しました', 'しょうちしました', 'shouchi shimashita', 'понял, принял к сведению (вежливо)', 'はい、承知しました。', 'Hai, shouchi shimashita.', 'Да, понял.'),
  word('n3voc-osewa', 'Формальная лексика', 'お世話になります', 'おせわになります', 'osewa ni narimasu', 'благодарю за помощь/заботу', 'いつもお世話になります。', 'Itsumo osewa ni narimasu.', 'Всегда благодарен за вашу помощь.'),
  word('n3voc-osoreirimasu', 'Формальная лексика', '恐れ入ります', 'おそれいります', 'osoreirimasu', 'прошу прощения, премного благодарен', '恐れ入りますが、質問があります。', 'Osoreirimasu ga, shitsumon ga arimasu.', 'Извините, у меня есть вопрос.'),
  word('n3voc-kashikomari', 'Формальная лексика', 'かしこまりました', 'かしこまりました', 'kashikomarimashita', 'слушаюсь (очень вежливо)', 'かしこまりました。少々お待ちください。', 'Kashikomarimashita. Shoushou omachi kudasai.', 'Слушаюсь. Подождите немного, пожалуйста.'),

  // Общество (продолжение)
  word('n3voc-seido', 'Общество', '制度', 'せいど', 'seido', 'система, институт (общественный)', '新しい制度ができました。', 'Atarashii seido ga dekimashita.', 'Появилась новая система.'),
  word('n3voc-sabetsu', 'Общество', '差別', 'さべつ', 'sabetsu', 'дискриминация', '差別をなくします。', 'Sabetsu wo nakushimasu.', 'Искореняем дискриминацию.'),
  word('n3voc-byoudou', 'Общество', '平等', 'びょうどう', 'byoudou', 'равенство (na-прилагательное)', '平等な社会を目指します。', 'Byoudou na shakai wo mezashimasu.', 'Стремимся к равному обществу.'),
  word('n3voc-kakusa', 'Общество', '格差', 'かくさ', 'kakusa', 'разрыв, неравенство', '経済格差が問題です。', 'Keizai kakusa ga mondai desu.', 'Экономическое неравенство — это проблема.'),
  word('n3voc-shoushika', 'Общество', '少子化', 'しょうしか', 'shoushika', 'снижение рождаемости', '少子化が進んでいます。', 'Shoushika ga susundeimasu.', 'Снижение рождаемости прогрессирует.'),
  word('n3voc-koureika', 'Общество', '高齢化', 'こうれいか', 'koureika', 'старение населения', '高齢化社会になりました。', 'Koureika shakai ni narimashita.', 'Общество стало стареющим.'),
  word('n3voc-imin', 'Общество', '移民', 'いみん', 'imin', 'иммигрант, иммиграция', '移民について議論します。', 'Imin ni tsuite giron shimasu.', 'Обсуждаем вопросы иммиграции.'),

  // Технологии (продолжение)
  word('n3voc-shinpo', 'Технологии', '進歩', 'しんぽ', 'shinpo', 'прогресс', '技術の進歩は速いです。', 'Gijutsu no shinpo wa hayai desu.', 'Технический прогресс быстрый.'),
  word('n3voc-fukyuu', 'Технологии', '普及する', 'ふきゅうする', 'fukyuu suru', 'распространяться, становиться повсеместным', 'スマホが普及しました。', 'Sumaho ga fukyuu shimashita.', 'Смартфоны стали повсеместными.'),
  word('n3voc-kaihatsusuru', 'Технологии', '開発する', 'かいはつする', 'kaihatsu suru', 'разрабатывать', '新しい薬を開発します。', 'Atarashii kusuri wo kaihatsu shimasu.', 'Разрабатываем новое лекарство.'),
  word('n3voc-kenkyuu', 'Технологии', '研究する', 'けんきゅうする', 'kenkyuu suru', 'исследовать', '大学で研究しています。', 'Daigaku de kenkyuu shiteimasu.', 'Провожу исследования в университете.'),
  word('n3voc-jinkouchinou', 'Технологии', '人工知能', 'じんこうちのう', 'jinkou chinou', 'искусственный интеллект', '人工知能が発展しています。', 'Jinkou chinou ga hatten shiteimasu.', 'Искусственный интеллект развивается.'),

  // Экономика (продолжение)
  word('n3voc-boueki', 'Экономика', '貿易', 'ぼうえき', 'boueki', 'торговля (международная)', '貿易が盛んです。', 'Boueki ga sakan desu.', 'Торговля процветает.'),
  word('n3voc-yushutsu', 'Экономика', '輸出する', 'ゆしゅつする', 'yushutsu suru', 'экспортировать', '車を輸出します。', 'Kuruma wo yushutsu shimasu.', 'Экспортируем машины.'),
  word('n3voc-yunyuu', 'Экономика', '輸入する', 'ゆにゅうする', 'yunyuu suru', 'импортировать', '食料を輸入します。', 'Shokuryou wo yunyuu shimasu.', 'Импортируем продовольствие.'),
  word('n3voc-shouhisuru', 'Экономика', '消費する', 'しょうひする', 'shouhi suru', 'потреблять', 'エネルギーを消費します。', 'Enerugii wo shouhi shimasu.', 'Потребляем энергию.'),
  word('n3voc-seisansuru', 'Экономика', '生産する', 'せいさんする', 'seisan suru', 'производить', '製品を生産します。', 'Seihin wo seisan shimasu.', 'Производим продукцию.'),
  word('n3voc-kigyou', 'Экономика', '企業', 'きぎょう', 'kigyou', 'предприятие, компания', '大企業に勤めています。', 'Daikigyou ni tsutometeimasu.', 'Работаю в крупной компании.'),
  word('n3voc-keieisuru', 'Экономика', '経営する', 'けいえいする', 'keiei suru', 'управлять бизнесом', '会社を経営しています。', 'Kaisha wo keiei shiteimasu.', 'Управляю компанией.'),

  // Отношения (продолжение)
  word('n3voc-sonchousuru', 'Отношения', '尊重する', 'そんちょうする', 'sonchou suru', 'уважать', 'お互いを尊重します。', 'Otagai wo sonchou shimasu.', 'Уважаем друг друга.'),
  word('n3voc-hairyosuru', 'Отношения', '配慮する', 'はいりょする', 'hairyo suru', 'проявлять заботу, учитывать', '相手の気持ちに配慮します。', 'Aite no kimochi ni hairyo shimasu.', 'Учитываю чувства собеседника.'),
  word('n3voc-tairitsusuru', 'Отношения', '対立する', 'たいりつする', 'tairitsu suru', 'противостоять, конфликтовать', '意見が対立しています。', 'Iken ga tairitsu shiteimasu.', 'Мнения расходятся (противостоят).'),

  // Формальная лексика (продолжение)
  word('n3voc-zonjimasu', 'Формальная лексика', '存じます', 'ぞんじます', 'zonjimasu', 'знаю (скромно)', 'よく存じております。', 'Yoku zonjiteorimasu.', 'Прекрасно осведомлён (скромно).'),
  word('n3voc-kouei', 'Формальная лексика', '光栄です', 'こうえいです', 'kouei desu', 'для меня честь', 'お会いできて光栄です。', 'Oai dekite kouei desu.', 'Для меня честь встретиться с вами.'),
  word('n3voc-otesuu', 'Формальная лексика', 'お手数をおかけします', 'おてすうをおかけします', 'otesuu wo okakeshimasu', 'извините за беспокойство', 'お手数をおかけしますが、よろしくお願いします。', 'Otesuu wo okakeshimasu ga, yoroshiku onegaishimasu.', 'Извините за беспокойство, буду признателен.'),

  // Медиа и новости
  word('n3voc-houdousuru', 'Медиа и новости', '報道する', 'ほうどうする', 'houdou suru', 'освещать в новостях', 'その事件をニュースで報道しました。', 'Sono jiken wo nyu-su de houdou shimashita.', 'Тот инцидент осветили в новостях.'),
  word('n3voc-shuzaisuru', 'Медиа и новости', '取材する', 'しゅざいする', 'shuzai suru', 'собирать материал (для репортажа)', '事件について取材します。', 'Jiken ni tsuite shuzai shimasu.', 'Собираю материал об инциденте.'),
  word('n3voc-media', 'Медиа и новости', 'メディア', 'メディア', 'media', 'медиа, СМИ', 'メディアの影響は大きいです。', 'Media no eikyou wa ookii desu.', 'Влияние СМИ велико.'),
  word('n3voc-yoron', 'Медиа и новости', '世論', 'よろん', 'yoron', 'общественное мнение', '世論を調査します。', 'Yoron wo chousa shimasu.', 'Проводим опрос общественного мнения.'),

  // Наука
  word('n3voc-jikkensuru', 'Наука', '実験する', 'じっけんする', 'jikken suru', 'проводить эксперимент', '新しい薬を実験します。', 'Atarashii kusuri wo jikken shimasu.', 'Испытываем новое лекарство.'),
  word('n3voc-shoumeisuru', 'Наука', '証明する', 'しょうめいする', 'shoumei suru', 'доказывать', '理論を証明します。', 'Riron wo shoumei shimasu.', 'Доказываем теорию.'),
  word('n3voc-riron', 'Наука', '理論', 'りろん', 'riron', 'теория', '新しい理論を発表しました。', 'Atarashii riron wo happyou shimashita.', 'Представили новую теорию.'),
  word('n3voc-kasetsu', 'Наука', '仮説', 'かせつ', 'kasetsu', 'гипотеза', '仮説を立てます。', 'Kasetsu wo tatemasu.', 'Выдвигаем гипотезу.'),

  // Психология и эмоции
  word('n3voc-shinri', 'Психология и эмоции', '心理', 'しんり', 'shinri', 'психология', '人間の心理を研究します。', 'Ningen no shinri wo kenkyuu shimasu.', 'Исследую психологию человека.'),
  word('n3voc-sutoresu', 'Психология и эмоции', 'ストレス', 'ストレス', 'sutoresu', 'стресс', 'ストレスがたまっています。', 'Sutoresu ga tamatteimasu.', 'Накопился стресс.'),
  word('n3voc-aseru', 'Психология и эмоции', '焦る', 'あせる', 'aseru', 'торопиться, нервничать', '時間がなくて焦りました。', 'Jikan ga nakute aserimashita.', 'Времени не было, и я занервничал(а).'),
  word('n3voc-yokkyuu', 'Психология и эмоции', '欲求', 'よっきゅう', 'yokkyuu', 'потребность, желание', '欲求が強いです。', 'Yokkyuu ga tsuyoi desu.', 'Потребность сильная.'),

  // Работа и карьера
  word('n3voc-kyaria', 'Работа и карьера', 'キャリア', 'キャリア', 'kyaria', 'карьера', 'キャリアを積みます。', 'Kyaria wo tsumimasu.', 'Строю карьеру.'),
  word('n3voc-tenshokusuru', 'Работа и карьера', '転職する', 'てんしょくする', 'tenshoku suru', 'менять работу', '来月転職します。', 'Raigetsu tenshoku shimasu.', 'В следующем месяце меняю работу.'),
  word('n3voc-kigyousuru', 'Работа и карьера', '起業する', 'きぎょうする', 'kigyou suru', 'открывать собственный бизнес', '将来起業したいです。', 'Shourai kigyou shitai desu.', 'В будущем хочу открыть свой бизнес.'),

  // Природа и экология
  word('n3voc-shigen', 'Природа и экология', '資源', 'しげん', 'shigen', 'ресурсы', '資源を大切にします。', 'Shigen wo taisetsu ni shimasu.', 'Бережём ресурсы.'),
  word('n3voc-risaikuru', 'Природа и экология', 'リサイクルする', 'リサイクルする', 'risaikuru suru', 'перерабатывать (отходы)', 'ペットボトルをリサイクルします。', 'Pettobotoru wo risaikuru shimasu.', 'Перерабатываем пластиковые бутылки.'),
  word('n3voc-zetsumetsusuru', 'Природа и экология', '絶滅する', 'ぜつめつする', 'zetsumetsu suru', 'вымирать', 'この動物は絶滅しそうです。', 'Kono doubutsu wa zetsumetsu shisou desu.', 'Это животное вот-вот вымрет.'),

  // Абстрактные понятия
  word('n3voc-keikou', 'Абстрактные понятия', '傾向', 'けいこう', 'keikou', 'тенденция', '最近、その傾向が強いです。', 'Saikin, sono keikou ga tsuyoi desu.', 'В последнее время эта тенденция сильна.'),
  word('n3voc-tokuchou', 'Абстрактные понятия', '特徴', 'とくちょう', 'tokuchou', 'особенность, характерная черта', 'この地域の特徴は何ですか。', 'Kono chiiki no tokuchou wa nan desu ka.', 'Какие особенности у этого региона?'),
  word('n3voc-youso', 'Абстрактные понятия', '要素', 'ようそ', 'youso', 'элемент, фактор', 'いろいろな要素が関係しています。', 'Iroiro na youso ga kankei shiteimasu.', 'Задействовано много факторов.'),
  word('n3voc-kijun', 'Абстрактные понятия', '基準', 'きじゅん', 'kijun', 'критерий, стандарт', '基準を決めます。', 'Kijun wo kimemasu.', 'Определяем критерии.'),
  word('n3voc-han\'i', 'Абстрактные понятия', '範囲', 'はんい', 'han\'i', 'диапазон, область', '試験の範囲を教えてください。', 'Shiken no han\'i wo oshiete kudasai.', 'Скажите диапазон тем для экзамена.'),
  word('n3voc-genkai', 'Абстрактные понятия', '限界', 'げんかい', 'genkai', 'предел, граница возможностей', '体力の限界です。', 'Tairyoku no genkai desu.', 'Это предел физических сил.'),
  word('n3voc-sonzai', 'Абстрактные понятия', '存在', 'そんざい', 'sonzai', 'существование', '存在を信じます。', 'Sonzai wo shinjimasu.', 'Верю в существование.'),
  word('n3voc-kachi', 'Абстрактные понятия', '価値', 'かち', 'kachi', 'ценность', 'この本は価値があります。', 'Kono hon wa kachi ga arimasu.', 'Эта книга представляет ценность.'),
  word('n3voc-genshou', 'Абстрактные понятия', '現象', 'げんしょう', 'genshou', 'явление', '不思議な現象です。', 'Fushigi na genshou desu.', 'Это загадочное явление.'),

  // Устойчивые выражения
  word('n3voc-kinosei', 'Устойчивые выражения', '気のせい', 'きのせい', 'ki no sei', 'показалось (просто ощущение)', 'それは気のせいだと思います。', 'Sore wa ki no sei da to omoimasu.', 'Думаю, это просто показалось.'),
  word('n3voc-shikataganai', 'Устойчивые выражения', '仕方がない', 'しかたがない', 'shikata ga nai', 'ничего не поделаешь', '雨だから、仕方がないです。', 'Ame dakara, shikata ga nai desu.', 'Раз дождь, ничего не поделаешь.'),
  word('n3voc-souieba', 'Устойчивые выражения', 'そういえば', 'そういえば', 'souieba', 'кстати говоря, раз уж об этом зашла речь', 'そういえば、田中さんを見ていません。', 'Souieba, Tanaka-san wo miteimasen.', 'Кстати, я не видел(а) Танаку.'),
  word('n3voc-iumademonai', 'Устойчивые выражения', '言うまでもない', 'いうまでもない', 'iu made mo nai', 'само собой разумеется', '健康が大切なのは言うまでもないです。', 'Kenkou ga taisetsu na no wa iu made mo nai desu.', 'Само собой разумеется, что здоровье важно.'),
  word('n3voc-teniireru', 'Устойчивые выражения', '手に入れる', 'てにいれる', 'te ni ireru', 'заполучить', 'ほしかった本を手に入れました。', 'Hoshikatta hon wo te ni iremashita.', 'Заполучил(а) книгу, которую хотел(а).'),
  word('n3voc-metoosu', 'Устойчивые выражения', '目を通す', 'めをとおす', 'me wo toosu', 'просмотреть (документ)', '契約書に目を通してください。', 'Keiyakusho ni me wo tooshite kudasai.', 'Просмотрите договор, пожалуйста.'),

  // Глаголы
  word('n3voc-shijisuru', 'Глаголы', '支持する', 'しじする', 'shiji suru', 'поддерживать (мнение, партию)', 'その意見を支持します。', 'Sono iken wo shiji shimasu.', 'Поддерживаю это мнение.'),
  word('n3voc-kentousuru', 'Глаголы', '検討する', 'けんとうする', 'kentou suru', 'рассматривать, обдумывать', 'その案を検討します。', 'Sono an wo kentou shimasu.', 'Рассматриваем это предложение.'),
  word('n3voc-handansuru', 'Глаголы', '判断する', 'はんだんする', 'handan suru', 'судить, принимать решение', '自分で判断します。', 'Jibun de handan shimasu.', 'Решаю сам(а).'),
  word('n3voc-taiousuru', 'Глаголы', '対応する', 'たいおうする', 'taiou suru', 'реагировать, справляться', '問題に対応します。', 'Mondai ni taiou shimasu.', 'Справляюсь с проблемой.'),
  word('n3voc-ijisuru', 'Глаголы', '維持する', 'いじする', 'iji suru', 'поддерживать, сохранять', '健康を維持します。', 'Kenkou wo iji shimasu.', 'Поддерживаю здоровье.'),
  word('n3voc-kaizensuru', 'Глаголы', '改善する', 'かいぜんする', 'kaizen suru', 'улучшать', '状況を改善します。', 'Joukyou wo kaizen shimasu.', 'Улучшаем ситуацию.'),
  word('n3voc-kaiketsusuru', 'Глаголы', '解決する', 'かいけつする', 'kaiketsu suru', 'решать (проблему)', '問題を解決します。', 'Mondai wo kaiketsu shimasu.', 'Решаем проблему.'),
  word('n3voc-jisshisuru', 'Глаголы', '実施する', 'じっしする', 'jisshi suru', 'осуществлять, проводить в жизнь', '新しい計画を実施します。', 'Atarashii keikaku wo jisshi shimasu.', 'Осуществляем новый план.'),

  // Прилагательные
  word('n3voc-shinkoku', 'Прилагательные', '深刻', 'しんこく', 'shinkoku', 'серьёзный (о проблеме)', '深刻な問題です。', 'Shinkoku na mondai desu.', 'Это серьёзная проблема.'),
  word('n3voc-kichou', 'Прилагательные', '貴重', 'きちょう', 'kichou', 'ценный, драгоценный', '貴重な経験でした。', 'Kichou na keiken deshita.', 'Это был ценный опыт.'),
  word('n3voc-yutaka', 'Прилагательные', '豊か', 'ゆたか', 'yutaka', 'богатый, изобильный', '自然が豊かな町です。', 'Shizen ga yutaka na machi desu.', 'Город, богатый природой.'),
  word('n3voc-tekisetsu', 'Прилагательные', '適切', 'てきせつ', 'tekisetsu', 'уместный, подходящий', '適切な言葉を選びます。', 'Tekisetsu na kotoba wo erabimasu.', 'Подбираю уместные слова.'),
  word('n3voc-aimai', 'Прилагательные', '曖昧', 'あいまい', 'aimai', 'неоднозначный, расплывчатый', '曖昧な返事でした。', 'Aimai na henji deshita.', 'Это был расплывчатый ответ.'),
  word('n3voc-bimyou', 'Прилагательные', '微妙', 'びみょう', 'bimyou', 'тонкий, деликатный (нюанс)', '微妙な違いです。', 'Bimyou na chigai desu.', 'Это тонкое различие.'),
  word('n3voc-tanjun', 'Прилагательные', '単純', 'たんじゅん', 'tanjun', 'простой (не сложный)', '単純な問題ではありません。', 'Tanjun na mondai dewa arimasen.', 'Это не такая простая проблема.'),

  // Наречия
  word('n3voc-shidaini', 'Наречия', '次第に', 'しだいに', 'shidaini', 'постепенно', '次第に暖かくなります。', 'Shidaini atatakaku narimasu.', 'Постепенно теплеет.'),
  word('n3voc-jojoni', 'Наречия', '徐々に', 'じょじょに', 'jojoni', 'постепенно, медленно', '徐々に慣れてきました。', 'Jojoni narete kimashita.', 'Постепенно привык(ла).'),
  word('n3voc-akirakani', 'Наречия', '明らかに', 'あきらかに', 'akirakani', 'очевидно, ясно', '明らかに間違っています。', 'Akirakani machigatteimasu.', 'Это очевидно неправильно.'),
  word('n3voc-akumade', 'Наречия', 'あくまで', 'あくまで', 'akumade', 'во что бы то ни стало, в любом случае', 'あくまで自分の意見です。', 'Akumade jibun no iken desu.', 'Это в любом случае только моё мнение.'),
  word('n3voc-ippanni', 'Наречия', '一般に', 'いっぱんに', 'ippanni', 'в общем, как правило', '一般に、夏は暑いです。', 'Ippanni, natsu wa atsui desu.', 'Как правило, летом жарко.'),

  // Общество (продолжение)
  word('n3voc-hanzai', 'Общество', '犯罪', 'はんざい', 'hanzai', 'преступление', '犯罪が減っています。', 'Hanzai ga hetteimasu.', 'Преступность снижается.'),
  word('n3voc-higaisha', 'Общество', '被害者', 'ひがいしゃ', 'higaisha', 'жертва (преступления, аварии)', '被害者を助けます。', 'Higaisha wo tasukemasu.', 'Помогаем жертве.'),

  // Экономика (продолжение)
  word('n3voc-toushisuru', 'Экономика', '投資する', 'とうしする', 'toushi suru', 'инвестировать', '株に投資します。', 'Kabu ni toushi shimasu.', 'Инвестирую в акции.'),

  // Отношения (продолжение)
  word('n3voc-kizuna', 'Отношения', '絆', 'きずな', 'kizuna', 'узы, эмоциональная связь', '家族の絆を大切にします。', 'Kazoku no kizuna wo taisetsu ni shimasu.', 'Дорожу семейными узами.'),

  // Формальная лексика (продолжение)
  word('n3voc-saiwaidesu', 'Формальная лексика', '幸いです', 'さいわいです', 'saiwai desu', 'был(а) бы рад(а), признателен(-льна)', 'ご返信いただければ幸いです。', 'Gohenshin itadakereba saiwai desu.', 'Был(а) бы признателен(-льна) за ответ.'),

  // Медиа и новости (продолжение)
  word('n3voc-wadai', 'Медиа и новости', '話題', 'わだい', 'wadai', 'тема разговора, то, что обсуждают', 'それが話題になっています。', 'Sore ga wadai ni natteimasu.', 'Это сейчас на слуху (обсуждаемая тема).'),

  // Наука (продолжение)
  word('n3voc-bunsekisuru', 'Наука', '分析する', 'ぶんせきする', 'bunseki suru', 'анализировать', 'データを分析します。', 'De-ta wo bunseki shimasu.', 'Анализирую данные.'),

  // Психология и эмоции (продолжение)
  word('n3voc-kanjou', 'Психология и эмоции', '感情', 'かんじょう', 'kanjou', 'эмоция, чувство', '感情を表します。', 'Kanjou wo arawashimasu.', 'Выражаю эмоции.'),
  word('n3voc-taeru', 'Психология и эмоции', '耐える', 'たえる', 'taeru', 'терпеть, выдерживать', '痛みに耐えます。', 'Itami ni taemasu.', 'Терплю боль.'),

  // Работа и карьера (продолжение)
  word('n3voc-hyoukasuru', 'Работа и карьера', '評価する', 'ひょうかする', 'hyouka suru', 'оценивать', '仕事を評価します。', 'Shigoto wo hyouka shimasu.', 'Оцениваю работу.'),

  // Природа и экология (продолжение)
  word('n3voc-ondanka', 'Природа и экология', '温暖化', 'おんだんか', 'ondanka', 'глобальное потепление', '地球温暖化が心配です。', 'Chikyuu ondanka ga shinpai desu.', 'Беспокоит глобальное потепление.'),
  word('n3voc-osensuru', 'Природа и экология', '汚染する', 'おせんする', 'osen suru', 'загрязнять', '海を汚染しています。', 'Umi wo osen shiteimasu.', 'Загрязняют море.'),

  // Абстрактные понятия (продолжение)
  word('n3voc-haikei', 'Абстрактные понятия', '背景', 'はいけい', 'haikei', 'фон, предпосылки', '事件の背景を調べます。', 'Jiken no haikei wo shirabemasu.', 'Изучаю предпосылки инцидента.'),
  word('n3voc-konkyo', 'Абстрактные понятия', '根拠', 'こんきょ', 'konkyo', 'основание, обоснование', 'その意見には根拠がありません。', 'Sono iken ni wa konkyo ga arimasen.', 'У этого мнения нет обоснования.'),
  word('n3voc-mujun', 'Абстрактные понятия', '矛盾', 'むじゅん', 'mujun', 'противоречие', '話に矛盾があります。', 'Hanashi ni mujun ga arimasu.', 'В рассказе есть противоречие.'),

  // Устойчивые выражения (продолжение)
  word('n3voc-medatsu', 'Устойчивые выражения', '目立つ', 'めだつ', 'medatsu', 'выделяться, бросаться в глаза', '彼はいつも目立ちます。', 'Kare wa itsumo medachimasu.', 'Он всегда выделяется.'),
  word('n3voc-kiniiru', 'Устойчивые выражения', '気に入る', 'きにいる', 'ki ni iru', 'понравиться, прийтись по душе', 'このデザインが気に入りました。', 'Kono dezain ga ki ni irimashita.', 'Этот дизайн мне понравился.'),

  // Глаголы (продолжение)
  word('n3voc-shoujiru', 'Глаголы', '生じる', 'しょうじる', 'shoujiru', 'возникать', '問題が生じました。', 'Mondai ga shoujimashita.', 'Возникла проблема.'),
  word('n3voc-tomonau', 'Глаголы', '伴う', 'ともなう', 'tomonau', 'сопровождать(ся)', 'この仕事は責任を伴います。', 'Kono shigoto wa sekinin wo tomonaimasu.', 'Эта работа сопряжена с ответственностью.'),

  // Прилагательные (продолжение)
  word('n3voc-habahiroi', 'Прилагательные', '幅広い', 'はばひろい', 'habahiroi', 'широкий (обширный, в переносном смысле)', '幅広い知識があります。', 'Habahiroi chishiki ga arimasu.', 'Обладает обширными знаниями.'),
  word('n3voc-ichijirushii', 'Прилагательные', '著しい', 'いちじるしい', 'ichijirushii', 'заметный, значительный', '著しい進歩です。', 'Ichijirushii shinpo desu.', 'Это значительный прогресс.'),

  // Наречия (продолжение)
  word('n3voc-kiwamete', 'Наречия', '極めて', 'きわめて', 'kiwamete', 'крайне, чрезвычайно', '極めて重要な問題です。', 'Kiwamete juuyou na mondai desu.', 'Это чрезвычайно важная проблема.'),
  word('n3voc-tanni', 'Наречия', '単に', 'たんに', 'tanni', 'просто, всего лишь', '単に興味があるだけです。', 'Tanni kyoumi ga aru dake desu.', 'Мне просто интересно, и всё.'),

  // Общество (продолжение)
  word('n3voc-fukushi', 'Общество', '福祉', 'ふくし', 'fukushi', 'социальное обеспечение', '福祉が充実しています。', 'Fukushi ga juujitsu shiteimasu.', 'Система соцобеспечения развита.'),
  word('n3voc-sedai', 'Общество', '世代', 'せだい', 'sedai', 'поколение', '世代によって考え方が違います。', 'Sedai ni yotte kangaekata ga chigaimasu.', 'У разных поколений разное мышление.'),

  // Технологии (продолжение)
  word('n3voc-sekyuriti', 'Технологии', 'セキュリティ', 'セキュリティ', 'sekyuriti', 'безопасность (данных)', 'セキュリティを強化します。', 'Sekyuriti wo kyouka shimasu.', 'Усиливаем безопасность.'),
  word('n3voc-nettowaaku', 'Технологии', 'ネットワーク', 'ネットワーク', 'nettowa-ku', 'сеть', 'ネットワークがつながりません。', 'Nettowa-ku ga tsunagarimasen.', 'Сеть не подключается.'),

  // Экономика (продолжение)
  word('n3voc-kabu', 'Экономика', '株', 'かぶ', 'kabu', 'акция (биржевая)', '株を買いました。', 'Kabu wo kaimashita.', 'Купил(а) акции.'),
  word('n3voc-keiki', 'Экономика', '景気', 'けいき', 'keiki', 'экономическая конъюнктура', '景気が悪いです。', 'Keiki ga warui desu.', 'Экономическая ситуация плохая.'),

  // Отношения (продолжение)
  word('n3voc-ren\'ai', 'Отношения', '恋愛', 'れんあい', 'ren\'ai', 'романтическая любовь', '恋愛について話します。', 'Ren\'ai ni tsuite hanashimasu.', 'Говорим о любви.'),

  // Формальная лексика (продолжение)
  word('n3voc-uketamawaru', 'Формальная лексика', '承る', 'うけたまわる', 'uketamawaru', 'скромно принимать (заказ, просьбу)', 'ご注文を承りました。', 'Gochuumon wo uketamawarimashita.', 'Ваш заказ принят.'),

  // Наука (продолжение)
  word('n3voc-toukei', 'Наука', '統計', 'とうけい', 'toukei', 'статистика', '統計によると、人口が減っています。', 'Toukei ni yoru to, jinkou ga hetteimasu.', 'По статистике, население сокращается.'),
  word('n3voc-shouko', 'Наука', '証拠', 'しょうこ', 'shouko', 'доказательство', '証拠がありません。', 'Shouko ga arimasen.', 'Доказательств нет.'),

  // Психология и эмоции (продолжение)
  word('n3voc-nayami', 'Психология и эмоции', '悩み', 'なやみ', 'nayami', 'переживание, беспокоящий вопрос', '悩みを相談します。', 'Nayami wo soudan shimasu.', 'Советуюсь по поводу переживаний.'),

  // Работа и карьера (продолжение)
  word('n3voc-nouryoku', 'Работа и карьера', '能力', 'のうりょく', 'nouryoku', 'способность, компетенция', '高い能力があります。', 'Takai nouryoku ga arimasu.', 'Обладает высокими способностями.'),

  // Абстрактные понятия (продолжение)
  word('n3voc-shiten', 'Абстрактные понятия', '視点', 'してん', 'shiten', 'точка зрения', '違う視点から見ます。', 'Chigau shiten kara mimasu.', 'Смотрю с другой точки зрения.'),

  // Устойчивые выражения (продолжение)
  word('n3voc-tewokasu', 'Устойчивые выражения', '手を貸す', 'てをかす', 'te wo kasu', 'помочь (протянуть руку помощи)', '手を貸してください。', 'Te wo kashite kudasai.', 'Помогите, пожалуйста.'),

  // Глаголы (продолжение)
  word('n3voc-itaru', 'Глаголы', '至る', 'いたる', 'itaru', 'достигать, доходить до', '結論に至りました。', 'Ketsuron ni itarimashita.', 'Пришли к заключению.'),
  word('n3voc-ikasu', 'Глаголы', '生かす', 'いかす', 'ikasu', 'использовать по максимуму, применять', '経験を生かします。', 'Keiken wo ikashimasu.', 'Использую опыт.'),

  // Наречия (продолжение)
  word('n3voc-arayuru', 'Наречия', 'あらゆる', 'あらゆる', 'arayuru', 'всевозможный, всякий', 'あらゆる方法を試しました。', 'Arayuru houhou wo tameshimashita.', 'Испробовал(а) всевозможные способы.'),
  word('n3voc-mohaya', 'Наречия', 'もはや', 'もはや', 'mohaya', 'уже (не), теперь уже', 'もはや後戻りできません。', 'Mohaya atomodori dekimasen.', 'Теперь уже нельзя повернуть назад.'),

  // Работа и карьера (продолжение)
  word('n3voc-uchiawase', 'Работа и карьера', '打ち合わせ', 'うちあわせ', 'uchiawase', 'деловая встреча, совещание', '午後、打ち合わせがあります。', 'Gogo, uchiawase ga arimasu.', 'После обеда будет совещание.'),

  // Технологии (продолжение)
  word('n3voc-koushinsuru', 'Технологии', '更新する', 'こうしんする', 'koushin suru', 'обновлять', 'アプリを更新します。', 'Apuri wo koushin shimasu.', 'Обновляю приложение.'),

  // Экономика (продолжение)
  word('n3voc-shakkin', 'Экономика', '借金', 'しゃっきん', 'shakkin', 'долг', '借金を返します。', 'Shakkin wo kaeshimasu.', 'Выплачиваю долг.'),

  // Абстрактные понятия (продолжение)
  word('n3voc-ishikisuru', 'Абстрактные понятия', '意識する', 'いしきする', 'ishiki suru', 'осознавать, иметь в виду', '健康を意識します。', 'Kenkou wo ishiki shimasu.', 'Забочусь о здоровье (держу в уме).'),
  word('n3voc-jittai', 'Абстрактные понятия', '実態', 'じったい', 'jittai', 'реальное положение дел', '実態を調べます。', 'Jittai wo shirabemasu.', 'Изучаю реальное положение дел.'),

  // Отношения (продолжение)
  word('n3voc-shitashii', 'Отношения', '親しい', 'したしい', 'shitashii', 'близкий (об отношениях)', '親しい友達です。', 'Shitashii tomodachi desu.', 'Это близкий друг.'),

  // Формальная лексика (продолжение)
  word('n3voc-itasu', 'Формальная лексика', 'いたす', 'いたす', 'itasu', 'скромно делать (кэндзёго для する)', 'ご連絡いたします。', 'Gorenraku itashimasu.', 'Свяжусь с вами.'),
  word('n3voc-mairu', 'Формальная лексика', '参る', 'まいる', 'mairu', 'скромно идти/приходить (кэндзёго)', 'すぐに参ります。', 'Sugu ni mairimasu.', 'Скоро приду.'),

  // Наука (продолжение)
  word('n3voc-bun\'ya', 'Наука', '分野', 'ぶんや', 'bun\'ya', 'область, сфера (науки, деятельности)', 'この分野に詳しいです。', 'Kono bun\'ya ni kuwashii desu.', 'Хорошо разбираюсь в этой области.'),

  // Природа и экология (продолжение)
  word('n3voc-hogosuru', 'Природа и экология', '保護する', 'ほごする', 'hogo suru', 'защищать, охранять (природу)', '動物を保護します。', 'Doubutsu wo hogo shimasu.', 'Охраняем животных.'),

  // Устойчивые выражения (продолжение)
  word('n3voc-kiwotsukau', 'Устойчивые выражения', '気を遣う', 'きをつかう', 'ki wo tsukau', 'проявлять чуткость, деликатность', 'いつも気を遣ってくれます。', 'Itsumo ki wo tsukatte kuremasu.', 'Всегда проявляет ко мне чуткость.'),

  // Прилагательные (продолжение)
  word('n3voc-nozomashii', 'Прилагательные', '望ましい', 'のぞましい', 'nozomashii', 'желательный', '早めの対応が望ましいです。', 'Hayame no taiou ga nozomashii desu.', 'Желательно отреагировать пораньше.'),

  // Наречия (продолжение)
  word('n3voc-karini', 'Наречия', '仮に', 'かりに', 'karini', 'предположим, если бы', '仮に失敗しても、大丈夫です。', 'Karini shippai shitemo, daijoubu desu.', 'Даже если предположить неудачу, всё будет в порядке.'),
]
