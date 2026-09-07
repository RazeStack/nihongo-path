/**
 * Типы учебного контента. Контент (data/) не знает про UI — компоненты
 * рендерят то, что здесь описано, поэтому новый урок или слово добавляются
 * только изменением данных, без правок компонентов.
 */

export type JlptLevelId = 'n5' | 'n4' | 'n3' | 'n2'

/**
 * Тип контента блока определяет, какой генератор вопросов и какая иконка
 * используются. 'listening' зарезервирован на будущее и нигде пока не
 * задействован — добавить его позже можно, просто начав его использовать.
 */
export type ContentType =
  | 'kana'
  | 'vocabulary'
  | 'kanji'
  | 'grammar'
  | 'reading'
  | 'listening'
  | 'mixed'

export interface ExampleWord {
  japanese: string
  romaji: string
  translation: string
}

export interface KanaChar {
  id: string
  char: string
  romaji: string
  script: 'hiragana' | 'katakana'
  row: string
  example: ExampleWord
  note?: string
}

/** Предложение с пропуском — на нём строятся вопросы вида "выбери правильную частицу". */
export interface DrillSentence {
  before: string
  after: string
  translation: string
  romaji?: string
}

export interface RelatedWord {
  japanese: string
  kana: string
  romaji: string
  translation: string
}

export interface KanjiEntry {
  id: string
  char: string
  jlptLevel: JlptLevelId
  meaning: string
  onyomi: string[]
  kunyomi: string[]
  relatedWords: RelatedWord[]
  example: ExampleWord
}

export interface VocabWord {
  id: string
  jlptLevel: JlptLevelId
  category: string
  /** Написание как в реальном тексте — с кандзи, если он есть. */
  japanese: string
  /** Чтение полностью каной. */
  kana: string
  romaji: string
  translation: string
  /** Пример употребления — короткое предложение с этим словом. */
  example: ExampleWord
}

export interface GrammarPoint {
  id: string
  jlptLevel: JlptLevelId
  title: string
  /** Например "N1 は N2 です". */
  formula: string
  explanation: string
  usage: string
  /** Слово/частица, которая пропускается в drillSentences — то, что проверяет вопрос. */
  answerToken: string
  examples: ExampleWord[]
  drillSentences: DrillSentence[]
  commonMistakes?: string[]
  comparisons?: string[]
}

/** Структурные блоки теории урока — рендерятся общим TheoryRenderer. */
export type TheorySection =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'example'; japanese: string; romaji?: string; translation: string; note?: string }
  | { type: 'note'; text: string }
  | { type: 'warning'; text: string }
  | { type: 'list'; items: string[] }

export interface MiniCheckQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation?: string
}

export interface LessonDefinition {
  id: string
  blockId: string
  title: string
  description: string
  order: number
  theory: TheorySection[]
  miniCheck: MiniCheckQuestion[]
  /** id элементов (кана/слов/кандзи), которые вводит этот урок. */
  itemIds: string[]
  xpReward: number
}

export interface ExamDefinition {
  id: string
  blockId: string
  title: string
  description: string
  questionCount: number
  /** Проходной балл, доля от 0 до 1. */
  passingScore: number
  xpReward: number
}

export interface BlockDefinition {
  id: string
  levelId: JlptLevelId
  title: string
  description: string
  order: number
  contentType: ContentType
  /** Если undefined — блок открыт по умолчанию (первый блок уровня). */
  prerequisiteBlockId?: string
  lessons: LessonDefinition[]
  exam: ExamDefinition
}

export interface LevelDefinition {
  id: JlptLevelId
  title: string
  description: string
  order: number
  prerequisiteLevelId?: JlptLevelId
  blocks: BlockDefinition[]
  /** Темы уровня, ещё не наполненные контентом — только для дорожной карты в UI. */
  plannedBlocks?: { title: string; description: string }[]
}
