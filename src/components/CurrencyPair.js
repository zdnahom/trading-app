import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons';

const CurrencyPair = ({ exchangeItem }) => (
  <li>
    <FontAwesomeIcon icon={faArrowRight} />
    <div>
      <div>
        {'Bid : '}
        <span>{exchangeItem.bid}</span>
        {'Ask : '}
        <span>{exchangeItem.ask}</span>
      </div>
      <div>
        <h3>{exchangeItem.ticker}</h3>
        <span>
          <FontAwesomeIcon icon={faClock} />
          {exchangeItem.date}
          {' '}
          | Currency
        </span>
      </div>
    </div>

  </li>
);

export default CurrencyPair;
CurrencyPair.propTypes = {
  exchangeItem: PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    bid: PropTypes.string.isRequired,
    ask: PropTypes.string.isRequired,
    open: PropTypes.string.isRequired,
    low: PropTypes.string.isRequired,
    high: PropTypes.string.isRequired,
    changes: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
