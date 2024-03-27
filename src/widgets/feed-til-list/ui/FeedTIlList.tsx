import { FeedTilItem } from './FeedTilItem'

export function FeedTilList() {
  return (
    <div className="flex w-full flex-col gap-12">
      <FeedTilItem />
      <FeedTilItem />
      <FeedTilItem />
    </div>
  )
}
