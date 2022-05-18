import { fetchCountries } from '../../API/CovidAPI';
import { formattedDate } from '../../Logic/DateFormatter';

const GET_COUNTRIES = 'Capstone-3/countries/GET_COUNTRIES';

const initialState = [];

const getCountries = () => async (dispatch) => {
  const data = await fetchCountries();
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
