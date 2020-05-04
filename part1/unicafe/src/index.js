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
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {good + neutral + bad}</div>
      <div>average {(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)}</div>
      <div>positive {good / (good + neutral + bad)} %</div>
    </div>
  );
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