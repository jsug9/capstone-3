import countriesReducer, { GET_COUNTRIES } from '../Redux/countries/CountriesReducer';

describe('Get Countries', () => {
  test('When Get Countries is executed, it should return a list of countries', () => {
    const initialState = [];
    const state = [
      {
        id: 'peru',
        name: 'Peru',
        image: 'https://api.covid19tracking.narrativa.com/api/peru',
        today_confirmed: '300,201',
      },
      {
        id: 'ecuador',
        name: 'Ecuador',
        image: 'https://api.covid19tracking.narrativa.com/api/ecuador',
        today_confirmed: '100,205',
      },
      {
        id: 'brazil',
        name: 'Brazil',
        image: 'https://api.covid19tracking.narrativa.com/api/brazil',
        today_confirmed: '600,221',
      },
    ];

    const action = { type: GET_COUNTRIES, payload: state };
    const result = countriesReducer(initialState, action);
    expect(result).toEqual(state);
  });
});

describe('Check element id', () => {
  test('When Get Countries is executed, the id of an element should match the one in the initial state', () => {
    const initialState = [];
    const state = [
      {
        id: 'peru',
        name: 'Peru',
        image: 'https://api.covid19tracking.narrativa.com/api/peru',
        today_confirmed: '300,201',
      },
      {
        id: 'ecuador',
        name: 'Ecuador',
        image: 'https://api.covid19tracking.narrativa.com/api/ecuador',
        today_confirmed: '100,205',
      },
      {
        id: 'brazil',
        name: 'Brazil',
        image: 'https://api.covid19tracking.narrativa.com/api/brazil',
        today_confirmed: '600,221',
      },
    ];

    const action = { type: GET_COUNTRIES, payload: state };
    const result = countriesReducer(initialState, action);
    const ecuador = state[1].id;
    expect(result[1].id).toEqual(ecuador);
  });
});
