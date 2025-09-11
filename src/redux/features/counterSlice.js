import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 25,
  reducers: {
    inc: (state) => {
      return state + 1;
    },
    dec: (state) => {
      return state - 1;
    },
  },
});

export const { inc, dec } = counterSlice.actions;

export default counterSlice.reducer;
