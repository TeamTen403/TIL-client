export function ViewerRecords() {
  return (
    <div className="flex w-full flex-col gap-12 px-24 py-26 shadow-[0px_4px_4px_1px_rgba(0,0,0,0.25)]">
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
    </div>
  )
}
