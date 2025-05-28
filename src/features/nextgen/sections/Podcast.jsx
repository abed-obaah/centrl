import { Link } from "react-router-dom";
import Img from "../../../assets/podcast-banner.png";

const Podcast = () => {
  return (
    <section className="pt-24">
      <div className="container 2xl:max-w-[1200px]">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Podcast</h2>
        <p className="mb-8 text-gray-600">
          Stay up to date with all the community events. All events, like
          absolutely everything on ODS, AI, have always been and will be free.
        </p>

        <Link
          to={"/nextgen/neumind"}
          className="rounded-bl-xl rounded-br-xl bg-white shadow-md md:grid md:grid-cols-[1fr_2fr] md:gap-6 md:rounded-bl-none md:rounded-br-xl md:rounded-tr-xl"
        >
          <img
            src={Img}
            alt="Podcast Banner"
            className="h-full w-full rounded-xl object-cover md:rounded-none"
          />

          <div className="px-4 py-6 md:px-0 md:pr-8 md:pt-10">
            <div className="mb-10">
              <span className="mb-4 text-50 font-500 text-black">Series</span>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Neumind Tech Podcast
              </h3>
            </div>

            <div className="space-y-4 text-gray-600">
              <p className="text-50">
                Neumind is a future-forward podcast and thought leadership
                platform curated under the banner of the NextGen Tech Forum. It
                is designed to dissect, decode, and demystify the evolving
                landscapes of technology, innovation, and digital transformation
                — one sector at a time.
              </p>
              <p className="text-50">
                At its core, Neumind is not just a conversation; it is a
                convergence point for intellect, insight, and imagination. Each
                episode brings together industry leaders, policy shapers,
                startup founders, and visionary thinkers to explore the
                intersections of technology, business, intelligence, blockchain,
                fintech, and edtech, to agric tech, health tech, clean energy,
                and beyond.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Podcast;
