import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Nav from './Nav'
import Wrapper from './Wrapper'
import Main_nav from './Main_nav'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      btn: null,
      nav: 'close'
    }
  }
  toggle_btn() {
    if(this.state.btn === null) {
      this.setState({
        btn: 'open',
        nav: 'open_nav'
      })
    } else {
      this.setState({
        btn: null,
        nav: 'close'
      })
    }
  }
  render() {
    return(
      <div>
        <Header btn={this.state.btn} toggle_btn={() => this.toggle_btn() } />
        <Nav nav={this.state.nav} />
        <Main_nav />
        <Wrapper />
      </div>
    )
  }
}

export default App