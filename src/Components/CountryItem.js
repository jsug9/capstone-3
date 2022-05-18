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
        <p>{country.today_confirmed}</p>
      </div>
    </div>
  );
};

CountryItem.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    today_confirmed: PropTypes.string,
    today_deaths: PropTypes.string,
    today_recovered: PropTypes.string,
    source: PropTypes.string,
    today_open_cases: PropTypes.number,
  }).isRequired,
};

export default CountryItem;
