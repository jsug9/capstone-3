import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getCountries } from '../Redux/countries/CountriesReducer';
import CountriesList from '../Components/CountryComponents/CountriesList';
import TotalCases from '../Components/TotalCases';
import SearchItem from '../Components/SearchItem';

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
      <SearchItem item="Country" searchItem={searchCountry} updateSearchItem={updateSearchCountry} />
      <CountriesList countries={countries} searchCountry={searchCountry} />
    </div>
  );
};

export default CountriesCountainer;
