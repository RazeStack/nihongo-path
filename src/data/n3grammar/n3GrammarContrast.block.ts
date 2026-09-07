import { N3_GRAMMAR_CONTRAST_LESSONS } from './n3GrammarContrast.lessons'
import type { BlockDefinition } from '@/types/content'

export const N3_GRAMMAR_CONTRAST_BLOCK: BlockDefinition = {
  id: 'n3-grammar-contrast',
  levelId: 'n3',
  title: 'Уступка и контраст',
  description: 'がち, つつ, 反面, としても, にしては — оттенки «но», «хотя» и «склонен к», которых не было на N4.',
  order: 3,
  contentType: 'grammar',
  prerequisiteBlockId: 'n3-grammar-formal',
  lessons: N3_GRAMMAR_CONTRAST_LESSONS,
  exam: {
    id: 'n3-grammar-contrast-exam',
    blockId: 'n3-grammar-contrast',
    title: 'Экзамен: Уступка и контраст',
    description: 'Проверка がち, つつ, 反面, としても и にしては.',
    questionCount: 12,
    passingScore: 0.8,
    xpReward: 240,
  },
}

export * from './n3GrammarContrast.points'
