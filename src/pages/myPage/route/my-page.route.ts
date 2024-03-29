import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { MyPage } from '../ui/my-page/my-page.ui'
import { pathKeys } from '@/shared/lib/react-router'
import { withAuthorization } from '@/shared/auth'

export const myPageRoute: RouteObject = {
  path: pathKeys.mypage(),
  element: withAuthorization(createElement(MyPage)),
}
