import { ExternalLink } from "lucide-react";

export const UserCard = ({ user }) => {
  return (
    <li className="p-4 transition-colors duration-150 hover:bg-gray-50">
      <div className="mb-2">
        <h3 className="font-medium text-gray-900">
          {user.first_name} {user.last_name}
        </h3>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Email:</span>
          <span className="text-right text-gray-700">{user.address}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Phone:</span>
          <span className="text-right text-gray-700">{user.phone_number}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Education:</span>
          <span className="text-right text-gray-700">
            {user.education_background}
          </span>
        </div>
        {user.linkedin_profile && (
          <div className="mt-3 flex justify-end">
            <a
              href={user.linkedin_profile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-600 transition-colors duration-150 hover:bg-blue-100"
            >
              LinkedIn Profile
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        )}
      </div>
    </li>
  );
};
