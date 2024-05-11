import "./Modal.css";

const Modal = ({ isOpen, children, onClose }) => {
  return (
    <div className={`modal_container ${isOpen ? "open" : ""}`}>
      <div className="modal_section">
        {children}
        <button className="close_button" onClick={onClose}>
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
