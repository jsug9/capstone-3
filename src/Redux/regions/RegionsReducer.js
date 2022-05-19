import { fetchRegions } from '../../API/CovidAPI';
import { formattedDate } from '../../Logic/DateFormatter';
import { getMapUrl } from '../../API/MapsAPI';

const GET_REGIONS = 'Capstone-3/countries/GET_REGIONS';

const initialState = [];

const getRegions = (country) => async (dispatch) => {
  const data = await fetchRegions(country);
  const result = { countryData: data.dates[formattedDate].countries };
  const regions = result.countryData[country];
  const mappedRegions = {
    id: regions.id,
    name: regions.name,
    image: getMapUrl(regions.id),
    regions: regions.regions,
    today_confirmed: regions.today_confirmed.toLocaleString(),
    today_deaths: regions.today_deaths.toLocaleString(),
    today_recovered: regions.today_recovered.toLocaleString(),
    source: regions.source,
    today_open_cases: regions.today_open_cases,
  };
  dispatch({
    type: GET_REGIONS,
    payload: mappedRegions,
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
