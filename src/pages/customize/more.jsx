const More = () => {
  return (
    <div className="md:ml-[3.5rem] md:max-w-[1000px]">
      <div className="mb-6 mr-auto max-w-[744px] flex-col gap-4">
        <h1 className="mb-4 text-300 font-600">More</h1>

        <div>
          <p className="mb-4 text-sm">
            When you choose a new URL, the current one will no longer work. Do
            not change your URL if you have already shared the event.
          </p>

          <div className="mb-8 grid grid-cols-[4fr_1fr] rounded-lg bg-white p-2">
            <input
              type="text"
              className="w-full bg-none px-3 py-2 text-gray-600 outline-none transition-all placeholder:font-500"
              placeholder="Upgrade to CENTRL Premium  to set a custom URL "
            />

            <button className="rounded-md bg-[#F0F0F0] p-1 text-sm font-500">
              Learn More
            </button>
          </div>

          <div>
            <h3 className="mb-2 text-200 font-600">Public Url</h3>
            <div className="mr-auto flex max-w-[400px] space-x-2">
              <input
                type="text"
                value="Lorem ipsum"
                className="flex-1 rounded-md border border-none border-gray-300 px-3 py-2 text-gray-700 outline-none focus:border-transparent focus:outline-none focus:ring-2"
                readOnly
              />
              <button className="rounded-xl bg-[#0A66C2] px-4 py-2 text-white">
                Update
              </button>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              Cancel Event
            </h2>
            <p className="mb-4 text-gray-600">
              Cancel and permanently delete this event. This operation cannot be
              undone. If there are any registered guests, we will notify them
              that the event has been cancelled.
            </p>
            <button className="rounded-full bg-[#FF080C] px-4 py-2 text-white">
              Cancel Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
