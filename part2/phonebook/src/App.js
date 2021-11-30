import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(r => setPersons(r.data))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setNewFilter={setNewFilter} />
      <h2> add a new </h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App