import { twMerge } from 'tailwind-merge'

import { Outlet } from 'react-router-dom'
import BottomNavigator from './bottom-navigator.ui'

type Props = {
  className?: string
}

export function MainLayout({ className }: Props) {
  return (
    <div className={twMerge('mx-auto h-full w-full max-w-[600px]', className)}>
      <Outlet />
      <BottomNavigator />
    </div>
  )
}
