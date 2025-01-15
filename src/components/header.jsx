'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/logo.png';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Pricing', href: '/pricing' },
  { name: 'Discover', href: '#' },
  { name: 'About', href: '#' },

]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="flex items-center  justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={Logo}
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
              <div className="flex items-center justify-center gap-10 p-4">
           
            <input
              type="text"
              placeholder="Lagos"
              className="flex-1 px-8 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <div className="relative flex items-center flex-1">
              <input
                type="text"
                placeholder="Search events"
                className="w-full px-10 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 pr-12"
              />
              <button className="absolute right-2 flex items-center justify-center w-8 h-8 bg-orange-500 rounded-md hover:bg-orange-600">
                <MagnifyingGlassIcon className="w-4 h-4 text-white" />
              </button>
            </div>

            <p  className=''>5:33 PM GMT+1</p>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:ml-8 mt-4 lg:mt-0">
            <Link to={'/signin'}>
                  <a href="#" className="text-sm/6 font-semibold text-gray-900 border-2 border-[#000000] rounded-md py-1 px-6">
                  Sign In
                </a>
            </Link>
          
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
