import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    plusOne(state) {
      state.value += 1;
    },
    add(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

// slice会自动生成action createor
export const { plusOne, add } = counterSlice.actions;
// 也会生成reducer
export default counterSlice.reducer;
