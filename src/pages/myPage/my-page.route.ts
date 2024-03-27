import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { MyPage } from './my-page.ui'
import { pathKeys } from '@/shared/lib/react-router'

export const myPageRoute: RouteObject = {
  path: pathKeys.mypage(),
  element: createElement(MyPage),
}