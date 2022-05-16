import { formattedDate } from '../Logic/DateFormatter';

const baseUrl = 'https://api.covid19tracking.narrativa.com/api';

const fetchCountries = async () => {
  const result = await fetch(`${baseUrl}/${formattedDate}`);
  const data = await result.json();
  return data;
};

const fetchRegions = async (country) => {
  const result = await fetch(`${baseUrl}/${formattedDate}/country/${country}`);
  const data = await result.json();
  // return { countryData: data.dates[formattedDate].countries };
  return data;
};

export { fetchCountries, fetchRegions };
