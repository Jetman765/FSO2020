import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  const {good, neutral, bad} = props;
  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad);
  const positive = good / (good + neutral + bad);

  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )}

  return (
    <div>
      <h1>statistics</h1>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={total} />
      <Statistic text="average" value={average} />
      <Statistic text="positive" value={positive} />
    </div>
  );
}

const Statistic = (props) => {
  const {text, value} = props;

  return <div>{text} {value}</div>
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)} >good</button>
      <button onClick={() => setNeutral(neutral + 1)} >neutral</button>
      <button onClick={() => setBad(bad + 1)} >bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))