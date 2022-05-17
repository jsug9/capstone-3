import CountryItem from './CountryItem';

const CountriesList = () => {
  const countries = [
    {
      id: '1',
      name: 'Peru',
    },
    {
      id: '2',
      name: 'Italy',
    },
    {
      id: '3',
      name: 'Spain',
    },
  ];

  return (
    countries.map((country) => (
      <CountryItem key={country.id} country={country} />
    ))
  );
};

export default CountriesList;
