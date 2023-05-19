import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postLogin, postRegister } from "./accountAPI";
const initialState = {
  loading: false,
  user: {},
  register: {},
};

export const postLoginAsync = createAsyncThunk(
  "account/login",
  async ({ email, password }) => {
    const data = await postLogin({ email, password });
    return data;
  }
);

export const postRegisterAsync = createAsyncThunk(
  "account/register",
  async ({ email, password, name, lastname, role }) => {
    const data = await postRegister({ email, password, name, lastname, role });
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
    clearRegister: (state, action) => {
      state.register = {};
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
      })
      .addCase(postRegisterAsync.fulfilled, (state, action) => {
        state.register = action.payload;
      });
  },
});

export const { clearLogin, clearRegister } = accountSlice.actions;

export const selecAccount = (state) => state.account;

export default accountSlice.reducer;
