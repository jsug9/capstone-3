const GET_REGIONS = 'Capstone-3/countries/GET_REGIONS';

const initialState = [];

const regionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGIONS:
      return state;

    default:
      return state;
  }
};

export default regionsReducer;
