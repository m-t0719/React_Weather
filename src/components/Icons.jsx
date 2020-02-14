import React from 'react'
import Clear from './clear.png'
import Cloud from './cloud.png'
import Rain from './rain.png'
import Snow from './snow.png'
import Fog from './fog.png'

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
  else if(props.weather === 'Rain' || props.weather === 'Drizzle') {
    return(
      <div className="WeatherImg Rain">
        <img src={Rain} alt="雨"/>
      </div>
    )
  }
  else if(props.weather === 'Snow') {
    return(
      <div className="WeatherImg Snow">
        <img src={Snow} alt="雪" />
      </div>
    )
  }
  else if(props.weather === 'Mist' || props.weather === 'Fog') {
    return(
      <div className="WeatherImg Fog">
        <img src={Fog} alt="霧"/>
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