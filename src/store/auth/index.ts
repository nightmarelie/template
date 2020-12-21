import { createSlice } from '@reduxjs/toolkit';

import * as T from './types';
import { login, logout } from './async';

const initialState: T.State = {
  user: {} as T.User,
  token: null,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: T.ROOT,
  initialState,
  reducers: {
    clear(state) {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload: { user, token } }) => {
        state.token = token;
        state.user = user;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.message;
        }
        state.isLoading = false;
      });
  },
});

const { clear } = slice.actions;

export { clear, logout, login };

export default slice.reducer;
