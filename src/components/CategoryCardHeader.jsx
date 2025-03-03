const CategoryCardHeader = ({
  image,
  title,
  stats,
  countdown,
  button,
  imageShare,
  bgColor = 'bg-[#380C67]',
}) => {
  return (
    <div className="flex gap-4 px-4 sm:px-6 lg:px-8 items-center border-b border-b-[#00000014] pb-10">
      {/* Image with White Background and Rounded Full */}
      <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center">
        <img src={image} alt={title} className="w-24 h-24  object-cover" />
      </div>

      <div>
        <h1 className="text-[27px] font-500">{title}</h1>
        <h2 className="text-black text-50">{stats}</h2>
        <div className="flex items-center space-x-4">
          <button
            className={`${bgColor} text-white rounded-full px-4 py-2 text mt-2`}
          >
            {button}
          </button>

          <div className="bg-white rounded-2xl p-2">
            <img
              src={imageShare}
              alt={title}
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCardHeader;
