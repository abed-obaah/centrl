import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
} from 'date-fns';

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
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const handleDateClick = (day) => {
    setSelectedDate(day);
    onSelectDate(day);
  };

  return (
    <div className="mb-8 md:mb-0 h-fit bg-card rounded-xl p-4 shadow-sm max-w-[320px] md:mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-200 font-600">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <div className="flex space-x-1">
          <button
            onClick={prevMonth}
            className="p-1 rounded-full hover:bg-muted transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextMonth}
            className="p-1 rounded-full hover:bg-muted transition-colors"
            aria-label="Next month"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day, index) => (
          <div key={index} className="text-center text-50 font-600 mb-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {daysFromPrevMonth.map((_, index) => (
          <div
            key={`prev-${index}`}
            className="size-[2.5rem] flex items-center justify-center rounded-full transition-colors duration-300 ease disabled:opacity-40"
          ></div>
        ))}

        {/* Days of current month */}
        {daysInMonth.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(day)}
            className={`size-[2.5rem] flex items-center justify-center rounded-full transition-colors duration-300 ease disabled:opacity-40 ${
              isSameDay(day, selectedDate) ? 'bg-primary text-white' : ''
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
