import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const PopularAnecdote = ({anecdotes, votes}) => {
  let mostVotes = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      most votes - {anecdotes[mostVotes]}
      <div>has {votes[mostVotes]} votes</div>
    </div>
  );
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <div>has {votes[selected]} votes</div>
      <br />
      <button 
        onClick={() => {
          const copy = [...votes];
          copy[selected] += 1
          setVotes(copy)
        }}
      >
        vote
      </button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>
      <PopularAnecdote votes={votes} anecdotes={anecdotes}/>
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