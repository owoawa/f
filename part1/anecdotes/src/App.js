import React, { useState } from 'react'

const BestAnecdote = ({points, anecdotes}) => {
  if (Math.max(...points) === 0) return <p>No votes!</p>
  const bestIndex = points.indexOf(Math.max(...points))
  return (
    <div>
      <p>{anecdotes[bestIndex]}</p>
      <p>has {Math.max(...points)} votes</p>
    </div>
  )
  

}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const randomAnk = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const voteAnk = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>{points[selected]}</p>
      <button onClick={randomAnk}>next anecdote</button>
      <button onClick={voteAnk}>vote </button>
      <h1>Anecdote with most votes</h1>
      <BestAnecdote points={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App