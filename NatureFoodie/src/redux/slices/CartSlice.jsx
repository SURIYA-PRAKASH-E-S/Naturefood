import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
   name: "cart",
   initialState: {
      cart: [],
   },
   reducers: {
      // Add to Cart
      addToCart: (state, action) => {
         const existingItem = state.cart.find(
            (item) => item.id === action.payload.id
         );

         if (existingItem) {
            existingItem.qty += 1; // Increase qty if item exists
         } else {
            state.cart.push({ ...action.payload, qty: 1 }); // Add item with qty = 1
         }
      },

      // Remove from Cart
      removeFromCart: (state, action) => {
         state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      },

      // Increment item quantity
      incrementQty: (state, action) => {
         const item = state.cart.find((item) => item.id === action.payload.id);
         if (item) {
            item.qty += 1;
         }
      },

      // Decrement item quantity (removes if qty is 0)
      decrementQty: (state, action) => {
         const item = state.cart.find((item) => item.id === action.payload.id);
         if (item) {
            if (item.qty > 1) {
               item.qty -= 1;
            } else {
               state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            }
         }
      },

      // Clear entire cart (after payment)
      clearCart: (state) => {
         state.cart = [];
      },
   },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart } =
   CartSlice.actions;

export default CartSlice.reducer;
