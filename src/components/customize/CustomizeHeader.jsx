import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getEvent } from "../../api/eventApi";
import { useFetch } from "../../hooks/useFetch";

const CustomizeHeader = ({ eventId }) => {
  const { data: eventData, isLoading } = useFetch({
    queryKey: ["event", eventId],
    fetcher: () => getEvent(eventId),
    dataPath: "data",
  });

  // Skeleton loading state for the header
  if (isLoading || !eventData) {
    return (
      <div className="via-neutral-100/50 supports-[backdrop-filter]:bg-white/3 fixed left-0 top-0 z-[500] w-full bg-gradient-to-r from-white/50 to-white/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1290px] items-center gap-[15rem] px-4 py-5 2xl:max-w-[1500px]">
          <Link
            to="/events"
            className="flex items-center gap-2 text-100 text-black"
          >
            <ArrowLeft className="h-6 w-6" />
            Back
          </Link>
          <div className="mx-left flex max-w-[1000px] gap-3">
            <div className="h-12 w-12 animate-pulse rounded-lg bg-gray-200"></div>
            <div>
              <div className="h-5 w-32 animate-pulse rounded bg-gray-200"></div>
              <div className="mt-2 h-4 w-24 animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const bannerImage = eventData?.banner_image;
  const eventTitle = eventData?.event_title;
  const eventLocation = eventData?.location;

  return (
    <div className="via-neutral-100/50 supports-[backdrop-filter]:bg-white/3 fixed left-0 top-0 z-[500] w-full bg-gradient-to-r from-white/50 to-white/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1290px] items-center gap-[15rem] px-4 py-5 2xl:max-w-[1500px]">
        <Link
          to="/events"
          className="flex items-center gap-2 text-100 text-black"
        >
          <ArrowLeft className="h-6 w-6" />
          Back
        </Link>
        <div className="mx-left flex max-w-[1000px] gap-3">
          <img
            src={bannerImage}
            alt={eventTitle}
            className="h-12 w-12 rounded-lg object-cover"
          />
          <div>
            <h1 className="text-100 font-500">{eventTitle}</h1>
            <p className="text-100 font-500 text-foreground">{eventLocation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeHeader;
