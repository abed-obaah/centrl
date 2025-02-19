import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/header';
import EventHeader from '../components/dashboard/EventHeader';
import Events from '../components/dashboard/events/index';
import Modal from '../components/Modal';
import React, { useState } from "react";

const DashboardLayout = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      {/* <Header /> */}
      <div>
           <EventHeader setModalVisible={setModalVisible} />
           <Events />
           <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
         </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
