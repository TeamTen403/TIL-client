import { challengePageRoute } from '@/pages/challengePage'
import { feedPageRoute } from '@/pages/feedPage'
import { myPageRoute } from '@/pages/myPage'
import { signInPageRoute } from '@/pages/signinPage'
import { signUpPageRoute } from '@/pages/signupPage'
import { tilDetailPageRoute } from '@/pages/til-detail/til-detail-page.route'
import { writePageRoute } from '@/pages/writePage'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    children: [
      myPageRoute,
      writePageRoute,
      feedPageRoute,
      challengePageRoute,
      signInPageRoute,
      signUpPageRoute,
      tilDetailPageRoute,
    ],
  },
])

export function BrowserRouter() {
  return <RouterProvider router={router} />
}
