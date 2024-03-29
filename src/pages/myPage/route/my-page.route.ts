import { createElement } from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import { MyPage } from '../ui/my-page/my-page.ui'
import { pathKeys } from '@/shared/lib/react-router'
import { withAuthorization } from '@/shared/auth'
import { MyInfoSettingPage } from '../ui/my-info-setting-page'

export const myPageRoute: RouteObject = {
  path: pathKeys.mypage(),
  element: withAuthorization(createElement(Outlet)),
  children: [
    { path: pathKeys.mypage(), element: createElement(MyPage) },
    { path: pathKeys.myInfoSetting(), element: createElement(MyInfoSettingPage) },
  ],
}
