import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { faqs } from '../libs/constants';
import { useState } from 'react';

const FAQ = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleFaq = (index) => {
    setIsClicked((prevClicked) => (prevClicked === index ? null : index));
  };

  return (
    <div className="bg-[#fff] rounded-xl mt-10 p-8">
      <div className="">
        <h2 className="text-300 font-500 mb-2">FAQs</h2>
        <p>
          Have questions? Check out our frequently asked question section to
          find answers to common queries.
        </p>

        <dl className="mt-12 divide-y space-y-4 divide-[#000]/10">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="select-none cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="mt-4 text-200 font-600">{item.question}</h3>
                <ChevronDownIcon
                  className={`size-6 transition-transform duration-300 ease-in-out ${
                    isClicked === index ? 'rotate-180' : ''
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isClicked === index
                    ? 'max-h-[1000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="pt-2">{item.answer}</p>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FAQ;
