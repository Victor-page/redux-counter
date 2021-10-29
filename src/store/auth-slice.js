import { createSlice } from '@reduxjs/toolkit';

const inititalAuthenticationState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: inititalAuthenticationState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
