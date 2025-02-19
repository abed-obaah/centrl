import AboutImg from '../assets/about-img.png';
import AboutBanner from '../assets/heroImage.png';
import Founders from '../components/founders';
import LogoBanner from '../components/LogoBanner';
import Members from '../components/Members';

const About = () => {
  return (
    <div className="pt-36">
      <div className="container">
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
              To empower creators, innovators, and organizers by providing tools
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

      <div className="container">
        <LogoBanner />
      </div>

      <div className="bg-gradient-to-r mt-20 py-20 from-[#FF6B98] via-[#B76EFD] to-[#FFD5BA]">
        <div className="container">
          <Founders />
          <Members />
        </div>
      </div>

      <div className="container">
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

// import aboutImage from '../../assets/about.png';
// import aboutImages from '../../assets/heroImage.png';
// import Founders from './founders';
// import Team from './teamMembers';

// const About = () => {
//   return (
//     <>
//       <div>
//         <div className="container">
//           <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
//             <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
//               <div className="relative lg:col-span-3">
//                 <div className="">
//                   <div className="p-10">
//                     <h1 className="text-[24px] font-semibold text-black mb-20">
//                       About Centrl
//                     </h1>
//                     <p className="mt-2 max-w-lg text-[22px] text-gray-600">
//                       Welcome to Centrl, the ultimate platform for hosting and
//                       managing events, as well as creating and participating in
//                       exciting competitions. At Centrl, we are redefining how
//                       individuals, organizations, and communities connect,
//                       collaborate, and create memorable experiences.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative lg:col-span-6">
//                 <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
//                 <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
//                   <div className="p-10 pt-4">
//                     <h3 className="text-[24px] font-semibold text-black">
//                       Our Mission
//                     </h3>
//                     <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
//                       To empower creators, innovators, and organizers by
//                       providing tools and solutions that simplify event
//                       management, foster meaningful engagement, and inspire
//                       healthy competition.
//                     </p>
//                   </div>
//                   <div className="p-10 pt-4">
//                     <h3 className="text-[24px] font-semibold text-black">
//                       Our Vision
//                     </h3>
//                     <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
//                       To empower creators, innovators, and organizers by
//                       providing tools and solutions that simplify event
//                       management, foster meaningful engagement, and inspire
//                       healthy competition.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-bl-[2rem]" />
//               </div>
//             </div>
//           </div>

//           <div className="py-24 sm:py-32">
//             <div className="relative sm:py-16">
//               <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
//                 <div className="relative h-full w-full">
//                   <img
//                     src={aboutImages}
//                     alt="Your Image Description"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;
