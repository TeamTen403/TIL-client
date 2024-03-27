import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { FeedPage } from './feed-page.ui'
import { pathKeys } from '@/shared/lib/react-router'

export const feedPageRoute: RouteObject = {
  path: pathKeys.feed(),
  element: createElement(FeedPage),
}
