import { Clock, Star } from "lucide-react";
import Avatar from "../../assets/avatars.png";
import Image from "../../components/Image";

const Messages = () => {
  return (
    <div className="md:ml-[3.5rem] md:max-w-[1000px]">
      <div className="mb-6 mr-auto max-w-[744px] flex-col gap-4">
        <h1 className="mb-6 text-300 font-600">Messages</h1>

        <div className="flex items-center rounded-lg bg-white p-2 px-6">
          <Image
            width={200}
            className='border-gray-200" h-8 w-8 flex-shrink-0 overflow-hidden rounded-full border'
            src={Avatar}
            alt={"Profile"}
          />
          <input
            type="text"
            className="w-full bg-none px-3 py-2 text-gray-600 outline-none transition-all placeholder:font-500"
            placeholder="Send vital information to your guests"
          />
        </div>

        <h3 className="mb-6 mt-8 text-200 font-600">Sent</h3>

        <div className="rounded-lg bg-white p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                width={200}
                className='border-gray-200" h-8 w-8 flex-shrink-0 overflow-hidden rounded-full border'
                src={Avatar}
                alt={"Profile"}
              />
              <h3 className="font-600 text-gray-900">Andy Mineo</h3>
            </div>
            <span className="text-sm font-500 text-gray-500">
              Aug 18, 1:55 PM
            </span>
          </div>
          <p className="mb-4 ml-12 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.....
          </p>
          <p className="ml-12 font-600 text-gray-500">Sent</p>
        </div>

        <hr className="mt-10" />

        <div className="mt-8">
          <h2 className="mb-2 text-xl font-semibold">System Messages</h2>

          <div className="mb-1 overflow-hidden rounded-lg bg-white shadow-sm">
            <div className="flex items-center space-x-4 p-4">
              <Clock className="text-gray-900" size={20} />
              <div>
                <h3 className="font-600 text-gray-900">Event Reminders</h3>
                <p className="text-sm text-gray-600">
                  Reminders are sent automatically via email, SMS, and push
                  notification.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow-sm">
            <div className="flex items-center space-x-4 p-4">
              <Star className="text-gray-900" size={20} />
              <div>
                <h3 className="font-600 text-gray-900">Post-Event Feedback</h3>
                <p className="text-sm text-gray-600">
                  Schedule a feedback email to go out after the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
