import { createElement } from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import { pathKeys } from '@/shared/lib/react-router'
import { SelectTilOptionAndTag, WriteTil } from '../ui'

export const writePageRoute: RouteObject = {
  path: pathKeys.write(),
  element: createElement(Outlet),
  children: [
    { path: pathKeys.write(), element: createElement(WriteTil) },
    { path: pathKeys.option(), element: createElement(SelectTilOptionAndTag) },
  ],
}
