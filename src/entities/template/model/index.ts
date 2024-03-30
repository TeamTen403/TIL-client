import { atom } from 'jotai'
import { Template, TemplateId } from '../types'
import { splitAtom } from 'jotai/utils'

export const defaultTemplateList: Template[] = [
  { id: 'BLANK_TYPE', name: '빈 템플릿' },
  {
    id: 'PROBLEM_SOLVING_TYPE',
    name: '문제해결형',
    template: [
      { insert: '1. 어떤 문제가 있었나요?', attributes: { bold: true } },
      { insert: '\n' },
      { insert: '\n' },
      { insert: '2. 문제를 해결하기 위해 어떤 시도를 했나요?', attributes: { bold: true } },
      { insert: '\n' },
      { insert: '\n' },
      { insert: '3. 어떻게 해결했나요?', attributes: { bold: true } },
      { insert: '\n' },
      { insert: '\n' },
    ],
  },
  {
    id: 'GOAL_ACHIEVEMENT_TYPE',
    name: '목표달성형',

    template: [
      { insert: '1. 어떤 목표를 설정했나요?', attributes: { bold: true } },
      { insert: '\n' },
      { insert: '\n' },
      { insert: '2. 목표를 이루기 위해 어떤 노력을 했나요?', attributes: { bold: true } },
      { insert: '\n' },
      { insert: '\n' },
      { insert: '3. 목표 달성 결과는 어땠나요?', attributes: { bold: true } },
      { insert: '\n' },
      { insert: '\n' },
    ],
  },
  {
    id: 'ONE_ON_ON_TYPE',
    name: '원오원형',
    template: [
      { insert: '1. 어떤 목표를 설정했나요?', attributes: { bold: true } },
      { insert: '\n' },
      { insert: '\n' },
      { insert: '2. 목표를 이루기 위해 어떤 노력을 했나요?', attributes: { bold: true } },
      { insert: '\n' },
      { insert: '\n' },
      { insert: '3. 목표 달성 결과는 어땠나요?', attributes: { bold: true } },
      { insert: '\n' },
      { insert: '\n' },
    ],
  },
]

export const templateListAtom = atom(defaultTemplateList)
export const templateAtomsAtom = splitAtom(templateListAtom)
export const selectedTemplateAtom = atom<Template | null>(null)
export const selectTemplateAtom = atom(null, (_, set, update: Template) => set(selectedTemplateAtom, update))
export const templateSelectedAtomCreator = (id: TemplateId) => atom(get => get(selectedTemplateAtom)?.id == id)
