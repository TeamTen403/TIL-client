import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
export function RecordsCalendar() {
  return (
    <div className="flex w-full flex-col px-24 py-16">
      <div>TIL 켈린더</div>
      <div className="w-full">
        <Calendar next2Label={null} prev2Label={null} />
      </div>
    </div>
  )
}
