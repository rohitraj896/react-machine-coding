import { useState } from "react";
import Modal from "./Modal";

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <button
        style={{ padding: "5px", background: "blue" }}
        onClick={handleModal}
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={handleModal}>
        <h1>Modal title</h1>
        <p>Modal content</p>
      </Modal>
    </div>
  );
};

export default ModalComponent;
