import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: 1 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('');

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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person => <div key={person.name}>{person.name} - {person.number}</div>)}
    </div>
  )
}

export default App