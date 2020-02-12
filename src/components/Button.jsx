import React from 'react'
import Gear from './gear.png'

const Button = (props) => {
  return(
    <div className={props.btn} onClick={props.onClick}>
      <img src={Gear} alt="設定" />
    </div>
  )
}

export default Button