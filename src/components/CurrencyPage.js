import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExchangeData } from '../redux/features/exchange/exchangeSlice';

const CurrencyPage = () => {
  const { exchangeData } = useSelector((store) => store.exchange);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExchangeData());
  }, [dispatch]);


  return (
    <section>
      Currency exchange page
    </section>
  );
};
export default CurrencyPage;
