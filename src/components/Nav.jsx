import React, {Component} from 'react'

const Nav = (props) => {
  return(
    <nav className={props.nav}>
      <ul>
        <a href="#"><li>マイページ</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>設定</li></a>
      </ul>
    </nav>
  )
}

export default Nav