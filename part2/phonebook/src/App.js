import React, { useState, useEffect } from 'react'
import connectionService from './services/Connection'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newFilter, setNewFilter ] = useState('')
  const [ newMessage, setMessage] = useState({ message: null, isIt: true})

  useEffect(() => {
    connectionService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={newMessage.message} isIt={newMessage.isIt} />
      <Filter setNewFilter={setNewFilter} />
      <h2> add a new </h2>
      <PersonForm persons={persons} setPersons={setPersons} setMessage={setMessage} />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} setPersons={setPersons}  setMessage={setMessage} />
    </div>
  )
}

export default App