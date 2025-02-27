import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "./productsSlice";

import modalReducer from "./modalSlice";
import authReducer from "./authSlice";
import helloReducer from "./helloSlice";

const persistConfig = {
  key: "helloMessage", 
  storage,
};

const persistedReducer = persistReducer(persistConfig, helloReducer);

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    prodcts: productsReducer,
    auth: authReducer,
    hello: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
