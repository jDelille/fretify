import React, { ReactElement } from 'react';
import { CloseIcon } from '../../icons';
import './Modal.scss';

type ModalProps = {
  isOpen: boolean;
  body: ReactElement;
  onClose: () => void;
  title: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, body, onClose, title }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="modal">
        <div className="header">
          <h3>{title}</h3>
          <div className="close">
            <CloseIcon onClick={onClose} />
          </div>
        </div>
        <div className="body">{body}</div>
      </div>
    </div>
  );
};

export default Modal;
