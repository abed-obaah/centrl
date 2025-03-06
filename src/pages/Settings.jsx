import { useState } from 'react';
import Arrow from '../assets/arrowRight.png';
import Sub from '../components/SettingsPayments';
import Subs from '../components/AddPayments';
import Payments from '../components/PaymentMethod';
import SocialsSection from '../components/SocialsSection';
import DashboardIcon from '../assets/dashboard-icon.svg';
import UserIcon from '../assets/user-icon.svg';
import MoreIcon from '../assets/more-icon.svg';

export default function Settings() {
  const [activeSection, setActiveSection] = useState('account');

  return (
    <div className="mt-32">
      <div className="max-w-[1290px]  mx-auto 2xl:max-w-[1500px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="md:sticky md:top-32 space-y-6 flex flex-col">
              <button
                className={`flex items-center gap-2 ${
                  activeSection === 'account' ? 'text-blue-500' : ''
                }`}
                onClick={() => setActiveSection('account')}
              >
                <img className="size-5" src={DashboardIcon} alt="dashboard" />
                <span>Account</span>
              </button>
              <button
                className={`flex items-center gap-2 ${
                  activeSection === 'payment' ? 'text-blue-500' : ''
                }`}
                onClick={() => setActiveSection('payment')}
              >
                <img className="size-5" src={UserIcon} alt="user icon" />
                <span>Payment</span>
              </button>
              <button
                className={`flex items-center gap-2 ${
                  activeSection === 'more' ? 'text-blue-500' : ''
                }`}
                onClick={() => setActiveSection('more')}
              >
                <img className="size-5" src={MoreIcon} alt="more icon" />
                <span> More</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-3 max-w-[700px] ">
            {activeSection === 'account' && (
              <form className="">
                <div className="px-2 py-6 sm:p-8 bg-[#fff] mb-10 shadow-sm sm:rounded-xl">
                  <h1 className="font-[700] text-[16px]">
                    General preferences
                  </h1>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-3">
                      {[
                        'Username',
                        'Language',
                        'Sync calendar',
                        'Sound effects',
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center border-b border-b-[#00000014] py-5"
                        >
                          <p className="block text-sm/6 font-medium text-gray-900">
                            {item}
                          </p>
                          <img src={Arrow} className="w-3 h-3" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <Sub />
                <SocialsSection />
              </form>
            )}

            {activeSection === 'payment' && (
              <>
                <Subs />
                <Payments />
              </>
            )}
            {activeSection === 'more' && <SocialsSection />}
          </div>
        </div>
      </div>
    </div>
  );
}
