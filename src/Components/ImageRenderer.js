import { Icon } from '@iconify/react';
import MapImage from './MapImage';

const renderImage = (country, kind) => {
  let alt = '';
  let imageClassName = '';
  let iconClassName = '';
  let size = '';

  if (kind === 'top') {
    alt = 'World Image';
    imageClassName = 'worldImage';
    iconClassName = 'allCountriesMap';
    size = '80';
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
