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
    Работа: 'work',
    Учёба: 'study',
    Природа: 'nature',
    'Понятия и чувства': 'concepts-feelings',
    Общество: 'society',
    Технологии: 'technology',
    Экономика: 'economy',
    Отношения: 'relationships',
    Дело: 'business',
    Медиа: 'media',
    Наука: 'science',
    Понятия: 'concepts',
  }
  return map[text] ?? text.toLowerCase()
}
