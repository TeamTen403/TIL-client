import { atom } from 'jotai'

export type TilDto = {
  title: string
  content: string
  tagId: string
  thumbnail?: string
}

export const tilDtoAtom = atom<TilDto | undefined>(undefined)
