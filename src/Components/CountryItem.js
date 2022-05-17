import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const CountryItem = (props) => {
  const { country } = props;

  return (
    <div className="countryItem">
      <Icon icon="carbon:location-filled" width="50" height="50" className="mapIcon" />
      <div className="countryInformation">
        <p className="countryName">{country.name}</p>
        <p>{country.cases}</p>
      </div>
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
