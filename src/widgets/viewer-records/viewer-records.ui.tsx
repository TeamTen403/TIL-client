import { useMolecule } from 'bunshi/react'
import { ViewerRecordsMol } from '.'
import { useAtom } from 'jotai'
import { useMeasure, useScroll } from 'react-use'
import { animated, useSpring } from '@react-spring/web'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp'
import { twMerge } from 'tailwind-merge'

export function ViewerRecords() {
  const { atom } = useMolecule(ViewerRecordsMol)
  const [isOpen, setOpen] = useAtom(atom.isOpenAtom)

  const [bind, { height }] = useMeasure()

  const open = useSpring({ height: isOpen ? height : 0, overflow: isOpen ? 'auto' : 'hidden' })
  const rotate = useSpring({ rotate: isOpen ? 180 : 0, transformOrigin: 'center' })

  const hanClickOpen = () => setOpen(open => !open)

  return (
    <div
      className={twMerge(
        'z-10 flex w-full flex-col gap-12 bg-white px-24 py-26 pb-0 shadow-[0px_4px_4px_1px_rgba(0,0,0,0.25)]',
        isOpen ? 'sticky top-47' : '',
      )}
    >
      <div>
        <span className="text-24 font-bold">
          틸러유저 <span className="text-18 font-[400]">님이 성장하신 기록</span>
        </span>
      </div>

      <div className="flex justify-center bg-[#D9D9D9] py-16">
        <span className="text-24 font-bold">
          00 <span className="text-18 font-[400]">일 연속 기록하는 중🔥</span>
        </span>
      </div>

      <div className="flex w-full justify-around gap-12">
        <div className="flex flex-col rounded-[8px] px-18 py-8 shadow-[1px_1px_2px_2px_rgba(0,0,0,0.25)]">
          <div>틸로그</div>
          <div>아이콘</div>
          <div>000개</div>
        </div>
        <div className="flex flex-col rounded-[8px] px-18 py-8 shadow-[1px_1px_2px_2px_rgba(0,0,0,0.25)]">
          <div>좋아요</div>
          <div>아이콘</div>
          <div>00개</div>
        </div>
        <div className="flex flex-col rounded-[8px] px-18 py-8 shadow-[1px_1px_2px_2px_rgba(0,0,0,0.25)]">
          <div>첼린지</div>
          <div>아이콘</div>
          <div>00개</div>
        </div>
      </div>

      <animated.div className={'w-full'} style={open}>
        <div ref={el => el && bind(el)} className="flex w-full flex-col">
          <div>기록 종합</div>
          <div>태그 비율</div>
        </div>
      </animated.div>
      <div className="flex w-full items-center justify-center">
        <button onClick={hanClickOpen} className="w-full">
          <animated.div style={rotate}>
            <KeyboardArrowDownSharpIcon />
          </animated.div>
        </button>
      </div>
    </div>
  )
}
