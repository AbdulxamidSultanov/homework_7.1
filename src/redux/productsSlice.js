import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "piyoz", count: 2 },
    { id: 2, name: "sabzi", count: 20 },
    { id: 3, name: "shlogom", count: 10 },
    { id: 4, name: "karam", count: 24 },
  ],
};

const productsSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.count += action.payload.count;
      } else {
        state.products.push(action.payload);
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
