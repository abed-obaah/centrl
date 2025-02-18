import CalendarListings from '../components/CalendarListings';

const Calendars = () => {
  return (
    <div className="pt-36">
      <div className="container xl:max-w-[1100px]">
        <div className="flex bg-[#fff] rounded-xl p-6 flex-wrap gap-4 justify-between items-center">
          <h1 className="text-400 font-700 md:text-500">Calendars</h1>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-[0.55rem] bg-[transparent] border border-[#646060]  rounded-xl placeholder:text-[#000] placeholder:font-500 focus:outline-none w-[30%] "
          />
        </div>

        <div className="mt-12 xl:max-w-[1000px] xl:mx-auto">
          <CalendarListings title="Favorite Celebrities" />
        </div>

        <div className="mt-12 xl:max-w-[1000px] xl:mx-auto">
          <CalendarListings title="Communities" />
        </div>
      </div>
    </div>
  );
};

export default Calendars;
