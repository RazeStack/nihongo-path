import type { KanjiEntry, RelatedWord } from '@/types/content'

function rw(japanese: string, kana: string, romaji: string, translation: string): RelatedWord {
  return { japanese, kana, romaji, translation }
}

function kanji(
  id: string,
  char: string,
  meaning: string,
  onyomi: string[],
  kunyomi: string[],
  relatedWords: RelatedWord[],
  exampleJapanese: string,
  exampleRomaji: string,
  exampleTranslation: string,
): KanjiEntry {
  return {
    id,
    char,
    jlptLevel: 'n2',
    meaning,
    onyomi,
    kunyomi,
    relatedWords,
    example: { japanese: exampleJapanese, romaji: exampleRomaji, translation: exampleTranslation },
  }
}

export const N2_KANJI_GROUPS = ['Дело', 'Медиа', 'Наука', 'Понятия'] as const

/** 20 кандзи N2 — из слов, уже введённых в блоке Словарь N2. */
export const N2_KANJI_ENTRIES: Record<(typeof N2_KANJI_GROUPS)[number], KanjiEntry[]> = {
  Дело: [
    kanji('n2kj-gi', '議', 'обсуждение', ['ぎ'], [], [rw('会議', 'かいぎ', 'kaigi', 'совещание')], '明日会議があります。', 'Ashita kaigi ga arimasu.', 'Завтра совещание.'),
    kanji('n2kj-an', '案', 'план, предложение', ['あん'], [], [rw('提案', 'ていあん', 'teian', 'предложение')], '新しい提案をします。', 'Atarashii teian wo shimasu.', 'Делаю новое предложение.'),
    kanji('n2kj-tan', '担', 'нести на себе', ['たん'], ['かつぐ'], [rw('担当', 'たんとう', 'tantou', 'ответственный за')], '私が担当します。', 'Watashi ga tantou shimasu.', 'Я буду ответственным за это.'),
    kanji('n2kj-tou2', '当', 'соответствовать, этот', ['とう'], ['あたる'], [rw('担当', 'たんとう', 'tantou', 'ответственный за'), rw('本当', 'ほんとう', 'hontou', 'правда')], 'それは本当です。', 'Sore wa hontou desu.', 'Это правда.'),
    kanji('n2kj-tei', '締', 'завязывать, скреплять', ['てい'], ['しめる'], [rw('締め切り', 'しめきり', 'shimekiri', 'дедлайн')], '締め切りを守ります。', 'Shimekiri wo mamorimasu.', 'Соблюдаю дедлайн.'),
  ],
  Медиа: [
    kanji('n2kj-ki2', '記', 'записывать', ['き'], ['しるす'], [rw('記事', 'きじ', 'kiji', 'статья'), rw('日記', 'にっき', 'nikki', 'дневник')], 'この記事を読みました。', 'Kono kiji wo yomimashita.', 'Прочитал эту статью.'),
    kanji('n2kj-ji3', '事', 'дело', ['じ'], ['こと'], [rw('記事', 'きじ', 'kiji', 'статья'), rw('仕事', 'しごと', 'shigoto', 'работа')], '仕事があります。', 'Shigoto ga arimasu.', 'У меня есть работа.'),
    kanji('n2kj-i2', '意', 'мысль, намерение', ['い'], [], [rw('意見', 'いけん', 'iken', 'мнение')], '意見を言ってください。', 'Iken wo itte kudasai.', 'Пожалуйста, выскажите мнение.'),
    kanji('n2kj-hi2', '批', 'критиковать', ['ひ'], [], [rw('批判', 'ひはん', 'hihan', 'критика')], '批判を受けました。', 'Hihan wo ukemashita.', 'Получил критику.'),
    kanji('n2kj-han', '判', 'судить, штамп', ['はん'], [], [rw('批判', 'ひはん', 'hihan', 'критика')], '批判は簡単です。', 'Hihan wa kantan desu.', 'Критиковать легко.'),
  ],
  Наука: [
    kanji('n2kj-kyuu2', '究', 'исследовать досконально', ['きゅう'], [], [rw('研究', 'けんきゅう', 'kenkyuu', 'исследование')], '大学で研究しています。', 'Daigaku de kenkyuu shiteimasu.', 'Провожу исследование в университете.'),
    kanji('n2kj-shou2', '証', 'доказательство', ['しょう'], [], [rw('証明', 'しょうめい', 'shoumei', 'доказательство')], 'それを証明します。', 'Sore wo shoumei shimasu.', 'Докажу это.'),
    kanji('n2kj-mei', '明', 'ясный, светлый', ['めい'], ['あかるい'], [rw('証明', 'しょうめい', 'shoumei', 'доказательство'), rw('説明', 'せつめい', 'setsumei', 'объяснение')], '説明してください。', 'Setsumei shite kudasai.', 'Пожалуйста, объясните.'),
    kanji('n2kj-ri', '理', 'логика, принцип', ['り'], [], [rw('理論', 'りろん', 'riron', 'теория'), rw('料理', 'りょうり', 'ryouri', 'кулинария, блюдо')], '新しい理論です。', 'Atarashii riron desu.', 'Это новая теория.'),
    kanji('n2kj-seki', '析', 'анализировать', ['せき'], [], [rw('分析', 'ぶんせき', 'bunseki', 'анализ')], 'データを分析します。', 'Deeta wo bunseki shimasu.', 'Анализирую данные.'),
  ],
  Понятия: [
    kanji('n2kj-gai', '概', 'в общих чертах', ['がい'], [], [rw('概念', 'がいねん', 'gainen', 'понятие')], '新しい概念です。', 'Atarashii gainen desu.', 'Это новое понятие.'),
    kanji('n2kj-nen', '念', 'мысль, забота', ['ねん'], [], [rw('概念', 'がいねん', 'gainen', 'понятие'), rw('記念', 'きねん', 'kinen', 'память, памятное событие')], 'いい記念になりました。', 'Ii kinen ni narimashita.', 'Это стало хорошим воспоминанием.'),
    kanji('n2kj-shitsu', '質', 'качество, суть', ['しつ'], [], [rw('本質', 'ほんしつ', 'honshitsu', 'суть'), rw('質問', 'しつもん', 'shitsumon', 'вопрос')], '問題の本質は何ですか。', 'Mondai no honshitsu wa nan desu ka.', 'В чём суть проблемы?'),
    kanji('n2kj-mu', '矛', 'копьё', ['む'], [], [rw('矛盾', 'むじゅん', 'mujun', 'противоречие')], 'その話は矛盾しています。', 'Sono hanashi wa mujun shiteimasu.', 'Этот рассказ противоречив.'),
    kanji('n2kj-jun', '盾', 'щит', ['じゅん'], ['たて'], [rw('矛盾', 'むじゅん', 'mujun', 'противоречие')], '矛盾を感じます。', 'Mujun wo kanjimasu.', 'Чувствую противоречие.'),
  ],
}
