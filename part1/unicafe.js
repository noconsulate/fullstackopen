import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Headline = (props) => (
  <h1>{props.text}</h1>
)

const Button = (props) => (
  <span>
    <button onClick={props.handleClick}>{props.text}</button>
  </span>
)

const Stat = (props) => (
  <tr><td>{props.text}</td><td>{props.stat}</td></tr>
)

const Statistics = (props) => (
  <table><tbody>
  <Stat text='good' stat={props.good} />
  <Stat text='neuatral' stat={props.neutral} />
  <Stat text='bad' stat={props.bad} />
  <Stat text='all' stat={props.all} />
  <Stat text='average' stat={props.average} />
  <Stat text='positive' stat={props.positive + ' %'}/>
  </tbody>
  </table>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const plusGood = () => () => { setGood(good + 1)}
  const plusNeutral = () => () => {setNeutral(neutral + 1)}
  const plusBad = () => () => {setBad(bad + 1)} 

  const findAverage = () => {
    if (good === bad) {
      return 0;
    } else if (bad === 0) {
      return 1;
    } else if (good === 0) {
      return -1;
    } else if (good > bad) {
      return good / (good + bad)
    } else return bad / (good + bad)
  }

  const positive =() => {
    if (good === 0) {
      return 0;
    } else {
      return good / (good + bad)
    }
  }

  if (good === 0 && bad === 0 && neutral === 0) return (
    <div>
      <Headline text='gibs feedback' />
      <Button text='good' handleClick={plusGood()} />
      <Button text='nuetral' handleClick={plusNeutral()}/>
      <Button text='bad' handleClick={plusBad()} />
      <Headline text='no feedback given' />
    </div>
  )

  return (
    <div>
      <Headline text='gibs feedback' />
      <Button text='good' handleClick={plusGood()} />
      <Button text='nuetral' handleClick={plusNeutral()}/>
      <Button text='bad' handleClick={plusBad()} />
      <Headline text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad}
        all={good + neutral + bad} average={findAverage()}
        positive={positive()}  />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))