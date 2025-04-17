import { IoClose } from "react-icons/io5";
import "./CloseButton.scss";

const CloseButton = ({ onCancel }) => {
  return (
    <>
      <div className="close-icon" onClick={onCancel}>
        <IoClose />
      </div>
    </>
  );
};

export default CloseButton;
