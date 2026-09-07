import { N3_GRAMMAR_KEIGO_LESSONS } from './n3GrammarKeigo.lessons'
import type { BlockDefinition } from '@/types/content'

export const N3_GRAMMAR_KEIGO_BLOCK: BlockDefinition = {
  id: 'n3-grammar-keigo',
  levelId: 'n3',
  title: '敬語: вежливая речь',
  description: 'お〜になる/お〜する и особые вежливые глаголы: いらっしゃる, おっしゃる, 召し上がる, なさる, 伺う, させていただく.',
  order: 5,
  contentType: 'grammar',
  prerequisiteBlockId: 'n3-grammar-extent',
  lessons: N3_GRAMMAR_KEIGO_LESSONS,
  exam: {
    id: 'n3-grammar-keigo-exam',
    blockId: 'n3-grammar-keigo',
    title: 'Экзамен: 敬語',
    description: 'Проверка お〜になる, お〜する, いらっしゃる, おっしゃる, 召し上がる, なさる, 伺う и させていただく.',
    questionCount: 16,
    passingScore: 0.8,
    xpReward: 280,
  },
}

export * from './n3GrammarKeigo.points'
