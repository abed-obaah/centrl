import Share from '../assets/share-ico.png';
import react2 from '../assets/react-2.png';
import CategoryCardHeader from '../components/CategoryCardHeader';
import EventCalender from '../components/dashboard/eventsCalender/EventCalender';

const CategoryDetails = () => {
  return (
    <>
      <div className="mt-32 ">
        <div className="container max-w-[1200px] mx-auto">
          <CategoryCardHeader
            image={react2}
            title="Technology"
            button="Subscribe"
            bgColor="bg-[#380C67]"
            imageShare={Share}
            stats="26K likes • 165K followers"
            countdown="20 : 12 : 03 : 15"
          />

          <EventCalender />
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
