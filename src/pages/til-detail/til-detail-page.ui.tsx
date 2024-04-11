import { Tag } from '@/entities/tag'
import { axios, pathKeys, yup } from '@/shared/lib'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'

import ReactQuill, { Quill } from 'react-quill'
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { useEffect, useMemo, useRef } from 'react'
import { usePostTilogImageMutation } from '@/entities/til/api'
import { selectedTemplateAtom } from '@/entities/template'
import { tilDtoAtom } from '@/features/til/edit/edit.model'
import { confirmAlert } from '@/shared/lib/react-confirm'

const fontSize = ['10px', '12px', '14px', '16px', '18px', '24px', '28px', '32px']
var Size = Quill.import('attributors/style/size')
Size.whitelist = fontSize
Quill.register(Size, true)

const CustomToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <select className="ql-size" defaultValue="medium">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="huge">Huge</option>
      </select>
      <select className="ql-header">
        <option value="1">Header 1</option>
        <option value="2">Header 2</option>
        <option value="3">Header 3</option>
        <option value="4">Header 4</option>
        <option value="5">Header 5</option>
        <option value="6">Header 6</option>
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
      <button className="ql-blockquote" />
    </span>
    <span className="ql-formats">
      <select className="ql-color" />
      <select className="ql-background" />
    </span>
    <span className="ql-formats">
      <button className="ql-image" />
    </span>
  </div>
)

const modeAtom = atom<'view' | 'edit'>('view')
modeAtom.onMount = set => set('view')

const getTilDetail = async (id: string) =>
  axios(`/api/tilog/${id}`).then(
    r =>
      r.data as {
        data: {
          tilogId: number
          title: string
          tilerEmail: string
          nickname: string
          thumbnailUrl: string
          tagName: string
          likeCount: number
          regYmdt: string
          modYmdt: string
          content: string
          isLiked: boolean
          isBookmarked: boolean
        }
      },
  )

const updateTil = () => {
  return useMutation({
    mutationFn: (data: { title: string; content: string; thumbnail: string; tagId: string }) =>
      axios('/api/tilog/{tilogId}', { method: 'PUT', data: data }).then(r => r.data),
  })
}
const useTilDetail = ({ id }: { id: string }) => {
  return useQuery({ queryKey: ['detail'], queryFn: () => getTilDetail(id) })
}

const delTil = (id: string) => {
  return axios(`/api/tilog/${id}`, { method: 'DELETE' }).then(r => r.data)
}

export function TilDetailPage() {
  const { mutateAsync: del } = useMutation({ mutationFn: (id: string) => delTil(id) })

  const navigate = useNavigate()
  const [mode, setMode] = useAtom(modeAtom)

  const handleClickBack = () => {
    navigate(-1)
  }

  const handleClickEdit = () => {
    setMode('edit')
  }

  const handleClickDel = () => {
    del(data?.data.tilogId, {
      onSuccess: () =>
        confirmAlert({ options: { title: '삭제 완료', buttons: [{ label: '확인', onClick: () => navigate(-1) }] } }),
    })
  }

  const params = useParams() as { id: string }
  const { data } = useTilDetail({ id: params.id })
  const { mutateAsync } = usePostTilogImageMutation()

  const scheme = yup.object().shape({
    title: yup.string().required('필수 값입니다.'),
    content: yup.string().required('필수 값입니다.'),
    thumbnail: yup.string().nonNullable(),
    // tagId: yup.string().required('필수 값입니다.'),
  })

  const setTilDto = useSetAtom(tilDtoAtom)

  const imageHandler = () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()
    input.addEventListener('change', async () => {
      const editor = quillRef.current?.getEditor()
      const file = input.files[0]
      const range = editor?.getSelection(true)
      try {
        // Firebase Method : uploadBytes, getDownloadURL
        await mutateAsync({ image: file }).then(r => {
          editor.insertEmbed(range.index, 'image', r.data.url)
          // URL 삽입 후 커서를 이미지 뒷 칸으로 이동
          editor.setSelection(range.index + 1)
        })
      } catch (error) {
        console.log(error)
      }
    })
  }

  const { register, control, handleSubmit, reset } = useForm({
    resolver: yupResolver(scheme),
    defaultValues: {
      title: data?.data.title || '',
      content: data?.data.content || '',
      thumbnail: data?.data.thumbnailUrl || '',
      tagId: data?.data.tagName,
    },
  })

  const { mutateAsync: update } = useMutation({
    mutationFn: (data: { title: string; content: string; thumbnail: string; tagId: string }) =>
      axios('/api/tilog/{tilogId}', { method: 'PUT', data: data }).then(r => r.data),
  })
  const handleClickComp = handleSubmit(data => {
    update(data, { onSuccess: () => setMode('view') })
  })

  useEffect(() => {
    reset({
      title: data?.data.title || '',
      content: data?.data.content || '',
      thumbnail: data?.data.thumbnailUrl || '',
    })
  }, [data])

  const quillRef = useRef<ReactQuill>(null)

  const modules = useMemo(
    () => ({
      toolbar: { container: '#toolbar', handlers: { image: imageHandler } },
    }),
    [],
  )

  return (
    <div className="h-full w-full bg-white">
      <div className="sticky top-0 z-50 flex h-40 w-full items-center justify-center border-b-1 border-[#F2F3F5] bg-white px-[24px]">
        <div className="flex w-full items-center justify-between">
          <button type="button" onClick={handleClickBack}>
            <KeyboardArrowLeft className="text-[#6B6B6B]" />
          </button>
          <div className="flex items-center gap-4 text-[#F2F3F5]">
            <button
              className="text-16 leading-24 text-[#FF7878]"
              onClick={mode == 'view' ? handleClickEdit : handleClickComp}
            >
              {mode == 'view' ? '수정' : '완료'}
            </button>
            |
            <button className="text-16 leading-24 text-[#FF7878]" onClick={handleClickDel}>
              삭제
            </button>
          </div>
        </div>
      </div>

      <form className="flex flex-col gap-16 p-24">
        <div className="flex w-full flex-col gap-8 ">
          <div className="flex">
            <Tag name={data?.data?.tagName} />
          </div>
          <input
            {...register('title')}
            disabled={mode == 'view'}
            placeholder="제목을 작성해주세요"
            className="bg-white text-24 font-[700] text-[#4E4E4E]"
          ></input>
        </div>
        <div className="flex justify-between  text-12 text-[#6B6B6B]">
          <div>
            {data?.data.nickname} | {data?.data.tagName}
          </div>
          <div>{data?.data.modYmdt}</div>
        </div>
      </form>

      {mode == 'view' ? (
        <div className="flex-1 border-t-10 border-[#F9FAFC]  bg-white p-24 text-[#4E4E4E]">
          <ReactQuill className="[&_.ql-editor]:p-0" value={data?.data.content} readOnly={true} theme={'bubble'} />
        </div>
      ) : (
        <div className="flex flex-1 flex-col gap-8 bg-[#F9FAFC]">
          <div className="relative flex w-full flex-1 flex-col">
            <div className="flex flex-1 flex-col gap-8">
              <Controller
                control={control}
                name="content"
                render={({ field }) => (
                  <ReactQuill
                    ref={quillRef}
                    modules={modules}
                    theme="snow"
                    placeholder="내용을 작성해주세요"
                    onChange={field.onChange}
                    className="h-full bg-white"
                    value={field.value}
                  />
                )}
              />
            </div>
            <CustomToolbar />
          </div>
        </div>
      )}
    </div>
  )
}
