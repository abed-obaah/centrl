import Mobile from '../../assets/mobile.png'


export default function Example() {
    return (
      <div className="">
        <div className="mx-auto max-w-7xl px-10 py-26 lg:px-10">
          <div className="overflow-hidden rounded-lg bg-[#fff2e3] lg:grid lg:grid-cols-2 lg:gap-4 ">
            <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:px-20 xl:py-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl">
                  <span className="block">Centrl is coming</span>
                  <span className="block">soon to Mobile.</span>
                </h2>
                <p className="mt-4 text-lg/6 text-[#000000]">
                Always by your side, ready to support you whenever and wherever you need it.
                </p>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center rounded-md border border-transparent bg-[#0A66C2] px-8 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-50"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="-mt-6">
              <img
                alt="App screenshot"
                src={Mobile}
                className="aspect-5/4 h-full translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 md:aspect-2/1 lg:translate-y-20"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  