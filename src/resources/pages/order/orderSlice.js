import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  orderData: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderInfo: (state, action) => {
      console.log(action);
      state.orderData = action.payload;
    },
  },
});

export const { setOrderInfo } = orderSlice.actions;

export const selecOrder = (state) => state.order;

export default orderSlice.reducer;
