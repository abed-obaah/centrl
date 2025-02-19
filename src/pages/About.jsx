import AboutImg from '../assets/about-img.png';
import AboutBanner from '../assets/heroImage.png';
import Founders from '../components/Founders';
import LogoBanner from '../components/LogoBanner';
import Members from '../components/Members';

const About = () => {
  return (
    <div className="pt-36">
      <div className="container 2xl:max-w-[1200px]">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-[1.3fr_2fr] md:gap-4">
          <div className="bg-[#fff] mb-8 md:mb-0 p-6 md:p-8 rounded-3xl">
            <h1 className="text-400 mb-10 font-700 md:text-500">
              About Centrl
            </h1>
            <p className="leading-[2] text-[#000]">
              Welcome to Centrl, the ultimate platform for hosting and managing
              events, as well as creating and participating in exciting
              competitions. At Centrl, we are redefining how individuals,
              organizations, and communities connect, collaborate, and create
              memorable experiences.
            </p>
          </div>

          <div className="h-full w-full">
            <img
              className="h-full md:rounded-3xl lg:rounded-none object-cover w-full"
              src={AboutImg}
              alt="About Img"
            />
          </div>
        </div>

        <div className="bg-[#fff] my-8 md:mb-0 p-6 md:p-8 rounded-3xl">
          <div className="mb-10">
            <h2 className="text-300 mb-4 font-700 md:text-400">Our Mission</h2>
            <p className="leading-[2] text-[#000]">
              To empower creator, innovators, and organizers by providing tools
              and solutions that simplify event management, foster meaningful
              engagement, and inspire healthy competition.
            </p>
          </div>

          <div>
            <h2 className="text-300 mb-4 font-700 md:text-400">Our Vision</h2>
            <p>
              To become the go-to platform for individual and organizations
              aiming to host impactful events adn foster collaboration
              worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="container 2xl:max-w-[1200px]">
        <LogoBanner />
      </div>

      <div className="bg-gradient-to-r mt-20 py-20 from-[#FF6B98] via-[#B76EFD] to-[#FFD5BA]">
        <div className="container 2xl:max-w-[1200px]">
          <Founders />
          <Members />
        </div>
      </div>

      <div className="container 2xl:max-w-[1200px]">
        <div className="pt-24 pb-8">
          <div className="relative h-full w-full">
            <img
              src={AboutBanner}
              alt="About Banner"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
