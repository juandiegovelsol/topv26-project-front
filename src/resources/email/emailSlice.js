import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendOrderEmail, sendSigninEmail } from "./emailAPI";

const initialState = {
  signinEmail: {},
  orderEmail: {},
};

export const sendSigninEmailAsync = createAsyncThunk(
  "sendEmail/signin",
  async ({ email, name, lastname }) => {
    const data = await sendSigninEmail({ email, name, lastname });
    return data;
  }
);

export const sendOrderEmailAsync = createAsyncThunk(
  "sendEmail/order",
  async ({ email, name, lastname, model, color, price, idorder, adress }) => {
    const data = await sendOrderEmail({
      email,
      name,
      lastname,
      model,
      color,
      price,
      idorder,
      adress,
    });
    return data;
  }
);

const emailSlice = createSlice({
  name: "sendEmail",
  initialState,
  reducers: {
    clearSigninEmail: (state, action) => {
      state.signinEmail = {};
    },
    clearOrderEmail: (state, action) => {
      state.orderEmail = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendSigninEmailAsync.fulfilled, (state, action) => {
        state.signinEmail = action.payload;
      })
      .addCase(sendOrderEmailAsync.fulfilled, (state, action) => {
        state.orderEmail = action.payload;
      });
  },
});

export const { clearSigninEmail, clearOrderEmail } = emailSlice.actions;

export const selectSendEmail = (state) => state.sendEmail;

export default emailSlice.reducer;
