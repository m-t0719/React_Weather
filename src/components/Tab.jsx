import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Tab = (props) => (
  <div className="tab">
    <input type="radio" name="tab" id="/"/>
    <Link to='/' ><label htmlFor="/">Now</label></Link>
    <input type="radio" name="tab" id="/today"/>
    <Link to='/today' ><label htmlFor="/today">Today</label></Link>
  </div>
)

export default Tab