import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CurrencyPairDetail from '../components/CurrencyPairDetail';

afterEach(cleanup);

const initialState = {
  exchangeData: [],
  clickedPair: [
    {
      ticker: 'USD/JPY',
      bid: '134.060',
      ask: '134.060',
      open: '134.122',
      low: '133.984',
      high: '134.138',
      changes: -0.06200000000001182,
      date: '2023-04-18 18:48:20',
    },
  ],
  isLoading: false,
  error: null,
};
const store = configureStore({
  reducer: {
    exchange: (state = initialState) => state,
  },
});

describe('CurrencyPairDetail component test', () => {
  it('Render Currency pair detail', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CurrencyPairDetail />
        </Provider>
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
