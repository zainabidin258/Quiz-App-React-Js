import React, { useContext } from 'react'
import { useState } from 'react'
import { QuizContext } from '../Helpers/Context'
import { Questions } from '../Helpers/Questions'


function Result() {
  const {score , setScore, setGameState} = useContext(QuizContext);
  const restartQuiz = () =>{
    setScore(0);
    setGameState('menu');
  }
  return (
    <div className='EndScreen'>
      {" "}
      <h1>Quiz Ended</h1>
      <h3> {score} / {Questions.length} </h3>
      <button onClick={restartQuiz}> Start Quiz Again</button>
    </div>
  )
}

export default Result
