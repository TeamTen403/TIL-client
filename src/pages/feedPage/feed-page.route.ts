import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { FeedPage } from './feed-page.ui'
import { pathKeys } from '@/shared/lib/react-router'
import { MainLayout } from '@/shared/ui/layouts'

export const feedPageRoute: RouteObject = {
  path: pathKeys.root,
  element: createElement(MainLayout),
  children: [
    {
      path: pathKeys.root,
      element: createElement(FeedPage),
    },
    {
      path: pathKeys.feed(),
      element: createElement(FeedPage),
    },
  ],
}
