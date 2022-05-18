import { Icon } from '@iconify/react';
import MapImage from '../Components/MapImage';

const renderImage = (country, kind) => {
  let alt = '';
  let imageClassName = '';
  let iconClassName = '';
  let size = '';

  if (kind === 'world') {
    alt = 'World Image';
    imageClassName = 'worldImage';
    iconClassName = 'allCountriesMap';
    size = '70';
  } else {
    alt = 'Country Image';
    imageClassName = 'countryImage';
    iconClassName = 'mapIcon';
    size = '50';
  }

  if (country?.image) {
    return (
      <MapImage src={country.image} alt={alt} className={imageClassName} />
    );
  }
  return <Icon icon="carbon:location-filled" width={size} height={size} className={iconClassName} />;
};

export default renderImage;
