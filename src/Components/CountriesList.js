import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../Redux/countries/CountriesReducer';
import { formattedDate } from '../Logic/DateFormatter';
import CountryItem from './CountryItem';

const CountriesList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const countriesList = data.dates[formattedDate].countries;
  const mappedList = Object.keys(countriesList).map((key) => ({
    id: key,
    name: countriesList[key].name,
    today_confirmed: countriesList[key].today_confirmed,
    today_deaths: countriesList[key].today_deaths,
    today_recovered: countriesList[key].today_recovered,
    source: countriesList[key].source,
    today_open_cases: countriesList[key].today_open_cases,
  }));

  console.log(mappedList);

  return (
    <div className="countriesList">
      {mappedList.map((item) => (
        // <p key={item.id}>{item.name}</p>
        <CountryItem key={item.id} country={item} />
      ))}
    </div>
  );
};

export default CountriesList;
