import React, { useState, useEffect } from 'react'
import phonebook from './services/phonebook';
import Filter from './components/Filter'
import Form from './components/Form'
import Results from './components/Results'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('');
  const [ filterName, setFilterName ] = useState('');
  const [ filterResults, setFilterResults ] = useState([]);

  useEffect(() => {
    phonebook
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }
    persons.filter(person => person.name === newName).length > 0
      ? alert(`${newName} is already added to phonebook`)
      : phonebook.addPerson(newPerson)
          .then(newPerson => {
            setPersons(persons.concat(newPerson))
          })
    setNewName('');
  }

  const deletePerson = ({name, id}) => {
    phonebook.deletePerson({name,id})
    
    setTimeout(() => {
      phonebook
      .getAll()
      .then(persons => setPersons(persons))
    }, (100));
    
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
      <Results persons={persons} filterResults={filterResults} deletePerson={deletePerson} />
    </div>
  )
}

export default App