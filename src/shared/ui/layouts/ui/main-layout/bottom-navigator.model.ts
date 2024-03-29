import { pathKeys } from '@/shared/lib/react-router'
import { MarkUnreadChatAlt } from '@mui/icons-material'
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
    path: pathKeys.feed(),
    title: '피드',
    icon: createElement(MarkUnreadChatAlt),
    index: 3,
  })
  return {
    atom: { activeTabAtom },
  }
})
