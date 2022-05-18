import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import CountriesList from '../Components/CountriesList';
import { getCountries } from '../Redux/countries/CountriesReducer';
import TotalCases from '../Components/TotalCases';

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
      <TotalCases country={total} />
      <div className="searchDiv">
        <h1>Stats by Country</h1>
        <input type="text" placeholder="Search Country" className="countryInput" />
      </div>
      <CountriesList countries={countries} />
    </div>
  );
};

export default CountriesCountainer;
