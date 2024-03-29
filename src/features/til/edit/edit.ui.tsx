import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export function TilEditor() {
  return <ReactQuill theme="snow" placeholder="내용을 작성해주세요" className="h-full bg-white" />
}
