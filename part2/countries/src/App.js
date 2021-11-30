import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './compontents/Filter'
import Countries from './compontents/Countries'

const App = () => {
  
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')
  
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(r => setCountries(r.data))
  },[])
  

  return (
    <div>
      <Filter setFilter={setFilter} />
      <Countries countries={countries} filter={filter} setFilter={setFilter} />
    </div>
  )
}

export default App;
