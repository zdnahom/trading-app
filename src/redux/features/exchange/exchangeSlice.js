import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://financialmodelingprep.com/api/v3/forex?apikey=fae902ef1c548d816191ea83f6f387f5';
export const getExchangeData = createAsyncThunk('exchange/getExchangeData', async (_, thunkAPI) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.forexList;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
const initialState = {
  exchangeData: [{
    ticker: 'EUR/USD',
    bid: '1.09615',
    ask: '1.09615',
    open: '1.09250',
    low: '1.09210',
    high: '1.09830',
    changes: 0.003649999999999931,
    date: '2023-04-18 11:01:35',
  },
  {
    ticker: 'USD/JPY',
    bid: '133.982',
    ask: '133.982',
    open: '134.467',
    low: '133.861',
    high: '134.708',
    changes: -0.48500000000001364,
    date: '2023-04-18 11:01:35',
  },
  {
    ticker: 'GBP/USD',
    bid: '1.24284',
    ask: '1.24284',
    open: '1.23715',
    low: '1.23639',
    high: '1.24502',
    changes: 0.005689999999999973,
    date: '2023-04-18 11:01:35',
  },
  {
    ticker: 'EUR/GBP',
    bid: '0.88198',
    ask: '0.88198',
    open: '0.88264',
    low: '0.88094',
    high: '0.88340',
    changes: -0.0006599999999999939,
    date: '2023-04-18 11:01:35',
  }],
  clickedPair: null,
  isLoading: false,
  error: null,
};
const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    selectPair: (state, action) => {
      const selectedPair = state.exchangeData.filter((pair) => action.payload === pair.ticker);
      return { ...state, clickedPair: selectedPair };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExchangeData.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getExchangeData.fulfilled, (state, action) => ({
        ...state,
        exchangeData: action.payload,
        isLoading: false,
      }))
      .addCase(getExchangeData.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});
export const { selectPair } = exchangeSlice.actions;
export default exchangeSlice.reducer;
