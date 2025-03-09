import Events from '../pages/dashboard/events/UserEventPage';

const DashboardLayout = () => {
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <div>
        {/* <EventHeader setModalVisible={setModalVisible} /> */}
        <Events />
      </div>
    </>
  );
};

export default DashboardLayout;
