import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import CountriesList from '../Components/CountriesList';
import { getCountries } from '../Redux/countries/CountriesReducer';

const CountriesCountainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const countries = [...state];
  const total = countries.shift();

  return (
    <div>
      <div className="summary">
        <Icon icon="carbon:location-filled" width="70" height="70" className="allCountriesMap" />
        <div className="summary-left">
          <p className="allCountries allCountriesSize">All Countries</p>
          <p className="allCountriesSize">
            <span>
              {total?.today_confirmed}
            </span>
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
