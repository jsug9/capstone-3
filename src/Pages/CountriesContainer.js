import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import CountriesList from '../Components/CountriesList';

const CountriesCountainer = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <div>
      <div className="summary">
        <Icon icon="carbon:location-filled" width="70" height="70" className="allCountriesMap" />
        <div className="summary-left">
          <p className="allCountries allCountriesSize">All Countries</p>
          <p className="allCountriesSize">
            <span>100000</span>
            {' '}
            cases
          </p>
        </div>
      </div>
      <div className="searchDiv">
        <h1>Stats by Country</h1>
        <input type="text" placeholder="Search Country" className="countryInput" />
      </div>
      <CountriesList countries={countries} />
    </div>
  );
};

export default CountriesCountainer;
