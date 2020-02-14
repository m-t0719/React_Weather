import React from 'react'
import Gear from './gear.png'

const Button = (props) => {
  const openNavigation = () => {
    props.onClick()
  }
  return(
    <div className={props.btn} onClick={openNavigation}>
      <img src={Gear} alt="設定" />
    </div>
  )
}

export default Button