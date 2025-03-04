import TechnologyImg from '../assets/hg.png';
import BusinessImg from '../assets/fgxg.png';
import ConcertImg from '../assets/adscd.png';
import EducationImg from '../assets/home.png';
import PartiesImg from '../assets/parties.png';
import OthersImg from '../assets/sfsfs.png';
import { Link } from 'react-router-dom';

const cards = [
  {
    id: 1,
    name: 'Technology',
    description: '800 Events',
    imgUrl: TechnologyImg,
    path: '/category/1',
  },
  {
    id: 2,
    name: 'Business',
    description: '800 Events',
    imgUrl: BusinessImg,
    path: '/category/2',
  },
  {
    id: 3,
    name: 'Concerts',
    description: '800 Events',
    imgUrl: ConcertImg,
    path: '/category/3',
  },
  {
    id: 4,
    name: 'Concerts',
    description: '800 Events',
    imgUrl: ConcertImg,
    path: '/category/4',
  },
  {
    id: 5,
    name: 'Education',
    description: '800 Events',
    imgUrl: EducationImg,
    path: '/category/5',
  },
  {
    id: 6,
    name: 'Parties',
    description: '800 Events',
    imgUrl: PartiesImg,
    path: '/category/6',
  },
  {
    id: 7,
    name: 'Others',
    description: '800 Events',
    imgUrl: OthersImg,
    path: '/category/7',
  },
  {
    id: 8,
    name: 'Concerts',
    description: '800 Events',
    imgUrl: ConcertImg,
    path: '/category/8',
  },
];

const Category = () => {
  return (
    <section className="mt-20">
      <h2 className="text-200 text-[#000]  font-600 mb-6">
        Browse by Category
      </h2>

      <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            to={card.path}
            key={card.id}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block w-full mb-4 md:mb-0"
          >
            <div key={card.id} className="bg-white rounded-2xl  p-6 ">
              <img
                className="size-10 object-cover mb-8"
                src={card.imgUrl}
                alt={card.name}
              />

              <div>
                <h3 className="text-200 font-600">{card.name}</h3>
                <p className=" text-[#B0B0B0]">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;
