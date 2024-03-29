import { TilOptionSelector } from '@/features/til'

function SelectTilOption() {
  return (
    <div className="flex w-full flex-col gap-16 border-t-1 border-[#F2F3F5] bg-white p-24">
      <div className="flex w-full flex-col gap-8">
        <div className="text-18 font-[700] leading-25 text-[#4E4E4E]">공개여부</div>
        <div className="text-14 leading-21 text-[#999999]">틸로그의 공개여부를 선택해주세요</div>
      </div>
      <TilOptionSelector />
    </div>
  )
}

export default SelectTilOption
