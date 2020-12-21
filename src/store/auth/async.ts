import { createAsyncThunk } from '@reduxjs/toolkit';
import * as T from './types';

// utils
import { getDataOrReject } from 'utils/storeHelper';
import API from 'utils/api';

const login = createAsyncThunk<
  T.UserResponse,
  T.LoginPayload,
  {
    rejectValue: T.ValidationError;
  }
>(T.LOGIN_ACTION, async (payload: T.LoginPayload, { rejectWithValue }) => {
  return await getDataOrReject<
    T.UserResponse,
    T.ValidationError,
    ReturnType<typeof rejectWithValue>
  >(async () => {
    // return await API.auth.signIn<T.UserResponse>(payload);

    return {
      user: { firstName: 'Test', lastName: 'Test', id: 1 },
      token: '1111',
    } as T.UserResponse;
  }, rejectWithValue);
});

const logout = createAsyncThunk<T.UserResponse>(T.LOGOUT_ACTION, async () => {
  await API.auth.signOut();

  return { user: null, token: null } as T.UserResponse;
});

export { login, logout };
