const baseUrl = 'https://mapsvg.com/static/maps/geo-calibrated';

const normalizeName = (name) => {
  let result = name;
  switch (result) {
    case 'us':
      return 'usa';
    case 'korea,_south':
      return 'south-korea';
    case 'brunei':
      return 'brunei-darussalam';
    default:
      result = result.replace(/_/, '-').replace(/\*/g, '');
      if (result === 'bosnia-and-herzegovina') return 'bosnia-herzegovina-2';
      return name;
  }
};

const getMapUrl = (countryName) => {
  const normalizedName = normalizeName(countryName);
  return `${baseUrl}/${normalizedName}.svg`;
};

export { normalizeName, getMapUrl };
