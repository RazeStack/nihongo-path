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
    jlptLevel: 'n2',
    category,
    japanese,
    kana,
    romaji,
    translation,
    example: { japanese: exampleJapanese, romaji: exampleRomaji, translation: exampleTranslation },
  }
}

export const N2_VOCAB_CATEGORIES = ['Деловой японский', 'Медиа и новости', 'Наука', 'Абстрактная мысль', 'Формальные обороты'] as const

/** 30 слов N2 — деловая, научная и медийная лексика, плюс второй слой устойчивых вежливых оборотов. */
export const N2_VOCABULARY_WORDS: VocabWord[] = [
  // Деловой японский
  word('n2voc-keiyaku', 'Деловой японский', '契約', 'けいやく', 'keiyaku', 'контракт', '契約を結びます。', 'Keiyaku wo musubimasu.', 'Заключаю контракт.'),
  word('n2voc-kaigi', 'Деловой японский', '会議', 'かいぎ', 'kaigi', 'совещание', '明日会議があります。', 'Ashita kaigi ga arimasu.', 'Завтра совещание.'),
  word('n2voc-teian', 'Деловой японский', '提案', 'ていあん', 'teian', 'предложение', '新しい提案をします。', 'Atarashii teian wo shimasu.', 'Делаю новое предложение.'),
  word('n2voc-tantou', 'Деловой японский', '担当', 'たんとう', 'tantou', 'ответственный (за)', '私が担当します。', 'Watashi ga tantou shimasu.', 'Я буду ответственным за это.'),
  word('n2voc-shimekiri', 'Деловой японский', '締め切り', 'しめきり', 'shimekiri', 'дедлайн', '締め切りを守ります。', 'Shimekiri wo mamorimasu.', 'Соблюдаю дедлайн.'),
  word('n2voc-shucchou', 'Деловой японский', '出張', 'しゅっちょう', 'shucchou', 'командировка', '来週出張します。', 'Raishuu shucchou shimasu.', 'На следующей неделе еду в командировку.'),

  // Медиа и новости
  word('n2voc-houdou', 'Медиа и новости', '報道', 'ほうどう', 'houdou', 'репортаж, освещение в СМИ', 'ニュースで報道されました。', 'Nyuusu de houdou saremashita.', 'Об этом сообщили в новостях.'),
  word('n2voc-kiji', 'Медиа и новости', '記事', 'きじ', 'kiji', 'статья', 'この記事を読みました。', 'Kono kiji wo yomimashita.', 'Прочитал эту статью.'),
  word('n2voc-iken', 'Медиа и новости', '意見', 'いけん', 'iken', 'мнение', '意見を言ってください。', 'Iken wo itte kudasai.', 'Пожалуйста, выскажите мнение.'),
  word('n2voc-hihan', 'Медиа и новости', '批判', 'ひはん', 'hihan', 'критика', '批判を受けました。', 'Hihan wo ukemashita.', 'Получил критику.'),
  word('n2voc-shuchou', 'Медиа и новости', '主張', 'しゅちょう', 'shuchou', 'позиция, утверждение', '自分の主張をします。', 'Jibun no shuchou wo shimasu.', 'Отстаиваю свою позицию.'),
  word('n2voc-seron', 'Медиа и новости', '世論', 'せろん', 'seron', 'общественное мнение', '世論が変わりました。', 'Seron ga kawarimashita.', 'Общественное мнение изменилось.'),

  // Наука
  word('n2voc-kenkyuu', 'Наука', '研究', 'けんきゅう', 'kenkyuu', 'исследование', '大学で研究しています。', 'Daigaku de kenkyuu shiteimasu.', 'Провожу исследование в университете.'),
  word('n2voc-jikken', 'Наука', '実験', 'じっけん', 'jikken', 'эксперимент', '実験を行いました。', 'Jikken wo okonaimashita.', 'Провёл эксперимент.'),
  word('n2voc-shoumei', 'Наука', '証明', 'しょうめい', 'shoumei', 'доказательство', 'それを証明します。', 'Sore wo shoumei shimasu.', 'Докажу это.'),
  word('n2voc-riron', 'Наука', '理論', 'りろん', 'riron', 'теория', '新しい理論です。', 'Atarashii riron desu.', 'Это новая теория.'),
  word('n2voc-bunseki', 'Наука', '分析', 'ぶんせき', 'bunseki', 'анализ', 'データを分析します。', 'De-ta wo bunseki shimasu.', 'Анализирую данные.'),
  word('n2voc-hakken', 'Наука', '発見', 'はっけん', 'hakken', 'открытие', '大きな発見でした。', 'Ooki na hakken deshita.', 'Это было большое открытие.'),

  // Абстрактная мысль
  word('n2voc-gainen', 'Абстрактная мысль', '概念', 'がいねん', 'gainen', 'понятие', '新しい概念です。', 'Atarashii gainen desu.', 'Это новое понятие.'),
  word('n2voc-honshitsu', 'Абстрактная мысль', '本質', 'ほんしつ', 'honshitsu', 'суть', '問題の本質は何ですか。', 'Mondai no honshitsu wa nan desu ka.', 'В чём суть проблемы?'),
  word('n2voc-mujun', 'Абстрактная мысль', '矛盾', 'むじゅん', 'mujun', 'противоречие', 'その話は矛盾しています。', 'Sono hanashi wa mujun shiteimasu.', 'Этот рассказ противоречив.'),
  word('n2voc-keikou', 'Абстрактная мысль', '傾向', 'けいこう', 'keikou', 'тенденция', '最近その傾向があります。', 'Saikin sono keikou ga arimasu.', 'В последнее время есть такая тенденция.'),
  word('n2voc-youso', 'Абстрактная мысль', '要素', 'ようそ', 'youso', 'элемент, фактор', '大切な要素です。', 'Taisetsu na youso desu.', 'Это важный элемент.'),
  word('n2voc-kachi', 'Абстрактная мысль', '価値', 'かち', 'kachi', 'ценность', '価値があります。', 'Kachi ga arimasu.', 'Имеет ценность.'),

  // Формальные обороты
  word('n2voc-otesuu', 'Формальные обороты', 'お手数をおかけします', 'おてすうをおかけします', 'otesuu wo okakeshimasu', 'извините за беспокойство', 'お手数をおかけしますが、よろしくお願いします。', 'Otesuu wo okakeshimasu ga, yoroshiku onegaishimasu.', 'Извините за беспокойство, прошу вашего содействия.'),
  word('n2voc-goenryo', 'Формальные обороты', 'ご遠慮ください', 'ごえんりょください', 'go-enryo kudasai', 'пожалуйста, воздержитесь', '喫煙はご遠慮ください。', 'Kitsuen wa go-enryo kudasai.', 'Пожалуйста, воздержитесь от курения.'),
  word('n2voc-sashitsukae', 'Формальные обороты', '差し支えなければ', 'さしつかえなければ', 'sashitsukae nakereba', 'если не возражаете', '差し支えなければ、お名前を教えてください。', 'Sashitsukae nakereba, onamae wo oshiete kudasai.', 'Если не возражаете, скажите ваше имя.'),
  word('n2voc-uketamawaru', 'Формальные обороты', '承る', 'うけたまわる', 'uketamawaru', 'принимать (скромно о себе)', 'ご注文を承りました。', 'Gochuumon wo uketamawarimashita.', 'Ваш заказ принят.'),
  word('n2voc-zonjimasu', 'Формальные обороты', '存じます', 'ぞんじます', 'zonjimasu', 'знаю, думаю (скромно о себе)', '存じております。', 'Zonjiteorimasu.', 'Я в курсе (скромно).'),
  word('n2voc-omenikakaru', 'Формальные обороты', 'お目にかかる', 'おめにかかる', 'ome ni kakaru', 'иметь честь встретиться (скромно)', 'お目にかかれて光栄です。', 'Ome ni kakarete kouei desu.', 'Для меня честь встретиться с вами.'),
]
