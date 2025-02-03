'use client';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Text from '../../assets/Text.png';
import Dashboard from './Dashboard';
import EventManagement from './EventManagement';
import UserManagement from './UserManagement';
import Payments from './Payments';
import CustomerSupport from './CustomerSupport';

const navigation = [
  { name: 'Dashboard', component: <Dashboard />, icon: HomeIcon },
  { name: 'Event Management', component: <EventManagement />, icon: UsersIcon },
  { name: 'User Management', component: <UserManagement />, icon: FolderIcon },
  { name: 'Payments', component: <Payments />, icon: DocumentDuplicateIcon },
  { name: 'Customer Support', component: <CustomerSupport />, icon: Cog6ToothIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CategoryPage() {
  const { category } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(navigation[0].name);
  const selectedComponent = navigation.find((item) => item.name === selectedPage)?.component || <Dashboard />;

  return (
    <div>
      <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-gray-900/80 transition-opacity" />
        <div className="fixed inset-0 flex">
          <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1 bg-white px-6 pb-4">
            <button onClick={() => setSidebarOpen(false)} className="absolute top-5 left-full p-2">
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
            <nav className="mt-10">
              {navigation.map((item) => (
                <button key={item.name} onClick={() => setSelectedPage(item.name)}
                  className={classNames(selectedPage === item.name ? 'bg-gray-200' : '', 'block p-2 rounded-md')}>
                  <item.icon className="h-6 w-6 inline-block mr-2" />
                  {item.name}
                </button>
              ))}
            </nav>
          </DialogPanel>
        </div>
      </Dialog>

      <div className="lg:flex lg:h-screen">
        <div className="hidden lg:block lg:w-72 bg-white border-r px-6 py-4">
          <img src={Text} alt="Logo" className="h-8 w-auto" />
          <nav className="mt-10">
            {navigation.map((item) => (
              <button key={item.name} onClick={() => setSelectedPage(item.name)}
                className={classNames(selectedPage === item.name ? 'bg-gray-200' : '', 'block p-2 rounded-md')}>
                <item.icon className="h-6 w-6 inline-block mr-2" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Welcome to {category} Events</h1>
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
          <p className="text-gray-600 mb-6">Here are the latest events related to {category}.</p>
          {/* {selectedComponent} */}
        </div>
      </div>
    </div>
  );
}
