import { MyTil } from './MyTilItem'

export function MyTilList() {
  return (
    <div className="flex w-full flex-col gap-8 px-24 py-16">
      <div className="flex w-full flex-col gap-24 py-16">
        <MyTil />
        <MyTil />
        <MyTil />
      </div>
    </div>
  )
}
