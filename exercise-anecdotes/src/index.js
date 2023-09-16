import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

const root = document.getElementById("root");
const rootElement = createRoot(root);

const Button = ({ text, handleMouse }) => (
  <button onClick={handleMouse}>{text}</button>
  );

  
  const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const giveVote = () => setPoints(()=>{
    let newPoints = points
    newPoints[selected] += 1;
    console.log('points :>> ', points);
    return newPoints;
  })

  console.log('points :>> ', points);

  const getRandomIndex = () => setSelected(()=> {
    let randomIndex = Math.floor(Math.random() * anecdotes.length)
    if(randomIndex === selected) randomIndex = Math.floor(Math.random() * anecdotes.length) //conditional that prevents the random number from being repeated again if it was already selected

    return randomIndex;
  }
  )

  
  console.log('select :>> ', selected);
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Button text="Next Anecdote" handleMouse={getRandomIndex} />
      <Button text="Vote" handleMouse={giveVote} />
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


rootElement.render(<App anecdotes={anecdotes} />);
console.log('anecdote.length:>> ', anecdotes.length);