import React, { useState } from "react";
import "../../assets/css/style.css";
import Modal from "react-modal";
import SignUpBox from "../other/account/SignUpBox";

Modal.setAppElement("#root");

export default function AppReg() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Registrate</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog">
          {/* <button onClick={toggleModal}>Cerrar</button> */}
        <div className="modal-dialog"><SignUpBox/> </div>
      </Modal>
    </div>
  );
}