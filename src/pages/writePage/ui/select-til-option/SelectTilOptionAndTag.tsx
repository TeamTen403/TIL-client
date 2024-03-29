import { Header } from './Header'
import SelectTilOption from './SelectTilOption'
import { SelectTilTag } from './SelectTilTag'

export function SelectTilOptionAndTag() {
  return (
    <div className="w-full bg-white h-full">
      <Header />
      <SelectTilTag />
      <SelectTilOption />
    </div>
  )
}
