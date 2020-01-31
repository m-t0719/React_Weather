import React, {Component} from 'react'

const Button = (props) => {
  return(
    <button className={props.btn} onClick={() => props.toggle_btn()}>
      <span></span>
    </button>
  )
}

export default Button