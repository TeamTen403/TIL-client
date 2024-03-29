import { createElement } from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import { pathKeys } from '@/shared/lib/react-router'
import { SelectTilOptionAndTag, WriteTil } from '../ui'
import { withAuthorization } from '@/shared/auth'

export const writePageRoute: RouteObject = {
  path: pathKeys.write(),
  element: withAuthorization(createElement(Outlet)),
  children: [
    { path: pathKeys.write(), element: createElement(WriteTil) },
    { path: pathKeys.option(), element: createElement(SelectTilOptionAndTag) },
  ],
}
