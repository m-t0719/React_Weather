import React from 'react'

const Prefectures = (props) => {
  const states = [
    { value: null, name: '選択してね'},
    { value: 'hokkaido', name: '北海道' },
    { value: 'tokyo', name: '東京' },
    { value: 'osaka', name: '大阪' }
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