import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import EventHeader from '../components/dashboard/EventHeader';
import Modal from '../components/Modal';
import React, { useState } from "react";

const DashboardWrapper = () => {
      const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
       <EventHeader setModalVisible={setModalVisible} /> 
      <Outlet /> {/* This will render either DashboardLayout or UserProfile */}
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      {/* <Footer /> */}
    </>
  );
};

export default DashboardWrapper;
