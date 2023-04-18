import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getExchangeData } from '../redux/features/exchange/exchangeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';
import CurrencyPair from './CurrencyPair';
import '../styles/CurrencyPage.css';

const CurrencyPage = () => {
  const { exchangeData, isLoading, error } = useSelector((store) => store.exchange);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getExchangeData());
  }, [dispatch]);

  return (
    <section>
      <div className="header">
        <span>2022</span>
        <span>Today&apos;s Exchange</span>
        <div className="icons-container">
          <FontAwesomeIcon icon={faMicrophone} />
          <FontAwesomeIcon icon={faGear} />
        </div>
      </div>
      <div className="upper-part">
        <span>Total Currency pairs </span>
        <span className="total-currency-pairs">{exchangeData.length}</span>
      </div>
      <h1 className="currency-page-header">Currency exchange</h1>
      {error && <div>Failed to fetch the data</div>}
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ul className="currency-container">
          {
            exchangeData.map((item) => <CurrencyPair key={item.ticker} exchangeItem={item} />)
          }
        </ul>
      )}

    </section>
  );
};
export default CurrencyPage;
