import { SearchBar } from '@/features/feed'
import { TilList } from '@/widgets/til-list'
import { KeyboardArrowDownSharp, Sort } from '@mui/icons-material'
import { animated, useSpring } from '@react-spring/web'
import { useAtom } from 'jotai'
import { useMeasure } from 'react-use'
import { isFilterOpenAtom } from './feed-page.model'
import { TagSelectorList } from '@/features/tag'

export function FeedPage() {
  return (
    <div className="flex h-full w-full flex-col bg-[#F9FAFC]">
      <Header />
      <div className="flex w-full flex-col gap-8">
        <SearchBar />
        <FilterSelector />
      </div>
      <TilList />
    </div>
  )
}

export const FilterSelector = () => {
  const [isOpen, setOpen] = useAtom(isFilterOpenAtom)

  const [bind, { height, top }] = useMeasure()

  const open = useSpring({ height: isOpen ? height + top * 2 : 0, overflow: isOpen ? 'auto' : 'hidden' })
  const rotate = useSpring({ rotate: isOpen ? 180 : 0, transformOrigin: 'center' })

  const hanClickOpen = () => setOpen(open => !open)

  return (
    <div onClick={hanClickOpen} className="flex cursor-pointer flex-col bg-white px-24 py-16">
      <div className="flex w-full justify-between">
        <div className="flex gap-4">
          <Sort />
          <span className="text-18 font-[700] leading-25">필터</span>
        </div>
        <animated.div style={rotate}>
          <KeyboardArrowDownSharp />
        </animated.div>
      </div>
      <animated.div style={open} onClick={e => e.stopPropagation()}>
        <div ref={el => el && bind(el)} className="flex w-full flex-col py-16">
          <TagSelectorList />
        </div>
        <div></div>
      </animated.div>
    </div>
  )
}

export function Header() {
  return (
    <div className="sticky top-0 z-50 flex h-40 min-h-60 w-full items-center justify-center bg-white px-[24px]">
      <div className="flex w-full items-center justify-between">
        <div className="text-20 font-[700]">피드</div>
      </div>
    </div>
  )
}
