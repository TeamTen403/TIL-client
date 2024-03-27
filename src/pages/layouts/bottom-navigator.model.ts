import { pathKeys } from '@/shared/lib/react-router'
import { molecule } from 'bunshi'
import { atom } from 'jotai'

export const BottomNavigatorMol = molecule(() => {
  const activeTabAtom = atom(pathKeys.mypage())
  return {
    atom: { activeTabAtom },
  }
})
