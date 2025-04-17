import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: "pathToFile.jpg",
    title: "Product 1",
    type: "Monitors",
    specification: "Specification 1",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },

    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo: "pathToFile.jpg",
    title: "Product 2",
    type: "Laptop",
    specification: "Specification 1",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: 2,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: 1,
    photo: "pathToFile.jpg",
    title: "Product 3",
    type: "Monitors",
    specification: "Specification 1",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: 3,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 4,
    serialNumber: 1234,
    isNew: 1,
    photo: "pathToFile.jpg",
    title: "Product 4",
    type: "Monitors",
    specification: "Specification 1",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 5,
    serialNumber: 1234,
    isNew: 1,
    photo: "pathToFile.jpg",
    title: "Product 5",
    type: "Phone",
    specification: "Specification 1",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },

    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: 2,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 6,
    serialNumber: 1234,
    isNew: 1,
    photo: "pathToFile.jpg",
    title: "Product 6",
    type: "Phone",
    specification: "Specification 1",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },

    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-06-29 12:09:33",
  },
];

const initialState = {
  products,
  filteredProducts: products,
};

const productsSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.filteredProducts = [...state.products];
    },
    sortingByType(state, action) {
      console.log(action.payload);
      if (action.payload === "All Products") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (product) => product.type === action.payload
        );
      }
    },
  },
});
export const productsSliceActions = productsSlice.actions;

export default productsSlice;
