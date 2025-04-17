import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { calculateOrderTotal } from "./store/selector";
import { FaChevronRight } from "react-icons/fa";
import "./OrderDetail.scss";

const OrdersShortItems = ({ id, amount, date, productsId }) => {
  const products = useSelector((state) => state.productsReducer.products);
  const navigate = useNavigate();

  const { id: openedOrderId } = useParams();
  const isOrderOpen = Number(openedOrderId) === id;

  const shortFormattedtDate = (dateString) => {
    const [date] = dateString.split(" ");
    const [year, month, day] = date.split("-");

    return `${day} / ${month}`;
  };

  const formattedDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("ru-RU", { month: "short" });
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  };

  const handlerOpenOrder = () => {
    navigate(`/order-detail/${id}`);
  };
  // Розрахунок загальної ціни у двух валютах
  const { usdTotal, uahTotal } = calculateOrderTotal(products, productsId);

  return (
    <>
      <tr
        onClick={handlerOpenOrder}
        className={isOrderOpen ? "open-order" : ""}
      >
        <td>
          <div className="product-date">
            <div className="dates">{`${amount} продукта`}</div>
          </div>
        </td>
        <td>
          <div>
            <div className="short-date">{`${shortFormattedtDate(date)}`}</div>
            <div className="long-date">{`${formattedDate(date)}`}</div>
          </div>
        </td>
        <td>
          <div>
            <div className="usd-price"> {`${usdTotal} USD`}</div>
            <div>{`${uahTotal} UAH`} </div>
          </div>
        </td>
        <td className="td-open-icon">
          {isOrderOpen && (
            <div className="open-icon">
              <span className="icon-circle">
                <FaChevronRight className="icon" />
              </span>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

export default OrdersShortItems;
