import { pickRandom, shuffle } from '@/utils/shuffle'
import type { KanjiEntry, LessonDefinition, MiniCheckQuestion, TheorySection } from '@/types/content'

/** Собирает урок по группе кандзи: у каждого иероглифа — своя мини-карточка (чтения, слова, пример). */
export function buildKanjiLesson(group: string, kanjiList: KanjiEntry[], allKanji: KanjiEntry[], blockId: string, order: number): LessonDefinition {
  const theory: TheorySection[] = [{ type: 'heading', text: group }]

  for (const entry of kanjiList) {
    theory.push({ type: 'heading', text: `${entry.char} — ${entry.meaning}` })
    theory.push({
      type: 'table',
      headers: ['Онъёми', 'Кунъёми'],
      rows: [[entry.onyomi.join(', ') || '—', entry.kunyomi.join(', ') || '—']],
    })
    theory.push({
      type: 'table',
      headers: ['Слово', 'Чтение', 'Перевод'],
      rows: entry.relatedWords.map((w) => [w.japanese, w.kana, w.translation]),
    })
    theory.push({ type: 'example', japanese: entry.example.japanese, romaji: entry.example.romaji, translation: entry.example.translation })
  }

  return {
    id: `${blockId}-${slugify(group)}`,
    blockId,
    title: group,
    description: kanjiList.map((k) => k.char).join('  '),
    order,
    theory,
    miniCheck: buildMiniCheck(kanjiList, allKanji, group, blockId),
    itemIds: kanjiList.map((k) => k.id),
    xpReward: 50,
  }
}

function buildMiniCheck(kanjiList: KanjiEntry[], allKanji: KanjiEntry[], group: string, blockId: string): MiniCheckQuestion[] {
  const distractorPool = allKanji.filter((k) => !kanjiList.some((target) => target.id === k.id)).map((k) => k.meaning)

  return pickRandom(kanjiList, Math.min(3, kanjiList.length)).map((target, index): MiniCheckQuestion => {
    const options = shuffle([target.meaning, ...pickRandom(distractorPool, Math.min(3, distractorPool.length))])
    return {
      id: `${blockId}-${slugify(group)}-check-${index}`,
      question: `Что значит кандзи «${target.char}»?`,
      options,
      correctIndex: options.indexOf(target.meaning),
      explanation: `${target.char} — «${target.meaning}». Онъёми: ${target.onyomi.join(', ') || '—'}; кунъёми: ${target.kunyomi.join(', ') || '—'}.`,
    }
  })
}

function slugify(text: string): string {
  const map: Record<string, string> = {
    'Дни недели и природа': 'weekdays-nature',
    'Величина и положение': 'size-position',
    'Природа и вещи': 'nature-things',
    'Школа и жизнь': 'school-life',
    Действия: 'actions',
    Числа: 'numbers',
    'Люди и вопросы': 'people-questions',
    Время: 'time',
    'Частые глаголы и прилагательные': 'common-verbs-adjectives',
    Тело: 'body-kanji',
    'Направления и цвета': 'directions-colors',
    'Природа и погода': 'nature-weather-kanji',
    'Город и учреждения': 'city-institutions',
    'Действия 2': 'actions-2',
    'Действия 3': 'actions-3',
    'Учёба и время 2': 'study-time-2',
    'Работа и общество': 'work-society',
    'Техника и искусство': 'tech-art',
    Работа: 'work',
    Учёба: 'study',
    Природа: 'nature',
    'Понятия и чувства': 'concepts-feelings',
    Общество: 'society',
    'Технологии и медиа': 'tech-media-kanji',
    'Чувства и характер': 'feelings-character',
    'Работа и правила': 'work-rules',
    Здоровье: 'health-kanji',
    'Мышление и решения': 'thinking-decisions',
    'Природные явления': 'natural-phenomena',
    'Достижение и усилие': 'achievement-effort',
    Технологии: 'technology',
    Экономика: 'economy',
    Отношения: 'relationships',
    Дело: 'business',
    Медиа: 'media',
    Наука: 'science',
    Понятия: 'concepts',
    'Формальная лексика': 'formal-vocab-kanji',
    Психология: 'psychology-kanji',
    Экология: 'ecology-kanji',
    'Абстрактные понятия': 'abstract-concepts-kanji',
    'Экономика и бизнес': 'economy-business-kanji',
    'Работа и достижения': 'work-achievements-kanji',
    'Психология и характер': 'psychology-character-kanji',
    'Тело и здоровье': 'body-health-kanji',
    'Абстракция и оценка': 'abstraction-evaluation-kanji',
    'Подготовка и планы': 'preparation-plans-kanji',
    'Общение и отношения': 'communication-relationships-kanji',
    Путешествия: 'travel-kanji',
    'Здоровье и тело': 'health-body-kanji',
    'Еда и вкусы': 'food-tastes-kanji',
    'Работа и офис': 'work-office-kanji',
    'Учёба и природа': 'study-nature-kanji',
    'Реакции и техника': 'reactions-tech-kanji',
    'Качества и оценка': 'qualities-evaluation-kanji',
    'Дом и покупки': 'home-shopping-kanji',
    'Действия и чувства': 'actions-feelings-kanji',
    'Базовые понятия': 'basic-concepts-kanji',
    'Общество и право': 'society-law-kanji',
    'Мысль и оценка': 'thought-evaluation-kanji',
    'Наука и техника': 'science-technology-kanji',
    'Действия и качества': 'actions-qualities-kanji',
    'Роли и структуры': 'roles-structures-kanji',
    'Оценка и сравнение': 'evaluation-comparison-kanji',
    'Действия и происшествия': 'actions-events-kanji',
    'История и культура': 'history-culture-kanji',
    'Абстракция и мышление': 'abstraction-thought-kanji',
    'Экология и энергия': 'ecology-energy-kanji',
    'Начало и конец': 'beginning-end-kanji',
    'Производство и опыт': 'production-experience-kanji',
    'Пространство и время': 'space-time-kanji',
    'Чувства и восприятие': 'feelings-perception-kanji',
    'Итоговые понятия': 'final-concepts-kanji',
    'Общество и жизнь': 'society-life-kanji',
    'Оценка и характеристики': 'evaluation-characteristics-kanji',
    'Правила и структура': 'rules-structure-kanji',
    'Путь и перемены': 'path-changes-kanji',
    'Дом и повседневность': 'home-everyday-kanji',
    'Общество и статус': 'society-status-kanji',
    'Работа и производство': 'work-production-kanji',
    'Природа и материалы': 'nature-materials-kanji',
    'Дела и оплата': 'affairs-payment-kanji',
    'Порядок и время': 'order-time-kanji',
    'Тело и жесты': 'body-gestures-kanji',
    'Оценка и контроль': 'evaluation-control-kanji',
    'Работа и институты': 'work-institutions-kanji',
    'Действия и процессы': 'actions-processes-kanji',
    'Тело и чувства': 'body-feelings-kanji',
    'Творчество и выбор': 'creativity-choice-kanji',
    'Общество и старшинство': 'society-seniority-kanji',
    'Учреждения и виды': 'institutions-types-kanji',
    'Общество и техника': 'society-tech-kanji',
    'Позиция и творчество': 'position-creativity-kanji',
    'Работа и рост': 'work-growth-kanji',
    'Эмоции и достижения': 'emotions-achievements-kanji',
    'Право и последствия': 'law-consequences-kanji',
    'Характер и сравнение': 'character-comparison-kanji',
    'Действия и усилия': 'actions-efforts-kanji',
    'Точность и снисхождение': 'precision-leniency-kanji',
  }
  return map[text] ?? text.toLowerCase()
}
