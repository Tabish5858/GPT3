import React from "react";
import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleMoodalPopp() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose(){
    setShowModalPopup(false); 
  }

  return (
    <div>
      <button onClick={handleToggleMoodalPopp}>Open Model Popup</button>
      {showModalPopup && <Modal
      id={"custom-id"}
      header={<h1>This Is New Header</h1>}
      footer={<h1>This Is New Footer</h1>}
      onClose={onClose}  body={<div>Customized Body</div>} />}
    </div>
  );
};

export default ModalTest;
