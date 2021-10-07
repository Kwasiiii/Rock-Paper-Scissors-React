import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Game from './components/Game'
import Results from './components/Results'
import Reset from './components/Reset.js'



const App = () => {
  const choices = ['Rock', 'Paper', 'Scissors']

  const [playerChoice, setPlayerChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [result, setResult] = useState('')

  const playerchooses = (e) => {
    setPlayerChoice(e.target.value)
  }
  
  useEffect(() => {
    if (playerChoice === ''){
      setComputerChoice('')
    } else {
      setComputerChoice(choices[Math.floor(Math.random() * choices.length)])
    }
  },[playerChoice, choices])

  console.log(computerChoice)

  useEffect(()=>{
    if (playerChoice === choices[0] && computerChoice === choices[2] || playerChoice === choices[1] && computerChoice === choices[0] || playerChoice === choices[2] && computerChoice === choices[1]) {
      setResult('Player wins!')
    } else if (playerChoice === '' && computerChoice === ''){
      setResult('')
    } else if (playerChoice === computerChoice){
      setResult('Tie Game!')
    } else {
      setResult('Computer wins!')
    }
  })

  const reset = () => {
    setPlayerChoice('')
    setComputerChoice('')
    setResult('')
  }

  return (
    <>
      <div className="gameGrid">
        <Header />
        <Game choices={choices} playerchooses={playerchooses} playerChoice={playerChoice} computerChoice={computerChoice}/>
        <Results result={result}/>
        <Reset reset={reset}/>
      </div>
      
    </>
  )
}

export default App
