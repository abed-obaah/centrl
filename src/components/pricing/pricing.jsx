import React from "react";
import Min from '../../assets/11.png'
import Max from '../../assets/13.png'
import Header from '../header';
import Footer from '../footer/footer';
import '../../index.css';
import FAQ from '../FAQ/index'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Radio,
  RadioGroup,
} from '@headlessui/react'
import { Bars3Icon, MinusSmallIcon, PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'


const pricing = {
    frequencies: [
      { value: 'monthly', label: 'Monthly', priceSuffix: 'Free forever' },
    ],
    tiers: [
     
      {
        name: 'Centrl.',
        id: 'tier-freelancer',
        href: '#',
        price: { monthly: '$0', annually: '$299' },
        description: 'The essentials to provide your best work for clients.',
        features: [
            '25 products',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            '24-hour support response time',
            'Marketing automations',
            'Marketing automations',
            'Marketing automations',
            'Marketing automations',
            'Marketing automations',
            'Marketing automations',
            'Marketing automations',
          ],
        mostPopular: false,
      },
      {
        name: 'Premium',
        id: 'tier-startup',
        href: '#',
        price: { monthly: '$25', annually: '$599' },
        description: 'A plan that scales with your rapidly growing business.',
        features: [
          '25 products',
          'Up to 10,000 subscribers',
          'Advanced analytics',
          '24-hour support response time',
          'Marketing automations',
          'Marketing automations',
          'Marketing automations',
          'Marketing automations',
          'Marketing automations',
          'Marketing automations',
          'Marketing automations',
        ],
        mostPopular: false,
      },
     
    ],
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const PricingPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
   

      const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
      const [frequency, setFrequency] = useState(pricing.frequencies[0])

  return (
    <div className="relative min-h-screen">
      {/* Background Images */}
      <div className="absolute top-[10em] left-[25em]">
        <img
          src={Min}
          alt="Diamond"
          className="w-[10em] h-34"
        />
      </div>

      <img
            src={Max}
                alt="Third Image"
                className="absolute left-0 bottom-[25%] w-[20em] h-40 object-contain"
            />

      <div className="absolute bottom-[50%] right-[25em]">
        <img
          src={Min}
          alt="Star"
          className="w-44 h-34"
        />
      </div>
            <Header/>
      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Pricing</h1>
          <p className="text-lg text-gray-600">
            Tested and trusted to lead the event space
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="mx-auto mt-10 grid gap-8 w-[50%] lg:max-w-7xl xl:grid-cols-2 xl:mx-auto">
            {pricing.tiers.map((tier) => (
                <div
                key={tier.id}
                className={classNames(
                    tier.mostPopular ? '' : '',
                    'rounded-md p-8 bg-white shadow-md'
                )}
                >
                <h2
                    id={tier.id}
                    className={classNames(
                    tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                    'text-lg/8 font-semibold'
                    )}
                >
                    {tier.name}
                </h2>
                <p className="mt-6 flex items-center gap-x-1">
                    <span className="text-4xl font-semibold tracking-tight text-gray-900">
                        {tier.price[frequency.value]}
                    </span>
                    <span
                        className={classNames(
                        tier.id === 'tier-freelancer' ? 'text-white bg-black rounded-sm p-1' : 'text-gray-900 bg-[#E7D1FF] p-1', // Example: Green for first card, Blue for second
                        'text-sm font-semibold text-gray-900'
                        )}
                    >
                        {frequency.priceSuffix}
                    </span>
                    </p>


              
                <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600">
                    {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                        {feature}
                    </li>
                    ))}
                </ul>
                <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                    tier.mostPopular
                    ? 'bg-indigo-600 text-white shadow-xs hover:bg-indigo-500'
                    : tier.id === 'tier-freelancer'
                    ? 'bg-black text-white hover:bg-gray-800' // Custom background and text for Freelancer card
                    : tier.id === 'tier-startup'
                    ? 'bg-[linear-gradient(90deg,_#BCD4FF_50%,_#F1EEFF_75%,_#DFCCFF_87.5%,_#DBAFF9_100%)] text-white hover:bg-indigo-400' // Custom background and text for Startup card
                    : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300', // Default styling
                    'mt-6 block w-full rounded-md px-10 py-2 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
                >
                {tier.id === 'tier-startup' ? 'Upgrade to Centrl Premium' : 'Buy plan'}
                </a>

                </div>
            ))}
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-10 grid gap-8 w-[60%] lg:max-w-7xl xl:grid-cols-1 xl:mx-auto">
           <FAQ/>
            
        </div>
        
      </div>
       <Footer />
    </div>
  );
};

export default PricingPage;
