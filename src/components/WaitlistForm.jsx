import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import emailjs from 'emailjs-com';
import SuccessModal from './SuccessModal';



const WaitlistForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const [status, setStatus] = useState('');
  const [isModalVisible, setModalVisible] = useState(true);
  
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

 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.role) {
      alert('Please fill all the fields.');
      return;
    }
  
    const serviceID = 'service_ghtusin';
    const templateID = 'template_x8lxs94';
    const publicKey = 'yJMWzFlvhFQ5sNrRC';
  
    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Email sent successfully!');
        setModalVisible(true);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('Failed to send email. Please try again.');
      });
  
    // Clear form fields
    setFormData({ name: '', email: '', role: '' });
    setRole('');
  };
  
  // Update `role` inside `formData`
  const handleRoleSelect = (selectedRole) => {
    setFormData({ ...formData, role: selectedRole });
    setRole(selectedRole); // Ensure the button text updates
    setIsOpen(false);
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
               name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your name..."
              className="w-full mb-4 px-4 py-3 rounded-xl border border-[#000]/15 focus:border-[#CD2574] focus:ring-1 focus:ring-[#CD2574] outline-none transition"
            />
          </div>

          <div>
            <input
              type="email"
               name="email"
              value={formData.email}
              onChange={handleChange}
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
                    onClick={() => handleRoleSelect(option)}
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
      {isModalVisible && <SuccessModal onClose={() => setModalVisible(false)} />}
    </div>
  );
};

export default WaitlistForm;
