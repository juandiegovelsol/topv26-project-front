import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  cancelOrder,
  getAllOrders,
  getUserOrders,
  updateOrder,
} from "./infoOrderAPI";

const initialState = {
  loading: false,
  allOrders: [],
  handlerUpdate: [],
  updatedOrder: {},
  canceledOrder: {},
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

export const getUserOrdersAsync = createAsyncThunk(
  "infoOrder/getUserOrders",
  async ({ id, token }) => {
    const data = await getUserOrders({ id, token });
    return data;
  }
);

export const cancelOrderAsync = createAsyncThunk(
  "infoOrder/cancel",
  async ({ idorder, token }) => {
    const data = await cancelOrder({ idorder, token });
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
    clearCanceledOrder: (state, action) => {
      state.canceledOrder = {};
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
      })
      .addCase(getUserOrdersAsync.fulfilled, (state, action) => {
        state.allOrders = action.payload;
        state.handlerUpdate = new Array(action.payload.length).fill(false);
      })
      .addCase(cancelOrderAsync.fulfilled, (state, action) => {
        state.canceledOrder = action.payload;
      });
  },
});

export const {
  clearAllOrders,
  clearUpdatedOrder,
  openHandlerUpdate,
  closeHandlerUpdate,
  clearCanceledOrder,
} = infoOrderSlice.actions;

export const selectInfoOrder = (state) => state.infoOrder;

export default infoOrderSlice.reducer;
