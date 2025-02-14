import logo from '../assets/Logo.png';
import WaitlistImg from '../assets/waitlist-image.png';
import WaitlistForm from '../components/WaitlistForm';

const WaitListLayout = () => {
  return (
    <div className="h-screen">
      <main className="h-screen">
        <div className="lg:grid lg:grid-cols-2">
          {/* img */}
          <div className="container">
            <div className="pt-5">
              <a href="/">
                <img
                  alt="Centrl"
                  src={logo}
                  className="size-8"
                  loading="lazy"
                />
              </a>
              <img
                className="hidden lg:block"
                src={WaitlistImg}
                alt="Waitlist"
              />
            </div>
          </div>

          {/* form */}
          <div className="lg:bg-[#fff]   py-20 lg:py-0">
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
