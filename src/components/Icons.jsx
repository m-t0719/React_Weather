import React from 'react'
import Clear from './clear.png'
import Cloud from './cloud.png'
import Rain from './rain.png'

const ReturnWeatherIcon = (props) => {
  if(props.weather === 'Clear') {
    return(
      <div className="WeatherImg Clear">
        <img src={Clear} alt="晴れ"/>
      </div>
    )
  }
  else if(props.weather === 'Clouds') {
    return(
      <div className="WeatherImg Cloud">
        <img src={Cloud} alt="曇り"/>
      </div>
    )
  }
  else if(props.weather === 'Rain') {
    return(
      <div className="WeatherImg Rain">
        <img src={Rain} alt="雨"/>
      </div>
    )
  }
  else {
    return(
    <p>{props.weather}</p>
    )
  }
}

export default ReturnWeatherIcon