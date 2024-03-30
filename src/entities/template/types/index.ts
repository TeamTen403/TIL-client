export type Template = {
  id: TemplateId
  name: string
  selected?: boolean
  template?: string
}

export type TemplateId = 'PROBLEM_SOLVING_TYPE' | 'GOAL_ACHIEVEMENT_TYPE' | 'ONE_ON_ON_TYPE' | 'BLANK_TYPE'
