import Share from '../assets/share-ico.png';
import CategoryCardHeader from '../components/CategoryCardHeader';
import EventCalender from '../components/dashboard/eventsCalender/EventCalender';

// Import all category images
import TechnologyImg from '../assets/technology.png';
import BusinessImg from '../assets/fgxg.png';
import ConcertImg from '../assets/adscd.png';
import EducationImg from '../assets/home.png';
import PartiesImg from '../assets/parties.png';
import { useParams } from 'react-router-dom';

const categoryData = {
  1: {
    name: 'Technology',
    image: TechnologyImg,
    bgColor: 'bg-[#380C67]',
    stats: '26K likes • 165K followers',
    countdown: '20 : 12 : 03 : 15',
  },
  2: {
    name: 'Business',
    image: BusinessImg,
    bgColor: 'bg-[#0C6738]',
    stats: '18K likes • 120K followers',
    countdown: '15 : 10 : 08 : 30',
  },
  3: {
    name: 'Concerts',
    image: ConcertImg,
    bgColor: 'bg-[#67380C]',
    stats: '42K likes • 210K followers',
    countdown: '12 : 06 : 02 : 45',
  },
  4: {
    name: 'Concerts',
    image: ConcertImg,
    bgColor: 'bg-[#67380C]',
    stats: '42K likes • 210K followers',
    countdown: '12 : 06 : 02 : 45',
  },
  5: {
    name: 'Education',
    image: EducationImg,
    bgColor: 'bg-[#0C3867]',
    stats: '15K likes • 90K followers',
    countdown: '30 : 20 : 10 : 05',
  },

  6: {
    name: 'Parties',
    image: PartiesImg,
    bgColor: 'bg-[#0C6724]',
    stats: '26K likes • 165K followers',
    countdown: '30 : 20 : 10 : 05',
  },

  7: {
    name: 'Education',
    image: EducationImg,
    bgColor: 'bg-[#0C3867]',
    stats: '15K likes • 90K followers',
    countdown: '30 : 20 : 10 : 05',
  },

  8: {
    name: 'Education',
    image: EducationImg,
    bgColor: 'bg-[#0C3867]',
    stats: '15K likes • 90K followers',
    countdown: '30 : 20 : 10 : 05',
  },
};
const CategoryDetails = () => {
  const { id } = useParams();

  const currentCategory = categoryData[id] || categoryData['1'];

  return (
    <>
      <div className="mt-32 ">
        <div className="container max-w-[1000px] mx-auto">
          <CategoryCardHeader
            image={currentCategory.image}
            title={currentCategory.name}
            button="Subscribe"
            bgColor={currentCategory.bgColor}
            imageShare={Share}
            stats={currentCategory.stats}
            countdown={currentCategory.countdown}
          />

          <EventCalender />
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
