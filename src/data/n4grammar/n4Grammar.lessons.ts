import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N4_GRAMMAR_POINTS } from './n4Grammar.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n4-grammar'

const introLesson: LessonDefinition = {
  id: 'n4-grammar-te-form-intro',
  blockId: BLOCK_ID,
  title: 'て-форма — ключ ко всему N4',
  description: 'Как образуется и почему на ней строится половина грамматики N4',
  order: 0,
  theory: [
    { type: 'heading', text: 'Зачем нужна て-форма' },
    {
      type: 'paragraph',
      text: 'て-форма — это "соединительная" форма глагола: сама по себе она не несёт времени, а служит основой для множества конструкций (ています, てもいいです, てください и других), которые разбираются в этом блоке. Освоив её образование один раз, дальше нужно просто менять то, что идёт ПОСЛЕ て.',
    },
    {
      type: 'table',
      headers: ['Окончание словарной формы', 'Правило', 'Пример'],
      rows: [
        ['-う, -つ, -る', '→ って', 'かう → かって'],
        ['-む, -ぬ, -ぶ', '→ んで', 'のむ → のんで'],
        ['-く', '→ いて (искл. いく → いって)', 'かく → かいて'],
        ['-ぐ', '→ いで', 'およぐ → およいで'],
        ['-す', '→ して', 'はなす → はなして'],
        ['2 группа (-iru/-eru)', 'убрать る, добавить て', 'たべる → たべて'],
        ['Неправильные', 'する→して, くる→きて', '—'],
      ],
    },
    {
      type: 'table',
      headers: ['Глагол (уже знаком по N5)', 'て-форма'],
      rows: [
        ['たべる (есть)', 'たべて'],
        ['のむ (пить)', 'のんで'],
        ['いく (идти)', 'いって (искл.)'],
        ['くる (приходить)', 'きて'],
        ['する (делать)', 'して'],
        ['みる (смотреть)', 'みて'],
        ['きく (слушать)', 'きいて'],
        ['はなす (говорить)', 'はなして'],
        ['よむ (читать)', 'よんで'],
        ['かく (писать)', 'かいて'],
      ],
    },
    {
      type: 'note',
      text: 'Хорошая новость: た-форма (прошедшее простое, нужна для たら) образуется ровно по тем же правилам, что и て-форма — просто замени て/で на た/だ в конце.',
    },
  ],
  miniCheck: [
    {
      id: 'n4-grammar-te-form-intro-check-0',
      question: 'Как будет て-форма глагола のむ (пить)?',
      options: ['のんで', 'のって', 'のいて', 'のむて'],
      correctIndex: 0,
      explanation: 'のむ оканчивается на -む → んで: のむ → のんで.',
    },
    {
      id: 'n4-grammar-te-form-intro-check-1',
      question: 'Какой глагол — известное исключение из правила для -く?',
      options: ['かく', 'きく', 'いく', 'つく'],
      correctIndex: 2,
      explanation: 'いく (идти) → いって, а не いいて, как было бы по общему правилу.',
    },
  ],
  itemIds: [],
  xpReward: 20,
}

const grammarLessons: LessonDefinition[] = N4_GRAMMAR_POINTS.map((point, index) =>
  buildGrammarLesson(point, N4_GRAMMAR_POINTS, BLOCK_ID, index + 1),
)

export const N4_GRAMMAR_LESSONS: LessonDefinition[] = [introLesson, ...grammarLessons]
