import facebook from '../assets/facebook.png'
import x from '../assets/X.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'






const SocialsSection = () => {
    return (
      <div className=" mx-auto p-4  ">
        {/* Title */}
        <h2 className="text-[#000] font-[700] text-[16px]">Socials</h2>
  
        {/* Socials List */}
        <div className=" space-y-0 ">
          {[
            { name: "Andy Mineo", icon: facebook },
            { name: "Andy Mineo", icon: x },
            { name: "Andy Mineo", icon: instagram },
           
          ].map((social, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-100 p-0 rounded-lg space-x-8">
              {/* Left side */}
              <div className="flex items-center space-x-8">
                <img src={social.icon} alt={social.icon} className="w-5 h-5" />
                <span className="text-gray-800  border-2 border-[#bcbbbb] px-2 py-2 w-72 rounded-lg">{social.name}</span>
              </div>
              {/* Right side */}
              <div className=" p-2 rounded-lg ">
              <div className="flex items-center space-x-3">
                <img src={social.icon} alt={social.icon} className="w-5 h-5" />
                <span className="text-gray-800 border-2 border-[#bcbbbb] px-2 py-2 w-72 rounded-lg">{social.name}</span>
              </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Phone Number Section */}
        <div className="mt-10">
          <h3 className="text-[#000] font-[700] text-[16px]">Phone Number</h3>
          <p className="text-gray-600 text-[13px]">Manage the phone number you use to sign in and receive SMS updates.</p>
  
            <div className='mt-10'>
            <h3 className="text-[#000] font-[500] text-[13px] mt-3 ">Phone Number</h3>
            <div className="flex items-center space-x-2">
                        
                        <input
                            type="text"
                            value="+234 938984788239"
                            className="w-64 p-2 border-none rounded-lg bg-[#fff] text-gray-700 focus:outline-none"
                            readOnly
                            />
            
                        <button className="bg-[#fff] text-[#000] px-4 py-2 rounded-lg text-[14px] font-[700]">Update</button>
                        </div>
            </div>
         
        </div>
        <div className="mt-10">
          <h3 className="text-[#000] font-[700] text-[16px]">Delete Account</h3>
          <p className="text-gray-600 text-[13px] my-2">Cancel and permanently delete this event. This operation cannot be undone. If there are any registered guests, we will notify them that the event has been canceled.</p>
          <div className="mt-5 space-x-0">
            <button className="bg-[#FF080C] text-[#fff] px-8 py-2 rounded-full text-[14px] font-[700]">Delete</button>
        </div>
         
        </div>
      </div>
    );
  };
  
  export default SocialsSection;
  