import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Wrapper from './Wrapper'
import Modal from './modal'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prefectures_value: null, // PHPに送信される位置情報
      temp: null,
      tempMin: null,
      tempMax: null,
      city: null,
      weather: null,
      btn: 'btn',
      nav: 'close',
      modal_state: 'modal_close'
    }
    // 子コンポーネントへの関数受け渡し
    this.toggle_nav = this.toggle_nav.bind(this)
    this.toggle_modal = this.toggle_modal.bind(this)
    this.select_prefectures = this.select_prefectures.bind(this)
  }

  componentDidUpdate() {
    // PHPへfetch　気象情報を受け取る
    fetch('http://localhost/myweather_server/get_openweathermap.php', {
      method: 'POST',
      mode: 'cors',
      // JSONでstateをPHPに送信
      body: JSON.stringify({
        prefecture: this.state.prefectures_value
      })
    })
      .then((res) => res.json())
      .then((json) => this.setState({
        temp: json.main.temp + '℃',
        temp_min: json.main.tempMin + '℃',
        temp_max: json.main.tempMax + '℃',
        city: json.name,
        weather: json.weather[0].main
      })
      )
      .catch((error) => console.log(error))
  }

  // ナビゲーション展開切り替え
  toggle_nav() {
    if (this.state.btn === 'btn') {
      this.setState({
        btn: 'open',
        nav: 'open_nav'
      })
    } else {
      this.setState({
        btn: 'btn',
        nav: 'close'
      })
    }
  }
  // モーダルウィンドウ展開切り替え
  toggle_modal() {
    if (this.state.modal_state === 'modal_close') {
      this.setState({
        modal_state: 'modal_window'
      })
    } else {
      this.setState({
        modal_state: 'modal_close'
      })
    }
  }
  select_prefectures(event) {
    // console.log(event.target.value)
    this.setState({ prefectures_value: event.target.value })
  }

  render() {
    return (
      <div>
        <Header
          btn={this.state.btn}
          onClick={this.toggle_nav}
        />
        <Nav
          nav={this.state.nav}
          onClick={this.toggle_modal}
          onChange={this.select_prefectures}
        />
        <Modal
          modal_state={this.state.modal_state}
          onClick={this.toggle_modal}
        />
        <Wrapper
          temp={this.state.temp}
          tempMin={this.state.tempMin}
          tempMax={this.state.tempMax}
          city={this.state.city}
          weather={this.state.weather}
        />
      </div>
    )
  }
}

export default App