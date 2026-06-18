import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const billingSlice = createSlice({
  name: "billing",

  initialState: {
    products,
  },

  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      const item = state.products.find(
        (product) => product.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decrement: (state, action: PayloadAction<number>) => {
      const item = state.products.find(
        (product) => product.id === action.payload
      );

      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },

    clearBill: (state) => {
      state.products.forEach((product) => {
        product.quantity = 0;
      });
    },
  },
});

export const {
  increment,
  decrement,
  clearBill,
} = billingSlice.actions;

export default billingSlice.reducer;