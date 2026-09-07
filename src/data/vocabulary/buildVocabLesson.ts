import { pickRandom, shuffle } from '@/utils/shuffle'
import type { LessonDefinition, MiniCheckQuestion, TheorySection, VocabWord } from '@/types/content'

/** Собирает урок по одной теме словаря: таблица слов + примеры + мини-проверка. */
export function buildVocabCategoryLesson(category: string, words: VocabWord[], allWords: VocabWord[], blockId: string, order: number): LessonDefinition {
  const theory: TheorySection[] = [
    { type: 'heading', text: category },
    {
      type: 'table',
      headers: ['Слово', 'Чтение', 'Ромадзи', 'Перевод'],
      rows: words.map((w) => [w.japanese, w.kana, w.romaji, w.translation]),
    },
    ...words.map((w): TheorySection => ({
      type: 'example',
      japanese: w.example.japanese,
      romaji: w.example.romaji,
      translation: w.example.translation,
      note: `${w.japanese} — «${w.translation}»`,
    })),
  ]

  return {
    id: `${blockId}-${slugify(category)}`,
    blockId,
    title: category,
    description: words.map((w) => w.japanese).join(' · '),
    order,
    theory,
    miniCheck: buildMiniCheck(words, allWords, category, blockId),
    itemIds: words.map((w) => w.id),
    xpReward: 50,
  }
}

function buildMiniCheck(words: VocabWord[], allWords: VocabWord[], category: string, blockId: string): MiniCheckQuestion[] {
  const distractorPool = allWords.filter((w) => !words.some((target) => target.id === w.id)).map((w) => w.translation)

  return pickRandom(words, Math.min(3, words.length)).map((target, index): MiniCheckQuestion => {
    const options = shuffle([target.translation, ...pickRandom(distractorPool, Math.min(3, distractorPool.length))])
    return {
      id: `${blockId}-${slugify(category)}-check-${index}`,
      question: `Что значит «${target.japanese}» (${target.kana})?`,
      options,
      correctIndex: options.indexOf(target.translation),
      explanation: `${target.japanese} — «${target.translation}». Пример: ${target.example.japanese} — ${target.example.translation}`,
    }
  })
}

function slugify(text: string): string {
  const map: Record<string, string> = {
    Приветствия: 'greetings',
    Люди: 'people',
    Семья: 'family',
    Еда: 'food',
    Напитки: 'drinks',
    Дом: 'house',
    Транспорт: 'transport',
    Время: 'time',
    Места: 'places',
    Учёба: 'study',
    Работа: 'work',
    Погода: 'weather',
    Цвета: 'colors',
    Животные: 'animals',
    Тело: 'body',
    Одежда: 'clothing',
    'Повседневные действия': 'daily-actions',
    Наречия: 'adverbs',
    'Вопросительные слова': 'question-words',
    Прилагательные: 'adjectives-vocab',
    Глаголы: 'verbs-vocab',
    'Спорт и хобби': 'sports-hobbies',
    'Покупки и деньги': 'shopping-money',
    Здоровье: 'health',
    'Природа и времена года': 'nature-seasons',
    'Школьные предметы': 'school-subjects',
    Направления: 'directions',
    Профессии: 'professions',
    'Канцелярия и вещи': 'stationery-items',
    Чувства: 'feelings',
    'Общение и техника': 'communication-tech',
    'Страны и места': 'countries-places',
    'Количество и местоимения': 'quantity-pronouns',
    'Личные данные': 'personal-info',
    'Праздники и события': 'holidays-events',
    'Указательные слова': 'demonstratives',
    'Основные ответы': 'basic-answers',
    'Числа 1-10': 'numbers',
    'Сотни и валюта': 'hundreds-currency',
    Час: 'hours',
    Минуты: 'minutes',
    'Дни недели': 'weekdays',
    Даты: 'dates',
    Счётчики: 'counters',
    'Природа и погода': 'nature-weather',
    Эмоции: 'emotions',
    'Абстрактные понятия': 'abstract',
    Общество: 'society',
    'Общество и культура': 'society-culture',
    Технологии: 'technology',
    'Технологии и медиа': 'tech-media',
    Экономика: 'economy',
    Отношения: 'relationships',
    Путешествия: 'travel',
    'Здоровье и спорт': 'health-sports',
    'Личность и характер': 'personality-character',
    'Повседневные ситуации': 'daily-situations',
    'Формальная лексика': 'formal',
    'Деловой японский': 'business',
    'Медиа и новости': 'media',
    Наука: 'science',
    'Психология и эмоции': 'psychology-emotions',
    'Работа и карьера': 'work-career',
    'Общество и политика': 'society-politics',
    'Экономика и финансы': 'economy-finance',
    'Психология и характер': 'psychology-character',
    'Культура и искусство': 'culture-art',
    'Здоровье и медицина': 'health-medicine',
    'Природа и экология': 'nature-ecology',
    'Устойчивые выражения': 'set-phrases',
    'Абстрактная мысль': 'abstract-thought',
    'Формальные обороты': 'formal-phrases',
    'Дом и быт': 'home-life',
    'Одежда и вещи': 'clothing-items',
    'Транспорт и город': 'transport-city',
  }
  return map[text] ?? text.toLowerCase()
}
