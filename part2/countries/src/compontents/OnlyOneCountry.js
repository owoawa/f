import React, { useEffect, useState } from 'react'
import Weather from './Weather'
import axios from 'axios'

const OnlyOneCountry = ({country}) => {
    const [getWeather, setWeather] = useState([])
    const apiKey = process.env.REACT_APP_API_KEY
    
    useEffect(() => {
        axios.get("http://api.weatherstack.com/current?access_key="+apiKey+"&query="+country.capital).then(r => setWeather(r.data))
      },[])
    console.log(getWeather)

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>languages</h2>
            <ul>
             {Object.values(country.languages).map((l,i) => <li key={i}>{l}</li>)}
            </ul>
            <img src={country.flags.png} alt="png"></img>
            {getWeather.length !==0 && <Weather getWeather={getWeather} />}
        </div>
    )
}

export default OnlyOneCountry