import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const WaitlistForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const roles = [
    'Event Organizer',
    'Event Lover',
    'Influencer',
    'Startup founder',
    'Brand/Company Representative',
    'Investor/Sponsor',
    'Media/Press',
    'Government/Policy Maker',
    'Student/Scholar',
    'Other',
  ];

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({ name, email, role });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !role) {
      alert('Please fill all the fields.');
      return;
    }

    const formUrl =
      'https://docs.google.com/forms/d/e/1FAIpQLSdLwoucKmrymmplkaIvKuQPg004H_IRVQwQoAShKa7GkFTWMQ/formResponse';
    const params = new URLSearchParams();
    params.append('entry.1498135098', name);
    params.append('entry.2606285', email);
    params.append('entry.1424661284', role);

    window.open(`${formUrl}?${params.toString()}`, '_blank');
  };

  return (
    <div>
      <div className="bg-[#fff] max-w-[600px] lg:max-w-[450px] mx-auto  p-8 rounded-2xl lg:h-full lg:pt-20 lg:rounded-none lg:bg-[transparent]">
        <div className="text-center">
          <h1 className="text-600 font-700 mb-8 leading-[1.1]">
            Join our journey and get early access
          </h1>
          <p className="text-black mb-16">
            Be part of the{' '}
            <span className="text-[#D43953] font-600">5000+</span> event lovers
            and organizers that join our exclusive waitlist to get early
            notification about our official launch.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="text-center">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your name..."
              className="w-full mb-4 px-4 py-3 rounded-xl border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none transition"
            />
          </div>

          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mail@gmail.com"
              className="w-full px-4 mb-4 py-3 rounded-xl border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none transition"
            />
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-4 py-3 rounded-xl border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none transition text-left flex items-center justify-between"
            >
              <span className={role ? 'text-gray-900' : 'text-gray-400'}>
                {role || 'Select your role'}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute overflow-y-auto h-[200px] pb-4 top-full left-0 right-0 mt-1 bg-[#fff] border border-[#CD2574] rounded-xl shadow-xl z-10">
                {roles.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setRole(option);
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-pink-50 transition first:rounded-t-xl last:rounded-b-xl"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="rounded-full mt-10 font-500  bg-gradient-to-r from-[#CD2574] to-[#E46708] px-12 py-3 font-medium text-[white] shadow-sm hover:from-[#E46708] hover:to-[#CD2574] focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
          >
            Submit
          </button>
        </form>

        <p className="text-center mt-10">
          By clicking "done" you agree to our{' '}
          <a href="#" className="text-[#DD5328] hover:underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="text-[#DD5328] hover:underline">
            Terms of Use
          </a>
        </p>
      </div>
    </div>
  );
};

export default WaitlistForm;
