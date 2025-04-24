const SkeletonLoader = ({ type, count = 1 }) => {
  const pulseClass = "animate-pulse bg-gray-200 rounded";

  const renderProfileSkeleton = () => (
    <div className="mb-20 mt-24">
      <div className="container">
        <div className="relative mx-auto max-w-[1100px]">
          {/* Banner skeleton */}
          <div
            className={`${pulseClass} h-32 w-full rounded-xl lg:h-[291px]`}
          ></div>

          <div className="mx-auto max-w-[1000px]">
            <div className="mb-8">
              <div className="-mt-12 flex flex-col px-4 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between sm:px-0">
                {/* Profile image skeleton */}
                <div className="flex items-end space-x-5">
                  <div
                    className={`${pulseClass} h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32`}
                  ></div>
                </div>

                {/* Action buttons skeleton */}
                <div className="mt-4 flex space-x-2 sm:mt-0">
                  <div className={`${pulseClass} h-10 w-28 rounded-lg`}></div>
                  <div className={`${pulseClass} h-10 w-24 rounded-lg`}></div>
                  <div className={`${pulseClass} h-10 w-10 rounded-full`}></div>
                </div>
              </div>

              {/* User info skeleton */}
              <div className="mt-6">
                <div className={`${pulseClass} mb-2 h-8 w-48`}></div>
                <div className={`${pulseClass} h-4 w-36`}></div>
              </div>

              {/* Social and tabs skeleton */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`${pulseClass} size-5`}></div>
                  ))}
                </div>

                <div className="mt-4 flex space-x-6 sm:mt-0">
                  <div className={`${pulseClass} h-6 w-20`}></div>
                  <div className={`${pulseClass} h-6 w-20`}></div>
                </div>
              </div>

              <hr className="mt-16 border-gray-200" />
            </div>

            {/* Content skeleton */}
            <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-6">
              <div>
                {/* Bio skeleton */}
                <div className="mb-6 rounded-lg border border-gray-200 p-4">
                  <div className={`${pulseClass} mb-3 h-5 w-24`}></div>
                  <div className={`${pulseClass} mb-2 h-4 w-full`}></div>
                  <div className={`${pulseClass} mb-2 h-4 w-full`}></div>
                  <div className={`${pulseClass} h-4 w-3/4`}></div>
                </div>

                {/* Calendar skeleton */}
                <div className="rounded-lg border border-gray-200 p-4">
                  <div className={`${pulseClass} mb-4 h-6 w-32`}></div>
                  <div className="grid grid-cols-7 gap-1">
                    {Array(35)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className={`${pulseClass} aspect-square w-full`}
                        ></div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Events skeleton */}
              <div>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="mb-4 rounded-lg border border-gray-200 p-4"
                  >
                    <div className={`${pulseClass} mb-3 h-6 w-48`}></div>
                    <div className={`${pulseClass} mb-2 h-4 w-full`}></div>
                    <div className={`${pulseClass} mb-4 h-4 w-3/4`}></div>
                    <div className="flex justify-between">
                      <div
                        className={`${pulseClass} h-8 w-24 rounded-md`}
                      ></div>
                      <div
                        className={`${pulseClass} h-8 w-24 rounded-md`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCardSkeleton = () => (
    <div
      className={`${pulseClass} h-48 w-full rounded-lg border border-gray-200 p-4`}
    >
      <div className={`${pulseClass} mb-4 h-6 w-1/2`}></div>
      <div className={`${pulseClass} mb-2 h-4 w-full`}></div>
      <div className={`${pulseClass} mb-2 h-4 w-full`}></div>
      <div className={`${pulseClass} mb-4 h-4 w-3/4`}></div>
      <div className="flex justify-between">
        <div className={`${pulseClass} h-8 w-24 rounded-md`}></div>
        <div className={`${pulseClass} h-8 w-24 rounded-md`}></div>
      </div>
    </div>
  );

  const renderListSkeleton = () => (
    <div className="space-y-3">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex items-center space-x-3">
            <div className={`${pulseClass} h-10 w-10 rounded-full`}></div>
            <div className="flex-1">
              <div className={`${pulseClass} mb-2 h-4 w-1/3`}></div>
              <div className={`${pulseClass} h-3 w-1/4`}></div>
            </div>
            <div className={`${pulseClass} h-8 w-20 rounded-md`}></div>
          </div>
        ))}
    </div>
  );

  const renderTextSkeleton = () => (
    <div className="space-y-2">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div key={i} className={`${pulseClass} h-4 w-full`}></div>
        ))}
      <div className={`${pulseClass} h-4 w-2/3`}></div>
    </div>
  );

  switch (type) {
    case "profile":
      return renderProfileSkeleton();
    case "card":
      return renderCardSkeleton();
    case "list":
      return renderListSkeleton();
    case "text":
      return renderTextSkeleton();
    default:
      return null;
  }
};

export default SkeletonLoader;
