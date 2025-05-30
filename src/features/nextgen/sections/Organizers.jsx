import CeoImg from "../../../assets/joel.png";

const Organizers = () => {
  return (
    <section className="pt-24">
      <div className="container lg:max-w-[1000px]">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-left">
          Organizers
        </h2>

        <div className="space-y-6 md:flex md:items-center md:justify-between md:space-y-0">
          {/* Organizer 1 */}
          <div className="text-center">
            <img
              src={CeoImg}
              alt="Akpor E. Favour"
              width={150}
              height={150}
              className="mx-auto mb-4 size-[150px] rounded-full object-cover"
            />
            <h3 className="font-bold text-gray-900">Akpor E. Favour</h3>
            <p className="mb-2 text-sm text-gray-600">Organizer</p>
            <button className="text-sm text-blue-600 hover:underline">
              View profile
            </button>
          </div>

          {/* Organizer 2 */}
          <div className="text-center">
            <div className="mx-auto mb-4 h-[150px] w-[150px] rounded-full bg-gray-300"></div>
            <h3 className="font-bold text-gray-900">Full Name</h3>
            <p className="mb-2 text-sm text-gray-600">Co-Organizer</p>
            <button className="text-sm text-blue-600 hover:underline">
              View profile
            </button>
          </div>

          {/* Organizer 3 */}
          <div className="text-center">
            <div className="mx-auto mb-4 h-[150px] w-[150px] rounded-full bg-gray-300"></div>
            <h3 className="font-bold text-gray-900">Full Name</h3>
            <p className="mb-2 text-sm text-gray-600">Role</p>
            <button className="text-sm text-blue-600 hover:underline">
              View profile
            </button>
          </div>

          {/* Organizer 4 */}
          <div className="text-center">
            <div className="mx-auto mb-4 h-[150px] w-[150px] rounded-full bg-gray-300"></div>
            <h3 className="font-bold text-gray-900">Full Name</h3>
            <p className="mb-2 text-sm text-gray-600">Role</p>
            <button className="text-sm text-blue-600 hover:underline">
              View profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;
