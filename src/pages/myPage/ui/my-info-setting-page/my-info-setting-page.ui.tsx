import { KeyboardArrowRightSharp } from '@mui/icons-material'

export function MyInfoSettingPage() {
  return (
    <div className="flex h-full w-full flex-col bg-[#F9FAFC]">
      <div className="w-full p-24 ">
        <div className="flex w-full flex-col rounded-[8px] bg-white shadow-[0px_0px_4px_0px_rgba(217,217,217,0.7)]">
          <div className="w-full p-24">
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="h-80 w-80 rounded-full bg-pink-300"></div>
              <div className="text-18 font-[700] leading-25 text-[#4E4E4E]">유저이름</div>
            </div>
            <div className="flex w-full justify-between text-[#4E4E4E]">
              <span className="text-16 font-[700]">직무</span>
            </div>
            <div className="flex w-full justify-between text-[#4E4E4E]">
              <span className="text-16 font-[700]">이메일</span>
            </div>
          </div>

          <div className="flex w-full flex-col border-t-1">
            <div className="flex w-full justify-between px-24 py-8 text-16 text-[#4E4E4E]">
              비밀번호 변경 <KeyboardArrowRightSharp />
            </div>
            <div className="flex w-full justify-between px-24 py-8 text-16 text-[#4E4E4E]">
              내 스크랩북 <KeyboardArrowRightSharp />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
