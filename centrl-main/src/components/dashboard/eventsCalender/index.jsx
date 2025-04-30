import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import {
  ChatBubbleLeftEllipsisIcon,
  CodeBracketIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  FlagIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ShareIcon,
  StarIcon,
} from '@heroicons/react/20/solid'
import {
  ArrowTrendingUpIcon,
  Bars3Icon,
  BellIcon,
  FireIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from "react";
import Events from './events';
import edit from '../../../assets/Edit_fill.png';
import event2 from '../../../assets/event2.png';
import diamond from '../../../assets/Dimond_alt_fill.png';
import Aside from './aside';
const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Popular', href: '#', icon: FireIcon, current: false },
  { name: 'Communities', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Trending', href: '#', icon: ArrowTrendingUpIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const communities = [
  { name: 'Movies', href: '#' },
  { name: 'Food', href: '#' },
  { name: 'Sports', href: '#' },
  { name: 'Animals', href: '#' },
  { name: 'Science', href: '#' },
  { name: 'Dinosaurs', href: '#' },
  { name: 'Talents', href: '#' },
  { name: 'Gaming', href: '#' },
]
const tabs = [
  { name: 'Recent', href: '#', current: true },
  { name: 'Most Liked', href: '#', current: false },
  { name: 'Most Answers', href: '#', current: false },
]
const questions = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  // More questions...
]
const whoToFollow = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]
const trendingPosts = [
  {
    id: 1,
    user: {
      name: 'Floyd Miles',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
    comments: 291,
  },
  // More posts...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  
  const [activeOption, setActiveOption] = useState("Upcoming");

  const handleSwitchClick = (option) => {
    setActiveOption(option);
  };
  
  return (
    <>
      <div className="min-h-full">
       

        <div className="py-10">
          <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8 mr-14">
             < Aside />
            <main className="lg:col-span-9 xl:col-span-6">
              <div className="px-4 sm:px-0">
                <div className="grid grid-cols-1 sm:hidden">
                  {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                  <select
                    defaultValue={tabs.find((tab) => tab.current).name}
                    aria-label="Select a tab"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600"
                  >
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
                  />
                </div>
                <div className="hidden sm:block">
                  <nav aria-label="Tabs" className="isolate flex divide-x rounded-lg  justify-between">
                    <h1>Events</h1>
                  </nav>
                </div>
              </div>
              <div className="mt-4">
                <Events/>
              </div>
            </main>
           
          </div>
        </div>
      </div>
    </>
  )
}
