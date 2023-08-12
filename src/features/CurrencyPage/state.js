import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchCurrencies} from './api';

const initialState = {
  fullList: [],
  isLoading: false,
  isLoaded: false,
};

export const currencySlice = createSlice({
  name: 'currencyPage',
  initialState,
  reducers: {
    increment2: (state) => {
      state.value += 1;
    },
    decrement2: (state) => {
      state.value -= 1;
    },
    incrementByAmount2: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFullList.pending, (state) => {
        state.isLoading = true;
        state.isLoaded = false;
      })
      .addCase(fetchFullList.fulfilled, (state, action) => {
        state.fullList = _prepareList(action.payload);
        state.isLoading = false;
        state.isLoaded = true;
      });
  },
});

export const fetchFullList = createAsyncThunk(
  'currencyPage/fetchFullList',
  async () => {
    const response = await fetchCurrencies();
    return response;
  },
);

export const {increment, decrement, incrementByAmount} = currencySlice.actions;

export const selectCurrencyList = (state) => state.currencyPage.fullList;
export const selectCurrencyStatus = (state) => ({
  isLoading: state.currencyPage.isLoading,
  isLoaded: state.currencyPage.isLoaded,
});

/* export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
}; */

const _prepareList = (list) => {
  const listArray = Object.entries(list);

  return listArray.map((value) => {
    const [firstCurrency, secondCurrency] = value[0].split('_');

    return {
      currencyName: value[0],
      firstCurrency,
      secondCurrency,
      value: value[1].avg,
    };
  });
};

export default currencySlice.reducer;
