import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const ButtonBox = ({clickGood, clickNeutral, clickBad}) => {
  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button text="good" handleMouse={clickGood}/>
      <Button text="neutral" handleMouse={clickNeutral}/>
      <Button text="bad" handleMouse={clickBad}/>
    </div>
  )
}

const StatisticsBox = ({good, neutral, bad}) => {
  let positive = 0; 
  let average = 0;

  if(good > bad) average = 1
  else if(good < bad) average = -1;
  else average = 0;

  if(good === 0) {
    positive = 0;
  } else {
    positive = good * 100 / (good + neutral + bad);
  }
  return(
    <div>
      <h2>Statistics</h2>
      <p>Good: <span>{good}</span></p>
      <p>Neutral: <span>{neutral}</span></p>
      <p>Bad: <span>{bad}</span></p>
      <p>All: {good + neutral + bad}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive}%</p>

    </div>
  )
}

const Button = ({text, handleMouse}) => <button onClick = {handleMouse}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <ButtonBox clickGood = {increaseGood} clickNeutral={increaseNeutral} clickBad = {increaseBad}/>
      <StatisticsBox good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)