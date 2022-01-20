import ReactDom from 'react-dom';
import './Modal.css';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div className="Modal-Overlay" />
      <div className="Modal-Container">
        <button className="Modal-Button_closeModal" onClick={onClose}>
          X
        </button>
      </div>
      {children}
    </>,
    document.querySelector('#portal') as HTMLElement
  );
};

export default Modal;
