import { getMapUrl } from '../API/MapsAPI';

const ObjectGenerator = (object) => {
  let newObj = {};
  newObj = {
    id: object.name,
    name: 'All Countries',
    image: getMapUrl('world'),
    today_confirmed: object.today_confirmed.toLocaleString(),
    today_deaths: object.today_deaths.toLocaleString(),
    today_recovered: object.today_recovered.toLocaleString(),
    source: object.source,
    today_open_cases: object.today_open_cases,
  };

  return newObj;
};

export default ObjectGenerator;
