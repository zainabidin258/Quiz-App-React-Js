import React, { useContext } from 'react'
import { useState } from 'react'
import { QuizContext } from '../Helpers/Context'
import "../Styles/App.css"
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
      <h1>Quiz Finished</h1>
      <h3> {score} / {Questions.length} </h3>
      <button onClick={restartQuiz}> Restart Quiz</button>
    </div>
  )
}

export default Result
