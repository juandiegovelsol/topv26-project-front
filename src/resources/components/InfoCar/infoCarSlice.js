import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCars } from "./infoCarAPI";

const initialState = {
  loading: false,
  allCars: [],
};

export const getAllCarsAsync = createAsyncThunk(
  "infoCar/getAll",
  async ({ id, token }) => {
    const data = await getAllCars({ id, token });
    return data;
  }
);

const infoCarSlice = createSlice({
  name: "infoCar",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCarsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCarsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allCars = action.payload;
      });
  },
});

export const selectInfoCar = (state) => state.infoCar;

export default infoCarSlice.reducer;
