import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const Filter = ({ filterTerm, handleFilterTermChange }) => {
//   return (
//     <div>
//       find countries {<input value={filterTerm} onChange={handleFilterTermChange} />}
//     </div>
//   );
// }

const Countries = ({ filterCountries }) => {
  const displayResults = (filterCountries) => {
    if (filterCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>
    }

    if (filterCountries.length === 1) {
      const country = filterCountries[0]
      console.log(country)
      return (
        <div>
          <h1>{country.name}</h1>

          <div>capital: {country.capital}</div>
          <div>population: {country.population}</div>

          <h2>languages</h2>
          <ul>
            {country.languages.map(language => <li>{language.name}</li>)}
          </ul>

          <img src={country.flag} alt={country.name} width="180" height="100" />
        </div>
      );
    }

  return filterCountries.map(country => <div>{country.name}</div>)
  }
  return (
    <div>
      {displayResults(filterCountries)}
    </div>
  );
}


const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterCountries, setFilterCountries] = useState([]);

  const getCountries = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(resp => {
        setCountries(resp.data)
      })
  }

  useEffect(getCountries, [])

  const handleFilterNameChange = event => {
    setFilterName(event.target.value);
    setFilterCountries(countries.filter(country => country.name.toLowerCase().includes(filterName.toLowerCase())))
  }

  return (
    <div>
      <h1>Countries</h1>
      {/* <Filter filterName={filterName} handleFilterNameChange={handleFilterNameChange} /> */}
      filter: <input value={filterName} onChange={handleFilterNameChange} />
      <Countries filterCountries={filterCountries} /> 
    </div>
  );
}

export default App;