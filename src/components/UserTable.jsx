import { ExternalLink } from "lucide-react";

export const UserTable = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6">
              Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6">
              Email
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6">
              Phone
            </th>
            <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6 lg:table-cell">
              Education
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6">
              LinkedIn
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {users.map((user) => (
            <tr
              key={user.id}
              className="transition-colors duration-150 hover:bg-gray-50"
            >
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 md:px-6">
                {user.first_name} {user.last_name}
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 md:px-6">
                {user.address}
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-gray-700 md:px-6">
                {user.phone_number}
              </td>
              <td className="hidden whitespace-nowrap px-4 py-4 text-gray-700 md:px-6 lg:table-cell">
                {user.education_background}
              </td>
              <td className="whitespace-nowrap px-4 py-4 md:px-6">
                {user.linkedin_profile ? (
                  <a
                    href={user.linkedin_profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 transition-colors duration-150 hover:text-blue-800"
                  >
                    Profile
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
