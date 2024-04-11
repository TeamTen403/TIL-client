import { useGetFeed } from '@/entities/til/api'
import { Til } from './til-item-ui'
import { useAtomValue } from 'jotai'
import { queryAtom } from '@/features/feed'
import { selectedTagAtom } from '@/entities/tag'

export function TilList() {
  const query = useAtomValue(queryAtom)
  const selectedTag = useAtomValue(selectedTagAtom)
  const { data } = useGetFeed()

  const list = data?.data.popularList.filter(
    r => r.title.includes(query) && r.tagName.includes(selectedTag?.name || ''),
  )
  return (
    <div className="flex w-full flex-col gap-8 overflow-scroll px-24 py-16">
      <div className="flex w-full flex-col gap-24 py-16">{list?.map(r => <Til {...r} />)}</div>
    </div>
  )
}
