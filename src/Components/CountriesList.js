import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CountryItem from './CountryItem';

const CountriesList = (props) => {
  const { countries, searchCountry } = props;
  const [visibleCountries, setVisibleCountries] = useState(countries);

  useEffect(() => {
    const cleanSearchTerm = searchCountry.toLowerCase().trim();
    setVisibleCountries(countries.filter((country) => {
      const countryName = country.name.toLowerCase();
      return countryName.includes(cleanSearchTerm);
    }));
  }, [searchCountry]);

  return (
    <div className="countriesList">
      {visibleCountries?.map((item) => (
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
  searchCountry: PropTypes.string.isRequired,
};

export default CountriesList;
