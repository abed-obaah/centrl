const FilterSidebar = ({ isOpen, onClose, filter, onFilterChange }) => {
  const handleRadioChange = (e, type) => {
    const value = e.target.value;
    onFilterChange({ [type]: value });
  };

  return (
    <div
      className={`
      fixed inset-y-0 py-16 lg:py-4 left-0 z-40 w-72 bg-[#fff] rounded-xl transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:transform-none lg:w-64 lg:sticky lg:top-0 lg:h-fit
    `}
    >
      <div className="p-4 border-b lg:border-none">
        <div className="flex items-center justify-between lg:justify-start">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button onClick={onClose} className="p-2 -mr-2 lg:hidden">
            ✕
          </button>
        </div>
      </div>

      <hr className="border-[#000]/15" />

      <div className="p-4 space-y-6">
        <div>
          <h4 className="text-md font-medium mb-2">Price</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="price" 
                value="Paid" 
                className="mr-2" 
                checked={filter.price === "Paid"} 
                onChange={(e) => handleRadioChange(e, 'price')} 
              /> Paid
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="price" 
                value="Free" 
                className="mr-2" 
                checked={filter.price === "Free"} 
                onChange={(e) => handleRadioChange(e, 'price')} 
              /> Free
            </label>
          </div>
        </div>

        <div>
          <h4 className="text-md font-medium mb-2">Category</h4>
          <div className="space-y-2">
            {['Party', 'Business', 'Tech', 'Education', 'Others'].map((category) => (
              <label key={category} className="flex items-center">
                <input 
                  type="radio" 
                  name="category" 
                  value={category} 
                  className="mr-2" 
                  checked={filter.category === category} 
                  onChange={(e) => handleRadioChange(e, 'category')} 
                /> 
                {category}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-md font-medium mb-2">Location</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="location" 
                value="Online" 
                className="mr-2" 
                checked={filter.location === "Online"} 
                onChange={(e) => handleRadioChange(e, 'location')} 
              /> Online
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="location" 
                value="Offline" 
                className="mr-2" 
                checked={filter.location === "Offline"} 
                onChange={(e) => handleRadioChange(e, 'location')} 
              /> Offline
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
