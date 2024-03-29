import { pathKeys } from '@/shared/lib/react-router'
import { RouteObject } from 'react-router-dom'
import { SignInPage } from './signin-page.ui'
import { createElement } from 'react'

export const signInPageRoute: RouteObject = {
  path: pathKeys.signin(),
  element: createElement(SignInPage),
  children: [],
}
