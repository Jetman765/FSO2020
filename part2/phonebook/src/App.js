import React, { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Results from './components/Results'

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
    filterName === '' 
      ? setFilterResults([])
      : setFilterResults(persons.filter(person => person.name.includes(filterName.toLowerCase())))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleNewNameFilter={handleNewNameFilter} />
      <h3>add new person</h3>
      <Form 
        addPerson={addPerson} newNumber={newNumber} newName={newName} 
        handleNewName={handleNewName} handleNewNumber={handleNewNumber} 
      />
      <h3>Numbers</h3>
      <Results persons={persons} filterResults={filterResults} />
    </div>
  )
}

export default App