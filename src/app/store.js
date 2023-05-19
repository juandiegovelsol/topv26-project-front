import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../resources/pages/order/orderSlice";
import accountReducer from "../resources/pages/account/accountSlice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    account: accountReducer,
  },
});
