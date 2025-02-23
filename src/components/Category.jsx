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
    path:'/category[id]'
  },
  {
    id: 2,
    name: 'Business',
    description: '800 Events',
    imgUrl: BusinessImg,
    path:'/category[id]'
  },
  {
    id: 3,
    name: 'Concerts',
    description: '800 Events',
    imgUrl: ConcertImg,
    path:'/category[id]'
  },
  {
    id: 4,
    name: 'Concerts',
    description: '800 Events',
    imgUrl: ConcertImg,
    path:'/category[id]'
  },
  {
    id: 5,
    name: 'Education',
    description: '800 Events',
    imgUrl: EducationImg,
    path:'/category[id]'
  },
  {
    id: 6,
    name: 'Parties',
    description: '800 Events',
    imgUrl: PartiesImg,
    path:'/parties[id]'
  },
  {
    id: 7,
    name: 'Others',
    description: '800 Events',
    imgUrl: OthersImg,
    path:'/parties[id]'
  },
  {
    id: 8,
    name: 'Concerts',
    description: '800 Events',
    imgUrl: ConcertImg,
    path:'/parties[id]'
  },
];

const Category = () => {
  return (
    <section className="mt-20">
      <h2 className="text-200 text-[#000]  font-600 mb-6">
        Browse by Category
      </h2>

      <div className="md:grid md:grid-cols-2 space-y-8 md:space-y-0 md:gap-4 lg:grid-cols-4">
        {cards.map((card) => (
           <Link to={card.path} key={card.id}
           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div key={card.id} className="bg-[#fff] rounded-2xl  p-6 ">
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
