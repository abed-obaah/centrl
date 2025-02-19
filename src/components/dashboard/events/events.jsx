'use client';

import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';

const activity = [
  {
    id: 1,
    type: 'created',
    person: { name: 'Yesterday Saturday' },
    date: '7d ago',
    dateTime: '2023-01-23T10:32',
  },
  {
    id: 2,
    type: 'edited',
    person: { name: '28th, Nov.' },
    date: '6d ago',
    dateTime: '2023-01-23T11:03',
  },
  {
    id: 3,
    type: 'sent',
    person: { name: 'Chelsea Hagon' },
    date: '6d ago',
    dateTime: '2023-01-23T11:24',
  },
];
const moods = [
  {
    name: 'Excited',
    value: 'excited',
    icon: FireIcon,
    iconColor: 'text-white',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Loved',
    value: 'loved',
    icon: HeartIcon,
    iconColor: 'text-white',
    bgColor: 'bg-pink-400',
  },
  {
    name: 'Happy',
    value: 'happy',
    icon: FaceSmileIcon,
    iconColor: 'text-white',
    bgColor: 'bg-green-400',
  },
  {
    name: 'Sad',
    value: 'sad',
    icon: FaceFrownIcon,
    iconColor: 'text-white',
    bgColor: 'bg-yellow-400',
  },
  {
    name: 'Thumbsy',
    value: 'thumbsy',
    icon: HandThumbUpIcon,
    iconColor: 'text-white',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'I feel nothing',
    value: null,
    icon: XMarkIcon,
    iconColor: 'text-gray-400',
    bgColor: 'bg-transparent',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selected, setSelected] = useState(moods[5]);

  return (
    <>
      <ul role="list" className="space-y-6">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id} className="relative flex gap-x-4">
            <div
              className={classNames(
                activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
                'absolute top-0 left-0 flex w-6 justify-center'
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
                      <span className="font-medium text-gray-900">
                        {activityItem.person.name}
                      </span>{' '}
                      commented
                    </div>
                    <time
                      dateTime={activityItem.dateTime}
                      className="flex-none py-0.5 text-xs/5 text-gray-500"
                    >
                      {activityItem.date}
                    </time>
                  </div>
                  <p className="text-sm/6 text-gray-500">
                    {activityItem.comment}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="relative flex size-6 flex-none items-center justify-center bg-white">
                  {activityItem.type === 'paid' ? (
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="size-6 text-indigo-600"
                    />
                  ) : (
                    <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                  )}
                </div>
                <p className="flex-auto py-0.5 text-xs/5 text-gray-500">
                  <span className="font-medium text-gray-900">
                    {activityItem.person.name}
                  </span>
                  {/* {activityItem.type} the
                  invoice. */}
                </p>
                <time
                  dateTime={activityItem.dateTime}
                  className="flex-none py-0.5 text-xs/5 text-gray-500"
                >
                  {activityItem.date}
                </time>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
