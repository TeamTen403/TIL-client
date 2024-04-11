import { usePostTilogMutation } from '@/entities/til/api'
import { tilDtoAtom } from '@/features/til/edit/edit.model'
import { pathKeys } from '@/shared/lib'
import { useModal } from '@/shared/lib/modal'
import { confirmAlert } from '@/shared/lib/react-confirm'
import AlertModal from '@/shared/ui/modals/AlertModal'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { useAtom, useAtomValue } from 'jotai'
import { useNavigate } from 'react-router-dom'

export function Header() {
  // const [test, setTest] = useAtom(contentAtom)
  // const [title, setTitle] = useAtom(titleAtom)

  const tilDto = useAtomValue(tilDtoAtom)

  const navigate = useNavigate()
  const { mutateAsync } = usePostTilogMutation()
  const handleClickBack = () => navigate(-1)
  const handleClickSave = () => {
    if (tilDto)
      mutateAsync(tilDto, {
        onSuccess: () =>
          confirmAlert({
            options: { title: '등록 완료', buttons: [{ label: '확인', onClick: () => navigate(pathKeys.feed()) }] },
          }),
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
