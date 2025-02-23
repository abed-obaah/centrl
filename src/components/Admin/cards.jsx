import { useNavigate } from 'react-router-dom';






const people = [
    {
      name: 'Technology',
      email: 'leslie.alexander@example.com',
      role: '800 Events',
   
    },
    {
      name: 'Parties',
      email: 'leslie.alexander@example.com',
      role: '800 Events',
   
    },
    {
      name: 'Business',
      email: 'leslie.alexander@example.com',
      role: '800 Events',
   
    },
    {
      name: 'Crypto',
      email: 'leslie.alexander@example.com',
      role: '800 Events',
   
    },
    {
      name: 'Concert',
      email: 'leslie.alexander@example.com',
      role: '800 Events',
   
    },
    {
      name: 'Education',
      email: 'leslie.alexander@example.com',
      role: '800 Events',
   
    },
    {
      name: 'Others',
      email: 'leslie.alexander@example.com',
      role: '800 Events',
   
    },
    // More people...
  ]
  
  export default function Example() {
    const navigate = useNavigate();
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        {people.map((person) => (
          <div
            key={person.email}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 px-6 py-5 shadow-xs focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            onClick={() => navigate(`/category/${person.name.toLowerCase()}`)}
          >
            <div className="min-w-0 flex-1 mt-10">
              <a href="#" className="focus:outline-hidden">
                <span aria-hidden="true" className="absolute inset-0" />
                <p className="text-sm font-medium text-gray-900">{person.name}</p>
                <p className="truncate text-sm text-gray-500">{person.role}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    )
  }
  