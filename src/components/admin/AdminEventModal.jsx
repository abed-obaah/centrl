import Boulevard from '../../assets/boluvard.png';
import Evengate from '../../assets/evengate.png';
import Live from '../../assets/live.png';
import Carnival from '../../assets/carnival.png';
import Rave from '../../assets/ravebeach.png';

const AdminEventModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const events = [
    {
      id: 1,
      title: 'Love in the Boulevard',
      genre: 'Hard Rock',
      location: 'Federal Capital Territory',
      attendees: '2.5 M',
      image: Boulevard,
    },
    {
      id: 2,
      title: 'Love in the Boulevard',
      genre: 'Hard Rock',
      location: 'Federal Capital Territory',
      attendees: '1 K',
      image: Evengate,
    },
    {
      id: 3,
      title: 'Love in the Boulevard',
      genre: 'Hard Rock',
      location: 'Federal Capital Territory',
      attendees: '800',
      image: Live,
    },
    {
      id: 4,
      title: 'Love in the Boulevard',
      genre: 'Hard Rock',
      location: 'Federal Capital Territory',
      attendees: '2.5 M',
      image: Carnival,
    },
    {
      id: 5,
      title: 'Love in the Boulevard',
      genre: 'Hard Rock',
      location: 'Federal Capital Territory',
      attendees: '2.5 M',
      image: Rave,
    },
  ];

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-lg"
          onClick={onClose}
        />
        <div className="relative w-full max-w-lg rounded-xl bg-background p-6 shadow-lg">
          <h2 className="mb-4 text-200 font-700">Most Popular Event</h2>
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex items-center gap-4 rounded-lg py-2 px-3 bg-white"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-100 font-600 truncate">{event.title}</h3>
                  <p className="text-50 font-500 text-foreground">
                    {event.genre}
                  </p>
                  <p className="text-50 text-foreground">{event.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-50 bg-background p-2 rounded-lg border border-[#000]/15 font-500">
                    {event.attendees} attendees
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminEventModal;
