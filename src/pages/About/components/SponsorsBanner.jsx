import Dsyc from "../../../assets/dsyc.png";
import Ewer from "../../../assets/ewer.png";
import Pandor1 from "../../../assets/pandor.png";
import Chilbiz from "../../../assets/chilbiz.png";
import Pandor2 from "../../../assets/pandor-2.png";
import TechSpayc from "../../../assets/tech-spayc.png";

const logos = [
  {
    src: Dsyc,
    alt: "Partner Logo 1",
  },
  {
    src: Ewer,
    alt: "Partner Logo 2",
  },
  {
    src: Pandor1,
    alt: "Partner Logo 3",
  },
  {
    src: Chilbiz,
    alt: "Partner Logo 4",
  },
  {
    src: Pandor2,
    alt: "Partner Logo 5",
  },
  {
    src: TechSpayc,
    alt: "Partner Logo 6",
  },
];

const SponsorsBanner = () => {
  return (
    <div className="mt-8 w-full overflow-hidden bg-[#EFEFEF] px-8 py-4">
      {/* First row of logos */}
      <div className="animate-scroll flex">
        {logos.map((logo, idx) => (
          <div
            key={`logo-1-${idx}`}
            className="mx-4 flex min-w-[80px] items-center justify-center md:mx-12 md:min-w-[120px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto object-cover transition-all"
            />
          </div>
        ))}

        {/* Duplicate set of logos for seamless scrolling */}
        {logos.map((logo, idx) => (
          <div
            key={`logo-2-${idx}`}
            className="mx-4 flex min-w-[80px] items-center justify-center md:mx-12 md:min-w-[120px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto object-cover transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsBanner;
