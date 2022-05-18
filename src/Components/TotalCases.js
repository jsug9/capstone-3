import PropTypes from 'prop-types';
import renderImage from '../Logic/ImageRenderer';

const TotalCases = (props) => {
  const { country } = props;

  return (
    <div className="summary">
      {renderImage(country, 'world')}
      <div className="summary-left">
        <p className="allCountries allCountriesSize">All Countries</p>
        <p className="allCountriesSize">
          <span>
            {country?.today_confirmed}
          </span>
          {' '}
          cases
        </p>
      </div>
    </div>
  );
};

TotalCases.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    today_confirmed: PropTypes.string,
    today_deaths: PropTypes.string,
    today_recovered: PropTypes.string,
    source: PropTypes.string,
    today_open_cases: PropTypes.number,
  }).isRequired,
};

export default TotalCases;