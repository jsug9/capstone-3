import regionsReducer, { GET_REGIONS } from '../Redux/regions/RegionsReducer';

describe('Get Regions', () => {
  test('When Get Regions is executed, it should return a list of regions', () => {
    const initialState = [];
    const state = [
      {
        id: 'arequipa',
        name: 'Arequipa',
        today_confirmed: '20,161',
      },
      {
        id: 'lima',
        name: 'Lima',
        today_confirmed: '12,456',
      },
      {
        id: 'puno',
        name: 'Puno',
        today_confirmed: '122,000',
      },
    ];

    const action = { type: GET_REGIONS, payload: state };
    const result = regionsReducer(initialState, action);
    expect(result).toEqual(state);
  });
});

describe('Check element id', () => {
  test('When Get Regions is executed, the id of an element should match the one in the initial state', () => {
    const initialState = [];
    const state = [
      {
        id: 'arequipa',
        name: 'Arequipa',
        today_confirmed: '20,161',
      },
      {
        id: 'lima',
        name: 'Lima',
        today_confirmed: '12,456',
      },
      {
        id: 'puno',
        name: 'Puno',
        today_confirmed: '122,000',
      },
    ];

    const action = { type: GET_REGIONS, payload: state };
    const result = regionsReducer(initialState, action);
    const arequipa = state[0].id;
    expect(result[0].id).toEqual(arequipa);
  });
});
