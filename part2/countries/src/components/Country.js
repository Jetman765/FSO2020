import React from 'react';
import Weather from './Weather';

const Country = ({country}) => {
  const {name, capital, population, languages, flag} = country;
  return (
    <div>
      <h1>{name}</h1>

      <div>capital: {capital}</div>
      <div>population: {population}</div>

      <h2>languages</h2>
      <ul>
        {languages.map(language => <li>{language.name}</li>)}
      </ul>

      <img src={flag} alt={name} width="180" height="100" />

      {/* <Weather capital={capital} /> */}
    </div>
  )
}

export default Country;