import React, {Component} from 'react'
import Button from './Button'

const Header = (props) => {
  return(
    <header>
      <h1 className="Logo">Logo</h1>
      <Button btn={props.btn}  toggle_btn={props.toggle_btn}/>
    </header>
  )
}

export default Header