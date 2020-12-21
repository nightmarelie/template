import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducer';

const store = configureStore({
  reducer,
});

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducer', () => store.replaceReducer(reducer));
}

export type AppDispatch = typeof store.dispatch;

export default store;
