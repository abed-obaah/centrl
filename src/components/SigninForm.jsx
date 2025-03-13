import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import emailjs from 'emailjs-com';
import SuccessModal from './SuccessModal';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
  });
  const navigate = useNavigate();

  const [status, setStatus] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
      alert('Please fill all the fields.');
      return;
    }

    const serviceID = 'service_ghtusin';
    const templateID = 'template_x8lxs94';
    const publicKey = 'yJMWzFlvhFQ5sNrRC';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        setModalVisible(true);
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Email sent successfully!');
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('Failed to send email. Please try again.');
      });

    // Clear form fields
    setFormData({ email: '' });
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
      <div className="bg-white w-[400px] rounded-xl border border-[#000]/15 px-6 py-4">
        <div>
          <div className="mb-8">
            <p className="text-foreground font-700 text-200 mb-1">Welcome to</p>
            <h1 className="text-black font-700 text-700 mb-1">CENTRL</h1>
            <p className="text-foreground font-600">Sign in or sign up below</p>
          </div>

          <hr className="text-[#000]/15 mb-6" />

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block  font-600  text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#000]/15  outline-none transition text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-200 mt-8 rounded-lg bg-gradient-to-r from-[#CD2574] to-[#E46708] hover:from-[#E46708] hover:to-[#CD2574] px-6 py-2.5  font-700 text-white  transition-all duration-300 ease-in-out"
            >
              Continue with Email
            </button>
            <div className="text-center my-2">
              <p className="text-black font-200 text-200">or</p>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center rounded-lg bg-white text-[#5c6c75] font-600 border-[1.8px] border-[#000]/15 px-6 py-2.5 font-bold transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-x-2">
                <FcGoogle className="size-7" />
                <span>Continue with Gmail</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
