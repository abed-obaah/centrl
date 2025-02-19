import Dsyc from '../assets/dsyc.png';
import Ewer from '../assets/ewer.png';
import Pandor1 from '../assets/pandor.png';
import Chilbiz from '../assets/chilbiz.png';
import Pandor2 from '../assets/pandor-2.png';
import TechSpayc from '../assets/tech-spayc.png';

const logos = [
  {
    src: Dsyc,
    alt: 'Partner Logo 1',
  },
  {
    src: Ewer,
    alt: 'Partner Logo 2',
  },
  {
    src: Pandor1,
    alt: 'Partner Logo 3',
  },
  {
    src: Chilbiz,
    alt: 'Partner Logo 4',
  },
  {
    src: Pandor2,
    alt: 'Partner Logo 5',
  },
  {
    src: TechSpayc,
    alt: 'Partner Logo 6',
  },
];

const LogoBanner = () => {
  return (
    <div className="w-full bg-[#EFEFEF] px-8 py-4 mt-8  overflow-hidden">
      {/* First row of logos */}
      <div className="flex animate-scroll">
        {logos.map((logo, idx) => (
          <div
            key={`logo-1-${idx}`}
            className="flex items-center justify-center mx-4 md:mx-12 min-w-[80px] md:min-w-[120px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-auto h-8 object-cover transition-all"
            />
          </div>
        ))}

        {/* Duplicate set of logos for seamless scrolling */}
        {logos.map((logo, idx) => (
          <div
            key={`logo-2-${idx}`}
            className="flex items-center justify-center mx-4 md:mx-12 min-w-[80px] md:min-w-[120px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-auto h-8 object-cover transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBanner;
