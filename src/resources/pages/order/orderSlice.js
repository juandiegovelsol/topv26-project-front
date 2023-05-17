import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  title: "Model S",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderInfo: (state, action) => {
      console.log(action);
      state.title = action.payload.title;
    },
  },
});

export const { setOrderInfo } = orderSlice.actions;

export const selecOrder = (state) => state.order;

export default orderSlice.reducer;
