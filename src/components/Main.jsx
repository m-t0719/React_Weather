import React from 'react'
import Icon from './Icons'

const Main = (props) => {
  return(
    <div className="Main">
      <div className="text_date">
        <p className="city">{props.city}</p>
        <p className="celsius">{props.temp}</p>
      </div>
      <Icon weather={props.weather}/>
    </div>
  )
}

export default Main