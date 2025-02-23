import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import EventHeader from '../components/dashboard/EventHeader';
import Events from '../components/dashboard/events/index';
import Modal from '../components/Modal';
import React, { useState } from "react";

const DashboardLayout = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <div>
           {/* <EventHeader setModalVisible={setModalVisible} /> */}
           <Events />
          
         
         </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
