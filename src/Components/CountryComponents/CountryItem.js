import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import renderImage from '../ImageRenderer';

const CountryItem = (props) => {
  const { country } = props;

  return (
    <NavLink
      to={`/${country.id}`}
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
  }).isRequired,
};

export default CountryItem;
