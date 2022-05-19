import { useState } from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

const MapImage = (props) => {
  const {
    src,
    alt,
    imageClassName,
    iconClassName,
  } = props;

  const [error, setError] = useState(false);
  const onError = () => {
    setError(true);
  };

  if (error) {
    return <Icon icon="carbon:location-filled" width="80" height="80" className={iconClassName} />;
  }
  return <img src={src} className={imageClassName} alt={alt} onError={onError} />;
};

MapImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imageClassName: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
};

export default MapImage;
