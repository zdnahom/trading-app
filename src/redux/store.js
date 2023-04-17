import { configureStore } from '@reduxjs/toolkit';
import exchangeSlice from './features/exchange/exchangeSlice';

const store = configureStore({
  reducer: {
    exchange: exchangeSlice,
  },

});
export default store;
