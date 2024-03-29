import { atom } from 'jotai'
import { TagType, TagValue } from '../types'
import { splitAtom } from 'jotai/utils'

export const defaultTagList: TagType[] = [
  { name: '커뮤니케이션', value: 'COMMUNICATION' },
  { name: '비지니스', value: 'BUSINESS' },
  { name: '실험•검증', value: 'EXPERIMENTAL_VERIFICATION' },
  { name: '리더십•매니지먼트', value: 'LEADERSHIP_MANAGEMENT' },
  { name: '마케팅', value: 'MARKETING' },
  { name: '리서치', value: 'RESEARCH' },
  { name: 'CS•CX', value: 'CS_CX' },
  { name: 'UX•UI', value: 'UX_UI' },
  { name: '데이터분석•시각화', value: 'DATA_ANALYTICS_VISUALIZATION' },
  { name: '프론트엔드', value: 'FE' },
  { name: '백엔드', value: 'BE' },
  { name: '안드로이드', value: 'ANDROID' },
  { name: 'IOS', value: 'IOS' },
  { name: 'DBA', value: 'DBA' },
  { name: 'DevOps', value: 'DEVOPS' },
  { name: '인프라', value: 'INFRA' },
  { name: 'QA', value: 'QA' },
  { name: '배포•서비스종료', value: 'DISTRIBUTION_SERVICE_TERMINATION' },
  { name: '기타(개발)', value: 'OTHER_DEVELOPMENT' },
  { name: '기타', value: 'OTHERS' },
]

export const tagListAtom = atom(defaultTagList)
export const tagAtomsAtom = splitAtom(tagListAtom)
export const selectedTagAtom = atom<TagType | null>(null)
export const selectTagAtom = atom(null, (_, set, update: TagType) => set(selectedTagAtom, update))
export const isSelectedTagAtomCreator = (value: TagValue) => atom(get => get(selectedTagAtom)?.value == value)
