import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { pathKeys } from '../lib/react-router'

export const POLICIES = {
  // 'comment:delete': (user: User, comment: Comment) => {
  //   if (user.role === 'ADMIN') {
  //     return true
  //   }
  //   if (user.role === 'USER' && comment.authorId === user.id) {
  //     return true
  //   }
  //   return false
  // },
}

export const withAuthorization = (Component: React.ReactElement) => {
  return <Authorization>{Component}</Authorization>
}

export const useAuthorization = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const user = {
    singed: false,
  }

  if (location.pathname != '/signin' && user.singed === false) {
    // throw new AuthError()

    const from = `${location.pathname}${location.search ? location.search : ''}`
    navigate(pathKeys.signin(), { state: { from: from } })
  }

  const checkAccess = React.useCallback(() => {
    return user.singed
  }, [user])

  return { checkAccess }
}

type AuthorizationProps = {
  children: React.ReactNode
  forbiddenFallback?: React.ReactNode
}

export const Authorization = ({ children }: AuthorizationProps) => {
  const { checkAccess } = useAuthorization()
  const location = useLocation()

  const canAccess = checkAccess()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!canAccess) {
      const from = `${location.pathname}${location.search ? location.search : ''}`
      navigate(pathKeys.signin(), { state: { from: from } })
    }
  }, [canAccess])

  if (canAccess) return children
  return null
}
