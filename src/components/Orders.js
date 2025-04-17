import { useSelector } from "react-redux";
import OrdersItem from "./OrdersItem";
import EmptyComponent from "./EmptyComponent";

const Orders = () => {
  const orders = useSelector((state) => state.ordersReducer.orders);

  return (
    <div className="page-container container">
      <div className="content-block">
        <div className="products-filter container my-4 ">
          <h3 className="page-title">Orders</h3>
        </div>
        {orders && orders.length === 0 ? (
          <EmptyComponent link={"/products"} />
        ) : (
          <table className="table">
            <tbody>
              {orders.map((order, index) => (
                <OrdersItem
                  key={index}
                  id={order.id}
                  title={order.title}
                  amount={order.productsId.length}
                  date={order.date}
                  productsId={order.productsId}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Orders;
