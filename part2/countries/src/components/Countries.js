import React from 'react';
import Country from './Country';

const Countries = ({filterCountries, setDisplayCountry, displayCountry}) => { 
  const displayResults = (filterCountries) => {

    if (displayCountry) {
      return <Country country={displayCountry} />
    }

    if (filterCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>
    }

    if (filterCountries.length === 1) {
      return <Country country={filterCountries[0]} />
    }

    return filterCountries.map(country => <div>{country.name} <button onClick={() => handleButtonClick(country)}>Show</button></div>)
  }

  const handleButtonClick = country => {
    setDisplayCountry(country);
  }
  

  return (
    <div>
      {displayCountry ? displayResults(displayCountry) : displayResults(filterCountries)}
    </div>
  );
}

export default Countries;