import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://financialmodelingprep.com/api/v3/fx?apikey=23d3e482519ba40fb29f4179c904cca5';
export const getExchangeData = createAsyncThunk('exchange/getExchangeData', async (_, thunkAPI) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
const initialState = {
  exchangeData: [],
  clickedPair: [],
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
