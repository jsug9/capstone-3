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
    {
      id: '4',
      name: 'Argentina',
      cases: 1200,
    },
    {
      id: '5',
      name: 'France',
      cases: 1200,
    },
    {
      id: '6',
      name: 'China',
      cases: 1200,
    },
  ];

  return (
    <div className="countriesList">
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;
