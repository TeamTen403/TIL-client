import { selectTagAtom, tagAtomsAtom } from '@/entities/tag'
import { useAtomValue, useSetAtom } from 'jotai'
import { TagSelector } from './selector.ui'
import { tilDtoAtom } from '@/features/til/edit/edit.model'

export function TagSelectorList() {
  const tagAtoms = useAtomValue(tagAtomsAtom)

  const setTilDto = useSetAtom(tilDtoAtom)
  const onSelectTag = (v: string) => {
    setTilDto(til => ({ ...til, tagId: v }))
  }

  return (
    <div className="flex w-full flex-wrap gap-x-4 gap-y-8">
      {tagAtoms.map(tagAtom => (
        <TagSelector key={`${tagAtom}`} tagAtom={tagAtom} onSelect={onSelectTag} />
      ))}
    </div>
  )
}
