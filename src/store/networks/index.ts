import { createSlice } from '@reduxjs/toolkit';

import * as T from './types';
import { getList, getOne } from './async';

// utils
import { DEFAULT_META } from 'utils/storeHelper';

const initialState: T.State = T.EntityAdapter.getInitialState({
  isLoading: false,
  error: null,
  meta: DEFAULT_META,
});

const slice = createSlice({
  name: T.ROOT,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const startLoading = (state: T.State) => {
      state.isLoading = true;
    };
    const stopLoading = (state: T.State) => {
      state.isLoading = false;
    };

    builder
      .addCase(getList.pending, startLoading)
      .addCase(getList.fulfilled, (state, action) => {
        const { data, count, total, page, pageCount } = action.payload;
        T.EntityAdapter.upsertMany(state, data);
        const meta = state.meta;
        state.meta = {
          ...meta,
          count,
          total,
          page,
          pageCount,
        };
        state.isLoading = false;
      })
      .addCase(getList.rejected, stopLoading)
      .addCase(getOne.pending, startLoading)
      .addCase(getOne.fulfilled, (state, action) => {
        T.EntityAdapter.upsertOne(state, action.payload);
        state.isLoading = false;
      })
      .addCase(getOne.rejected, stopLoading);
  },
});

export { getList, getOne };

export default slice.reducer;
