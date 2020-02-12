import React from 'react'
import Prefectures from './Prefectures'

const Nav = (props) => {
  return(
    <nav className={props.nav}>
      <ul className="navigation_wrap">
        <li onClick={props.onClick}>About</li>
        <li>Setting</li>
      </ul>
      <Prefectures onChange={props.onChange}/>
    </nav>
  )
}

export default Nav