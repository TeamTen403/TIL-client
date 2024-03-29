import { pathKeys } from '@/shared/lib/react-router'
import { KeyboardArrowRightSharp } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export function MyInfoSettingPage() {
  return (
    <div className="flex h-full w-full flex-col bg-[#F9FAFC]">
      <Header />
      <div className="flex flex-1 flex-col overflow-scroll">
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
        <div className="flex w-full flex-col gap-8 ">
          <div className="flex flex-col bg-white">
            <div className="flex w-full cursor-pointer justify-between border-b-1 px-24 py-16 text-18 font-[700] text-[#4E4E4E]">
              이용안내
            </div>
            <div className="flex w-full cursor-pointer justify-between border-b-1 px-24 py-16 text-16 text-[#6B6B6B]">
              공지사항 <KeyboardArrowRightSharp />
            </div>
            <div className="flex w-full cursor-pointer justify-between border-b-1 px-24 py-16 text-16 text-[#6B6B6B]">
              이용약관 <KeyboardArrowRightSharp />
            </div>
            <div className="flex w-full cursor-pointer justify-between border-b-1 px-24 py-16 text-16 text-[#6B6B6B]">
              현재 버전 <span>ver 1.0</span>
            </div>
          </div>

          <div className="flex flex-col bg-white">
            <div className="flex w-full cursor-pointer justify-between border-b-1 px-24 py-16 text-18 font-[700] text-[#4E4E4E]">
              기타
            </div>
            <div className="flex w-full cursor-pointer justify-between border-b-1 px-24 py-16 text-16 text-[#6B6B6B]">
              문의하기 <KeyboardArrowRightSharp />
            </div>
            <div className="flex w-full cursor-pointer justify-between border-b-1 px-24 py-16 text-16 text-[#6B6B6B]">
              캐시삭제 <KeyboardArrowRightSharp />
            </div>
            <div className="flex w-full cursor-pointer justify-between border-b-1 px-24 py-16 text-16 text-[#6B6B6B]">
              로그아웃 <KeyboardArrowRightSharp />
            </div>
          </div>
        </div>

        <div className="px-24 py-24">
          <button className="text-12 text-[#6B6B6B]">탈퇴하기</button>
        </div>
      </div>
    </div>
  )
}

function Header() {
  const navigate = useNavigate()
  const handleClickSetting = () => navigate(pathKeys.myInfoSetting())
  return (
    <div className="sticky top-0 z-50 flex h-40 w-full items-center justify-center bg-white px-[24px]">
      <div className="flex w-full items-center justify-between">
        <div className="text-20 font-[700]">설정</div>
        <button className="text-14 text-[#999999]" onClick={handleClickSetting}>
          프로필 설정
        </button>
      </div>
    </div>
  )
}
