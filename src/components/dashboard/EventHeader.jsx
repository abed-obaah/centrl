import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Logo from '../../assets/dsds.png'
import { AddSquare ,SearchNormal1, Notification} from 'iconsax-react'
import React, { useState } from "react";
import { useRef, useEffect } from "react";
import ProfileModal from "../ProfileModal";


const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Security', description: 'Your customers’ data will be safe and secure.', href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Reports',
    description: 'Get detailed reports that will help you make more informed decisions ',
    href: '#',
    icon: DocumentChartBarIcon,
  },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
  { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]



export default function Example({ setModalVisible,  }) {
  // const [modalVisible, setModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
  return (
    <Popover className="relative ">
      <div className="flex items-center justify-between p-6 md:justify-start md:space-x-10">
        <div>
          <a href="#" className="flex">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={Logo}
              className="h-8 w-auto sm:h-10"
            />
          </a>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </PopoverButton>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <PopoverGroup as="nav" className="flex space-x-10">
            <Popover className="relative">
              <PopoverButton className="mr-10 group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden data-open:text-gray-900">
                {/* <span>Solutions</span>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="ml-2 size-5 text-gray-400 group-hover:text-gray-500 group-data-open:text-gray-600 group-data-open:group-hover:text-gray-500"
                /> */}
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute z-10 mt-3 -ml-4 w-screen max-w-md transform transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in lg:max-w-3xl"
              >
                <div className="overflow-hidden rounded-lg ring-1 shadow-lg ring-black/5">
                  {/* <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:size-12">
                          <item.icon aria-hidden="true" className="size-6" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">{item.name}</p>
                          <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </div> */}
                  <div className="bg-gray-50 p-5 sm:p-8">
                    <a href="#" className="-m-3 flow-root rounded-md p-3 hover:bg-gray-100">
                      <div className="flex items-center">
                        <div className="text-base font-medium text-gray-900">Events</div>
                        <span className="ml-3 inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-xs/5 font-medium text-indigo-800">
                          New
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Empower your entire team with even more advanced tools.
                      </p>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </Popover>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Events
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Discover
            </a>

           
          </PopoverGroup>
          <div className="flex items-center md:ml-12">
            <div className='flex items-center gap-4 mr-5'>
                <AddSquare
                    size="24"
                    color="#000"
                    />
                     <SearchNormal1 
                     onClick={() => setModalVisible(true)}
                    size="24"
                    color="#000"
                    />
                 <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    5:33 PM GMT+1
                    </a>
            </div>
         
               
               <div className='flex items-center gap-4 ml-10'>
                        <Notification
                        size="24"
                        color="#000"
                        />
                        <div className="shrink-0 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                          <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
                        </div>

               </div>
           
           
               
           
          </div>
        </div>
      </div>
      <ProfileModal isOpen={isOpen} onClose={() => setIsOpen(false)} user={user} />

      <PopoverPanel
        transition
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition data-closed:scale-95 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-100 data-leave:ease-in md:hidden"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg  ring-1 shadow-lg ring-black/5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <img
                  alt="Your Company"
                  src={Logo}
                  className="h-8 w-auto"
                />
              </div>
              <div className="-mr-2">
                <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </PopoverButton>
              </div>
            </div>
            <div className="mt-6">
              {/* <nav className="grid gap-6">
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <item.icon aria-hidden="true" className="size-6" />
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                  </a>
                ))}
              </nav> */}
            </div>
          </div>
          
          <div className="px-5 py-6">
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                Pricing
              </a>

              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                Docs
              </a>

              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                Enterprise
              </a>
              {resources.map((item) => (
                <a key={item.name} href={item.href} className="text-base font-medium text-gray-900 hover:text-gray-700">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
              >
                Sign up
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?{' '}
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
