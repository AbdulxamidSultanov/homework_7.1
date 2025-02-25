import { configureStore} from "@reduxjs/toolkit";

import modalReducer from "./modalSlice";
import productsReducer from "./productsSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    prodcts: productsReducer,
    auth: authReducer,
  },
});

