import React, { useState } from 'react'
import connectionService from '../services/Connection'

const PersonForm = ({persons, setPersons}) => {
    
    const [newName, setNewName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const personObj = {
          name: newName,
          number: phoneNumber,
          // id: persons.length+1
        }
        const isThere = persons.reduce((boolean, x) => x.name === personObj.name || boolean, false)
        if (isThere) {
          if (window.confirm(`${personObj.name} is already added to phonebook, replace the old number with a new one?`)) {
            const changedObj = persons.find(n => n.name === personObj.name)
            const changedPerson = {...changedObj, number: personObj.number}
            connectionService.update(changedPerson.id, changedPerson).then(r => setPersons(persons.map(x => x.id !== changedPerson.id ? x : r)))
          }
        } else {
          connectionService.create(personObj).then(returnedPerson => setPersons(persons.concat(returnedPerson)))
        }
        setNewName('')
        setPhoneNumber('')
    }


    return (
        <form onSubmit={addPerson}>
        <div>
          name: <input onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input onChange={(event) => setPhoneNumber(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm