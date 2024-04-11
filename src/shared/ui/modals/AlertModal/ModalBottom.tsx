import React from 'react'
import { PulseLoader } from 'react-spinners'
import { twMerge } from 'tailwind-merge'

const ModalBottom = (props: React.PropsWithChildren<any>) => {
  return (
    <div className=" sticky bottom-0 w-full px-[16px] pb-[12px]">
      <div className="flex w-full gap-[8px] rounded-b-[16px] pt-[12px]">{props.children}</div>
    </div>
  )
}

const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'cancel' | 'delete' | 'delete-outline'
    isLoading?: boolean
    dataCy?: string
  },
) => {
  return (
    <button
      {...props}
      disabled={props.isLoading || props.disabled}
      className={twMerge(
        `w-full rounded-[8px]  py-[12.5px] text-[16px]
      ${
        props.variant == 'primary' &&
        'bg-[#5D7CF9] font-[700] text-white disabled:bg-[rgba(58,81,137,0.40)] disabled:text-[rgba(255,255,255,0.40)]'
      } 
      ${props.variant == 'delete' && 'bg-[#F90000] font-[700] text-white disabled:bg-[rgba(58,81,137,0.40)]'}
      ${props.variant == 'cancel' && 'bg-[white] font-[400] text-[#5F5F5F] shadow-[0px_0px_0px_1px_#E6E6E6]'} 
      ${props.variant == 'delete-outline' && 'bg-[white] font-[400] text-[#F90000] shadow-[0px_0px_0px_1px_#F90000]'} 
      ${props.isLoading && 'bg-[rgba(58,81,137,0.4)] shadow-none'}`,
        props.className,
      )}
      data-cy={props.dataCy}
    >
      {props.isLoading ? (
        <PulseLoader size={10} color={props.variant == 'cancel' ? '#5D7CF9' : 'white'} />
      ) : (
        props.children
      )}
    </button>
  )
}

ModalBottom.Button = Button

export default ModalBottom
