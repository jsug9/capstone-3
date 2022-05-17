import { fetchRegions } from '../../API/CovidAPI';

const GET_REGIONS = 'Capstone-3/countries/GET_REGIONS';

const initialState = [];

const getRegions = (country) => async (dispatch) => {
  const result = await fetchRegions(country);
  dispatch({
    type: GET_REGIONS,
    payload: result,
  });
};

const regionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGIONS:
      return action.payload;

    default:
      return state;
  }
};

export { getRegions };
export default regionsReducer;
