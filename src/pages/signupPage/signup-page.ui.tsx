import { IJoinData } from '@/entities/viewer'
import { useJoinMutation } from '@/entities/viewer/api/join'
import { pathKeys } from '@/shared/lib/react-router'
import Button from '@/shared/ui/atoms/Button'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { atom, useAtom } from 'jotai'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import * as yup from 'yup'

const scheme = yup.object().shape({
  email: yup.string().email('올바른 이메일을 입력해주세요').required('필수 값입니다.'),
  passwd: yup.string().required('필수 값입니다.'),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('passwd')], '비밀번호를 확인해 주세요')
    .required('필수 값입니다.'),
    nickName: yup.string().min(2, '최소 2자').max(8, '최대 8자').required('필수 값입니다.'),
  job: yup.string().required('필수 값입니다.'),
  authProvider: yup.string().oneOf(['TIL_EMAIL', 'EMAIL', 'KAKAO', 'GOOGLE']).required('필수 값입니다.'),
})

export function SignUpPage() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IJoinData & { passwordCheck: string }>({
    resolver: yupResolver(scheme),
    defaultValues: { authProvider: 'TIL_EMAIL' },
  })

  const { mutateAsync } = useJoinMutation()

  const handleClickComplete = handleSubmit(async data => {
    await mutateAsync(data)
    navigate(pathKeys.feed())
  })

  const watch = useWatch({ control: control })

  return (
    <div className="flex h-full w-full flex-col overflow-scroll bg-white  pb-16">
      <Header />
      <div className="flex w-full flex-col px-24 py-24">
        <div className="flex w-full flex-col gap-16 ">
          <div className="flex w-full flex-col gap-8">
            <div className="text-14 font-[700] leading-20 text-[#4E4E4E]">아이디(이메일)</div>
            <input
              {...register('email')}
              type="email"
              className="w-full border-b-1 border-[#BABABA] px-8 py-12 text-16 leading-24 placeholder:text-[#BABABA]"
              placeholder="아이디"
            />
            <div className="text-12 text-[#FF5656]">
              <ErrorMessage errors={errors} name={'email'} />
            </div>
          </div>

          <div className="flex w-full flex-col gap-8">
            <div className="text-14 font-[700] leading-20 text-[#4E4E4E]">비밀번호</div>
            <input
              {...register('passwd')}
              type="password"
              className="w-full border-b-1 border-[#BABABA] px-8 py-12 text-16 leading-24 placeholder:text-[#BABABA]"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            />
            <div className="text-12 text-[#FF5656]">
              <ErrorMessage errors={errors} name={'passwd'} />
            </div>
          </div>

          <div className="flex w-full flex-col gap-8">
            <div className="text-14 font-[700] leading-20 text-[#4E4E4E]">비밀번호 확인</div>
            <input
              {...register('passwordCheck')}
              type="password"
              className="w-full border-b-1 border-[#BABABA] px-8 py-12 text-16 leading-24 placeholder:text-[#BABABA]"
              placeholder="한 번 더 입력해주세요"
            />
            <div className="text-12 text-[#FF5656]">
              <ErrorMessage errors={errors} name={'passwordCheck'} />
            </div>
          </div>

          <div className="flex w-full flex-col gap-8">
            <div className="text-14 font-[700] leading-20 text-[#4E4E4E]">닉네임</div>
            <input
              {...register('nickName')}
              type="text"
              className="w-full border-b-1 border-[#BABABA] px-8 py-12 text-16 leading-24 placeholder:text-[#BABABA]"
              placeholder="최소 2자 ~ 쵀대 8자로 입력해주세요"
            />
            <div className="text-12 text-[#FF5656]">
              <ErrorMessage errors={errors} name={'nickName'} />
            </div>
          </div>

          <div className="flex w-full flex-col gap-8">
            <div className="text-14 font-[700] leading-20 text-[#4E4E4E]">직무</div>
            <Controller
              name="job"
              control={control}
              render={({ field: { onChange } }) => <JobSelectorList onChange={onChange} />}
            />

            <div className="text-12 text-[#FF5656]">
              <ErrorMessage errors={errors} name={'job'} />
            </div>
          </div>

          <Button onClick={handleClickComplete}>다음</Button>
        </div>
      </div>
    </div>
  )
}

type Props = {
  job: { label: string; value: string }
  onChange: (value: string) => void
}

const jobList = [
  { label: 'PM/PO/기획', value: 'PM' },
  { label: '디자이너', value: 'DESIGN' },
  { label: '개발자', value: 'DEV' },
  { label: '기타', value: 'ETC' },
]

const selectedJobAtom = atom<{ label: string; value: string } | null>(null)
export function JobSelectorList({ onChange }: { onChange: (value: string) => void }) {
  return (
    <div className="flex w-full flex-wrap gap-x-4 gap-y-8">
      {jobList.map(job => (
        <JobSelector onChange={onChange} key={`${job}`} job={job} />
      ))}
    </div>
  )
}

export function JobSelector({ job, onChange }: Props) {
  const [selectTag, setJob] = useAtom(selectedJobAtom)
  const isSelected = selectTag?.value === job.value

  const handleSelectTag = () => {
    setJob(job)
    onChange(job.value)
  }

  return (
    <span
      onClick={handleSelectTag}
      className={twMerge(
        'inline-flex cursor-pointer items-center justify-center rounded-[100px] border-1 px-8 py-2 !text-14 leading-21',
        isSelected ? 'border-[#FF7878] bg-[#FFE6E6] text-[#FF7878]' : 'border-[#999999] bg-white text-[#999999]',
      )}
    >
      {job.label}
    </span>
  )
}

export function Header() {
  const navigate = useNavigate()
  const handleClickBack = () => navigate(-1)

  return (
    <div className="sticky top-0 z-50 flex min-h-40 w-full items-center justify-center border-b-1 border-[#F2F3F5] bg-white px-[24px]">
      <div className="flex w-full items-center justify-between">
        <button onClick={handleClickBack}>
          <KeyboardArrowLeft className="text-[#6B6B6B]" />
        </button>
      </div>
    </div>
  )
}
