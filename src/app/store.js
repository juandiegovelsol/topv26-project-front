import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../resources/pages/order/orderSlice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});
