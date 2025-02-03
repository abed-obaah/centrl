import Cards from './cards';
import Tables from './tables';


const people = [
    {
      name: 'Platform Recap',
      email: 'Total Events Created',
      role: 'Total Events Created',
      events: 'Active Events',
      tickets: 'Total Tickets Sold',
      users: 'New Users (Per-month)',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Revenue Overview',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]






export default function Dashboard() {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Welcome, Akpor!</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-20">
            {people.map((person) => (
                <div
                key={person.email}
                className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-[#B8B8B81A] px-6 py-5 shadow-xs focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                >
               
                <div className="min-w-0 flex-1">
                    <a href="#" className="focus:outline-hidden">
                    <span aria-hidden="true" className="absolute inset-0" />
                    <p className="text-[15px] font-medium text-gray-900 mb-36">{person.name}</p>
                    <p className="truncate text-[15px] text-gray-500">{person.role}</p>
                    <p className="truncate text-[15px] text-gray-500">{person.events}</p>
                    <p className="truncate text-[15px] text-gray-500">{person.tickets}</p>
                    <p className="truncate text-[15px] text-gray-500">{person.users}</p>
                    </a>
                </div>
                </div>
            ))}
            </div>

            <div className="mt-10">
              <Cards/>
            </div>
            <div className="mt-10">
              <Tables/>
            </div>
           
      </div>
    );
  }
  