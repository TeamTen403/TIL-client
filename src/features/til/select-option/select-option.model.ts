import { atom } from 'jotai'
import { TilOptionType } from './types'

export const selectedTilOptionAtom = atom<TilOptionType>('PUBLIC')
export const selectTilOptionAtom = atom(null, (_, set, update: TilOptionType) => set(selectedTilOptionAtom, update))
export const isSelectedTilOptionAtomCreator = (option: TilOptionType) =>
  atom(get => get(selectedTilOptionAtom) === option)
