import React, { useState } from 'react'
import ReactDOM from 'react-dom'



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
    return (good / all) * 100
  }

  const positive = cntPositive(good, all)


  return (
    <>
      <h1>give feedback</h1>
      <button onClick={incGoodOne}>good</button>
      <button onClick={incNeutralOne}>neutral</button>
      <button onClick={incBadOne}>bad</button>
      <h1>statistics</h1>
      <Display good={good} neutral={neutral} bad={bad} all={all} avarage={avarage} positive={positive} />
      
    </>
  )
}

const Display = (props) => {
  return (
    <>
      Good {props.good} <br />
      Neutral {props.neutral}<br />
      Bad {props.bad}<br />
      All {props.all}<br />
      Avarage {props.avarage}<br />
      Positive {props.positive} %
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)