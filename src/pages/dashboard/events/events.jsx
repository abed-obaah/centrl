'use client'

import { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import boluvard from "../../../assets/boluvard.png"
import love from "../../../assets/love.png";


const activity = [
  { id: 1, type: 'created', person: { name: '24th, Dec.' }, date: '7d ago', dateTime: '2023-01-23T10:32' },
  { id: 2, type: 'edited', person: { name: '30th, Nov.' }, date: '6d ago', dateTime: '2023-01-23T11:03' },
  // { id: 3, type: 'sent', person: { name: 'Chelsea Hagon' }, date: '6d ago', dateTime: '2023-01-23T11:24' },

]
const moods = [
  { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: FaceSmileIcon, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'I feel nothing', value: null, icon: XMarkIcon, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

const events = [
  {
    id: 1,
    time: "8 - 9:00AM",
    title: "Love in the Boulevard",
    location: "Hard Rock",
    region: "Federal Capital Territory",
    image: boluvard,
    attendees: [
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    ],
    status: "Going",
  },
  {
    id: 2,
    time: "8 - 9:00AM",
    title: "Even in the Capital",
    location: "Even In The Day",
    region: "Federal Capital Territory",
    image: love,
    attendees: [
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    ],
    status: "Going",
  },
];



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const EventCard = ({ event }) => {
  return (
    <div className="flex items-start bg-white p-3 rounded-xl shadow-md w-full max-w-xl h-40">
      <img 
        src={event.image} 
        alt={event.title} 
        className=" h-full rounded-lg object-cover" 
      />
      <div className="ml-3 flex-1">
        <p className="text-gray-500 text-xs">{event.time}</p>
        <h3 className="text-sm font-bold">{event.title}</h3>
        <p className="text-gray-600 text-xs">{event.location}</p>
        <p className="text-gray-600 text-xs">{event.region}</p>
        <div className="flex items-center mt-1 -space-x-2 ">
          {event.attendees.map((attendee, index) => (
            <img key={index} src={attendee} alt="attendee" className="w-6 h-6 rounded-full border-2 border-white -ml-1 first:ml-0" />
          ))}
        </div>
      </div>
      <button className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">{event.status}</button>
    </div>
  );
};



export default function Example() {
  const [selected, setSelected] = useState(moods[5])

  return (
    <>
      <ul role="list" className="space-y-6">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id} className="relative flex gap-x-4">
            <div
              className={classNames(
                activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
                'absolute top-0 left-0 flex w-6 justify-center',
              )}
            >
              <div className="w-px bg-gray-200" />
            </div>
            {activityItem.type === 'commented' ? (
              <>
                <img
                  alt=""
                  src={activityItem.person.imageUrl}
                  className="relative mt-3 size-6 flex-none rounded-full bg-gray-50"
                />
                <div className="flex-auto rounded-md p-3 ring-1 ring-gray-200 ring-inset">
                  <div className="flex justify-between gap-x-4">
                    <div className="py-0.5 text-xs/5 text-gray-500">
                      <span className="font-medium text-gray-900">{activityItem.person.name}</span> commented
                    </div>
                    <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs/5 text-gray-500">
                      {activityItem.date}
                    </time>
                  </div>
                  <p className="text-sm/6 text-gray-500">{activityItem.comment}</p>
                </div>
              </>
            ) : (
              <>
                <div className="relative flex size-6 flex-none items-center justify-center">
                  {activityItem.type === 'paid' ? (
                    <CheckCircleIcon aria-hidden="true" className="size-6 text-indigo-600" />
                  ) : (
                    <div className="size-1.5 rounded-full bg-black ring-1 ring-black" />
                  )}
                </div>
                <p className="flex-auto py-0.5 text-md/5 text-black">
                  <span className="font-medium text-gray-900">{activityItem.person.name}</span>
                            <div className="flex flex-col items-center space-y-4 p-6">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
                </p>
                <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs/5 text-gray-500">
                  {activityItem.date}
                </time>
                
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
