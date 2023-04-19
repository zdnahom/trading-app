import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import CurrencyPair from '../components/CurrencyPair';

const exchangeData = {
  ticker: 'EUR/USD',
      bid: '1.09734',
      ask: '1.09734',
      open: '1.09720',
      low: '1.09680',
      high: '1.09755',
      changes: 0.000140000000000029,
      date: '2023-04-18 18:48:20',
};

describe('CurrencyPair component test', () => {
  const handleFuncion = () => {
    return "Got to detail page"
  }
  it('Currency pair component matches the snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <CurrencyPair exchangeItem={exchangeData} handleSelect={handleFuncion}/>
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  it('It renders correctly', () => {
    render(
      <BrowserRouter>
          <CurrencyPair exchangeItem={exchangeData} handleSelect={handleFuncion}/>
      </BrowserRouter>,
    );
    const pair = screen.getByText('EUR/USD');
    expect(pair).toBeInTheDocument();
  });
});
