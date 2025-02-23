






const DeleteSection = () => {
    return (
      <div className="max-w-lg mx-auto p-4  ">
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
                            className="w-full p-2 border-none rounded-lg bg-[#fff] text-gray-700 focus:outline-none"
                            readOnly
                            />
            
                        <button className="bg-[#fff] text-[#000] px-4 py-2 rounded-lg text-[14px] font-[700]">Update</button>
                        </div>
            </div>
         
        </div>
      </div>
    );
  };
  
  export default DeleteSection;
  