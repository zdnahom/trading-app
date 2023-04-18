import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faClock } from '@fortawesome/free-solid-svg-icons';
import '../styles/CurrencyPair.css';

const CurrencyPair = ({ exchangeItem }) => (
  <li className="currency-card">
    <FontAwesomeIcon icon={faCircleArrowRight} className="forward-icon" />
    <div className="currency-card-content">
      <div className="currency-rate">
        Bid
        <span>{exchangeItem.bid}</span>
        Ask
        <span>{exchangeItem.ask}</span>
      </div>
      <div className="currency-pair-container">
        <h3 className="currency-pair-text">{exchangeItem.ticker}</h3>
        <span className="currency-pair-time-container">
          <FontAwesomeIcon icon={faClock} />
          04:54:09
        </span>
        <span>Currency</span>
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
