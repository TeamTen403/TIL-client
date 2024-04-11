import React from 'react'
import { twMerge } from 'tailwind-merge'

const Dialogue = (props: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <div className="flex h-full w-full items-center justify-center ">
      <div
        className={twMerge(
          'flex max-h-[90%] w-full max-w-[360px] flex-col overflow-scroll rounded-[16px] bg-white',
          props.className,
        )}
      >
        {props.children}
      </div>
    </div>
  )
}

const Header = (props: { title: React.ReactNode; subTitle?: React.ReactNode }) => {
  return (
    <div className="sticky top-0 flex flex-col gap-[8px] rounded-t-[16px] p-[16px]">
      <div className="flex w-full items-center justify-center text-center  text-[18px] font-[700] leading-[25.2px] text-[#212121]">
        {props.title}
      </div>
      {props.subTitle && (
        <p className="w-full text-center text-[14px] font-[500] leading-[19.6px] text-[#5F5F5F]">{props.subTitle}</p>
      )}
    </div>
  )
}

Dialogue.Header = Header

export default Dialogue
