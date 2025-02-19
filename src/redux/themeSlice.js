import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    change: function (state, action) {
      state.value = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { change } = themeSlice.actions;
