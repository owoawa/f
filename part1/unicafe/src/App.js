import React, { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}
const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <th>{text}</th> 
      <td>{value}</td>
    </tr>
  )
}
const Statistics = ({good, neutral, bad}) => {
  const average = (1*good + (-1*bad)) / (good+neutral+bad)
  const positive = (good*100)/(good+neutral+bad)
  const allOfIt = good+neutral+bad

  if (allOfIt === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={allOfIt} />
        <StatisticLine text='average' value={average} />
        <StatisticLine text='positive' value={positive+'%'} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good+1)
  const addNeutral = () => setNeutral(neutral+1)
  const addBad = () => setBad(bad+1)

  return (
    <div>
      <h1> give feedback </h1>
      <Button onClick={addGood} text='good' />
      <Button onClick={addNeutral} text='neutral' />
      <Button onClick={addBad} text = 'bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App