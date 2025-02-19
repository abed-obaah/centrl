import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import WaitlistImg from '../assets/waitlist-image.png';
import WaitlistForm from '../components/WaitlistForm';

const WaitListLayout = () => {
  return (
    <div className="min-h-screen">
      <main className="h-screen">
        <div className="max-w-[1290px] 2xl:max-w-[1400px] mx-auto relative">
          <div className="absolute z-10 top-2 left-0 mt-4 ml-4">
            <Link to="/">
              <img alt="Centrl" src={logo} className="size-7" loading="lazy" />
            </Link>
          </div>
        </div>

        <div className="xl:grid xl:grid-cols-2 h-full">
          {/* img */}
          <div className="container xl:fixed xl:w-1/2  xl:overflow-hidden">
            <img
              className="hidden xl:block xl:size-[700px] xl:mt-[-1rem]  xl:mx-auto 2xl:mt-0 xl:object-cover"
              src={WaitlistImg}
              alt="Waitlist"
              loading="lazy"
            />
          </div>
          {/* form */}
          <div className="xl:bg-white py-16 xl:py-0 xl:col-start-2 xl:min-h-screen xl:overflow-y-auto">
            <div className="container">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WaitListLayout;
