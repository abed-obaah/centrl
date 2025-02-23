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
