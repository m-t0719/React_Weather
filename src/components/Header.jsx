import React from 'react'
import Button from './Button'
import Logo from './Logo'

const Header = (props) => {
  return(
    <header>
      <h1 className="logo_space"><a href="/"><Logo /></a></h1>
      <Button btn={props.btn} onClick={props.onClick} />
    </header>
  )
}

export default Header