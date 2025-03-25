export const Spinner = ({ text }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <p className="px-2 text-100 font-600">{text}</p>
        <div className="size-[20px] animate-spin rounded-full border-4 border-t-4 border-white border-t-black"></div>
      </div>
    </>
  );
};
