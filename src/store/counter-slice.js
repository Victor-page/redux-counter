import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { value: 0, showValue: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    toggleCounter(state) {
      state.showValue = !state.showValue;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
