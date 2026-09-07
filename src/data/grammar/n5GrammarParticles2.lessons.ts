import { buildGrammarLesson } from './buildGrammarLesson'
import { N5_GRAMMAR_PARTICLES2_POINTS } from './n5GrammarParticles2.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n5-grammar-particles-2'

const introLesson: LessonDefinition = {
  id: 'n5-grammar-particles-2-intro',
  blockId: BLOCK_ID,
  title: 'Ещё одиннадцать частиц',
  description: 'Довершаем базовый набор служебных слов, без которых не собрать живое предложение',
  order: 0,
  theory: [
    { type: 'heading', text: 'От скелета к живой речи' },
    {
      type: 'paragraph',
      text: 'В прошлом блоке разобраны частицы, которые держат основной каркас предложения (は, が, を, に, で). Теперь — ещё одиннадцать частиц, без которых невозможно перечислять предметы, говорить «тоже», связывать существительные друг с другом, указывать время «от и до» и правильно задавать вопросы.',
    },
    {
      type: 'table',
      headers: ['Частица', 'Примерная роль'],
      rows: [
        ['だ', 'неформальный вариант です'],
        ['へ', 'направление движения'],
        ['と', '«и» (полный список) / «с» (совместно)'],
        ['も', '«тоже»'],
        ['の', 'связка «чьё/какое» между существительными'],
        ['から〜まで', '«от … до …» (время и место)'],
        ['や', '«и» (неполный список примеров)'],
        ['か', 'вопрос / «или»'],
        ['ね / よ', 'эмоциональные концовки: «правда?» / «между прочим»'],
      ],
    },
    {
      type: 'note',
      text: 'Большинство этих частиц не заменяют, а дополняют уже известные — их можно комбинировать в одном предложении: 学校から駅まで歩きますよ («от школы до станции иду пешком, между прочим»).',
    },
  ],
  miniCheck: [
    {
      id: 'n5-grammar-particles-2-intro-check-0',
      question: 'Чем と отличается от や при перечислении предметов?',
      options: [
        'Ничем, это полные синонимы',
        'と перечисляет всё без остатка, や — только несколько примеров из возможного большего списка',
        'と используется только с именами людей',
        'や используется только в вопросах',
      ],
      correctIndex: 1,
      explanation: '本とペン — «книга и ручка», и больше ничего. 本やペン — «книги, ручки и тому подобное», список неполный.',
    },
  ],
  itemIds: [],
  xpReward: 20,
}

const pointLessons: LessonDefinition[] = N5_GRAMMAR_PARTICLES2_POINTS.map((point, index) =>
  buildGrammarLesson(point, N5_GRAMMAR_PARTICLES2_POINTS, BLOCK_ID, index + 1),
)

export const N5_GRAMMAR_PARTICLES2_LESSONS: LessonDefinition[] = [introLesson, ...pointLessons]
