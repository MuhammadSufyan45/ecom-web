'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define CartItem interface
interface CartItem {
  id: number;
  title: string;
  Subtitle: string;
  description: string;
  price: string;
  tag: string;
  discount: string;
  image: string;
  quantity: number;
}

const cartSlice = createSlice({
  name: "Cart",
  initialState: [] as CartItem[], // initial state as an array of CartItem
  reducers: {
    // Add item to the cart
    add(state, action: PayloadAction<CartItem>) {
      state.push(action.payload);
    },
    // Remove item from the cart
    remove(state, action: PayloadAction<number>) {
      return state.filter((item: CartItem) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
