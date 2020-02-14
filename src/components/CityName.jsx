import React from 'react'

const AlphabetToJapaneseCityName = (props) => {
  if(props.city ===  'Hokkaido') {
    return(
      <p className="city">北海道</p>
    )
  }
  else if(props.city ===  'Tokyo') {
    return(
      <p className="city">東京都</p>
    )
  }
  else if(props.city ===  'Kanagawa') {
    return(
      <p className="city">神奈川県</p>
    )
  }
  else if(props.city ===  'Shizuoka') {
    return(
      <p className="city">静岡県</p>
    )
  }
  else if(props.city ===  'Nagoya') {
    return(
      <p className="city">名古屋</p>
    )
  }
  else if(props.city ===  'Kobe') {
    return(
      <p className="city">神戸市</p>
    )
  }
  else if(props.city ===  'Osaka') {
    return(
      <p className="city">大阪</p>
    )
  }
  else if(props.city ===  'Fukuoka') {
    return(
      <p className="city">福岡県</p>
    )
  }
  else if(props.city ===  'Okinawa') {
    return(
      <p className="city">沖縄県</p>
    )
  }
  else {
    return(
      <p className="city">{props.city}</p>
    )
  }
}

export default AlphabetToJapaneseCityName