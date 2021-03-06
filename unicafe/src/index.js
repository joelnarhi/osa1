import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = props => {
  if (props.all === 0) {
    return (
      <>
      <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
    <table>
    <tbody>
      <StatisticLine text="Good" value={props.good} />
      <StatisticLine text="Neutral" value={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />
      <StatisticLine text="All" value={props.all} />
      <StatisticLine text="Avarage" value={props.avarage} />
      <StatisticLine text="Positive" value={props.positive} />
      </tbody>
      </table>
    </>
  )
}

const Button =({ onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <><tr><td>{text}</td><td>{value}</td></tr></>
)

const App = (props) => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  
  const incGoodOne = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const incNeutralOne = () => {
    setNeutral( neutral + 1)
    setAll(all + 1)
  }
  const incBadOne = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }
  
 
  const cntAvarage = () => {
    return (good - bad) / all
  }

  const avarage = cntAvarage(good, bad, all)

  const cntPositive = () => {
    return (good / all) * 100 + ' %'
  }

  const positive = cntPositive(good, all)

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={incGoodOne} text='good' />
      <Button onClick={incNeutralOne} text='neutral' />
      <Button onClick={incBadOne} text='bad' />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}  all={all} avarage={avarage} positive={positive} />
    </>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)