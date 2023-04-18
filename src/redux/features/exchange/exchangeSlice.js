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
  exchangeData: [],
  isLoading: false,
  error: null,
};
const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
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
export default exchangeSlice.reducer;
