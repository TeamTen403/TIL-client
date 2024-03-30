import { usePostTilogMutation } from '@/entities/til/api'
import { contentAtom, titleAtom } from '@/features/til'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const [test, setTest] = useAtom(contentAtom)
  const [title, setTitle] = useAtom(titleAtom)
  const navigate = useNavigate()
  const { mutateAsync } = usePostTilogMutation()
  const handleClickBack = () => navigate(-1)
  const handleClickSave = () => {
    mutateAsync({
      title: title,
      content: test,
      tagId:'',
      thumbnail:''
    })
  }

  return (
    <div className="sticky top-0 z-50 flex h-40 w-full items-center justify-center border-b-1 border-[#F2F3F5] bg-white px-[24px]">
      <div className="flex w-full items-center justify-between">
        <button onClick={handleClickBack}>
          <KeyboardArrowLeft className="text-[#6B6B6B]" />
        </button>

        <button onClick={handleClickSave} className="text-16 leading-24 text-[#FF7878]">
          저장
        </button>
      </div>
    </div>
  )
}
