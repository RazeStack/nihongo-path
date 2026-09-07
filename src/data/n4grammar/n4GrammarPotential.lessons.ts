import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N4_GRAMMAR_POTENTIAL_POINTS } from './n4GrammarPotential.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n4-grammar-potential'

const introLesson: LessonDefinition = {
  id: 'n4-grammar-potential-intro',
  blockId: BLOCK_ID,
  title: 'Три новые формы глагола',
  description: 'Потенциальная, пассивная и побудительная формы — и передача действий между людьми',
  order: 0,
  theory: [
    { type: 'heading', text: 'От двух форм N5 — к пяти' },
    {
      type: 'paragraph',
      text: 'В N5 глагол умел спрягаться в ます-форму и в て-форму. В N4 добавляются ещё три формы, которые меняют саму роль подлежащего в предложении: потенциальная («я МОГУ сделать»), пассивная («со мной СДЕЛАЛИ») и побудительная («я ЗАСТАВИЛ/РАЗРЕШИЛ сделать»). Плюс — три конструкции для того, кто кому помогает: あげる/もらう/くれる.',
    },
    {
      type: 'table',
      headers: ['Форма', 'Значение', 'Пример (よむ, «читать»)'],
      rows: [
        ['Потенциальная', 'могу читать', 'よめます'],
        ['Пассивная', 'меня заставили прочитать / было прочитано мной подвергнуто', 'よまれます'],
        ['Побудительная', 'заставил/разрешил прочитать', 'よませます'],
      ],
    },
  ],
  miniCheck: [
    {
      id: 'n4-grammar-potential-intro-check-0',
      question: 'Что показывает потенциальная форма глагола?',
      options: ['Прошедшее время', 'Умение или возможность что-то сделать', 'Вежливость', 'Отрицание'],
      correctIndex: 1,
      explanation: 'はなせます (потенциальная форма はなす) — «умею говорить», как отдельная форма самого глагола.',
    },
  ],
  itemIds: [],
  xpReward: 20,
}

const formationTheoryLesson: LessonDefinition = {
  id: 'n4-grammar-potential-formation',
  blockId: BLOCK_ID,
  title: 'Как образуются три новые формы',
  description: 'Единый принцип для потенциальной, пассивной и побудительной форм',
  order: 1,
  theory: [
    { type: 'heading', text: 'Общий принцип: меняется гласный перед формой' },
    {
      type: 'paragraph',
      text: 'Все три новые формы у глаголов 1 группы (godan) строятся одинаково: последний слог словарной формы меняет гласный звук u на нужный, и добавляется своё окончание. У глаголов 2 группы (ichidan) всегда просто убирается る и добавляется нужное окончание.',
    },
    {
      type: 'table',
      headers: ['Форма', '1 группа (u → …)', '2 группа (убрать る)', 'Пример 1 гр. (のむ)', 'Пример 2 гр. (たべる)'],
      rows: [
        ['Потенциальная', 'u → e + る', '+ られる', 'のめる', 'たべられる'],
        ['Пассивная', 'u → a + れる', '+ られる', 'のまれる', 'たべられる'],
        ['Побудительная', 'u → a + せる', '+ させる', 'のませる', 'たべさせる'],
      ],
    },
    {
      type: 'table',
      headers: ['Форма', 'する', 'くる'],
      rows: [
        ['Потенциальная', 'できる', 'こられる'],
        ['Пассивная', 'される', 'こられる'],
        ['Побудительная', 'させる', 'こさせる'],
      ],
    },
    {
      type: 'note',
      text: 'Пассивная и потенциальная формы 2 группы выглядят абсолютно одинаково (たべられる) — только контекст и частицы подсказывают, какая из них имеется в виду.',
    },
  ],
  miniCheck: [
    {
      id: 'n4-grammar-potential-formation-check-0',
      question: 'Как будет побудительная форма от のむ (nomu, «пить»)?',
      options: ['のめる', 'のまれる', 'のませる', 'のもう'],
      correctIndex: 2,
      explanation: '1 группа, побудительная форма: u → a + せる: のむ → のませる.',
    },
    {
      id: 'n4-grammar-potential-formation-check-1',
      question: 'Чем отличается образование потенциальной и пассивной форм у глаголов 2 группы (たべる)?',
      options: [
        'Ничем — обе формы выглядят одинаково (たべられる)',
        'Потенциальная — たべれる, пассивная — たべられる',
        'Потенциальная не образуется у 2 группы',
        'Пассивная всегда короче потенциальной',
      ],
      correctIndex: 0,
      explanation: 'У глаголов 2 группы обе формы совпадают — たべられる может значить и «могу съесть», и «был съеден/у меня съели».',
    },
  ],
  itemIds: [],
  xpReward: 30,
}

const pointLessons: LessonDefinition[] = N4_GRAMMAR_POTENTIAL_POINTS.map((point, index) =>
  buildGrammarLesson(point, N4_GRAMMAR_POTENTIAL_POINTS, BLOCK_ID, index + 2),
)

export const N4_GRAMMAR_POTENTIAL_LESSONS: LessonDefinition[] = [introLesson, formationTheoryLesson, ...pointLessons]
