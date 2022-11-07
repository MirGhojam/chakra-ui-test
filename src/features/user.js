import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    clearUser: state => {
      return null;
    },
  },
});

export const { setUser, clearUser } = counterSlice.actions;

export default counterSlice.reducer;
