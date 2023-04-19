import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { configureStore } from '@reduxjs/toolkit';
import CurrencyPage from '../components/CurrencyPage';

afterEach(cleanup);

const initialState = {
  exchangeData: [
    {
      ticker: 'EUR/USD',
      bid: '1.09734',
      ask: '1.09734',
      open: '1.09720',
      low: '1.09680',
      high: '1.09755',
      changes: 0.000140000000000029,
      date: '2023-04-18 18:48:20',
    },
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
  clickedPair: [],
  isLoading: false,
  error: null,
};
const store = configureStore({
  reducer: {
    exchange: (state = initialState) => state,
  },
});

describe('CurrencyPage component test', () => {
  it('Component matches the snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CurrencyPage />
        </Provider>
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  it('It renders pair lists correctly', () => {
   const {container} = render(
      <BrowserRouter>
      <Provider store={store}>
        <CurrencyPage />
      </Provider>
    </BrowserRouter>
    );
    const totalCurrencyPair = container.getElementsByClassName('total-currency-pairs')[0]
    expect(totalCurrencyPair.textContent).toBe("2");
  });
});
