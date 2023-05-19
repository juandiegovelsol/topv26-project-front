import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  orderData: {},
  checkout: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderInfo: (state, action) => {
      state.orderData = action.payload;
    },
    setCheckout: (state, action) => {
      state.checkout = action.payload;
    },
  },
});

export const { setOrderInfo, setCheckout } = orderSlice.actions;

export const selecOrder = (state) => state.order;

export default orderSlice.reducer;
