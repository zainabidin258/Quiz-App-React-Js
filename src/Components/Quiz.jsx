import React from 'react'
import { useState , useContext } from 'react'
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/Questions'

function Quiz() {
  const { score , setScore, setGameState }  = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');

  const nextQuestion = () => {
    if(Questions[currentQuestion].asnwer == optionChosen){
      setScore(score + 1)
    }
    setCurrentQuestion(currentQuestion + 1)
  }

  const finishQuiz = () => {
    if(Questions[currentQuestion].asnwer == optionChosen){
      setScore(score + 1)
    }
    setGameState('result')
  }
  return (
    <>
      <div className='Quiz'>
      <h3>
        {Questions[currentQuestion].prompt}
      </h3>
      <div className="options">
        <button 
          onClick={() => setOptions('A')}
        >
          {Questions[currentQuestion].optionA}
        </button>
                <button 
          onClick={() => setOptions('B')}
        >
          {Questions[currentQuestion].optionB}
        </button>
                <button 
          onClick={() => setOptions('C')}
        >
          {Questions[currentQuestion].optionC}
        </button>
                <button 
          onClick={() => setOptions('D')}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {
        currentQuestion == Questions.length -1 ? (
          <button onClick={finishQuiz}>Finish</button>
        ) : (
          <button onClick={nextQuestion}>Next</button>
        ) 
      }
        
      </div>
    </>
  )
}

export default Quiz
