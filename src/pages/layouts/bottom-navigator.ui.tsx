import { pathKeys } from '@/shared/lib/react-router'
import { useMolecule } from 'bunshi/react'
import { useNavigate } from 'react-router-dom'
import { BottomNavigatorMol } from './bottom-navigator.model'
import { useAtom } from 'jotai'
import { twMerge } from 'tailwind-merge'

type NavigateType = {
  path: string
  title: string
  icon: JSX.Element
}

function BottomNavigator() {
  const navigates: NavigateType[] = [
    {
      path: pathKeys.mypage(),
      title: '마이페이지',
      icon: <div>icon</div>,
    },
    {
      path: pathKeys.write(),
      title: '글쓰기',
      icon: <div>icon</div>,
    },
    {
      path: pathKeys.challenge(),
      title: '첼린지',
      icon: <div>icon</div>,
    },
    {
      path: pathKeys.feed(),
      title: '피드',
      icon: <div>icon</div>,
    },
  ]

  return (
    <div className="flex h-52 w-full items-center bg-[#666666]">
      {navigates.map(navigate => (
        <NavigatorItem key={navigate.path} {...navigate} />
      ))}
    </div>
  )
}

function NavigatorItem(props: NavigateType) {
  const { path, title } = props

  const navigate = useNavigate()
  const {
    atom: { activeTabAtom },
  } = useMolecule(BottomNavigatorMol)

  const [activeTab, setActiveTab] = useAtom(activeTabAtom)

  const handleNavigate = () => {
    setActiveTab(path)
    navigate(path)
  }

  const isSelected = activeTab === path

  return (
    <div
      className={twMerge(
        'flex flex-1 cursor-pointer h-full items-center justify-center text-[10px]',
        isSelected ? 'text-white' : 'text-black',
      )}
      onClick={handleNavigate}
    >
      {title}
    </div>
  )
}

export default BottomNavigator
