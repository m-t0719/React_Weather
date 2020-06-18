import React from 'react'

const Button = (props) => {
  const openNavigation = () => {
    props.onClick()
  }
  return(
    <div className={props.btn} onClick={openNavigation}>
      <i class="fas fa-cog floatingButton"></i>
    </div>
  )
}

export default Button