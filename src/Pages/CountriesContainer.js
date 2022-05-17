import CountriesList from '../Components/CountriesList';

const CountriesCountainer = () => (
  <div>
    <h1>Cases by Countries</h1>
    <input type="text" placeholder="Search" />
    <CountriesList />
  </div>
);

export default CountriesCountainer;
