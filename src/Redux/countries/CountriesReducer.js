import { fetchCountries } from '../../API/CovidAPI';

const GET_COUNTRIES = 'Capstone-3/countries/GET_COUNTRIES';

const initialState = [];

const getCountries = () => async (dispatch) => {
  const result = await fetchCountries();
  dispatch({
    type: GET_COUNTRIES,
    payload: result,
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
