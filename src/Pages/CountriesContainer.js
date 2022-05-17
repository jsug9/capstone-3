import { Icon } from '@iconify/react';
import CountriesList from '../Components/CountriesList';

const CountriesCountainer = () => (
  <div>
    <div className="summary">
      <Icon icon="carbon:location-filled" width="70" height="70" className="allCountriesMap" />
      <div className="summary-left">
        <p className="allCountries allCountriesSize">All Countries</p>
        <p className="allCountriesSize">10000 cases</p>
      </div>
    </div>
    <div className="searchDiv">
      <h1>Stats by Country</h1>
      <input type="text" placeholder="Search Country" />
    </div>
    <CountriesList />
  </div>
);

export default CountriesCountainer;
