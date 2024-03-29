import { SearchBar } from '@/features/feed'
import { MainLayoutHeader } from '@/shared/ui'
import { FeedTilList } from '@/widgets/feed-til-list'

export function FeedPage() {
  return (
    <div className="w-full">
      <MainLayoutHeader title="피드" />
      <SearchBar/>
      <FeedTilList />
    </div>
  )
}
