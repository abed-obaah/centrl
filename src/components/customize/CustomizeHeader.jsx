import { Link } from 'react-router-dom';
import Love from '../../assets/loveIn.png';
import arrow from '../../assets/arrow-left-04.svg';

const CustomizeHeader = () => {
  return (
    <div className="fixed top-0 left-0 z-[500] w-full backdrop-blur-md bg-gradient-to-r from-white/50 via-neutral-100/50 to-white/50  supports-[backdrop-filter]:bg-white/3">
      <div className="max-w-[1290px] 2xl:max-w-[1500px] mx-auto px-4 flex items-center gap-[15rem] py-5">
        <Link
          to="/events"
          className="flex items-center gap-2 text-100 text-[red]"
        >
          <img src={arrow} alt="Event" className="h-8 w-8 object-contain" />
          Back
        </Link>
        <div className="flex max-w-[1000px]  mx-left gap-3">
          <img
            src={Love}
            alt="Event"
            className="w-14 rounded-xl h-12 object-contain"
          />
          <div>
            <h1 className="text-100 font-500 ">Love in the Boulevard</h1>
            <p className="text-100 text-foreground font-500">Hard Rock</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeHeader;
