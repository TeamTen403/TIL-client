import { Tag } from '@/entities/tag'
import { Bookmark, Favorite } from '@mui/icons-material'

export function Til() {
  return (
    <div className="flex w-full flex-col rounded-[8px] bg-[white]  shadow-[0px_0px_4px_0px_rgba(217,217,217,0.7)]">
      <div className="flex flex-col gap-18 px-16  py-18">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-4">
            <div className="text-14 font-[700] text-[#6B6B6B]">PM / PO</div>
            <Tag />
          </div>
          <Bookmark className="text-[#FF7878]" />
        </div>

        <div className="flex w-full gap-[16px]">
          <div className="h-75 min-w-98 rounded-md bg-[#FFE6E6]">이미지</div>
          <div className="flex w-full flex-col gap-8">
            <div className="line-clamp-2 whitespace-pre-wrap break-keep text-18 font-[700] leading-25">
              마케터와 커뮤니케이션 시 주의할점
            </div>
            <div className="line-clamp-1 whitespace-pre-wrap text-14 leading-21 text-[#999999]">
              피카츄님과커뮤니케이션이슈가발생했다.
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between border-t-1 border-solid border-[#F5F5F5] px-16 py-8 text-12">
        <div className="text-12 opacity-60 ">
          <span className="text leading-18-[#6B6B6B]">나는야통통나무꾼</span>{' '}
          <span className="text-[#BABABA]">2024.12.31</span>
        </div>
        <div className="flex items-center text-12 text-[#6B6B6B] ">
          <Favorite className="!w-15 text-[#FF7878] opacity-100" /> <span className="opacity-60">99</span>
        </div>
      </div>
    </div>
  )
}
