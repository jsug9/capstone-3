import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import CountriesList from '../Components/CountriesList';
import { getCountries } from '../Redux/countries/CountriesReducer';
import TotalCases from '../Components/TotalCases';
import SearchCountry from '../Components/SearchCountry';

const CountriesCountainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const [searchCountry, setSearchCountry] = useState('');

  const updateSearchCountry = (e) => {
    setSearchCountry(e.target.value);
  };

  const countries = [...state];
  const total = countries.shift();

  return (
    <div>
      <TotalCases country={total} />
      <SearchCountry searchCountry={searchCountry} updateSearchCountry={updateSearchCountry} />
      <CountriesList countries={countries} searchCountry={searchCountry} />
    </div>
  );
};

export default CountriesCountainer;
