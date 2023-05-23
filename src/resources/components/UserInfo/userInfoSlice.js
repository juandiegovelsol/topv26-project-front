import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { changeUserRole, getAllUsers, updateUser } from "./userInfoAPI";

const initialState = {
  loading: false,
  allUsers: [],
  changedRole: {},
  updatedUser: {},
};

export const getAllUsersAsync = createAsyncThunk(
  "userInfo/getAll",
  async ({ id, token }) => {
    const data = await getAllUsers({ id, token });
    return data;
  }
);

export const changeUserRoleAsync = createAsyncThunk(
  "userInfo/changeRole",
  async ({ id, id2, token }) => {
    const data = await changeUserRole({ id, id2, token });
    return data;
  }
);

export const updateUserAsync = createAsyncThunk(
  "userInfo/update",
  async ({ id, token, email, password, name, lastname }) => {
    const data = await updateUser({
      id,
      token,
      email,
      password,
      name,
      lastname,
    });
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
    clearChangedRole: (state, action) => {
      state.changedRole = {};
    },
    clearUpdatedUser: (state, action) => {
      state.updatedUser = {};
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
      })
      .addCase(changeUserRoleAsync.fulfilled, (state, action) => {
        state.changedRole = action.payload;
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.updatedUser = action.payload;
      });
  },
});

export const { clearAllUsers, clearChangedRole, clearUpdatedUser } =
  userInfoSlice.actions;

export const selectUserInfo = (state) => state.userInfo;

export default userInfoSlice.reducer;
