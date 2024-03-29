import { Template, selectTemplateAtom, templateSelectedAtomCreator } from '@/entities/template'
import { Atom, useAtomValue, useSetAtom } from 'jotai'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  templateAtom: Atom<Template>
}
export function TemplateSelector({ templateAtom }: Props) {
  const template = useAtomValue(templateAtom)
  const isSelected = useAtomValue(useMemo(() => templateSelectedAtomCreator(template.id), [template.id]))
  const selectTemplate = useSetAtom(selectTemplateAtom)
  const handleSelect = () => selectTemplate(template)

  return (
    <button
      onClick={handleSelect}
      className={twMerge(
        'flex min-w-78 flex-col items-center justify-center gap-8 rounded-[8px] py-16',
        isSelected ? ' shadow-[inset_0px_0px_0px_1px_#FF7878]' : 'shadow-[0px_0px_4px_0px_rgba(217,217,217,0.7)]',
      )}
    >
      <div className="h-40 w-40 rounded-full bg-[#F8F8F8]"></div>
      <div className={twMerge('text-14 leading-21', isSelected ? 'text-[#FF7878]' : 'text-[#4E4E4E]')}>
        {template.name}
      </div>
    </button>
  )
}
