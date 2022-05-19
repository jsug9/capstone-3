import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RegionItem from './RegionItem';

const RegionsList = (props) => {
  const { regions, searchRegion } = props;
  const [visibleRegions, setVisibleRegions] = useState(regions);

  useEffect(() => {
    setVisibleRegions(regions);
  }, [regions]);

  useEffect(() => {
    const cleanSearchTerm = searchRegion.toLowerCase().trim();
    setVisibleRegions(regions.filter((region) => {
      const regionName = region.name.toLowerCase();
      return regionName.includes(cleanSearchTerm);
    }));
  }, [searchRegion]);

  return (
    <div className="regionsList">
      {visibleRegions?.map((item) => (
        <RegionItem key={item.id} country={item} />
      ))}
    </div>
  );
};

RegionsList.propTypes = {
  regions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    today_confirmed: PropTypes.string,
    today_deaths: PropTypes.string,
    today_recovered: PropTypes.string,
    source: PropTypes.string,
    today_open_cases: PropTypes.number,
  })).isRequired,
  searchRegion: PropTypes.string.isRequired,
};

export default RegionsList;
