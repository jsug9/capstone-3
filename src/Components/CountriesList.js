import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../Redux/countries/CountriesReducer';
// import { formattedDate } from '../Logic/DateFormatter';
import CountryItem from './CountryItem';

const CountriesList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className="countriesList">
      {data.map((item) => (
        <CountryItem key={item.id} country={item} />
      ))}
    </div>
  );
};

export default CountriesList;
