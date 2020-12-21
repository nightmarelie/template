import { createAsyncThunk } from '@reduxjs/toolkit';
import * as T from './types';

// utils
import API from 'utils/api';

const getList = createAsyncThunk<T.ListResponse>(
  T.LIST_ACTION,
  async () => await API.networks.list<T.ListResponse>(),
);

const getOne = createAsyncThunk<T.OneResponse, T.OnePayload>(
  T.ONE_ACTION,
  async ({ id }) => await API.networks.one<T.OneResponse>(id),
);

export { getList, getOne };
