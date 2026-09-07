import { N5_GRAMMAR_PARTICLES2_LESSONS } from './n5GrammarParticles2.lessons'
import type { BlockDefinition } from '@/types/content'

export const N5_GRAMMAR_PARTICLES2_BLOCK: BlockDefinition = {
  id: 'n5-grammar-particles-2',
  levelId: 'n5',
  title: 'Ещё частицы',
  description: 'だ, へ, と, も, の, から, まで, や, か, ね, よ — довершают базовый набор служебных слов японского предложения.',
  order: 4,
  contentType: 'grammar',
  prerequisiteBlockId: 'n5-grammar-basics',
  lessons: N5_GRAMMAR_PARTICLES2_LESSONS,
  exam: {
    id: 'n5-grammar-particles-2-exam',
    blockId: 'n5-grammar-particles-2',
    title: 'Экзамен: Ещё частицы',
    description: 'Проверка употребления だ, へ, と, も, の, から, まで, や, か, ね, よ в предложениях.',
    questionCount: 20,
    passingScore: 0.8,
    xpReward: 220,
  },
}

export * from './n5GrammarParticles2.points'
