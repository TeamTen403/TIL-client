import { useMolecule } from 'bunshi/react'
import { ViewerRecordsMol } from '.'
import { useAtom } from 'jotai'
import { useMeasure } from 'react-use'
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
        'relative z-10 flex w-full flex-col bg-white px-24 py-24 pb-0 shadow-[0px_4px_4px_1px_rgba(0,0,0,0.25)]',
        isOpen ? 'sticky top-40' : '',
      )}
    >
      <div className="absolute left-0 top-0 h-[206px] w-full  bg-gradient-to-b from-[#FF5656] from-[80%] to-[#FFC961] to-100%"></div>
      <div className="z-10 mb-8">
        <span className="text-20 font-[700] leading-28 text-white">
          틸러유저 <span className="text-16 font-[400] leading-24">님이 성장하신 기록</span>
        </span>
      </div>

      <div className="z-10 mb-25 flex rounded-[100px] bg-[rgba(255,255,255,0.7)] px-24 py-10">
        <span className="text-20 font-[700] leading-28 text-[#FF3A3A]">
          00<span className="text-16 font-[400] leading-24 text-[#4E4E4E]">일 연속 기록하는 중🔥</span>
        </span>
      </div>

      <div className="z-10 mb-9 flex w-full justify-around gap-8">
        <div className="flex h-125 w-full flex-col items-center justify-center rounded-[8px] bg-white p-16 px-18 shadow-[1px_1px_2px_2px_rgba(0,0,0,0.25)]">
          <div>틸로그</div>
          <div>아이콘</div>
          <div>000개</div>
        </div>
        <div className="flex h-125 w-full flex-col items-center justify-center rounded-[8px] bg-white p-16 px-18 shadow-[1px_1px_2px_2px_rgba(0,0,0,0.25)]">
          <div>틸로그</div>
          <div>아이콘</div>
          <div>000개</div>
        </div>
        <div className="flex h-125 w-full flex-col items-center justify-center rounded-[8px] bg-white p-16 px-18 shadow-[1px_1px_2px_2px_rgba(0,0,0,0.25)]">
          <div>틸로그</div>
          <div>아이콘</div>
          <div>000개</div>
        </div>
      </div>

      <animated.div className={'w-full'} style={open}>
        <div ref={el => el && bind(el)} className="flex w-full flex-col">
          <div>기록 종합</div>
          <div>태그 비율</div>
        </div>
      </animated.div>
      <div className="flex w-full items-center justify-center py-8">
        <button onClick={hanClickOpen} className="w-full">
          <animated.div style={rotate}>
            <KeyboardArrowDownSharpIcon />
          </animated.div>
        </button>
      </div>
    </div>
  )
}
