import { pathKeys } from '@/shared/lib/react-router'
import { Person } from '@mui/icons-material'
import { molecule } from 'bunshi'
import { atom } from 'jotai'
import { createElement } from 'react'

export type NavigateType = {
  path: string
  title: string
  icon: JSX.Element
  index: number
}

export const BottomNavigatorMol = molecule(() => {
  const activeTabAtom = atom<NavigateType>({
    path: pathKeys.mypage(),
    title: '마이페이지',
    icon: createElement(Person),
    index: 0,
  })
  return {
    atom: { activeTabAtom },
  }
})
