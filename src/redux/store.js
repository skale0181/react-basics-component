// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import loader from "./reducers/loader";
import snackbar from "./reducers/snackbar";
import userProductsCount from "./reducers/call_api_from_store";

const store = configureStore({
  reducer: {
    loader: loader,
    snackbar: snackbar,
    userProductsCount: userProductsCount,
  },
});

export default store;
