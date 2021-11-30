import React from 'react'

const Weather = ({getWeather}) => {
    
    return (
        <div>
            <p><b>temperature: </b> {getWeather.current.temperature} Celsius</p>
            <img alt="weather" src={getWeather.current.weather_icons[0]}></img>
            <p><b>wind: </b> {getWeather.current.wind_speed} mph direction {getWeather.current.wind_dir}</p>
        </div>
    )
}

export default Weather