import { pathKeys } from '@/shared/lib/react-router'
import { RouteObject } from 'react-router-dom'
import { SignUpPage } from './signup-page.ui'
import { createElement } from 'react'

export const signUpPageRoute: RouteObject = {
  path: pathKeys.signup(),
  element: createElement(SignUpPage),
  children: [],
}
