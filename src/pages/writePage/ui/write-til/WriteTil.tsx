import { Header } from './Header'
import { TemplateSelectorList } from '@/features/template'
import { TilEditor } from '@/features/til'

export function WriteTil() {
  return (
    <div className="h-full w-full ">
      <Header />
      <div className="flex flex-col gap-8 bg-[#F9FAFC]">
        <TemplateSelectorList />
        <TilEditor />
      </div>
    </div>
  )
}
