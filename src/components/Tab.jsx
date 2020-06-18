import React from "react"
import { NavLink } from "react-router-dom"

const Tab = () => {
  return (
    <div className="tab">
      <NavLink exact activeStyle={{ backgroundColor: "#1565C0", color: "#fff" }} to="/">
        <input type="radio" name="tab" id="/" />
        <label htmlFor="/">Now</label>
      </NavLink>
      <input type="radio" name="tab" id="/today" />
      <NavLink exact to="/today" activeStyle={{ backgroundColor: "#1565C0", color: "#fff" }}>
        <label htmlFor="/today">Today</label>
      </NavLink>
    </div>
  )
}

export default Tab
