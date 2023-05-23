import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers } from "./userInfoAPI";

const initialState = {
  loading: false,
  allUsers: [],
};

export const getAllUsersAsync = createAsyncThunk(
  "userInfo/getAll",
  async ({ id, token }) => {
    const data = await getAllUsers({ id, token });
    return data;
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    clearAllUsers: (state, action) => {
      state.allUsers = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allUsers = action.payload;
      });
  },
});

export const { clearAllUsers } = userInfoSlice.actions;

export const selectUserInfo = (state) => state.userInfo;

export default userInfoSlice.reducer;
