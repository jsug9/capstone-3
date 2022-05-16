import { formattedDate } from '../Logic/DateFormatter';

const baseUrl = 'https://api.covid19tracking.narrativa.com/api';

const fetchCountries = async () => {
  const result = await fetch(`${baseUrl}/${formattedDate}`);
  const data = await result.json();
  return data;
};

const fetchRegions = async (region) => {
  const result = await fetch(`${baseUrl}/${formattedDate}/country/${region}`);
  const data = await result.json();
  return data;
};

export { fetchCountries, fetchRegions };
