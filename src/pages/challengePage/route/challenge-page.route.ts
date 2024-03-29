import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { ChallengePage } from '../ui/challenge-page/challenge-page.ui'
import { pathKeys } from '@/shared/lib/react-router'
import { MainLayout } from '@/shared/ui/layouts'
import { withAuthorization } from '@/shared/auth'

export const challengePageRoute: RouteObject = {
  path: pathKeys.challenge(),
  element: withAuthorization(createElement(MainLayout)),
  children: [
    {
      path: pathKeys.challenge(),
      element: createElement(ChallengePage),
    },
  ],
}
