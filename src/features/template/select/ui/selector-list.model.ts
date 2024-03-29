import { molecule } from 'bunshi'
import { atom } from 'jotai'

export const SelectorListMol = molecule(() => {
  const isExpandedAtom = atom(true)

  return {
    isExpandedAtom,
  }
})
