import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { pathKeys } from '@/shared/lib/react-router'
import { SelectTilOptionAndTag, WriteTil } from '../ui'
import { withAuthorization } from '@/shared/auth'
import { MainLayout } from '@/shared/ui/layouts'

export const writePageRoute: RouteObject = {
  path: pathKeys.write(),
  element: withAuthorization(createElement(MainLayout)),
  children: [
    { path: pathKeys.write(), element: createElement(WriteTil) },
    { path: pathKeys.option(), element: createElement(SelectTilOptionAndTag) },
  ],
}
