import { createSlice } from "@reduxjs/toolkit";

const orders = [
  {
    id: 1,
    title: "Order 1",
    date: "2017-06-29 12:09:33",
    description: "desc",
    productsId: [1, 4, 6],
  },
  {
    id: 2,
    title: "Order 2",
    date: "2017-06-29 12:09:33",
    description: "desc",
    productsId: [2, 5],
  },
  {
    id: 3,
    title: "Order 3",
    date: "2017-06-29 12:09:33",
    description: "desc",
    productsId: [3],
  },
];
const initialState = {
  orders: orders,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    deleteProductInOrder(state, action) {
      const { id, orderId } = action.payload;
      const order = state.orders.find((order) => order.id === Number(orderId));
      if (order) {
        order.productsId = order.productsId.filter(
          (productId) => productId !== id
        );
      }
    },
    deleteOrder(state, action) {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
  },
});
export const ordersSliceActions = ordersSlice.actions;

export default ordersSlice;
