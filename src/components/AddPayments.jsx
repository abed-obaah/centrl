import Arrow from "../assets/arrowRight.png";

export default function Example() {
  return (
    <form className="my-10 bg-[#fff] shadow-sm sm:rounded-xl md:col-span-2">
      <div className="px-2 py-6 sm:p-8">
        <h1 className="text-[16px] font-[700]">Subscriptions & payments</h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-3">
            <div className="flex items-center justify-between border-b border-b-[#00000014] py-5">
              <p className="text-sm/6 font-medium text-gray-900 block">
                Reactivate
              </p>
              <img src={Arrow} className="h-3 w-3" />
            </div>
            <div className="flex items-center justify-between border-b border-b-[#00000014] py-5">
              <p className="text-sm/6 font-medium text-gray-900 block">
                What’s new
              </p>
              <img src={Arrow} className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
