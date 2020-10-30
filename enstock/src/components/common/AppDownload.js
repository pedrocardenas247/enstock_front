import React, { useState } from "react";
import "../../assets/css/style.css";
import Modal from "react-modal";
import DownloadApp from "../other/cta/DownloadApp";

Modal.setAppElement("#root");

export default function AppDownload() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="AppDownload">
      <div className="logo-right-content">
                      <ul className="author-access-list">
                        <li>
                        <button className="theme-btn" onClick={toggleModal}>Descarga la App</button>
                        </li>
                      </ul>
                    </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog">
          {/* <button onClick={toggleModal}>Cerrar</button> */}
        <div className="modal-dialog"><DownloadApp/> </div>
      </Modal>
    </div>
  );
}