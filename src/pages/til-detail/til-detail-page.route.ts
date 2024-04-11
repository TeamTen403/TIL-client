import { pathKeys } from '@/shared/lib/react-router'
import { RouteObject } from 'react-router-dom'

import { createElement } from 'react'
import { TilDetailPage } from './til-detail-page.ui'

export const tilDetailPageRoute: RouteObject = {
  path: pathKeys.til(),
  element: createElement(TilDetailPage),
  children: [],
}
