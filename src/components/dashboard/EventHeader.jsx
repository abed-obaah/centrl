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
import { Link } from 'react-router-dom'


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
    <Popover className="fixed top-0 z-[500] w-full backdrop-blur-md bg-gradient-to-r from-white/50 via-neutral-100/50 to-white/50  supports-[backdrop-filter]:bg-white/3">
    <div className="flex items-center justify-between px-20 py-4 md:justify-start md:space-x-10">
      <div>
        <a href="#" className="flex">
          <span className="sr-only">Your Company</span>
          <img alt="Centrl" src={Logo} className="size-7" loading="lazy" />
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
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute z-10 mt-3 -ml-4 w-screen max-w-md transform transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in lg:max-w-3xl"
            >
              <div className="overflow-hidden rounded-lg ring-1 shadow-lg ring-black/5">
                <div className="bg-gray-50 p-5 sm:p-8">
                  <a href="#" className="-m-3 flow-root rounded-md p-3 hover:bg-gray-100">
                    <div className="flex items-center">
                      <Link to={'/event'}>
                       <div className="text-base font-medium text-gray-900">Events</div>
                      </Link>
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
          <Link to={'/event'}>
                  <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Events</a>
          </Link>
          <Link to={'/discover'}>
               <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Discover</a>
          </Link>
         
          
        </PopoverGroup>
        <div className="flex items-center md:ml-12">
          <div className="flex items-center gap-4 mr-5">
            <Link to={'/block'}>
              <AddSquare size="22" color="#000" />
            </Link>
            <SearchNormal1 onClick={() => setModalVisible(true)} size="24" color="#000" />
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              5:33 PM GMT+1
            </a>
          </div>
          <div className="flex items-center gap-4 ml-10">
            <Notification size="22" color="#000" />
            <div className="shrink-0 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <ProfileModal isOpen={isOpen} onClose={() => setIsOpen(false)} user={user} />
  </Popover>
  
  )
}
