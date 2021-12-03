import React, { useState, useEffect } from 'react'
import connectionService from './services/Connection'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    connectionService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setNewFilter={setNewFilter} />
      <h2> add a new </h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} setPersons={setPersons} />
    </div>
  )
}

export default App