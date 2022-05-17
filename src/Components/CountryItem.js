import React from 'react';
import PropTypes from 'prop-types';

const CountryItem = (props) => {
  const { country } = props;

  return (
    <p>{country.name}</p>
  );
};

CountryItem.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default CountryItem;
