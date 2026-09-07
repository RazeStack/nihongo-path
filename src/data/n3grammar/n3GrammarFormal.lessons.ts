import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N3_GRAMMAR_FORMAL_POINTS } from './n3GrammarFormal.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n3-grammar-formal'

const introLesson: LessonDefinition = {
  id: 'n3-grammar-formal-intro',
  blockId: BLOCK_ID,
  title: 'От разговора — к письменному стилю',
  description: 'Формальные связки: объект отношения, средство, точка зрения, роль',
  order: 0,
  theory: [
    { type: 'heading', text: 'Зачем нужен ещё один слой частиц' },
    {
      type: 'paragraph',
      text: 'に, で, から — частицы N5, которые работают в разговоре. Но в статьях, докладах, деловых письмах и объявлениях японский становится куда более формальным — вместо простых частиц используются устойчивые обороты: に対して (по отношению к), によって (посредством/из-за), として (в качестве). Это не новые оттенки смысла, а более официальный РЕГИСТР — как в русском «касательно» вместо «про».',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const pointLessons: LessonDefinition[] = N3_GRAMMAR_FORMAL_POINTS.map((point, index) =>
  buildGrammarLesson(point, N3_GRAMMAR_FORMAL_POINTS, BLOCK_ID, index + 1),
)

export const N3_GRAMMAR_FORMAL_LESSONS: LessonDefinition[] = [introLesson, ...pointLessons]
