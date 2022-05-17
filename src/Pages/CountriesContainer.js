import CountriesList from '../Components/CountriesList';

const CountriesCountainer = () => (
  <div>
    <div className="summary">
      <div className="summary-left">
        <p>All Cases</p>
        <p>10000</p>
      </div>
    </div>
    <div className="searchDiv">
      <h1>Stats by Country</h1>
      <input type="text" placeholder="Search Country" />
    </div>
    <CountriesList />
  </div>
);

export default CountriesCountainer;
