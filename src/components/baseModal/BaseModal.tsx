import { Dispatch, SetStateAction } from 'react';
import ReactDom from 'react-dom';
import './BaseModal.css';

interface BaseModalProps {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const BaseModal: React.FC<BaseModalProps> = ({ open, onClose, children }) => {
  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div className="Modal-Overlay" />
      <div className="Modal-Container">
        <div className="Modal-Div_buttonContainer">
          <button className="Modal-Button_closeModal" onClick={() => onClose(false)}>
            X
          </button>
          {children}
        </div>
      </div>
    </>,
    document.querySelector('#portal') as HTMLElement
  );
};

export default BaseModal;
