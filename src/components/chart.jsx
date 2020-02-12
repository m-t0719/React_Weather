import React from 'react'
import {ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 500, pv: 3400, amt: 2400 },
  { name: 'Page C', uv: 450, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 320, pv: 2400, amt: 2400 },
  { name: 'Page E', uv: 200, pv: 2400, amt: 2400 },
  { name: 'Page F', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page G', uv: 300, pv: 2400, amt: 2400 }
]

const RenderLineChart = () => {
  return (
    <ResponsiveContainer width="90%" height="80%">
      <LineChart data={data} >
        <Line type="monotone" dataKey="uv" stroke="#fff" />
        <CartesianGrid stroke="#fff" strokeDasharray="2 2" />
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" unit="℃" />
      </LineChart>
    </ResponsiveContainer>
  )
}
export default RenderLineChart