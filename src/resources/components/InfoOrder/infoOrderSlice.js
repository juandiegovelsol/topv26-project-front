import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllOrders } from "./infoOrderAPI";

const initialState = {
  loading: false,
  allOrders: [],
};

export const getAllOrdersAsync = createAsyncThunk(
  "infoOrder/getAll",
  async ({ id, token }) => {
    const data = await getAllOrders({ id, token });
    return data;
  }
);

const infoOrderSlice = createSlice({
  name: "infoOrder",
  initialState,
  reducers: {
    clearAllOrders: (state, action) => {
      state.allOrders = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrdersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOrdersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allOrders = action.payload;
      });
  },
});

export const { clearAllOrders } = infoOrderSlice.actions;

export const selectInfoOrder = (state) => state.infoOrder;

export default infoOrderSlice.reducer;
