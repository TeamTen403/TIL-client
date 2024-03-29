import { TagSelectorList } from '@/features/tag'

export function SelectTilTag() {
  return (
    <div className="flex w-full flex-col gap-16 bg-white p-24">
      <div className="flex w-full flex-col gap-8">
        <div className="text-18 font-[700] leading-25 text-[#4E4E4E]">태그</div>
        <div className="text-14 leading-21 text-[#999999]">
          작성하신 틸로그의 주제를 선택해주세요 <span className="text-12">(1가지 선택 사능)</span>
        </div>
      </div>
      <TagSelectorList />
    </div>
  )
}
