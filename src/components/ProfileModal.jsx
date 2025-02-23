import { Link } from "react-router-dom";

const ProfileModal = ({ isOpen, onClose, user }) => {
    if (!isOpen) return null; // Do not render if closed
  
    return (
      <div className="absolute right-10 mt-0 w-56 bg-white shadow-lg rounded-lg p-2 z-50">

        <div className="flex space-x-4 border-b border-b-[#000]/15 pb-2">
                    <img src= {user.imageUrl} alt= {user.name} className="w-10 h-10 rounded-full" />
                    <div>
                         <p className="text-[15px] font-semibold">{user.name}</p>
                         <p className="text-[10px] font-semibold text-[#646060]">{user.email}</p>
                    </div>
                    
        </div>
          
        <Link to={'/[id]'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <p className="text-[#000] text-sm mt-1 font-[500]">View Profile</p>
        </Link>
        
        <p className="text-[#000] text-sm mt-1 font-[500]">Payments</p>
        <Link to={'/settings'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <p className="text-[#000] text-sm mt-1 font-[500]">Settings</p>
        </Link>
       
        <p className="text-[#000] text-sm mt-1 cursor-pointer font-[500]">Logout</p>
      </div>
    );
  };
  
  export default ProfileModal;
  