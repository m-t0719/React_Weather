import React from 'react'
import Logo from './Logo'

const Header = (props) => {
  return(
    <header>
      <h1 className="logo_space"><a href="/"><Logo /></a></h1>
    </header>
  )
}

export default Header