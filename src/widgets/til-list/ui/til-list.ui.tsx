import { Til } from './til-item-ui'

export function TilList() {
  return (
    <div className="flex w-full overflow-scroll flex-col gap-8 px-24 py-16">
      <div className="flex w-full flex-col gap-24 py-16">
        <Til />
        <Til />
        <Til />
      </div>
    </div>
  )
}
