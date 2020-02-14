import React from 'react'
import Main from './Main'
import Chart from './chart'
import Tab from './Tab'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Wrapper = (props) => {
  return(
    <Router>
      <div className="Wrapper">
        <Tab />
        <Route exact path='/' render={({}) => (
          <Main {...props}/>
        )} />
        <Route exact path='/today' render={({}) => (
          <Chart {...props} />
        )} />
      </div>
    </Router>
  )
}

export default Wrapper