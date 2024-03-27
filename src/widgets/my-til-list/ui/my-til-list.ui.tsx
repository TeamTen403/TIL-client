import { MyTil } from './my-til.ui'

export function MyTilList() {
  return (
    <div className="flex w-full flex-col gap-8 px-24 py-16">
      <div className="text-18 font-[700]">내 TIL</div>

      <div className="flex w-full flex-col gap-12 px-24 py-16">
        <MyTil />
        <MyTil />
        <MyTil />
      </div>
    </div>
  )
}
