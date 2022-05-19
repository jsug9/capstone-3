import PropTypes from 'prop-types';

const SearchCountry = (props) => {
  const { searchCountry, updateSearchCountry } = props;

  return (
    <div className="searchDiv">
      <h2>Stats by Country</h2>
      <input
        type="text"
        placeholder="Search Country"
        className="countryInput"
        value={searchCountry}
        onChange={updateSearchCountry}
      />
    </div>
  );
};

SearchCountry.propTypes = {
  searchCountry: PropTypes.string.isRequired,
  updateSearchCountry: PropTypes.func.isRequired,
};

export default SearchCountry;
