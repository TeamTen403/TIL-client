import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { ChallengePage } from './challenge-page.ui'
import { pathKeys } from '@/shared/lib/react-router'

export const challengePageRoute: RouteObject = {
  path: pathKeys.challenge(),
  element: createElement(ChallengePage),
}
