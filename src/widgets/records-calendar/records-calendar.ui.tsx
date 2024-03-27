import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
export function RecordsCalendar() {
  return (
    <div className="flex w-full flex-col gap-8 px-24 py-16">
      <div className="text-18 font-[700]">TIL 켈린더</div>
      <div className="flex w-full justify-center">
        <Calendar next2Label={null} prev2Label={null} />
      </div>
    </div>
  )
}
