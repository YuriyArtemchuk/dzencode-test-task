import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const Button = ({ buttonName, onClick }) => {
  return (
    <div className="button-block">
      <button onClick={onClick} className="product-button">
        <span className="icon-circle">
          <RiDeleteBinLine className="icon" />
        </span>
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
