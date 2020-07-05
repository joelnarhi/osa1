import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button =({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  const nextAnec = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const doVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    console.log('I voted', copy[selected])
  }

  const high = Math.max(...points)
  const win = points.findIndex(x => x === high)

  console.log(high)
  

  return (
    <>
    <h1>Anecdote of the day</h1>
    <p>
      {props.anecdotes[selected]}<br />
      has {points[selected]} votes
      </p>
      <Button onClick={doVote} text='vote' />
      <Button onClick={nextAnec} text='Next anecdote' />
    <h1>Anecdote with most votes</h1>
    <p>
      {props.anecdotes[win]}<br />
      has {points[win]} votes
    </p>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)