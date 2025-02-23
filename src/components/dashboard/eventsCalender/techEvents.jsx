'use client'

import { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import boluvard from "../../../assets/boluvard.png"
import love from "../../../assets/love.png";
import cardBgImage from "../../../assets/cardBgImage.png";
import cardBgImage2 from "../../../assets/Subtract.png";
import statusIcon from "../../../assets/pen.png";

const activity = [
  { id: 1, type: 'created', person: { name: 'Yesterday Saturday' }, date: '7d ago', dateTime: '2023-01-23T10:32' },
  { id: 2, type: 'edited', person: { name: '28th, Nov.' }, date: '6d ago', dateTime: '2023-01-23T11:03' },
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
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
       "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
       "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    ],
    status: "Going",
  },
  {
    id: 2,
    time: "Competition",
    title: "Even in the Capital",
    location: "Even In The Day & 2 more",
    region: "",
    votes: "500 votes",
    image: love,
    attendees: [
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    ],
    status: "Going",
  },
  {
    id: 3,
    time: "10 - 11:00AM",
    title: "City Lights",
    location: "Downtown",
    region: "Federal Capital Territory",
    image: love,
    attendees: [
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    ],
    status: "Going",
  },
];

const EventCard = ({ event, index, isHighlighted, bgImage, hideStatusIcon }) => {
  return (
    <div
      className={`relative flex items-start bg-white p-3 rounded-xl shadow-md w-full max-w-xl h-36 overflow-hidden`}
    >
      {/* Background Image (Only for highlighted events) */}
      {isHighlighted && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Event Image */}
      <img src={event.image} alt={event.title} className="h-full rounded-lg object-cover z-10" />

      {/* Event Details */}
      <div className="ml-3 flex-1 z-10">
        <p className="text-gray-500 text-xs">{event.time}</p>
        <h3 className="text-sm font-bold">{event.title}</h3>
        <p className="text-[#58585885] text-xs">{event.location}</p>
        <p className="text-[#58585885] text-xs">{event.region}</p>

        <div className="flex items-center mt-1 -space-x-2">
          {event.attendees.map((attendee, idx) => (
            <img
              key={idx}
              src={attendee}
              alt="attendee"
              className="w-6 h-6 rounded-full border-2 border-white -ml-1 first:ml-0"
            />
          ))}
        </div>
        <p className="text-[#58585885] text-xs">{event.votes}</p>
      </div>

      {/* Status Icon (Hidden for specific cards) */}
      {!hideStatusIcon && <img src={statusIcon} alt="status" className="w-5 h-5 z-10" />}
    </div>
  );
};


export default function Example() {
  return (
    <ul role="list" className="space-y-6">
      {activity.map((activityItem) => (
        <li key={activityItem.id} className="relative flex gap-x-4">
          <div className="relative flex size-6 flex-none items-center justify-center">
            <div className="size-1.5 rounded-full bg-[#000] ring-1 ring-[#000]" />
          </div>
          <p className="flex-auto py-0.5 text-md/5 text-[#000]">
            <span className="font-medium text-gray-900">{activityItem.person.name}</span>
            <div className="flex flex-col items-center space-y-4 p-6">
              {events.slice(0, activityItem.person.name === 'Yesterday Saturday' ? 3 : 2).map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                  isHighlighted={
                    (activityItem.person.name === "Yesterday Saturday" && index === 1) ||
                    (activityItem.person.name === "28th, Nov." && index === 0)
                  }
                  bgImage={activityItem.person.name === "28th, Nov." && index === 0 ? cardBgImage2 : cardBgImage}
                  hideStatusIcon={
                    (activityItem.person.name === "Yesterday Saturday" && index === 1) ||
                    (activityItem.person.name === "28th, Nov." && index === 0)
                  }
                />
              ))}
            </div>
          </p>
        </li>
      ))}
    </ul>
  )
}
