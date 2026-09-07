import { pickRandom } from '@/utils/shuffle'
import type { DailyQuestTemplate } from '@/types/gamification'
import type { DailyQuestInstance } from '@/types/progress'

const QUESTS_PER_DAY = 3

export function generateDailyQuests(templates: DailyQuestTemplate[]): DailyQuestInstance[] {
  return pickRandom(templates, Math.min(QUESTS_PER_DAY, templates.length)).map((template) => ({
    id: `${template.id}-${Date.now()}`,
    templateId: template.id,
    title: template.title,
    targetCount: template.targetCount,
    progressCount: 0,
    xpReward: template.xpReward,
    completed: false,
  }))
}

/** Продвигает квесты нужного типа и возвращает те, что стали выполнены именно сейчас (для начисления XP). */
export function advanceDailyQuests(
  quests: DailyQuestInstance[],
  templates: DailyQuestTemplate[],
  metric: DailyQuestTemplate['metric'],
  amount: number,
): { quests: DailyQuestInstance[]; justCompleted: DailyQuestInstance[] } {
  const templateById = new Map(templates.map((template) => [template.id, template]))
  const justCompleted: DailyQuestInstance[] = []

  const updated = quests.map((quest) => {
    const template = templateById.get(quest.templateId)
    if (!template || template.metric !== metric || quest.completed) return quest

    const progressCount = Math.min(quest.targetCount, quest.progressCount + amount)
    const completed = progressCount >= quest.targetCount
    const next = { ...quest, progressCount, completed }
    if (completed) justCompleted.push(next)
    return next
  })

  return { quests: updated, justCompleted }
}
