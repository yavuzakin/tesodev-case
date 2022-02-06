import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    searchInput: "",
  },
  reducers: {
    update: (state, action) => {
      state.searchInput = action.payload.input;
    },
  },
});

export const { update } = inputSlice.actions;
export default inputSlice.reducer;
