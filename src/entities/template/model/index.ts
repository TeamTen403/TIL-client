import { atom } from 'jotai'
import { Template, TemplateId } from '../types'
import { splitAtom } from 'jotai/utils'

export const defaultTemplateList: Template[] = [
  { id: 'BLANK_TYPE', name: '빈 템플릿' },
  { id: 'PROBLEM_SOLVING_TYPE', name: '문제해결형' },
  { id: 'GOAL_ACHIEVEMENT_TYPE', name: '목표달성형' },
  { id: 'ONE_ON_ON_TYPE', name: '원오원형' },
]

export const templateListAtom = atom(defaultTemplateList)
export const templateAtomsAtom = splitAtom(templateListAtom)
export const selectedTemplateAtom = atom<Template | null>(null)
export const selectTemplateAtom = atom(null, (_, set, update: Template) => set(selectedTemplateAtom, update))
export const templateSelectedAtomCreator = (id: TemplateId) => atom(get => get(selectedTemplateAtom)?.id == id)
