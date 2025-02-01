import Header from '../header';
import aboutImage from "../../assets/about.png";
import aboutImages from "../../assets/heroImage.png";
import Founders from './founders';
import Team from './teamMembers';
import Footer from '../footer/footer';


export default function Example() {
  return (
    <><Header /><div className="py-24 sm:py-32">

      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
             
              <div className="p-10">
                <h3 className="text-[24px] font-semibold text-black mb-20">About Centrl</h3>
                <p className="mt-2 max-w-lg text-[22px] text-gray-600">
                Welcome to Centrl, the ultimate platform for hosting and managing events, as well as creating and participating in exciting competitions. At Centrl, we are redefining how individuals, organizations, and communities connect, collaborate, and create memorable experiences.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
            <img
              alt=""
              src={aboutImage}
              className="h-full w-full object-cover"
            />
          </div>

            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
          <div className="relative lg:col-span-6">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
            
              <div className="p-10 pt-4">
                <h3 className="text-[24px] font-semibold text-black">Our Mission</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">To empower creators, innovators, and organizers by providing tools and solutions that simplify event management, foster meaningful engagement, and inspire healthy competition.</p>
               
              </div>
              <div className="p-10 pt-4">
                <h3 className="text-[24px] font-semibold text-black">Our Vision</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">To empower creators, innovators, and organizers by providing tools and solutions that simplify event management, foster meaningful engagement, and inspire healthy competition.</p>
               
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-bl-[2rem]" />
          </div>
        
        </div>
      </div>
    </div>

    <div className="bg-[#FEE9FD] py-24 sm:py-32">
      <Founders />
      <Team  />
    </div>

    <div className="py-24 sm:py-32">
  <div className="relative sm:py-16">
    <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
    <div className="relative h-full w-full">
          <img
            src={aboutImages}
            alt="Your Image Description"
            className="h-full w-full object-cover"
          />
        </div>
    </div>
  </div>
  </div>
<Footer/>
    
    </>
  )
}
