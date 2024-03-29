import { KeyboardArrowLeft } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
  const handleClickBack = () => navigate(-1)

  return (
    <div className="sticky top-0 z-50 flex h-40 w-full items-center justify-center border-b-1 border-[#F2F3F5] bg-white px-[24px]">
      <div className="flex w-full items-center justify-between">
        <button onClick={handleClickBack}>
          <KeyboardArrowLeft className="text-[#6B6B6B]" />
        </button>

        <button className="text-16 leading-24 text-[#FF7878]">저장</button>
      </div>
    </div>
  )
}
