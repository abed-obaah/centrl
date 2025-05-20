import AboutImg from "../../assets/about-img.png";
import SponsorsBanner from "./components/SponsorsBanner";
import AboutBanner from "../../assets/heroimage.png";
import Founders from "./components/Founders";
import Members from "./components/Members";

const AboutPage = () => {
  return (
    <div className="pt-36">
      <div className="container 2xl:max-w-[1200px]">
        <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-[1.3fr_2fr]">
          <div className="mb-8 rounded-3xl bg-[#fff] p-6 md:mb-0 md:p-8">
            <h1 className="mb-10 text-400 font-700 md:text-500">
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
              className="h-full w-full object-cover md:rounded-3xl lg:rounded-none"
              src={AboutImg}
              alt="About Img"
            />
          </div>
        </div>

        <div className="my-8 rounded-3xl bg-[#fff] p-6 md:mb-0 md:p-8">
          <div className="mb-10">
            <h2 className="mb-4 text-300 font-700 md:text-400">Our Mission</h2>
            <p className="leading-[2] text-[#000]">
              To empower creators, innovators, and organizers by providing tools
              and solutions that simplify event management, foster meaningful
              engagement, and inspire healthy competition.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-300 font-700 md:text-400">Our Vision</h2>
            <p>
              To become the go-to platform for individual and organizations
              aiming to host impactful events and foster collaboration
              worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="container 2xl:max-w-[1200px]">
        <SponsorsBanner />
      </div>

      <div className="mt-20 bg-gradient-to-r from-[#FF6B98] via-[#B76EFD] to-[#FFD5BA] py-20">
        <div className="container 2xl:max-w-[1200px]">
          <Founders />
          <Members />
        </div>
      </div>

      <div className="container 2xl:max-w-[1200px]">
        <div className="pb-8 pt-24">
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

export default AboutPage;
