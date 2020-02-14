import React from 'react'
import Prefectures from './Prefectures'

const Nav = (props) => {
  const toggleModal = () => {
    props.onClick()
  }
  return(
    <nav className={props.nav}>
      <div className="navigation_wrap">
        <p onClick={toggleModal}>About</p>
        <Prefectures onChange={props.onChange}/>
      </div>
    </nav>
  )
}

export default Nav