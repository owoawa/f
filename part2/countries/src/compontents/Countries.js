import React from 'react'
import OnlyOneCountry from './OnlyOneCountry'

const Countries = ({countries, filter, setFilter}) => {
 
const listThem = countries.reduce((toList, c) => {
    if(c.name.common.toLowerCase().includes(filter.toLowerCase())) { 
        toList.push(c) 
    }
    return toList
},[])



return (
     <div>
        {listThem.length > 10 && <p>Too many matches, specify another filter</p>}
        {listThem.length < 10 && listThem.length !== 1 && listThem.map((l,i) => <p key={i}>{l.name.common} <button onClick={() => setFilter(l.name.common)}>show</button> </p>)}
        {listThem.length === 1 && <OnlyOneCountry country={listThem[0]} />}
     </div>
 )   
}

export default Countries