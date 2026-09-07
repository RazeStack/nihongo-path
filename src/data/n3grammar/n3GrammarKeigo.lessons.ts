import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N3_GRAMMAR_KEIGO_POINTS } from './n3GrammarKeigo.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n3-grammar-keigo'

const introLesson: LessonDefinition = {
  id: 'n3-grammar-keigo-intro',
  blockId: BLOCK_ID,
  title: '敬語 — вежливость двух направлений',
  description: '尊敬語 поднимает собеседника, 謙譲語 понижает себя самого',
  order: 0,
  theory: [
    { type: 'heading', text: 'です/ます — это ещё не всё' },
    {
      type: 'paragraph',
      text: 'です и ます (N5) — базовая вежливость, одинаковая для всех ситуаций. 敬語 (кэйго) добавляет ещё один уровень, который активно используется в работе с клиентами, в офисе, в official-ситуациях. У кэйго два направления: 尊敬語 (сонкэйго) — поднимает статус того, о ком говорят (никогда не про себя!), и 謙譲語 (кэндзёго) — специально понижает статус говорящего, тем самым оказывая уважение собеседнику.',
    },
    {
      type: 'table',
      headers: ['Обычный глагол', '尊敬語 (про собеседника)', '謙譲語 (про себя)'],
      rows: [
        ['行く/来る/いる', 'いらっしゃる', '参る、伺う'],
        ['言う', 'おっしゃる', '申す'],
        ['食べる/飲む', '召し上がる', 'いただく'],
        ['する', 'なさる', 'いたす'],
      ],
    },
    {
      type: 'warning',
      text: 'Никогда не используй 尊敬語 про себя самого («私はいらっしゃいます» — грубая ошибка) и никогда не используй 謙譲語 про собеседника («あなたは伺います» — тоже ошибка, это унижает собеседника).',
    },
  ],
  miniCheck: [
    {
      id: 'n3-grammar-keigo-intro-check-0',
      question: 'Кому адресован 尊敬語 (сонкэйго)?',
      options: ['Самому себе', 'Собеседнику или тому, о ком говорят (выше по статусу)', 'Только начальнику', 'Всем без разбора'],
      correctIndex: 1,
      explanation: '尊敬語 поднимает статус того, о ком идёт речь — никогда не используется про свои собственные действия.',
    },
  ],
  itemIds: [],
  xpReward: 20,
}

const pointLessons: LessonDefinition[] = N3_GRAMMAR_KEIGO_POINTS.map((point, index) =>
  buildGrammarLesson(point, N3_GRAMMAR_KEIGO_POINTS, BLOCK_ID, index + 1),
)

export const N3_GRAMMAR_KEIGO_LESSONS: LessonDefinition[] = [introLesson, ...pointLessons]
