import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRegions } from '../Redux/regions/RegionsReducer';
import TotalCases from '../Components/TotalCases';

const RegionContainer = () => {
  const { country } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.regions);

  useEffect(() => {
    dispatch(getRegions(country));
  }, []);

  const renderHeader = () => {
    if (state !== undefined && state.length !== 0) {
      return (<TotalCases country={state} />);
    }
    return (<p>loading</p>);
  };

  return (
    <div className="regionsContainer">
      {renderHeader()}
    </div>
  );
};

export default RegionContainer;
