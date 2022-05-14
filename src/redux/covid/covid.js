const initialState = [];

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return state;

    default:
      return state;
  }
};

export default covidReducer;
