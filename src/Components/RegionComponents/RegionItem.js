import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const RegionItem = (props) => {
  const { region } = props;

  return (
    <div className="regionItem">
      <p className="countryName">{region.name}</p>
      <div className="countryInformation">
        <p>0</p>
        <Icon icon="bi:arrow-down-circle" rotate={3} className="regionArrow" />
      </div>
    </div>
  );
};

RegionItem.propTypes = {
  region: PropTypes.shape({
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

export default RegionItem;
