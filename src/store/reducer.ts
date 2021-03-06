import { combineReducers } from '@reduxjs/toolkit';

// slices
import auth from './auth';
import networks from './networks';

const appReducer = combineReducers({
  auth,
  networks,
  // TODO: add other reducers
});

export type RootState = ReturnType<typeof appReducer>;

export default appReducer;
