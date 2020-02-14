import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Wrapper from './Wrapper'
import Modal from './modal'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prefectures_value: null, // fetchに使う位置情報
      temp: null,
      tempMin: null,
      tempMax: null,
      city: null,
      weather: null,
      forecast: [],
      btn: 'btn',
      nav: 'close',
      modal_state: 'modal_close'
    }
    // 子コンポーネントへの関数受け渡し
    this.toggle_nav = this.toggle_nav.bind(this)
    this.toggle_modal = this.toggle_modal.bind(this)
    this.select_prefectures = this.select_prefectures.bind(this)
  }

  // コンポーネントがマウントされたタイミングで現在、1日の各情報をGETリクエスト
  componentDidMount() {
    this.getCurrentPositionWeatherData()
    this.getCurrentPositionForecastWeatherData()
    console.log('ディでマウント')
  }

  // stateが変更されたタイミングでタイミングで現在、1日の各情報をGETリクエスト
  componentDidUpdate() {
    if (this.state.prefectures_value !== null && this.state.prefectures_value !== this.state.city) {
      this.getTodayWeatherData()
      // this.getForecastWeatherData()
      console.log('アップデート動いてんぞ')
    }
  }

  // 現在位置で現在の気象情報を取得
  getCurrentPositionWeatherData() {
    const url = 'http://api.openweathermap.org/data/2.5/weather'
    const apiId = '8198ed09bde99f82814d310d1f1b1b3d'
    navigator.geolocation.getCurrentPosition((pos) => {
      fetch(`${url}?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&appid=${apiId}`, {
        method: 'GET'
      })
        // jsonを取得後適当なステートに格納していく
        .then(res => res.json())
        .then(json => this.setState({
          temp: json.main.temp + '℃',
          temp_min: json.main.tempMin + '℃',
          temp_max: json.main.tempMax + '℃',
          city: json.name,
          weather: json.weather[0].main
        })
        )
        .catch(error => console.log(error))
    })
  }

  // セレクトボックスで選ばれた地域の現在気象情報取得
  getTodayWeatherData() {
    const url = 'http://api.openweathermap.org/data/2.5/weather'
    const apiId = '8198ed09bde99f82814d310d1f1b1b3d'
    fetch(`${url}?q=${this.state.prefectures_value}&units=metric&appid=${apiId}`)
      .then(res => res.json())
      // jsonを取得後適当なステートに格納していく
      .then(json => this.setState({
        temp: json.main.temp + '℃',
        temp_min: json.main.tempMin + '℃',
        temp_max: json.main.tempMax + '℃',
        city: json.name,
        weather: json.weather[0].main
      })
      )
      .catch(error => console.log(error))
  }

  // 現在位置で1日の天気予報を取得
  getCurrentPositionForecastWeatherData() {
    // 配列になっているstateにsetStateするため配列を複製
    const forecastCopy = this.state.forecast.slice()
    const url = 'http://api.openweathermap.org/data/2.5/forecast'
    const apiId = '8198ed09bde99f82814d310d1f1b1b3d'
    navigator.geolocation.getCurrentPosition((pos) => {
      fetch(`${url}?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&cnt=9&units=metric&appid=${apiId}`, {
        method: 'GET'
      })
        .then(res => res.json())
        .then(json => {
          // jsonから時刻と温度を取り出し
          for(let i = 0; i <= json.list.length - 1; i++) {
            // 時刻をJSTに変換　かつ24を超えていた場合0に戻す
            let Time = ''
            const getJsonTime = parseInt(json.list[i].dt_txt.replace(/(\w+)\-(\w+)\-(\w+)/, ''))
            if(getJsonTime + 9 > 24) {
              Time = getJsonTime + 9 -24
            } else {
              Time = getJsonTime + 9
            }
            // stateに格納するための変数に取り出したデータを入れる
            forecastCopy.push(
              { time: `${Time}:00`, temp: json.list[i].main.temp }
            )
          }
        }
        )
        .catch(error => console.log(error))
    })
    // stateにオブジェクトの入った配列をセット
    this.setState({
      forecast: forecastCopy
    })
  }

  // セレクトボックスで選ばれた地域で1日の天気予報取得
  getForecastWeatherData() {
    const forecastCopy = this.state.forecast.slice()
    fetch(`http://api.openweathermap.org/data/2.5/?q=${this.state.prefectures_value}&cnt=9&units=metric&appid=8198ed09bde99f82814d310d1f1b1b3d`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(json => {
        // jsonから時刻と温度を取り出し
        for(let i = 0; i <= json.list.length - 1; i++) {
          // 時刻をJSTに変換　かつ24を超えていた場合0に戻す
          let Time = ''
          const getJsonTime = parseInt(json.list[i].dt_txt.replace(/(\w+)\-(\w+)\-(\w+)/, ''))
          if(getJsonTime + 9 > 24) {
            Time = getJsonTime + 9 -24
          } else {
            Time = getJsonTime + 9
          }
          // stateに格納するための変数に取り出したデータを入れる
          forecastCopy.push(
            { time: `${Time}:00`, temp: json.list[i].main.temp }
          )
        }
      }
      )
      .catch(error => console.log(error))
    this.setState({
      forecast: forecastCopy
    })
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
          forecast={this.state.forecast}
        />
      </div>
    )
  }
}

export default App