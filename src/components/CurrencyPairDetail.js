import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faGear, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/CurrencyPairDetail.css';

const CurrencyPairDetail = () => {
  const { clickedPair } = useSelector((store) => store.exchange);
  return (
    <section>
      <div className="header">
        <Link to="/"><FontAwesomeIcon icon={faArrowLeft} /></Link>
        <span>{clickedPair[0].ticker}</span>
        <div className="icons-container">
          <FontAwesomeIcon icon={faMicrophone} />
          <FontAwesomeIcon icon={faGear} />
        </div>
      </div>
      <div className="upper-part">
        <span>Spread</span>
        <span className="currency-spread">0</span>
      </div>
      <h2 className="currency-detail-header">Currency pair Info</h2>
      <div className="currency-pair-info-container">
        <div className="currency-pair-info">
          <span>Bid</span>
          <span className="info-text">{clickedPair[0].bid}</span>
        </div>
        <div className="currency-pair-info">
          <span>Ask</span>
          <span className="info-text">{clickedPair[0].ask}</span>
        </div>
        <div className="currency-pair-info">
          <span>Open</span>
          <span className="info-text">{clickedPair[0].open}</span>
        </div>
        <div className="currency-pair-info">
          <span>Low</span>
          <span className="info-text">{clickedPair[0].low}</span>
        </div>
        <div className="currency-pair-info">
          <span>High</span>
          <span className="info-text">{clickedPair[0].high}</span>
        </div>
        <div className="currency-pair-info">
          <span>High</span>
          <span className="info-text">{clickedPair[0].high}</span>
        </div>
        <div className="currency-pair-info">
          <span>Changes</span>
          <span className="info-text">{clickedPair[0].changes.toFixed(4)}</span>
        </div>
      </div>
    </section>
  );
};
export default CurrencyPairDetail;
