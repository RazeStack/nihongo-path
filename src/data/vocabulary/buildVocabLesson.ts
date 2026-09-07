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
    id: `n5-vocabulary-${slugify(category)}`,
    blockId,
    title: category,
    description: words.map((w) => w.japanese).join(' · '),
    order,
    theory,
    miniCheck: buildMiniCheck(words, allWords, category),
    itemIds: words.map((w) => w.id),
    xpReward: 50,
  }
}

function buildMiniCheck(words: VocabWord[], allWords: VocabWord[], category: string): MiniCheckQuestion[] {
  const distractorPool = allWords.filter((w) => !words.some((target) => target.id === w.id)).map((w) => w.translation)

  return pickRandom(words, Math.min(3, words.length)).map((target, index): MiniCheckQuestion => {
    const options = shuffle([target.translation, ...pickRandom(distractorPool, Math.min(3, distractorPool.length))])
    return {
      id: `n5-vocabulary-${slugify(category)}-check-${index}`,
      question: `Что значит «${target.japanese}» (${target.kana})?`,
      options,
      correctIndex: options.indexOf(target.translation),
      explanation: `${target.japanese} — «${target.translation}». Пример: ${target.example.japanese} — ${target.example.translation}`,
    }
  })
}

function slugify(text: string): string {
  const map: Record<string, string> = {
    Люди: 'people',
    Еда: 'food',
    Дом: 'house',
    Транспорт: 'transport',
    Время: 'time',
    Места: 'places',
  }
  return map[text] ?? text.toLowerCase()
}
