import { challengePageRoute } from '@/pages/challengePage'
import { feedPageRoute } from '@/pages/feedPage'
import { myPageRoute } from '@/pages/myPage'
import { signInPageRoute } from '@/pages/signinPage'
import { signUpPageRoute } from '@/pages/signupPage'
import { writePageRoute } from '@/pages/writePage'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    children: [myPageRoute, writePageRoute, feedPageRoute, challengePageRoute, signInPageRoute, signUpPageRoute],
  },
])

export function BrowserRouter() {
  return <RouterProvider router={router} />
}
