import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Headline = (props) => (
  <h1>{props.text}</h1>
)

const Button = (props) => (
  <span>
    <button onClick={props.handler}>{props.text}</button>
  </span>
)

const Info = (props) => (
  <div>
    has {props.points[props.selected]} points
  </div>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const initialArray = Array.apply(
    null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0);
  const [points, setPoints] = useState(initialArray)

  const vote = () => {
    const copy = [...points];
    copy[selected] += 1
    setPoints(copy)
  }

  const selectRandom = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
  }

  const mostVotes = () => {
    let max = 0;
    for (let i = 0; i < points.length; i++) {
      if (points[i] > points[max]) max = i; 
    }
    return max;
  }

  return (
    <div>
      <Headline text="Anecdote of the day" />
      {props.anecdotes[selected]}
      <Info points={points} selected={selected} />
      <Button handler={vote} text="vote" />
      <Button handler={selectRandom} text="next" />
      <Headline text="Anecdote with the most votes" />
      {props.anecdotes[mostVotes()]}
    </div>
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