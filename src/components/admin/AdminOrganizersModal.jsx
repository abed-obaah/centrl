import Future from '../../assets/Future100.png';
import Rave from '../../assets/rave.png';
import Even from '../../assets/Even.png';
import Brainiac from '../../assets/brainiac.png';
import SuperFoods from '../../assets/superfoods.png';
import Statutory from '../../assets/statutory.png';
import Ladibug from '../../assets/ladibug.png';
import { ExternalLink } from 'lucide-react';

const AdminOrganizersModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const organizers = [
    {
      id: 1,
      title: 'Future100',
      image: Future,
    },
    {
      id: 2,
      title: 'Rave',
      image: Rave,
    },
    {
      id: 3,
      title: 'Even in the Day',
      image: Even,
    },
    {
      id: 4,
      title: 'Brainiac',
      image: Brainiac,
    },
    {
      id: 5,
      title: 'Awi superFoods',
      image: SuperFoods,
    },
    {
      id: 6,
      title: 'Statutory',
      image: Statutory,
    },
    {
      id: 7,
      title: 'Ladibug',
      image: Ladibug,
    },
  ];

  return (
    <>
      <div className="fixed z-[600]  inset-0  flex items-center justify-center p-4">
        <div
          className="fixed inset-0 backdrop-blur-md bg-gradient-to-r from-white/50 via-neutral-100/50 to-white/50"
          onClick={onClose}
        />
        <div className="relative w-full max-w-lg rounded-xl bg-background p-6 shadow-lg">
          <h2 className="mb-4 text-200 font-700">Top-performing Organizers</h2>
          <div className="space-y-4">
            {organizers.map((organizer) => (
              <div
                key={organizer.id}
                className="flex items-center justify-between rounded-lg py-2 px-3 bg-white"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={organizer.image}
                    alt={organizer.title}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <h3 className="text-100 font-600">{organizer.title}</h3>
                </div>

                <div className="text-right">
                  <ExternalLink size="20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrganizersModal;
