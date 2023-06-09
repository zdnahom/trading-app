import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/CurrencyPair.css';

const CurrencyPair = ({ exchangeItem, handleSelect }) => {
  const modifiedTicker = exchangeItem.ticker.split('/').join('_');
  return (
    <Link style={{ textDecoration: 'none' }} key={exchangeItem.ticker} to={`/${modifiedTicker}`}>
      <li className="currency-card">
        <button type="button" onClick={() => handleSelect(exchangeItem.ticker)}>
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
        </button>
      </li>
    </Link>
  );
};

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
  handleSelect: PropTypes.func.isRequired,
};
