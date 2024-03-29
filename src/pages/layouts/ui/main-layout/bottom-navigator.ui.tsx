import { pathKeys } from '@/shared/lib/react-router'
import { useMolecule } from 'bunshi/react'
import { useNavigate } from 'react-router-dom'
import { BottomNavigatorMol, NavigateType } from './bottom-navigator.model'
import { useAtom, useAtomValue } from 'jotai'
import { twMerge } from 'tailwind-merge'
import { Create, LocalFireDepartment, MarkUnreadChatAlt, Person } from '@mui/icons-material'
import { useMeasure } from 'react-use'
import { animated, config, useSpring } from '@react-spring/web'

function BottomNavigator() {
  const navigates: NavigateType[] = [
    {
      path: pathKeys.mypage(),
      title: '마이페이지',
      icon: <Person />,
      index: 0,
    },
    {
      path: pathKeys.write(),
      title: '글쓰기',
      icon: <Create />,
      index: 1,
    },
    {
      path: pathKeys.challenge(),
      title: '첼린지',
      icon: <LocalFireDepartment />,
      index: 2,
    },
    {
      path: pathKeys.feed(),
      title: '피드',
      icon: <MarkUnreadChatAlt />,
      index: 3,
    },
  ]

  const {
    atom: { activeTabAtom },
  } = useMolecule(BottomNavigatorMol)

  const activeTab = useAtomValue(activeTabAtom)
  const [bind, { width }] = useMeasure()
  const move = useSpring({ left: activeTab.index * (width / 4), config: config.wobbly })

  return (
    <div ref={el => el && bind(el)} className="flex h-60 w-full flex-col bg-white">
      <div className="relative flex h-4 w-full flex-col border-t-1 border-[#E9E9E9] text-[#999999]">
        <animated.div style={move} className="absolute left-0 top-0 h-4 w-[calc(100%/4)] bg-[#FF5656]"></animated.div>
      </div>
      <div className="flex h-full w-full items-center bg-white ">
        {navigates.map(navigate => (
          <NavigatorItem key={navigate.path} item={navigate} />
        ))}
      </div>
    </div>
  )
}

function NavigatorItem({ item }: { item: NavigateType }) {
  const navigate = useNavigate()
  const {
    atom: { activeTabAtom },
  } = useMolecule(BottomNavigatorMol)

  const [activeTab, setActiveTab] = useAtom(activeTabAtom)

  const handleNavigate = () => {
    setActiveTab(item)
    navigate(item.path)
  }

  const isSelected = activeTab.path === item.path

  const color = useSpring({ color: isSelected ? '#4E4E4E' : '#999999' })

  return (
    <animated.div
      style={color}
      className={twMerge(
        'flex h-full flex-1 cursor-pointer flex-col items-center justify-center text-[10px]',
        isSelected ? 'text-[#4E4E4E]' : 'text-[#999999]',
      )}
      onClick={handleNavigate}
    >
      {item.icon}
      {item.title}
    </animated.div>
  )
}

export default BottomNavigator
