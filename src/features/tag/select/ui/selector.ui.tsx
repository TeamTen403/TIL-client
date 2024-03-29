import { TagType, isSelectedTagAtomCreator, selectTagAtom } from '@/entities/tag'
import { Atom, useAtomValue, useSetAtom } from 'jotai'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  tagAtom: Atom<TagType>
}

export function TagSelector({ tagAtom }: Props) {
  const tag = useAtomValue(tagAtom)
  const selectTag = useSetAtom(selectTagAtom)
  const isSelected = useAtomValue(useMemo(() => isSelectedTagAtomCreator(tag.value), [tag, selectTag]))

  const handleSelectTag = () => selectTag(tag)

  return (
    <span
      onClick={handleSelectTag}
      className={twMerge(
        'inline-flex cursor-pointer items-center justify-center rounded-[100px] border-1 px-8 py-2 text-14 leading-21',
        isSelected ? 'border-[#FF7878] bg-[#FFE6E6] text-[#FF7878]' : 'border-[#999999] bg-white text-[#999999]',
      )}
    >
      {tag.name}
    </span>
  )
}
