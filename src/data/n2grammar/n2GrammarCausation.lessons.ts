import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N2_GRAMMAR_CAUSATION_POINTS } from './n2GrammarCausation.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n2-grammar-causation'

const introLesson: LessonDefinition = {
  id: 'n2-grammar-causation-intro',
  blockId: BLOCK_ID,
  title: 'Причина, итог и обязательство',
  description: '«На основе», «в итоге долгих мытарств», «раз уж», «зависит от», «есть риск»',
  order: 0,
  theory: [
    { type: 'heading', text: 'Как звучит зрелое рассуждение' },
    {
      type: 'paragraph',
      text: 'から и ので (N5-N4) хороши для простой причины. На N2 добавляются обороты для более сложных логических связей: основание для решения (に基づいて), итог долгого процесса (あげく/末に), сожаление о причине (ばかりに), твёрдая решимость после решения (からには), зависимость исхода (次第だ) и формальное предупреждение о риске (おそれがある).',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const pointLessons: LessonDefinition[] = N2_GRAMMAR_CAUSATION_POINTS.map((point, index) =>
  buildGrammarLesson(point, N2_GRAMMAR_CAUSATION_POINTS, BLOCK_ID, index + 1),
)

export const N2_GRAMMAR_CAUSATION_LESSONS: LessonDefinition[] = [introLesson, ...pointLessons]
