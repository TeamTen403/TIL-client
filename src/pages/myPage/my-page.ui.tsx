import { MainLayoutHeader } from '@/shared/ui'
import { RecordsCalendar } from '@/widgets/records-calendar'
import { TilThumbnailList } from '@/widgets/til-thumbnail-list'
import { ViewerRecords } from '@/widgets/viewer-records'

export function MyPage() {
  return (
    <div className="w-full">
      <MainLayoutHeader title="마이페이지" />
      <ViewerRecords />
      <RecordsCalendar />
      <TilThumbnailList />
    </div>
  )
}
