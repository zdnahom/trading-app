import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExchangeData } from '../redux/features/exchange/exchangeSlice';
import CurrencyPair from './CurrencyPair';

const CurrencyPage = () => {
  const { exchangeData, isLoading, error } = useSelector((store) => store.exchange);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExchangeData());
  }, [dispatch]);
  console.log(exchangeData);
  return (
    <section>
      Currency exchange page
      {error && <div>Failed to fetch the data</div>}
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ul>
          {
            exchangeData.map((item) => <CurrencyPair key={item.ticker} exchangeItem={item} />)
          }
        </ul>
      )}

    </section>
  );
};
export default CurrencyPage;
