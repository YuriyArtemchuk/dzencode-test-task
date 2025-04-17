import { useState } from "react";
import { useSelector } from "react-redux";
import OrdersShortItems from "./OrdersShortItems";
import { useParams } from "react-router-dom";
import EmptyComponent from "./EmptyComponent";
import DetailInfo from "./DetailInfo";
import "./Orders.scss";
import "./OrderDetail.scss";

const OrderDetail = () => {
  const [isEmptyOrder, setIsEmptyOrder] = useState(false);
  const orders = useSelector((state) => state.ordersReducer.orders);
  const params = useParams();
  const orderId = params.id;
  const currentOrder = orders.find((order) => order.id === Number(orderId));
  const productsId = currentOrder.productsId;

  const handlerEmptyOrder = (isEmpty) => {
    setIsEmptyOrder(isEmpty);
  };

  return (
    <div className="page-container container">
      <div className="content-shortblock">
        <div className="products-filter container my-4 ">
          <h3 className="page-title">Order Detail</h3>
        </div>
        {isEmptyOrder ? (
          <EmptyComponent link={"/orders"} />
        ) : (
          <div className="main-content">
            <div className=" order-left">
              <table className="table ">
                <tbody className="body">
                  {orders.map((order, index) => (
                    <OrdersShortItems
                      key={index}
                      id={order.id}
                      amount={order.productsId.length}
                      date={order.date}
                      productsId={order.productsId}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="order-right">
              <DetailInfo
                orderId={orderId}
                title={currentOrder.title}
                productsId={productsId}
                isOrderEmpty={handlerEmptyOrder}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetail;
