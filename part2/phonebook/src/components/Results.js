import React from 'react';

const Result = ({name, number, id , deletePerson}) => {
  return <div key={id}>{name} - {number} - <button onClick={() => deletePerson({name, id})}>DELETE</button></div>
}

const Results = ({ persons, filterResults, deletePerson }) => {
  return (
    <div>
      {filterResults.length > 0
        ? filterResults.map(person => {
          return <Result key={person.id} name={person.name} number={person.number} id={person.id} deletePerson={deletePerson}/>
        })
        : persons.map(person => <Result key={person.id} name={person.name} number={person.number} id={person.id} deletePerson={deletePerson} />)
      }
    </div>
  )
}

export default Results;