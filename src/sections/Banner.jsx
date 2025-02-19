import { Link } from 'react-router-dom';
import Mobile from '../assets/BannerImg.png';

const Banner = () => {
  return (
    <section className="mt-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="relative rounded-xl p-8 bg-[#FFF8EF]">
          <div className="md:grid md:grid-cols-2 md:gap-4 max-w-[950px] mx-auto   md:items-center">
            <div className="mb-16 md:mb-0 text-left max-w-[300px] mr-auto">
              <h4 className="text-500 md:text-700 mb-4 md:leading-[1.1] font-700">
                Centrl is coming soon to Mobile{' '}
              </h4>

              <p className="mb-6 text-base  text-black">
                Always by your side, ready to support you whenever and wherever
                you need it.
              </p>

              <Link
                to="/"
                className="rounded-xl bg-[#0A66C2] px-6 py-2  text-[white] "
              >
                Learn More
              </Link>
            </div>

            {/* Hero Image */}
            <div>
              <img
                className="w-[350px] mx-auto lg:w-[400px]"
                src={Mobile}
                alt="Banner Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
