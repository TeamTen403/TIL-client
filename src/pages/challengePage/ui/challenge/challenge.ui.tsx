export function Challenge() {
  return (
    <div className="flex w-full flex-col rounded-[8px] bg-white p-24 shadow-[0px_0px_4px_0px_rgba(217,217,217,0.7)]">
      <div className="mb-16 flex flex-col gap-4">
        <div className="flex items-center text-18 font-[700] leading-25">꾸준한 도끼질, 성장의 열쇠!</div>
        <div className="text-12 leading-18 text-[#999999]">
          TIL 챌린지는 꾸준함이 핵심이죠
          <br />
          연속 챌린지를 통해 꾸준히 기록하는 습관을 키워보세요!
        </div>
      </div>
      <div className="mb-24 flex items-center gap-8">
        <div className="rounded-[4px] border-1 border-[#FF7878] px-8 py-2 text-14 font-[700] leading-19 text-[#FF7878]">
          Lv 1
        </div>
        <div className="text-14 font-[700] leading-20 text-[#6B6B6B]">3일 연속 틸로그 쌓기</div>
      </div>

      <button className="flex items-center justify-center rounded-[8px] bg-[#FF5656] py-10 text-16 font-[700] leading-22 text-white">
        시작하기
      </button>
    </div>
  )
}
