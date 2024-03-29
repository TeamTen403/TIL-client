import { tagAtomsAtom } from '@/entities/tag'
import { useAtomValue } from 'jotai'
import { TagSelector } from './selector.ui'

export function TagSelectorList() {
  const tagAtoms = useAtomValue(tagAtomsAtom)

  return (
    <div className="flex w-full flex-wrap gap-x-4 gap-y-8">
      {tagAtoms.map(tagAtom => (
        <TagSelector key={`${tagAtom}`} tagAtom={tagAtom} />
      ))}
    </div>
  )
}
