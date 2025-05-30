import Img from "../../../assets/podcast-banner.png";
import Playlist from "../../../assets/playlist.png";

const Neumind = () => {
  const podcastEpisodes = [
    {
      series: "Neumind Tech Podcast",
      title: "Tech and Society",
      description:
        "Neumind is a future-forward podcast and thought leadership platform curated under the banner of the NextGen Tech Forum. It is designed to dissect, decode, and demystify the evolving landscapes of technology, innovation, and digital transformation — one sector at a time",
    },
    {
      series: "Neumind Tech Podcast",
      title: "Delta State Tech Innovation",
      description:
        "Neumind is a future-forward podcast and thought leadership platform curated under the banner of the NextGen Tech Forum. It is designed to dissect, decode, and demystify the evolving landscapes of technology, innovation, and digital transformation — one sector at a time",
    },
    {
      series: "Neumind Tech Podcast",
      title: "Tech and Society",
      description:
        "Neumind is a future-forward podcast and thought leadership platform curated under the banner of the NextGen Tech Forum. It is designed to dissect, decode, and demystify the evolving landscapes of technology, innovation, and digital transformation — one sector at a time",
    },
    {
      series: "Neumind Tech Podcast",
      title: "Delta State Tech Innovation",
      description:
        "Neumind is a future-forward podcast and thought leadership platform curated under the banner of the NextGen Tech Forum. It is designed to dissect, decode, and demystify the evolving landscapes of technology, innovation, and digital transformation — one sector at a time",
    },
  ];
  return (
    <main>
      {/* Podcast Section */}
      <section className="pt-24">
        <div className="container lg:max-w-[1000px] 2xl:max-w-[1200px]">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Podcast</h2>
          <p className="mb-8 max-w-[800px] text-gray-600">
            Stay up to date with all the community events. All events, like
            absolutely everything on ODS, AI, have always been and will be free.
          </p>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Podcast Branding */}
            <div className="lg:col-span-1">
              <img
                src={Img}
                alt="Podcast Banner"
                className="w-full rounded-xl object-cover"
              />
            </div>

            {/* Podcast Episodes Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
              {podcastEpisodes.map((episode, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-12">
                    <span className="text-sm text-gray-500">Series</span>
                    <h3 className="font-bold text-gray-900">
                      {episode.series}
                    </h3>
                  </div>
                  <h4 className="mb-8 text-lg font-700 text-gray-900">
                    {episode.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {episode.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Playlist Section */}
      <section className="pt-16">
        <div className="container lg:max-w-[1000px] 2xl:max-w-[1200px]">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            Featured Playlist
          </h2>

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_2fr]">
            <img
              src={Playlist}
              alt="Featured Playlist"
              className="w-full rounded-xl object-cover"
            />

            <div className="h-full rounded-xl bg-white p-6">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Tech and Society
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Neumind is a future-forward podcast and thought leadership
                  platform curated under the banner of the NextGen Tech Forum.
                  It is designed to dissect, decode, and demystify the evolving
                  landscapes of technology, innovation, and digital
                  transformation — one sector at a time.
                </p>
                <p>
                  At its core, Neumind is not just a conversation; it is a
                  convergence point for intellect, insight, and imagination.
                  Each episode brings together industry leaders, policy shapers,
                  startup founders, and visionaries across various technology
                  verticals — from artificial intelligence, blockchain, fintech,
                  and edtech, to agric tech, health tech, clean energy, and
                  beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Neumind;
