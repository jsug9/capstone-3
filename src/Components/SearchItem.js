import PropTypes from 'prop-types';

const SearchItem = (props) => {
  const { item, searchItem, updateSearchItem } = props;

  const placeholder = `Search ${item}`;

  return (
    <div className="searchDiv">
      <h2>
        Stats by
        {' '}
        {item}
      </h2>
      <input
        type="text"
        placeholder={placeholder}
        className="countryInput"
        value={searchItem}
        onChange={updateSearchItem}
      />
    </div>
  );
};

SearchItem.propTypes = {
  item: PropTypes.string.isRequired,
  searchItem: PropTypes.string.isRequired,
  updateSearchItem: PropTypes.func.isRequired,
};

export default SearchItem;
