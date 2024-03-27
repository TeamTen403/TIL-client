import { Tag } from '@/entities/tag'

export function TilThumbnail() {
  return (
    <div className="flex w-full flex-col rounded-md bg-[#D9D9D9] px-12 py-6">
      <div className="flex w-full gap-[8px]">
        <div className="h-75 min-w-75 rounded-md">이미지</div>
        <div className="flex w-full flex-col gap-8">
          <div className="flex gap-4">
            <div className="text-14 font-[700]">PM / PO</div>
            <Tag />
          </div>
          <div className="text-16 font-[700]">마케터와 커뮤니케이션 시 주의할점</div>
          <div className="line-clamp-1 text-12">피카츄님과커뮤니케이션이슈가발생했다.</div>
        </div>
      </div>
      <div className="flex w-full justify-end text-12 opacity-50">틸러유저 | 1시간 전</div>
    </div>
  )
}
