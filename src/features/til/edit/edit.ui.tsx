import { selectedTemplateAtom } from '@/entities/template'
import { usePostTilogImageMutation } from '@/entities/til/api'
import { useAtomValue } from 'jotai'
import { useEffect, useMemo, useRef, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'

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
export function TilEditor() {
  const [test, setTest] = useState()
  const selectedTemplate = useAtomValue(selectedTemplateAtom)

  const quillRef = useRef<ReactQuill>(null)
  console.log(test)

  const { mutateAsync } = usePostTilogImageMutation()

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

  useEffect(() => {
    const editor = quillRef.current?.getEditor()
    editor?.setContents(selectedTemplate?.template)
  }, [selectedTemplate])

  const modules = useMemo(
    () => ({
      toolbar: {
        container: '#toolbar',
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [],
  )

  return (
    <div className="relative flex w-full flex-1 flex-col">
      <div className="flex flex-1 flex-col gap-8">
        <input placeholder="제목을 작성해주세요" className="p-24" />
        <ReactQuill
          ref={quillRef}
          modules={modules}
          theme="snow"
          placeholder="내용을 작성해주세요"
          onChange={v => setTest(v)}
          className="h-full bg-white"
        />
      </div>
      <CustomToolbar />
    </div>
  )
}
