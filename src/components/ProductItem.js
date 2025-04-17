import { useState } from "react";
import { useDispatch } from "react-redux";
import { productsSliceActions } from "./store/products";
import Button from "./UI/Button";
import Modal from "./Popup";
import "./Products.scss";
import "./UI/Button.scss";

const ProductItem = ({ id, title, type, guarantee, price, order }) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const dispatchFunction = useDispatch();

  const formatDate = (dateString) => {
    const [date] = dateString.split(" ");
    const [year, month, day] = date.split("-");
    return `${day} / ${month} / ${year}`;
  };

  const handlerStartDelete = () => {
    setIsPopupOpened(true);
  };

  const handlerDeleteProduct = () => {
    dispatchFunction(productsSliceActions.deleteProduct(id));
    setIsPopupOpened(false);
  };

  const handlerCancelDeleting = () => {
    setIsPopupOpened(false);
  };

  return (
    <>
      {isPopupOpened && (
        <Modal
          text="Are you really want to delete this product?"
          onConfirm={handlerDeleteProduct}
          onCancel={handlerCancelDeleting}
          title={title}
        />
      )}
      <tr>
        <td className="td">{title}</td>
        <td>{type}</td>
        <td>
          <div className="product-date">
            <div>
              <div>from</div>
              <div>to</div>
            </div>
            <div className="dates">
              <div>{`${formatDate(guarantee.start)}`}</div>
              <div>{`${formatDate(guarantee.end)}`}</div>
            </div>
          </div>
        </td>
        <td>
          {price.map((item, index) => (
            <div
              key={index}
              style={{ fontSize: item.isDefault === 0 ? "0.7rem" : "1rem" }}
            >
              {item.value} {item.symbol}
            </div>
          ))}
        </td>
        <td>{`Order: ${order}`}</td>
        <td className="delete-button">
          {/* <Button onClick={handlerDeleteProduct} buttonName={""} /> */}
          <Button onClick={() => handlerStartDelete()} />
        </td>
        <td></td>
      </tr>
    </>
  );
};

export default ProductItem;
