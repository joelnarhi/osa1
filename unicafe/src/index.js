import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = (props) => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incGoodOne = () => setGood(good + 1)
  const incNeutralOne = () => setNeutral( neutral + 1)
  const incBadOne = () => setBad(bad + 1)



  return (
    <>
      <h1>give feedback</h1>
      <button onClick={incGoodOne}>good</button>
      <button onClick={incNeutralOne}>neutral</button>
      <button onClick={incBadOne}>bad</button>
      <h1>statistics</h1>
      <Display good={good} neutral={neutral} bad={bad} />
      
    </>
  )
}

const Display = (props) => {
  return (
    <>
      Good {props.good} <br />Neutral {props.neutral}<br />Bad {props.bad}
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)