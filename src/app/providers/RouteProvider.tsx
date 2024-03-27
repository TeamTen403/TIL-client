import { challengePageRoute } from '@/pages/challengePage'
import { feedPageRoute } from '@/pages/feedPage'
import { MainLayout } from '@/pages/layouts'
import { myPageRoute } from '@/pages/myPage'
import { writePageRoute } from '@/pages/writePage'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [myPageRoute, writePageRoute, feedPageRoute, challengePageRoute],
  },
])

export function BrowserRouter() {
  return <RouterProvider router={router} />
}
