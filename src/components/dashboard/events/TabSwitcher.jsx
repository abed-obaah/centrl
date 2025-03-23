import { useState, useRef, useEffect } from 'react';

const TabSwitcher = ({ activeTab, setActiveTab }) => {
  //   const [activeTab, setActiveTab] = useState('Upcoming');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef({});

  useEffect(() => {
    const activeElement = tabRefs.current[activeTab];
    if (activeElement) {
      setIndicatorStyle({
        width: `${activeElement.offsetWidth}px`,
        transform: `translateX(${activeElement.offsetLeft}px)`,
      });
    }
  }, [activeTab]);

  return (
    <div className="flex items-center bg-gray-200/60 rounded-2xl relative">
      <div
        className={`absolute h-full bg-black z-0 rounded-tl-2xl rounded-bl-2xl rounded-tr-3xl rounded-br-3xl
                   ${
                     activeTab === 'Past'
                       ? 'rounded-tl-3xl rounded-bl-3xl rounded-tr-xl rounded-br-xl'
                       : ''
                   }`}
        style={{
          ...indicatorStyle,
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* The tab buttons */}
      {['Upcoming', 'Past'].map((tab) => (
        <button
          key={tab}
          ref={(el) => (tabRefs.current[tab] = el)}
          className={`px-4 py-2 relative z-10 text-sm font-medium transition-colors duration-300
                     ${activeTab === tab ? 'text-white' : 'text-gray-700'}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;
