import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Arrow from '../assets/arrowRight.png'

export default function Example() {
  return (
    <form className="bg-[#fff] shadow-sm  sm:rounded-xl md:col-span-2">
          <div className="px-2 py-6 sm:p-8">
          <h1 className='font-[700]  text-[16px]'>Subscriptions & payments</h1>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
               
              <div className="sm:col-span-3">
                <div className='flex justify-between items-center border-b border-b-[#00000014] py-5'>
                        <p  className="block text-sm/6 font-medium text-gray-900">
                        Reactivate
                        </p>
                        <img src={Arrow} className="w-3 h-3" />
                </div>
                <div className='flex justify-between items-center border-b border-b-[#00000014] py-5'>
                        <p  className="block text-sm/6 font-medium text-gray-900">
                        View purchase history
                        </p>
                        <img src={Arrow} className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </form>
  )
}
