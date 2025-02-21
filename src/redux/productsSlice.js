import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {id: 1, name: 'piyoz', count: "2 ta"},
    {id: 2, name: 'sabzi', count: "20 ta"},
    {id: 3, name: 'shlogom', count: "10 ta"},
    {id: 4, name: 'karam', count: "24 ta"},
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload.id);
    },

  }
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
