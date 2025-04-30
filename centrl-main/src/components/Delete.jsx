const DeleteSection = () => {
  return (
    <div className="mx-auto max-w-lg p-4">
      {/* Phone Number Section */}
      <div className="mt-10">
        <h3 className="text-[16px] font-[700] text-[#000]">Phone Number</h3>
        <p className="text-gray-600 text-[13px]">
          Manage the phone number you use to sign in and receive SMS updates.
        </p>

        <div className="mt-10">
          <h3 className="mt-3 text-[13px] font-[500] text-[#000]">
            Phone Number
          </h3>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value="+234 938984788239"
              className="text-gray-700 w-full rounded-lg border-none bg-[#fff] p-2 focus:outline-none"
              readOnly
            />

            <button className="rounded-lg bg-[#fff] px-4 py-2 text-[14px] font-[700] text-[#000]">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteSection;
