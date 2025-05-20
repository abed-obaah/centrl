import { Link } from "react-router-dom";
import Mobile from "../../../assets/BannerImg.png";

const Banner = () => {
  return (
    <section className="mt-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="relative rounded-xl bg-[#FFF8EF] p-8">
          <div className="mx-auto max-w-[950px] md:grid md:grid-cols-2 md:items-center md:gap-4">
            <div className="mb-16 mr-auto max-w-[300px] text-left md:mb-0">
              <h4 className="mb-4 text-500 font-700 md:text-700 md:leading-[1.1]">
                Centrl is coming soon to Mobile{" "}
              </h4>

              <p className="mb-6 text-base text-black">
                Always by your side, ready to support you whenever and wherever
                you need it.
              </p>

              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="rounded-xl bg-[#0A66C2] px-6 py-2 text-[white]"
              >
                Learn More
              </Link>
            </div>

            {/* Hero Image */}
            <div>
              <img
                className="mx-auto w-[350px] lg:w-[400px]"
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
