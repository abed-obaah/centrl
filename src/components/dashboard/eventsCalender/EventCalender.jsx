import TechEvents from './TechEvents';
import Calendar from './Calender';
import { useState } from 'react';

const EventCalender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="mt-16 mb-20 ">
        <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-6">
          <div className="md:sticky md:top-28 md:self-start">
            <Calendar onSelectDate={handleDateSelect} />
          </div>
          {/* <Calendar onSelectDate={handleDateSelect} /> */}

          <TechEvents selectedDate={selectedDate} />
        </div>
      </div>
    </>
  );
};

export default EventCalender;
