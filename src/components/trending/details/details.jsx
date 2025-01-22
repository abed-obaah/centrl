import { BellIcon } from '@heroicons/react/24/outline';
import Headers from '../../header';
import TrendingEvents from './trendingDetails';

export default function Example() {
  return (
    <>
 
      <div className="flex min-h-full flex-col bg-[#F6F6F6]">
       <Headers/>

        {/* 3 column wrapper */}
        <div className="mx-auto w-full max-w-7xl grow lg:flex xl:px-2 mt-10">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 xl:flex">
          <div className="bg-white border rounded-md shadow-sm px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-r xl:border-b-0 xl:pl-6 h-[45%]">
            <div className=' border-b'>
                <h3 className="text-lg font-semibold mb-4">Filters</h3>
            </div>
                      <div className="mb-4">
                        <h4 className="text-md font-medium">Price</h4>
                        <label className="block mt-2">
                          <input type="radio" name="price" className="mr-2" /> Paid
                        </label>
                        <label className="block mt-2">
                          <input type="radio" name="price" className="mr-2" /> Free
                        </label>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-md font-medium">Category</h4>
                        {['Party', 'Business', 'Tech', 'Education', 'Others'].map((category) => (
                          <label className="block mt-2" key={category}>
                            <input type="radio" name="category" className="mr-2" /> {category}
                          </label>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-md font-medium">Location</h4>
                        <label className="block mt-2">
                          <input type="radio" name="location" className="mr-2" /> Online
                        </label>
                        <label className="block mt-2">
                          <input type="radio" name="location" className="mr-2" /> Offline
                        </label>
                      </div>
                    </div>

            <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
              <TrendingEvents/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
