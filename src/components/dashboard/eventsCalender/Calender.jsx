import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  getDate,
  getDay,
} from "date-fns";

const Calendar = ({ onSelectDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const startDay = getDay(monthStart);
  const daysFromPrevMonth = Array(startDay).fill(null);

  // Weekday headers
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

  const handleDateClick = (day) => {
    setSelectedDate(day);
    onSelectDate(day);
  };

  return (
    <div className="mb-8 hidden h-fit max-w-[320px] rounded-xl bg-card p-4 shadow-sm md:mx-auto md:mb-0 md:block">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-200 font-600">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <div className="flex space-x-1">
          <button
            onClick={prevMonth}
            className="rounded-full p-1 transition-colors hover:bg-muted"
            aria-label="Previous month"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextMonth}
            className="rounded-full p-1 transition-colors hover:bg-muted"
            aria-label="Next month"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="mb-2 grid grid-cols-7 gap-1">
        {weekDays.map((day, index) => (
          <div key={index} className="mb-2 text-center text-50 font-600">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {daysFromPrevMonth.map((_, index) => (
          <div
            key={`prev-${index}`}
            className="ease flex size-[2.5rem] items-center justify-center rounded-full transition-colors duration-300 disabled:opacity-40"
          ></div>
        ))}

        {/* Days of current month */}
        {daysInMonth.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(day)}
            className={`ease flex size-[2.5rem] items-center justify-center rounded-full transition-colors duration-300 disabled:opacity-40 ${
              isSameDay(day, selectedDate) ? "bg-primary text-white" : ""
            }`}
          >
            {getDate(day)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
