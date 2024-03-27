import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { WritePage } from './write-page.ui'
import { pathKeys } from '@/shared/lib/react-router'

export const writePageRoute: RouteObject = {
  path: pathKeys.write(),
  element: createElement(WritePage),
}
