import { useMolecule } from 'bunshi/react'
import { ViewerRecordsMol } from '.'
import { useAtom } from 'jotai'
import { useMeasure } from 'react-use'
import { animated, useSpring } from '@react-spring/web'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp'
import { twMerge } from 'tailwind-merge'
import { axios } from '@/shared/lib'
import { useQuery } from '@tanstack/react-query'

const getRecords = () => {
  return axios('/api/tiler/statistics').then(
    r =>
      r.data as {
        code: 'SUCCESS'
        data: {
          consecutiveDays: 0
          totalTilog: 0
          totalLikes: 0
          totalChallenge: 0
        }
      },
  )
}

export function ViewerRecords() {
  const { data } = useQuery({ queryKey: ['records'], queryFn: getRecords })

  const { atom } = useMolecule(ViewerRecordsMol)
  const [isOpen, setOpen] = useAtom(atom.isOpenAtom)

  const [bind, { height }] = useMeasure()

  const open = useSpring({ height: isOpen ? height : 0, overflow: isOpen ? 'auto' : 'hidden' })
  const rotate = useSpring({ rotate: isOpen ? 180 : 0, transformOrigin: 'center' })

  const hanClickOpen = () => setOpen(open => !open)

  return (
    <div
      className={twMerge(
        'relative z-10 flex max-h-[85vh] w-full flex-col bg-white  py-24 pb-0 shadow-[0px_4px_4px_1px_rgba(0,0,0,0.25)]',
      )}
    >
      <div className="absolute left-0 top-0 h-[206px] w-full  bg-gradient-to-b from-[#FF5656] from-[80%] to-[#FFC961] to-100%"></div>
      <div className="z-10 mb-8 px-24">
        <span className="text-20 font-[700] leading-28 text-white">
          틸러유저 <span className="text-16 font-[400] leading-24">님이 성장하신 기록</span>
        </span>
      </div>

      <div className=" z-10 mx-24 mb-25 flex rounded-[100px] bg-[rgba(255,255,255,0.7)] px-24 py-10">
        <span className="text-20 font-[700] leading-28 text-[#FF3A3A]">
          {data?.data.consecutiveDays}
          <span className="text-16 font-[400] leading-24 text-[#4E4E4E]">일 연속 기록하는 중🔥</span>
        </span>
      </div>

      <div className="z-10 mb-9 flex w-full justify-around gap-8 px-24">
        <div className="flex h-125 w-full flex-col items-center justify-center gap-4 rounded-[8px] bg-white p-16 px-18 shadow-[0px_0px_4px_0px_rgba(217,217,217,0.7)]">
          <div className="min-h-40 min-w-40 rounded-full bg-[#F8F8F8]"></div>
          <div className="text-14 text-[#4E4E4E]">쌓은 틸로그</div>
          <div className="rounded-[100px] bg-[#FF5656] px-8 text-14 font-[700] text-white">{data?.data.totalTilog}</div>
        </div>
        <div className="flex h-125 w-full flex-col items-center justify-center gap-4 rounded-[8px] bg-white p-16 px-18 shadow-[0px_0px_4px_0px_rgba(217,217,217,0.7)]">
          <div className="min-h-40 min-w-40 rounded-full bg-[#F8F8F8]"></div>
          <div className="text-14 text-[#4E4E4E]">받은 좋아요 </div>
          <div className="rounded-[100px] bg-[#FF5656] px-8 text-14 font-[700] text-white">{data?.data.totalLikes}</div>
        </div>
        <div className="flex h-125 w-full flex-col items-center justify-center gap-4 rounded-[8px] bg-white p-16 px-18 shadow-[0px_0px_4px_0px_rgba(217,217,217,0.7)]">
          <div className="min-h-40 min-w-40 rounded-full bg-[#F8F8F8]"></div>
          <div className="text-14 text-[#4E4E4E]">챌린지 점수</div>
          <div className="rounded-[100px] bg-[#FF5656] px-8 text-14 font-[700] text-white">
            {data?.data.totalChallenge}
          </div>
        </div>
      </div>

      <animated.div className={'w-full '} style={open}>
        <div ref={el => el && bind(el)} className="flex w-full flex-col gap-32 px-24">
          <div className="flex w-full flex-col gap-16">
            <div className="text-16 font-[700]">🌲 로그를 쌓아요</div>
            <div className="flex w-full items-center justify-around rounded-[8px] py-16 shadow-[0px_0px_4px_0px_rgba(217,217,217,0.7)]">
              <div className="flex flex-col items-center justify-center">
                <div className="text-16 text-[#4E4E4E]">
                  평균 주 <span className="text-20 font-[700] text-[#FF3A3A]">000</span>회
                </div>
                <div className="text-10 text-[#BABABA]">유저 평균 0000회</div>
              </div>
              <div className="h-20 w-1 bg-[#F5F5F5]" />
              <div className="flex flex-col items-center justify-center">
                <div className="text-16 text-[#4E4E4E]">
                  평균 주 <span className="text-20 font-[700] text-[#FF3A3A]">000</span>회
                </div>
                <div className="text-10 text-[#BABABA]">유저 평균 0000회</div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-16">
            <div className="text-16 font-[700]">🌲 로그를 쌓아요</div>
            <div className="flex w-full items-center justify-around rounded-[8px] py-16 shadow-[0px_0px_4px_0px_rgba(217,217,217,0.7)]">
              <div className="flex flex-col items-center justify-center">
                <div className="text-16 text-[#4E4E4E]">
                  평균 주 <span className="text-20 font-[700] text-[#FF3A3A]">000</span>회
                </div>
                <div className="text-10 text-[#BABABA]">유저 평균 0000회</div>
              </div>
              <div className="h-20 w-1 bg-[#F5F5F5]" />
              <div className="flex flex-col items-center justify-center">
                <div className="text-16 text-[#4E4E4E]">
                  평균 주 <span className="text-20 font-[700] text-[#FF3A3A]">000</span>회
                </div>
                <div className="text-10 text-[#BABABA]">유저 평균 0000회</div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-16">
            <div className="text-16 font-[700]">🌲 로그를 쌓아요</div>
            <div className="flex w-full items-center justify-around rounded-[8px] py-16 shadow-[0px_0px_4px_0px_rgba(217,217,217,0.7)]">
              <div className="flex flex-col items-center justify-center">
                <div className="text-16 text-[#4E4E4E]">
                  평균 주 <span className="text-20 font-[700] text-[#FF3A3A]">000</span>회
                </div>
                <div className="text-10 text-[#BABABA]">유저 평균 0000회</div>
              </div>
              <div className="h-20 w-1 bg-[#F5F5F5]" />
              <div className="flex flex-col items-center justify-center">
                <div className="text-16 text-[#4E4E4E]">
                  평균 주 <span className="text-20 font-[700] text-[#FF3A3A]">000</span>회
                </div>
                <div className="text-10 text-[#BABABA]">유저 평균 0000회</div>
              </div>
            </div>
          </div>
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
