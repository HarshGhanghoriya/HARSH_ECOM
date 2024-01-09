import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  value: 0,
  totalCartValue: 0,
  totalItems: 0,
  totalDiscount:0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItem = [...state.cartItem, {...action.payload,quantity:1}];
      state.totalCartValue = state.totalCartValue+action.payload.price
      state.totalDiscount = state.totalDiscount+251
    },
    removeFromCart: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
