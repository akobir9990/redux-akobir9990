import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/CartSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store;
