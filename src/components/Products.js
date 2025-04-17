import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SortMenu from "./SortMenu";
import ProductItem from "./ProductItem";
import EmptyComponent from "./EmptyComponent";
import "./Products.scss";

const Products = () => {
  const filteredProducts = useSelector(
    (state) => state.productsReducer.filteredProducts
  );

  return (
    <div className="page-container container">
      <div className="products-filter container my-4 ">
        <h3 className="page-title">Products</h3>
        <SortMenu />
      </div>
      {filteredProducts && filteredProducts.length === 0 ? (
        <EmptyComponent link={"/orders"} />
      ) : (
        <table className="table">
          <tbody>
            {filteredProducts.map((product, index) => (
              <ProductItem
                key={index}
                id={product.id}
                title={product.title}
                type={product.type}
                guarantee={product.guarantee}
                price={product.price}
                order={product.order}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Products;
