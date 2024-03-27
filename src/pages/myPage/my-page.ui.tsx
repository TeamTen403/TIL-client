import { MainLayoutHeader } from '@/shared/ui'
import { RecordsCalendar } from '@/widgets/records-calendar'
import { MyTilList } from '@/widgets/my-til-list'
import { ViewerRecords } from '@/widgets/viewer-records'

export function MyPage() {
  return (
    <div className="w-full">
      <MainLayoutHeader title="마이페이지" />
      <ViewerRecords />
      <RecordsCalendar />
      <MyTilList />
    </div>
  )
}
