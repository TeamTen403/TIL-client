import { pathKeys } from '@/shared/lib/react-router'
import { useNavigate } from 'react-router-dom'

export function SignInPage() {
  const navigate = useNavigate()
  const handleClickSignup = () => navigate(pathKeys.signup())
  const handleClickLookAround = () => navigate(pathKeys.feed())

  return (
    <div className="flex h-full w-full flex-col overflow-scroll bg-[#F9FAFC] pb-16">
      <div className="w-full flex-col bg-white px-24 py-50">
        <div className="mb-48 w-full  text-24 leading-33">
          <span className="font-[700] text-[#FF5656]">오늘 새로운 배움</span>을<br />
          빠르게 기록하고 싶다면?
        </div>

        <div className="flex w-full flex-col gap-16 ">
          <div className="flex w-full flex-col gap-8">
            <div className="text-14 font-[700] leading-20 text-[#4E4E4E]">아이디(이메일)</div>
            <input
              type="email"
              className="w-full border-b-1 border-[#BABABA] px-8 py-12 text-16 leading-24 placeholder:text-[#BABABA]"
              placeholder="아이디"
            />
          </div>

          <div className="flex w-full flex-col gap-8">
            <div className="text-14 font-[700] leading-20 text-[#4E4E4E]">비밀번호</div>
            <input
              type="password"
              className="w-full border-b-1 border-[#BABABA] px-8 py-12 text-16 leading-24 placeholder:text-[#BABABA]"
              placeholder="비밀번호"
            />
          </div>
          <div className="text-14 text-[#BABABA] underline">비밀번호를 잊으셨나요?</div>
        </div>

        <button className="mt-32 w-full rounded-[8px] bg-[#FF5656] py-10 text-16 font-[700] leading-22 text-white">
          로그인
        </button>
      </div>

      <div className="mt-32 flex w-full flex-col items-center gap-16">
        <div className="text-14 leading-21 text-[#999999]">소셜 계정으로 간편로그인</div>
        <div className="flex gap-8">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#FAE100" />
            <path
              opacity="0.902"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 13.2587C17.72 13.2587 12 18.3067 12 22.5773C12 25.7773 14.0773 28.6 17.2413 30.2773L15.9107 35.1653C15.792 35.5987 16.284 35.9427 16.6613 35.6933L22.4973 31.82C22.9893 31.868 23.4907 31.896 24 31.896C30.6267 31.896 36 27.724 36 22.5773C36 18.3067 30.6267 13.2587 24 13.2587Z"
              fill="black"
            />
          </svg>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="23.5" fill="white" stroke="#F5F5F5" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M35.52 24.2728C35.52 23.4219 35.4436 22.6037 35.3018 21.8182H24V26.4601H30.4582C30.18 27.9601 29.3345 29.231 28.0636 30.0819V33.0928H31.9418C34.2109 31.0037 35.52 27.9273 35.52 24.2728Z"
              fill="#4285F4"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 36C27.24 36 29.9564 34.9255 31.9418 33.0928L28.0636 30.0818C26.9891 30.8018 25.6145 31.2273 24 31.2273C20.8745 31.2273 18.2291 29.1164 17.2855 26.28H13.2764V29.3891C15.2509 33.3109 19.3091 36 24 36Z"
              fill="#34A853"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.2855 26.2801C17.0455 25.5601 16.9091 24.791 16.9091 24.0001C16.9091 23.2091 17.0455 22.4401 17.2855 21.7201V18.611H13.2764C12.4636 20.231 12 22.0637 12 24.0001C12 25.9364 12.4636 27.7691 13.2764 29.3891L17.2855 26.2801Z"
              fill="#FBBC05"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 16.7727C25.7618 16.7727 27.3436 17.3782 28.5873 18.5673L32.0291 15.1255C29.9509 13.1891 27.2345 12 24 12C19.3091 12 15.2509 14.6891 13.2764 18.6109L17.2855 21.72C18.2291 18.8836 20.8745 16.7727 24 16.7727Z"
              fill="#EA4335"
            />
          </svg>
        </div>
        <div className="flex w-full justify-around text-14 leading-21 text-[#BABABA]">
          <button onClick={handleClickLookAround}>둘러보기</button>|
          <button onClick={handleClickSignup}>회원가입</button>|<span>문의하기</span>
        </div>
      </div>
    </div>
  )
}
