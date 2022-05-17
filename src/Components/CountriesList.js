import CountryItem from './CountryItem';

const CountriesList = () => {
  const countries = [
    {
      id: '1',
      name: 'Peru',
      cases: 1000,
    },
    {
      id: '2',
      name: 'Italy',
      cases: 1300,
    },
    {
      id: '3',
      name: 'Spain',
      cases: 1200,
    },
  ];

  return (
    countries.map((country) => (
      <CountryItem key={country.id} country={country} />
    ))
  );
};

export default CountriesList;
