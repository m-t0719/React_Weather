import React from 'react'
import Icon from './Icons'
import CityName from './CityName'

const Main = (props) => {
  return(
    <div className="Main">
      <div className="text_date">
        <CityName city={props.city} />
        <p className="celsius">{props.temp}</p>
      </div>
      <Icon weather={props.weather}/>
    </div>
  )
}

export default Main