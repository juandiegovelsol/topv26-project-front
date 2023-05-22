import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../resources/pages/order/orderSlice";
import accountReducer from "../resources/pages/account/accountSlice";
import userInfoReducer from "../resources/components/UserInfo/userInfoSlice";
import infoCarReducer from "../resources/components/InfoCar/infoCarSlice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    account: accountReducer,
    userInfo: userInfoReducer,
    infoCar: infoCarReducer,
  },
});
