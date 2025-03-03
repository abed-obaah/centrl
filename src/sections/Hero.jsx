import homeimg from '../assets/homeimg.png';
import StarIcon from '../assets/hero-svg-icon.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <main>
      <section className="pt-36 xl:pt-24">
        <div className="container">
          <div className="relative rounded-xl p-8 lg:py-16  bg-white">
            <div className="md:grid md:grid-cols-2 md:gap-4 lg:gap-10 max-w-[850px] mx-auto md:items-center">
              <div className="mb-16 md:mb-0 text-center md:text-left">
                <h1 className="text-600 text-black lg:text-[3rem] leading-[1.3] md:leading-[1.1] mb-4 font-500">
                  Events Worth Your Time With{' '}
                  <span className="text-black text-left font-700">CENTRL</span>
                </h1>

                <p className="mb-4 text-base  text-black">
                  Always by your side, ready to support you <br />
                  whenever and wherever you need it.
                </p>

                <Link
                  
                  to={'/sign-up'}
                   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="rounded-full bg-gradient-to-r from-[#CD2574] to-[#E46708] px-12 py-3 font-medium text-[white] shadow-sm hover:from-[#E46708] hover:to-[#CD2574] focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
                >
                  Create Event
                </Link>
              </div>

              {/* Hero Image */}
              <div className="w-[250px] md:w-[350px] lg:w-[420px] mx-auto md:ml-auto md:mr-0">
                <img className="w-full" src={homeimg} alt="Hero Image" />
              </div>
            </div>

            <img
              className="absolute bottom-4 right-4"
              src={StarIcon}
              alt="Star Icon"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
