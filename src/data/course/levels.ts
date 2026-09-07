import { N5_GRAMMAR_BASICS_BLOCK } from '@/data/grammar/n5GrammarBasics.block'
import { HIRAGANA_BLOCK } from '@/data/hiragana/hiragana.block'
import { KATAKANA_BLOCK } from '@/data/katakana/katakana.block'
import { N5_ADJECTIVES_BLOCK } from '@/data/adjectives/n5Adjectives.block'
import { N5_FINAL_EXAM_BLOCK } from '@/data/finalExam/n5FinalExam.block'
import { N5_KANJI_BLOCK } from '@/data/kanji/n5Kanji.block'
import { N5_NUMBERS_TIME_BLOCK } from '@/data/numbers/n5NumbersTime.block'
import { N5_READING_BLOCK } from '@/data/reading/n5Reading.block'
import { N5_VERBS_BLOCK } from '@/data/verbs/n5Verbs.block'
import { N5_VOCABULARY_BLOCK } from '@/data/vocabulary/n5Vocabulary.block'
import type { LevelDefinition } from '@/types/content'

/**
 * Единственное место, где собирается вся программа курса. Чтобы добавить
 * новый блок (например, "Частицы") — импортируй его BlockDefinition сюда
 * и добавь в массив blocks нужного уровня. Экран карты курса и вся система
 * разблокировки подхватят его автоматически, без правок компонентов.
 */
export const LEVELS: LevelDefinition[] = [
  {
    id: 'n5',
    title: 'N5',
    description: 'Уровень абсолютного новичка: азбуки, базовая грамматика и первые слова.',
    order: 1,
    blocks: [
      HIRAGANA_BLOCK,
      KATAKANA_BLOCK,
      N5_GRAMMAR_BASICS_BLOCK,
      N5_VOCABULARY_BLOCK,
      N5_KANJI_BLOCK,
      N5_VERBS_BLOCK,
      N5_ADJECTIVES_BLOCK,
      N5_NUMBERS_TIME_BLOCK,
      N5_READING_BLOCK,
      N5_FINAL_EXAM_BLOCK,
    ],
  },
  {
    id: 'n4',
    title: 'N4',
    description: 'Более сложная грамматика, больше кандзи и связные тексты.',
    order: 2,
    prerequisiteLevelId: 'n5',
    blocks: [],
    plannedBlocks: [{ title: 'Контент N4', description: 'Появится по мере прохождения N5' }],
  },
  {
    id: 'n3',
    title: 'N3',
    description: 'Переход к среднему уровню: устойчивые выражения и сложные конструкции.',
    order: 3,
    prerequisiteLevelId: 'n4',
    blocks: [],
    plannedBlocks: [{ title: 'Контент N3', description: 'Появится по мере прохождения N4' }],
  },
  {
    id: 'n2',
    title: 'N2',
    description: 'Продвинутый уровень: формальный язык, длинные тексты, подготовка к экзамену.',
    order: 4,
    prerequisiteLevelId: 'n3',
    blocks: [],
    plannedBlocks: [{ title: 'Контент N2', description: 'Появится по мере прохождения N3' }],
  },
]

export function findLevel(levelId: string) {
  return LEVELS.find((level) => level.id === levelId)
}

export function findBlock(levelId: string, blockId: string) {
  return findLevel(levelId)?.blocks.find((block) => block.id === blockId)
}

export function findLesson(levelId: string, blockId: string, lessonId: string) {
  return findBlock(levelId, blockId)?.lessons.find((lesson) => lesson.id === lessonId)
}
