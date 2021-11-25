import React from 'react'

const Persons = ({persons, newFilter}) => {
    return (
    <div>
        {persons.map(p => {
        if (p.name.toLowerCase().includes(newFilter.toLowerCase())) {
          return <p key={p.id}>{p.name} {p.number}</p>
        }
        else return ''
      })}
    </div>
    )
}

export default Persons