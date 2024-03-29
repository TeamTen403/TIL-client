import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material'
import { TilOptionType } from './types'
import { useAtomValue, useSetAtom } from 'jotai'
import { useMemo } from 'react'
import { isSelectedTilOptionAtomCreator, selectTilOptionAtom } from './select-option.model'
import { twMerge } from 'tailwind-merge'

export function TilOptionSelector() {
  return (
    <div className="flex w-full gap-16">
      <RadioButton value="PUBLIC" label="공개" />
      <RadioButton value="PRIVATE" label="나만 보기" />
    </div>
  )
}

type RadioButtonProps = {
  label: string
  value: TilOptionType
}
function RadioButton({ value, label }: RadioButtonProps) {
  const isSelected = useAtomValue(useMemo(() => isSelectedTilOptionAtomCreator(value), [value]))
  const selectTilOption = useSetAtom(selectTilOptionAtom)

  const handleSelect = () => selectTilOption(value)

  return (
    <div
      onClick={handleSelect}
      className={twMerge(
        'flex cursor-pointer items-center justify-center gap-4',
        isSelected ? 'text-[#FF7878]' : 'text-[#BABABA]',
      )}
    >
      {isSelected ? <CheckCircle /> : <RadioButtonUnchecked />} <span className="text-[#999999]">{label}</span>
    </div>
  )
}
