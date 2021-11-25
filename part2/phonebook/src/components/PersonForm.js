import React, { useState } from 'react'

const PersonForm = ({persons, setPersons}) => {
    
    const [newName, setNewName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const personObj = {
          name: newName,
          number: phoneNumber,
          id: persons.length+1
        }
        persons.reduce((boolean, x) => x.name === personObj.name || boolean, false) ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(personObj))
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