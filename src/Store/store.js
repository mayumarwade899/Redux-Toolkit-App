import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice, { fetchProducts } from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});

export default store;
