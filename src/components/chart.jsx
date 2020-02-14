import React from 'react'
import CityName from './CityName'
import {ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

const RenderLineChart = (props) => {
  return (
    <div className="chartWrap">
      <h2><CityName city={props.city}/>現在から24時間の気温</h2>
      <ResponsiveContainer width="100%" height="80%">
      <LineChart data={props.forecast} margin={{top: 25, right: 50, left: 15, bottom: 75}}>
        <Line type="monotone" dataKey="temp" stroke="#fff" />
        <CartesianGrid stroke="#fff" strokeDasharray="5 5" />
        <Tooltip labelStyle={{color: "#1565C0"}} itemStyle={{color: "#1565C0"}}/>
        <XAxis dataKey="time" stroke="#fff" />
        <YAxis stroke="#fff" unit="℃" />
      </LineChart>
    </ResponsiveContainer>
    </div>
  )
}
export default RenderLineChart