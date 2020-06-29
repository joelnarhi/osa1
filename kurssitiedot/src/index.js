import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = () => {
    return(
    <h1>{course}</h1>
    )
  }

  const Part = () => {
    return(
      <p>{partname} {excercisename}</p>
    )
  }

  const Content = () => {
    return(
      <>
      <Part partname={part1} excercisename={exercises1} />
      <Part partname={part2} excercisename={exercises2} />
      <Part partname={part3} excercisename={exercises3} />
      </>
    )
  }
  
  const Total = () => {
    return(
      <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>  
      </>
    )
  }

  return (
    <>
      <Header course={course} />
      <Content />
      <Total />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))