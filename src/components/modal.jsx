import React from 'react'

const modal = (props) => {
  const modalClose = () => {
    props.onClick()
  }
  return(
    <div className={props.modal_state}>
      <h2>MyWeatherについて</h2>
      <p>MyWeatherはOpenWeather様
        <a href="https://openweathermap.org/" target="brank">https://openweathermap.org/</a>
        が配信しているAPIを使って<br />
        今現在の天気予報と１日の気温の推移をすぐにチェックできるWebサイトです</p>
      <div className="close_modal_button" onClick={modalClose}><span /></div>
    </div>
  )
}

export default modal