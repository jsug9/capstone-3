import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../Redux/countries/CountriesReducer';
import { formattedDate } from '../Logic/DateFormatter';
// import CountryItem from './CountryItem';

const CountriesList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const countriesList = data.dates[formattedDate].countries;
  console.log(countriesList);

  return (
    <div className="countriesList">
      {data.map((country) => (
        <p key={country.name}>{country.name}</p>
      ))}
    </div>
  );
};

export default CountriesList;
