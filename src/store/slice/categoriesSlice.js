import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await fetch("https://garden-back-f1yi.onrender.com/categories/all");
      if (!resp.ok) {
        throw new Error("Server error!");
      }
      const data = await resp.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.status = "resolve";
        state.list = payload;
      })
      .addCase(fetchCategories.rejected, (state, { payload }) => {
        state.status = "rejected";
        state.error = payload;
      });
  },
});

export default categoriesSlice.reducer;
