import { pathKeys } from '@/shared/lib/react-router'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
  const handleClickComplete = () => navigate(pathKeys.option())

  return (
    <div className="sticky top-0 z-50 flex h-40 w-full items-center justify-center border-b-1 border-[#F2F3F5] bg-white px-[24px]">
      <div className="flex w-full items-center justify-between">
        <div className="text-20 font-[700]">글쓰기</div>
        <button className="text-16 leading-24 text-[#FF7878]" onClick={handleClickComplete}>
          완료
        </button>
      </div>
    </div>
  )
}
