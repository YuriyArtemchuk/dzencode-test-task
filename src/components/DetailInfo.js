import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ordersSliceActions } from "./store/orders";
import { calculateOrderTotal } from "./store/selector";
import Button from "./UI/Button";
import CloseButton from "./UI/CloseButton";
import Modal from "./Popup";
import "./DetailInfo.scss";
import "./UI/Button.scss";

const DetailInfo = ({ orderId, title, productsId, isOrderEmpty }) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [deletedProductId, setDeletedProductId] = useState(null);
  const [deletedProductTitle, setDeletedProductTitle] = useState(null);
  const products = useSelector((state) => state.productsReducer.products);
  const dispatchFunction = useDispatch();
  const navigate = useNavigate();

  const handlerCloseDetailOrder = () => {
    navigate("/orders");
  };
  // формування масиву продуктів для певного замовлення
  const { currentOrderProducts } = calculateOrderTotal(products, productsId);

  const handlerStartDelete = (productId, productTitle) => {
    setDeletedProductId(productId);
    setIsPopupOpened(true);
    setDeletedProductTitle(productTitle);
  };

  const handlerDeleteProduct = () => {
    dispatchFunction(
      ordersSliceActions.deleteProductInOrder({
        id: deletedProductId,
        orderId: orderId,
      })
    );
    setDeletedProductId(null);
    setIsPopupOpened(false);
  };

  const handlerCancelDeleting = () => {
    setDeletedProductId(null);
    setIsPopupOpened(false);
  };

  isOrderEmpty(currentOrderProducts && currentOrderProducts.length === 0);

  return (
    <>
      {isPopupOpened && (
        <Modal
          text="Вы действительно хотите удалить этот товар?"
          onConfirm={handlerDeleteProduct}
          onCancel={handlerCancelDeleting}
          title={deletedProductTitle}
        />
      )}
      {/* {currentOrderProducts && currentOrderProducts.length === 0 ? (
        <EmptyComponent link={"/orders"} />
      ) : ( */}
      <div className="detail-block ">
        <CloseButton onCancel={handlerCloseDetailOrder} />

        <div className="title_detail">
          <p>{title}</p>
        </div>
        <div className="add-product">
          <Link to="/products" className="add-product-button">
            <Button buttonName={"Add Product"} />
          </Link>
        </div>
        {currentOrderProducts.map((product, index) => (
          <div className="tr-detail" key={index}>
            <div className="td-detail">{product.title}</div>
            <div className="td-detail">
              <Button
                onClick={() => handlerStartDelete(product.id, product.title)}
              />
            </div>
          </div>
        ))}
      </div>
      {/* )} */}
    </>
  );
};

export default DetailInfo;
