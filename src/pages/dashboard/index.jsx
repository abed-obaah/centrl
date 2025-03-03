import React, { useState } from "react";
import Header from './header';
import Events from './events/index'
import Modal from './Modal';


export default function index() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
        <Header setModalVisible={setModalVisible}/>
        <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <Events/>

    </div>
  )
}
