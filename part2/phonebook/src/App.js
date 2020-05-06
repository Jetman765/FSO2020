import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('');
  const [ filterName, setFilterName ] = useState('');
  const [ filterResults, setFilterResults ] = useState([]);

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }
    persons.filter(person => person.name === newName).length > 0
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(newPerson));
    setNewName('');
  }

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleNewNameFilter = (event) => {
    setFilterName(event.target.value);
    setFilterResults(persons.filter(person => person.name.includes(filterName.toLowerCase())))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with {<input value={filterName} onChange={handleNewNameFilter} />}
      <h2>add new person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNewName} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNewNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterResults.length > 0
        ? filterResults.map(person => <div key={person.name}>{person.name} - {person.number}</div>)
        : persons.map(person => <div key={person.name}>{person.name} - {person.number}</div>)
      }
    </div>
  )
}

export default App