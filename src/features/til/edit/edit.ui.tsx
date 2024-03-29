import { useState } from 'react'
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

  const modules = {
    toolbar: {
      container: '#toolbar',
      handlers: {},
    },
  }

  return (
    <div className="relative flex w-full flex-1 flex-col">
      <ReactQuill
        modules={modules}
        theme="snow"
        placeholder="내용을 작성해주세요"
        onChange={v => setTest(v)}
        className="h-full bg-white"
      />
      <CustomToolbar />
    </div>
  )
}
