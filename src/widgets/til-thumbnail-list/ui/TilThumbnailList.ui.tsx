import { TilThumbnail } from '@/widgets/til-thumbnali'

export function TilThumbnailList() {
  return (
    <div className="flex w-full flex-col px-24 py-16 gap-12">
      <TilThumbnail />
      <TilThumbnail />
      <TilThumbnail />
    </div>
  )
}
