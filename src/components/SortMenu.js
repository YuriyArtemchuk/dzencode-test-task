import { useSelector, useDispatch } from "react-redux";
import { productsSliceActions } from "./store/products";
import "./SortMenu.scss";
import { useState } from "react";

const SortMenu = () => {
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [currentFilter, setCurrenttFilter] = useState("All Products");
  const dispatchFunction = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);

  const filters = ["All Products"];
  products.map((product) => {
    const filter = product.type;
    const existingFilter = filters.find((item) => item === filter);
    if (!existingFilter) {
      filters.push(filter);
    }
  });

  const handlerFiltering = (filter) => {
    dispatchFunction(productsSliceActions.sortingByType(filter));
    setCurrenttFilter(filter);
    setIsFilterOpened((prevState) => !prevState);
  };

  const toggleFilter = () => {
    setIsFilterOpened((prevState) => !prevState);
  };

  return (
    <div className="sort-menu">
      <label className="price-label">Filter by type: </label>
      <div
        className={`dropdown ${isFilterOpened ? "open" : ""}`}
        onMouseEnter={() => setIsFilterOpened(true)}
        onMouseLeave={() => setIsFilterOpened(false)}
      >
        <button onClick={toggleFilter} className="dropbtn">
          {currentFilter}
        </button>
        <div className="dropdown-content">
          {filters.map((filter, index) => (
            <>
              <button
                key={index}
                className="filter-button"
                onClick={() => handlerFiltering(filter)}
              >
                {filter}
              </button>
              <br />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortMenu;
