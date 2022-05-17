import React from 'react';
import PropTypes from 'prop-types';

const CountryItem = (props) => {
  const { country } = props;

  return (
    <div className="countryItem">
      <p>{country.name}</p>
      <p>{country.cases}</p>
    </div>
  );
};

CountryItem.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    cases: PropTypes.number,
  }).isRequired,
};

export default CountryItem;
