import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import renderImage from '../Logic/ImageRenderer';

const CountryItem = (props) => {
  const { country } = props;

  return (
    <NavLink
      to={`/countries/${country.id}`}
      className="countryItem"
    >
      {renderImage(country, 'country')}
      <div className="countryInformation">
        <p className="countryName">{country.name}</p>
        <p>
          <span>
            {country.today_confirmed}
          </span>
          {' '}
          cases
        </p>
      </div>
    </NavLink>
  );
};

CountryItem.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    today_confirmed: PropTypes.string,
    today_deaths: PropTypes.string,
    today_recovered: PropTypes.string,
    source: PropTypes.string,
    today_open_cases: PropTypes.number,
  }).isRequired,
};

export default CountryItem;
