import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterCountries, setFilterCountries] = useState([]);
  const [displayCountry, setDisplayCountry] = useState('');

  const getCountries = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(resp => {
        setCountries(resp.data)
      })
  }

  useEffect(getCountries, [])

  const handleFilterNameChange = event => {
    setDisplayCountry('');
    setFilterName(event.target.value);
    setFilterCountries(countries.filter(country => country.name.toLowerCase().includes(filterName.toLowerCase())))
  }

  return (
    <div>
      <h1>Countries</h1>
      <Filter filterName={filterName} handleFilterNameChange={handleFilterNameChange} />
      <Countries filterCountries={filterCountries} displayCountry={displayCountry} setDisplayCountry={setDisplayCountry} /> 
    </div>
  );
}

export default App;