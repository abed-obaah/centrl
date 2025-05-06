import { Link } from "react-router-dom";
import { getRegisteredUsers } from "../api/freeRegApi";
import logo from "../assets/logo.png";
import { Spinner } from "../components/Spinner";
import { useFetch } from "../hooks/useFetch";
import { UserTable } from "../components/UserTable";
import { UserCard } from "../components/UserCard";

const RegisteredUsers = () => {
  const {
    data: users,
    isLoading: isLoading,
    isError: error,
  } = useFetch({
    queryKey: ["registered-users"],
    fetcher: getRegisteredUsers,
    dataPath: null,
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/">
            <img alt="Centrl" src={logo} className="size-7" loading="lazy" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Registered Users</h1>
          <div className="w-7"></div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Spinner text="Loading users..." />
          </div>
        ) : error ? (
          <div className="rounded-md bg-red-50 p-4">
            <p className="text-red-600">Error: {error}</p>
          </div>
        ) : users.length === 0 ? (
          <div className="rounded-md bg-blue-50 p-4 text-center">
            <p className="text-blue-600">No users have registered yet.</p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            {/* Desktop and tablet view - Table */}
            <div className="hidden md:block">
              <UserTable users={users.records} />
            </div>

            {/* Mobile view - Cards */}
            <div className="md:hidden">
              <ul className="divide-y divide-gray-200">
                {users.records.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisteredUsers;
