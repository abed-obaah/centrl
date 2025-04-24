import optionsImage from "../assets/optionsImage.png";
import { Plus } from "lucide-react";

export default function Invites() {
  return (
    <div className="max-w-[761px] space-y-1 pb-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-300 font-600">Invites</h2>

        <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-500">
          <Plus className="size-5" />
          <span>Invite Guests</span>
        </div>
      </div>

      <div className="overflow-hidden bg-white px-4 py-4 shadow-sm sm:rounded-md sm:px-3">
        <h3 className="mb-1 text-200 font-500">No Invites sent</h3>
        <p className="text-50 text-gray-500">
          You can invite subscribers, contacts and past guests to the event.
        </p>
      </div>
    </div>
  );
}
