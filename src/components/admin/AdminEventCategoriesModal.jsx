import TechnologyImg from '../../assets/hg.png';
import BusinessImg from '../../assets/fgxg.png';
import ConcertImg from '../../assets/adscd.png';
import EducationImg from '../../assets/home.png';
const AdminEventCategoriesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const categories = [
    {
      id: 1,
      title: 'Technology',
      event: '800 Events',
      image: TechnologyImg,
    },
    {
      id: 2,
      title: 'Business',
      event: '800 Events',

      image: BusinessImg,
    },
    {
      id: 3,
      title: 'Web3',
      event: '800 Events',

      image: ConcertImg,
    },
    {
      id: 4,
      title: 'Education',
      event: '800 Events',

      image: EducationImg,
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
          <h2 className="mb-4 text-200 font-700">Top Event Categories</h2>
          <div className="space-y-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between rounded-lg py-2 px-3 bg-white"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="size-10  object-cover"
                  />
                  <div>
                    <h3 className="text-100 font-600">{category.title}</h3>
                    <p className="text-100 text-foreground">{category.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminEventCategoriesModal;
