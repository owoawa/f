import React from 'react'
import connectionService from '../services/Connection'

const Persons = ({persons, newFilter, setPersons}) => {
  
  const removeById = (person) => {
    window.confirm(`Delete ${person.name}?`) ? connectionService.deletePerson(person.id).then(r => setPersons(persons.filter(x => x.id !== person.id))) : console.log('no')
  
    // console.log(persons)
  }

  return (
   
    <div>
        {console.log(persons)}
        {persons.map(p => {
        if (p.name.toLowerCase().includes(newFilter.toLowerCase())) {
          return <p key={p.id}>{p.name} {p.number} <button onClick={() => removeById(p)}> delete </button></p>
        }
        else return ''
      })}
    </div>
  )
}

export default Persons