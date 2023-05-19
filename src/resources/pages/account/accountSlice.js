import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postLogin } from "./accountAPI";
const initialState = {
  loading: false,
  user: {},
};

export const postLoginAsync = createAsyncThunk(
  "account/login",
  async ({ email, password }) => {
    const data = await postLogin({ email, password });
    return data;
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    clearLogin: (state, action) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postLoginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(postLoginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      });
  },
});

export const { clearLogin } = accountSlice.actions;

export const selecAccount = (state) => state.account;

export default accountSlice.reducer;
