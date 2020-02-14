import React from 'react'

const Prefectures = (props) => {
  const states = [
    { value: null, name: '地域選択'},
    { value: 'Hokkaido', name: '北海道' },
    { value: 'Tokyo', name: '東京' },
    { value: 'Kanagawa', name: '神奈川'},
    { value: 'Shizuoka', name:'静岡'},
    { value: 'Nagoya', name:'名古屋'},
    { value: 'Kobe', name:'神戸'},
    { value: 'Osaka', name: '大阪' },
    { value: 'Fukuoka', name: '福岡'},
    { value: 'Kagawa', name: '香川'},
    { value: 'Okinawa', name: '沖縄'}
  ]
  const options = states.map(
    (d) => (
      <option key={d.value} value={d.value}>
        {d.name}
      </option>
    )
  )
  return (
    <div className="prefectures">
      <form>
        <select value={props.prefectures_value} onChange={props.onChange}>
          {options}
        </select>
      </form>
    </div>
  )
}

export default Prefectures