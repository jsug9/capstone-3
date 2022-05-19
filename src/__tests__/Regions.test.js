import regionsReducer, { GET_REGIONS } from '../Redux/regions/RegionsReducer';

describe('Get Countries', () => {
  test('When Get Countries is executed, it should return a list of countries', () => {
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
