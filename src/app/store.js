import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import currencyReducer from '../features/CurrencyPage/state';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    currencyPage: currencyReducer,
  },
});
