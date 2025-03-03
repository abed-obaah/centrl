import Events from '../../components/Events';

const Discover = () => {
  return (
    <>
      <div className="pt-36">
        <div className="container 2xl:max-w-[1200px]">
          <h1 className="text-400 mb-2 font-700 md:text-500">
            Discover Events
          </h1>
          <p>
            Explore popular events near you, browse by category, or check out
            some of the great community calendars.
          </p>

          <Events />
        </div>
      </div>
    </>
  );
};

export default Discover;
