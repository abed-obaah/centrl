import React from 'react'
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
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function aside() {
    const [value, setValue] = useState(new Date());
  return (
     <aside className="hidden xl:col-span-4 xl:block">
                  <div className="sticky top-4 space-y-1">
                    <section aria-labelledby="who-to-follow-heading">
                      <div className="rounded-lg">
                      <div className="flow-root bg-[#fff] rounded-md p-4">
                        <div className='flex justify-between items-center'>
                            <h1>Intro</h1>
                            <img alt="Centrl" src={edit} className="size-4" loading="lazy" />
                        </div>
    
                        <p className='py-4 font-400'>Combining an unparalleled stage presence with the smoothest voice in the industry, Bruno Mars could rightly be called the 21st century’s answer to Michael Jackson.</p>
                         
                         <div className='flex space-x-4 items-center'>
                            <img alt="Centrl" src={diamond} className="size-6" loading="lazy" />
                            <p className=' font-400'>100% recommended (20 reviews)</p>
    
                         </div>
                      </div>
                      </div>
                    </section>
                    <section aria-labelledby="trending-heading">
                      <div className="rounded-lg">
                      <div className="mt-6 flow-root">
                      <Calendar 
                        onChange={setValue} 
                        value={value} 
                        prev2Label={null} 
                        next2Label={null} 
                        className="custom-calendar rounded-md w-[200px]"
                        />

                          </div>
                      </div>
                    </section>
                  </div>
                </aside>
  )
}
