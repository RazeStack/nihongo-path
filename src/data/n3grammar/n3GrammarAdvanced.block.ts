import { N3_GRAMMAR_ADVANCED_LESSONS } from './n3GrammarAdvanced.lessons'
import type { BlockDefinition } from '@/types/content'

export const N3_GRAMMAR_ADVANCED_BLOCK: BlockDefinition = {
  id: 'n3-grammar-advanced',
  levelId: 'n3',
  title: 'Каузатив-пассив и связки момента',
  description: '使役受身形 (меня заставили), とたんに, をきっかけに, をもとに, かわりに.',
  order: 6,
  contentType: 'grammar',
  prerequisiteBlockId: 'n3-grammar-keigo',
  lessons: N3_GRAMMAR_ADVANCED_LESSONS,
  exam: {
    id: 'n3-grammar-advanced-exam',
    blockId: 'n3-grammar-advanced',
    title: 'Экзамен: Каузатив-пассив и связки момента',
    description: 'Проверка 使役受身形, とたんに, をきっかけに, をもとに и かわりに.',
    questionCount: 12,
    passingScore: 0.8,
    xpReward: 240,
  },
}

export * from './n3GrammarAdvanced.points'
