import style from "../Modal/Modal.module.css";
interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ onClose, children }: ModalProps) {
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <button className={style.closeButton} onClick={onClose}>
          X
        </button>

        <div className={style.modalContent}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
