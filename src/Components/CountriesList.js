import PropTypes from 'prop-types';
import CountryItem from './CountryItem';

const CountriesList = (props) => {
  const { countries } = props;

  return (
    <div className="countriesList">
      {countries.map((item) => (
        <CountryItem key={item.id} country={item} />
      ))}
    </div>
  );
};

CountriesList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    today_confirmed: PropTypes.string,
    today_deaths: PropTypes.string,
    today_recovered: PropTypes.string,
    source: PropTypes.string,
    today_open_cases: PropTypes.number,
  })).isRequired,
};

export default CountriesList;
