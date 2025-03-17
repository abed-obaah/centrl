import homeimg from "../assets/homeimg.png";
import StarIcon from "../assets/hero-svg-icon.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main>
      <section className="pt-36 xl:pt-24">
        <div className="container">
          <div className="relative rounded-xl bg-white p-8 lg:py-16">
            <div className="mx-auto max-w-[850px] md:grid md:grid-cols-2 md:items-center md:gap-4 lg:gap-10">
              <div className="mb-16 text-center md:mb-0 md:text-left">
                <h1 className="mb-4 text-600 font-500 leading-[1.3] text-black md:leading-[1.1] lg:text-[3rem]">
                  Events Worth Your Time With{" "}
                  <span className="text-left font-700 text-black">Centrl</span>
                </h1>

                <p className="text-base mb-4 text-black">
                  Always by your side, ready to support you <br />
                  whenever and wherever you need it.
                </p>

                <Link
                  to={"/sign-up"}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="font-medium focus:ring-indigo-300 focus:ring-offset-gray-900 inline-block rounded-full bg-gradient-to-r from-[#CD2574] to-[#E46708] px-12 py-3 text-[white] shadow-sm hover:from-[#E46708] hover:to-[#CD2574] focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Create Event
                </Link>
              </div>

              {/* Hero Image */}
              <div className="mx-auto w-[250px] md:ml-auto md:mr-0 md:w-[350px] lg:w-[420px]">
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
