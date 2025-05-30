import AboutImg from "../../../assets/nextgen-forum.png";

const About = () => {
  return (
    <section className="pt-24">
      <div className="container lg:max-w-[1000px]">
        <div className="grid items-center gap-12 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">About Us</h2>
            <div className="space-y-2 text-gray-600">
              <p>
                The NextGen Tech Forum is a dynamic event powered by Future100 &
                Centrl, designed to inspire, equip, and connect the next
                generation of tech leaders, innovators, and problem-solvers
                across Africa and beyond.
              </p>
              <p>
                We bring together students, early-career professionals,
                entrepreneurs, and tech enthusiasts to explore emerging
                technologies, future-driven skills, and real-world opportunities
                in the digital economy.
              </p>
              <p>
                Through engaging panel sessions, hands-on masterclasses, expert
                talks, and networking opportunities, the forum creates a
                launchpad for attendees to learn, grow, and build in the world
                of tech—no matter their starting point.
              </p>
              <p>
                Our mission is simple: to make tech accessible, actionable, and
                inclusive for the youth shaping tomorrow.
              </p>
            </div>
            <button className="mt-6 rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
              Join Us
            </button>
          </div>

          <img src={AboutImg} alt="About Image" />
        </div>
      </div>
    </section>
  );
};

export default About;
