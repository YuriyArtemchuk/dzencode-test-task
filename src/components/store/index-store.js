import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "./orders";
import productsSlice from "./products";

const store = configureStore({
  reducer: {
    ordersReducer: ordersSlice.reducer,
    productsReducer: productsSlice.reducer,
  },
});

export default store;
