import { RiDeleteBinLine } from "react-icons/ri";
import ReactDOM from "react-dom";
import CloseButton from "./UI/CloseButton";
import "./Popup.scss";

const Backdrop = ({ onCancel }) => {
  return <div className="backdrop" onClick={onCancel}></div>;
};
const Popup = ({ text, onConfirm, onCancel, title }) => {
  return ReactDOM.createPortal(
    <div className="popup">
      <div className="close-button">
        <CloseButton onCancel={onCancel} />
      </div>

      <div className="info-box">
        <p className="text-title">{text}</p>
        <div className="tr-detail">
          <div className="td-detail">{title}</div>
        </div>
      </div>

      <div className="popup-buttons">
        <div className="button-block">
          <button onClick={onCancel} className="cancel-button">
            DECLINE
          </button>
        </div>
        <div className="button-block">
          <button onClick={onConfirm} className="delete-button">
            <span className="icon-circle">
              <RiDeleteBinLine className="icon" />
            </span>
            <p className="button-name">DELETE</p>
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("overlay")
  );
};

const Modal = ({ text, onConfirm, onCancel, title }) => {
  const portal = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onCancel={onCancel} />, portal)}
      {ReactDOM.createPortal(
        <Popup
          text={text}
          onConfirm={onConfirm}
          onCancel={onCancel}
          title={title}
        />,
        portal
      )}
    </>
  );
};

export default Modal;
