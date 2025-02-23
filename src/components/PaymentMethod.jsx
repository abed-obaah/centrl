import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Add from '../assets/Add_round.png'

export default function Example() {
  return (
    <form className=" md:col-span-2">
          <div className="px-2 py-6 sm:p-8">
          <h1 className='font-[700]  text-[16px]'>Payment Methods</h1>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
               
              <div className="sm:col-span-3">
                <div className='flex justify-between items-center py-5'>
                        <p  className="block text-[13px] font-medium text-gray-900">
                            Your saved payment methods are encrypted and stored securely by Paystack.
                        </p>
                </div>
                <div className=' items-center border-b border-b-[#00000014] py-5'>
                <button
                            type="button"
                            className="inline-flex items-center gap-x-2 rounded-md bg-[#fff] px-3.5 py-2.5 text-sm font-[700] text-[#000] shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Add Card
                            <img 
                                        src={Add}
                                        alt="Profile" 
                                        className="w-6 h-6"
                                      />
                        </button>

                        <div className='flex justify-between items-center pt-20'>
                        <p  className='font-[700]  text-[16px]'>
                             Payment History
                        </p>
                </div>

                </div>

                
              </div>
            </div>
          </div>
        </form>
  )
}
