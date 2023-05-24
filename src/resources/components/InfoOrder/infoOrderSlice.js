import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllOrders, updateOrder } from "./infoOrderAPI";

const initialState = {
  loading: false,
  allOrders: [],
  handlerUpdate: [],
  updatedOrder: {},
};

export const getAllOrdersAsync = createAsyncThunk(
  "infoOrder/getAll",
  async ({ id, token }) => {
    const data = await getAllOrders({ id, token });
    return data;
  }
);

export const updateOrderAsync = createAsyncThunk(
  "infoOrder/update",
  async ({ iduser, idorder, token, state }) => {
    const data = await updateOrder({ iduser, idorder, token, state });
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
    clearUpdatedOrder: (state, action) => {
      state.updatedOrder = {};
    },
    openHandlerUpdate: (state, action) => {
      state.handlerUpdate[action.payload] = true;
    },
    closeHandlerUpdate: (state, action) => {
      state.handlerUpdate[action.payload] = false;
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
        state.handlerUpdate = new Array(action.payload.length).fill(false);
      })
      .addCase(updateOrderAsync.fulfilled, (state, action) => {
        state.updatedOrder = action.payload;
      });
  },
});

export const {
  clearAllOrders,
  clearUpdatedOrder,
  openHandlerUpdate,
  closeHandlerUpdate,
} = infoOrderSlice.actions;

export const selectInfoOrder = (state) => state.infoOrder;

export default infoOrderSlice.reducer;
