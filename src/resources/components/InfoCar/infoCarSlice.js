import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCars, updateCarQuantity } from "./infoCarAPI";

const initialState = {
  loading: false,
  allCars: [],
  updatedQuantity: {},
};

export const getAllCarsAsync = createAsyncThunk(
  "infoCar/getAll",
  async ({ id, token }) => {
    const data = await getAllCars({ id, token });
    return data;
  }
);

export const updateCarQuantityAsync = createAsyncThunk(
  "infoCar/updateQuantity",
  async ({ iduser, idcar, token, quantity }) => {
    const data = await updateCarQuantity({ iduser, idcar, token, quantity });
    return data;
  }
);

const infoCarSlice = createSlice({
  name: "infoCar",
  initialState,
  reducers: {
    clearAllCars: (state, action) => {
      state.allCars = [];
    },
    clearUpdatedQuantity: (state, action) => {
      state.updatedQuantity = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCarsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCarsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allCars = action.payload;
      })
      .addCase(updateCarQuantityAsync.fulfilled, (state, action) => {
        state.updatedQuantity = action.payload;
      });
  },
});

export const { clearAllCars, clearUpdatedQuantity } = infoCarSlice.actions;

export const selectInfoCar = (state) => state.infoCar;

export default infoCarSlice.reducer;
