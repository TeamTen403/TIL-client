import Calendar from 'react-calendar'
import './calendar.css'
export function RecordsCalendar() {
  return (
    <div className="flex w-full flex-col gap-8 px-24 py-16">
      <div className="text-18 font-[700] leading-25 text-[#4E4E4E]">켈린더</div>
      <div className="flex w-full justify-center rounded-[8px] bg-white px-24 py-16 shadow-[0px_0px_4px_0px_rgba(217,217,217,0.7)]">
        <Calendar next2Label={null} prev2Label={null} />
      </div>
    </div>
  )
}
