import React from 'react'
import { useState , useContext } from 'react'
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/Questions'

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [options, setOptions] = useState('');
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
      </div>
    </>
  )
}

export default Quiz
