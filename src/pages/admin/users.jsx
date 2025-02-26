import { Search, Download } from 'lucide-react';

const Users = () => {
  const users = [
    {
      id: 1,
      name: 'Copper Franci',
      username: 'Username',
      email: 'samuelsabelo@gmail.com',
      status: 'Active',
      avatarColor: 'from-[#8be8fd] via-[#d8a4ff] to-[#ff98d3]',
    },
    ...Array(15)
      .fill(null)
      .map((_, index) => ({
        id: index + 2,
        name: 'Copper Franci',
        username: 'Username',
        email: 'samuelsabelo@gmail.com',
        status: 'Active',
        avatarColor: 'from-[#8be8fd] via-[#d8a4ff] to-[#ff98d3]',
      })),
  ];

  return (
    <div className="ml-20 max-w-[1000px]">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-300 font-600">Users</h1>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 sm:min-w-[300px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground" />
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-lg border border-muted bg-card py-2 pl-10 pr-4 text-100 placeholder:text-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <button className="flex items-center gap-2 rounded-lg border border-muted bg-card px-4 py-2 text-100 font-500 hover:bg-background">
            <Download className="h-4 w-4" />
            Download
          </button>
        </div>
      </div>

      <div className="rounded-xl bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-10 w-10 rounded-full bg-gradient-to-r ${user.avatarColor}`}
                      />
                      <span className="text-100 font-600">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-100 font-500 text-foreground">
                    {user.username}
                  </td>
                  <td className="px-6 py-4 text-100 font-500 underline text-foreground">
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full  text-50 font-500">
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
