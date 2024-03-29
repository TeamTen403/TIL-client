import { challengePageRoute } from '@/pages/challengePage'
import { feedPageRoute } from '@/pages/feedPage'
import { MainLayout } from '@/pages/layouts'
import { myPageRoute } from '@/pages/myPage'
import { signInPageRoute } from '@/pages/signinPage'
import { writePageRoute } from '@/pages/writePage'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [myPageRoute, writePageRoute, feedPageRoute, challengePageRoute, signInPageRoute],
  },
])

export function BrowserRouter() {
  return <RouterProvider router={router} />
}
