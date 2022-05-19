import { fetchCountries } from '../../API/CovidAPI';
import { formattedDate } from '../../Logic/DateFormatter';
import { getMapUrl } from '../../API/MapsAPI';

const GET_COUNTRIES = 'Capstone-3/countries/GET_COUNTRIES';

const initialState = [];

const getCountries = () => async (dispatch) => {
  const data = await fetchCountries();
  const countriesList = data.dates[formattedDate].countries;
  const allCountries = data.total;
  const mappedAllCountries = {
    id: allCountries.name,
    name: allCountries.name,
    image: getMapUrl('world'),
    today_confirmed: allCountries.today_confirmed.toLocaleString(),
    today_deaths: allCountries.today_deaths.toLocaleString(),
    today_recovered: allCountries.today_recovered.toLocaleString(),
    source: allCountries.source,
    today_open_cases: allCountries.today_open_cases,
  };
  const mappedList = Object.keys(countriesList).map((key) => ({
    id: key,
    name: countriesList[key].name,
    image: getMapUrl(countriesList[key].name.toLowerCase()),
    today_confirmed: countriesList[key].today_confirmed.toLocaleString(),
    today_deaths: countriesList[key].today_deaths.toLocaleString(),
    today_recovered: countriesList[key].today_recovered.toLocaleString(),
    source: countriesList[key].source,
    today_open_cases: countriesList[key].today_open_cases,
  }));
  mappedList.unshift(mappedAllCountries);
  dispatch({
    type: GET_COUNTRIES,
    payload: mappedList,
  });
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;

    default:
      return state;
  }
};

export { getCountries };
export default countriesReducer;
