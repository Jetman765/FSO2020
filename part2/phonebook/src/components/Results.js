import React from 'react';

const Results = ({ persons, filterResults }) => {
  return (
    <div>
      {filterResults.length > 0
        ? filterResults.map(person => <div key={person.name}>{person.name} - {person.number}</div>)
        : persons.map(person => <div key={person.name}>{person.name} - {person.number}</div>)
      }
    </div>
  )
}

export default Results;