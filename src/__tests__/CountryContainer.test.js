import renderer from 'react-test-renderer';
import MockAppComponent from '../__mocks__/App';
import * as Redux from '../Redux/countries/CountriesReducer';
import '@testing-library/jest-dom';
import countriesArray from '../__mocks__/CountriesArray.mock';

jest.spyOn(Redux, 'getCountries')
  .mockImplementation(() => (Redux.dispatchCountries(countriesArray)));

describe('Render App', () => {
  test('Assert snapshot', () => {
    const appSnap = renderer.create(
      <MockAppComponent />,
    ).toJSON();
    expect(appSnap).toMatchSnapshot();
  });
});
