import React, { useState } from "react";
import "../../assets/css/style.css";
import Modal from "react-modal";
import LoginBox from "../other/account/LoginBox";

Modal.setAppElement("#root");

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Mi Cuenta</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog">
          {/* <button onClick={toggleModal}>Cerrar</button> */}
        <div className="modal-dialog"><LoginBox/></div>
      </Modal>
    </div>
  );
}