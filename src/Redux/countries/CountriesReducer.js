import { fetchCountries } from '../../API/CovidAPI';
import { formattedDate } from '../../Logic/DateFormatter';
import { getMapUrl } from '../../API/MapsAPI';

const GET_COUNTRIES = 'Capstone-3/countries/GET_COUNTRIES';

const initialState = [];
let isLoading = false;

const getCountries = () => async (dispatch) => {
  if (isLoading) return;
  const data = await fetchCountries();
  const countriesList = data.dates[formattedDate].countries;
  const allCountries = data.total;
  const mappedAllCountries = {
    id: allCountries.name,
    name: 'All Countries',
    image: getMapUrl('world'),
    today_confirmed: allCountries.today_confirmed.toLocaleString(),
  };
  const mappedList = Object.keys(countriesList).map((key) => ({
    id: key,
    name: countriesList[key].name,
    image: getMapUrl(countriesList[key].name.toLowerCase()),
    today_confirmed: countriesList[key].today_confirmed.toLocaleString(),
  }));
  mappedList.unshift(mappedAllCountries);
  dispatch({
    type: GET_COUNTRIES,
    payload: mappedList,
  });
  isLoading = true;
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
