import {
  ArrowPathIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import SearchBar from './SearchBar';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure.',
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Reports',
    description:
      'Get detailed reports that will help you make more informed decisions ',
    href: '#',
    icon: DocumentChartBarIcon,
  },
];

const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
  },
];

const Navbar = ({ isClicked }) => {
  return (
    <>
      {/* Mobile nav */}
      <div
        className={`${
          isClicked ? 'translate-x-0' : 'translate-x-[190rem]'
        } fixed left-0 top-0 flex h-screen w-full items-center justify-end transition-transform duration-300 lg:hidden`}
      >
        <div className="divide-y-2 pt-32 pb-10 w-full divide-gray-50 rounded-lg bg-white ring-1 shadow-lg ring-black/5">
          <div className="px-5 pt-5 pb-6">
            <div className="mt-6">
              <nav className="grid gap-6">
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <item.icon aria-hidden="true" className="size-6" />
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      {item.name}
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="px-5 py-6">
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Enterprise
              </a>
              {resources.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
              >
                Sign up
              </a>
              <p className="mt-6 text-center text-base font-medium text-[#000000CC]">
                Existing customer?{' '}
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md-plus:inline-block">
        <div className="">
          <ul className="flex items-center lg:ml-12 lg:mr-auto">
            <SearchBar />
            <a
              href="#"
              className="ml-4 inline-flex items-center justify-center rounded-[13px] border  px-4 py-2  font-500 border-[#000]/15 text-[#000] shadow-xs"
            >
              Sign In
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
