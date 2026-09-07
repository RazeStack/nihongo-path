import { pickRandom, shuffle } from '@/utils/shuffle'
import type { KanaChar, LessonDefinition, MiniCheckQuestion, TheorySection } from '@/types/content'

interface BuildKanaRowLessonParams {
  id: string
  blockId: string
  order: number
  rowLabel: string
  scriptLabel: string
  chars: KanaChar[]
  introText: string
}

/**
 * Собирает урок для одного ряда годзюон (таблица + мини-проверка) из сырых
 * данных о символах. Используется и хираганой, и катаканой — так ряды
 * не приходится описывать вручную дважды.
 */
export function buildKanaRowLesson(params: BuildKanaRowLessonParams): LessonDefinition {
  const notes = params.chars
    .filter((c) => c.note)
    .map((c): TheorySection => ({ type: 'note', text: `${c.char} — ${c.note}` }))

  const theory: TheorySection[] = [
    { type: 'heading', text: `${params.rowLabel} (${params.scriptLabel})` },
    { type: 'paragraph', text: params.introText },
    {
      type: 'table',
      headers: ['Символ', 'Ромадзи', 'Пример слова', 'Перевод'],
      rows: params.chars.map((c) => [c.char, c.romaji, c.example.japanese, c.example.translation]),
    },
    ...notes,
  ]

  return {
    id: params.id,
    blockId: params.blockId,
    title: params.rowLabel,
    description: params.chars.map((c) => c.char).join('  '),
    order: params.order,
    theory,
    miniCheck: buildMiniCheck(params.chars, params.id),
    itemIds: params.chars.map((c) => c.id),
    xpReward: 50,
  }
}

function buildMiniCheck(chars: KanaChar[], lessonId: string): MiniCheckQuestion[] {
  return pickRandom(chars, Math.min(3, chars.length)).map((target, index) => {
    const distractorPool = chars.filter((c) => c.id !== target.id).map((c) => c.romaji)
    const options = shuffle([target.romaji, ...pickRandom(distractorPool, Math.min(3, distractorPool.length))])
    return {
      id: `${lessonId}-check-${index}`,
      question: `Как читается «${target.char}»?`,
      options,
      correctIndex: options.indexOf(target.romaji),
      explanation: `${target.char} читается как «${target.romaji}» — например, ${target.example.japanese} (${target.example.romaji}) значит «${target.example.translation}».`,
    }
  })
}
