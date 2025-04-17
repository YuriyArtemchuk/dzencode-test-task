import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ordersSliceActions } from "./store/orders";
import Button from "./UI/Button";
import { calculateOrderTotal } from "./store/selector";
import Modal from "./Popup";
import "./Orders.scss";
import "./UI/Button.scss";

const OrdersItem = ({ id, title, amount, date, productsId }) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [deletedOrderTitle, setDeletedOrderTitle] = useState(null);
  const products = useSelector((state) => state.productsReducer.products);

  const dispatchFunction = useDispatch();
  const navigate = useNavigate();

  const shortFormattedtDate = (dateString) => {
    const [date] = dateString.split(" ");
    const [month, day] = date.split("-");

    return `${day} / ${month}`;
  };

  const formattedDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("ru-RU", { month: "short" });
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  };

  const handlerDeleteOrder = (event) => {
    event.stopPropagation();
    dispatchFunction(ordersSliceActions.deleteOrder(id));
    setIsPopupOpened(false);
  };

  const handlerCancelDeleting = () => {
    setIsPopupOpened(false);
  };

  const handlerOpenOrder = () => {
    navigate(`/order-detail/${id}`);
  };
  // Розрахунок загальної ціни у двух валютах
  const { usdTotal, uahTotal } = calculateOrderTotal(products, productsId);

  const handlerStartDelete = (event, orderTitle) => {
    event.stopPropagation();
    setIsPopupOpened(true);
    setDeletedOrderTitle(orderTitle);
  };

  return (
    <>
      {isPopupOpened && (
        <Modal
          text="Are you really want to delete this order?"
          onConfirm={handlerDeleteOrder}
          onCancel={handlerCancelDeleting}
          title={deletedOrderTitle}
        />
      )}
      <tr onClick={handlerOpenOrder}>
        <td className="td">{title}</td>

        <td>
          <div className="product-date">
            <div className="dates">{`${amount} продукта`}</div>
          </div>
        </td>
        <td>
          <div className="short-date">{`${shortFormattedtDate(date)}`}</div>
          <div className="long-date">{`${formattedDate(date)}`}</div>
        </td>
        <td>
          <div className="usd-price"> {`${usdTotal} USD`}</div>
          <div>{`${uahTotal} UAH`} </div>
        </td>
        <td className="delete-order">
          <Button onClick={(event) => handlerStartDelete(event, title)} />
        </td>
      </tr>
    </>
  );
};

export default OrdersItem;
