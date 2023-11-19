import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  isCalled: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incremet: (state) => {
      state.amount = state.amount + 1;
    },
    decrement: (state) => {
      state.amount = state.amount - 1;
    },
    getAmount: (state) => {
      state.isCalled = true;
    },
  },
});

export const { incremet, decrement, getAmount } = cartSlice.actions;
export default cartSlice.reducer;
