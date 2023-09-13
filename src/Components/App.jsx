import React from "react";
import { useState } from "react";
import Menu from "./Menu";
import Quiz from "./Quiz";
import Result from "./Result";
import { QuizContext } from "../Helpers/Context";
import "../Styles/App.css"

const QuizApp = () => {
    const [gameState, setGameState] = useState('menu');
    const [score, setScore] = useState(0);
    return (
        <>
            <div className="App">
                <h1>Quiz App</h1>
                <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
                    {gameState === 'menu' && <Menu />}
                    {gameState === 'quiz' && <Quiz />}
                    {gameState === 'result' && <Result />}
                </QuizContext.Provider>
            </div>
        </>
    )
}

export default QuizApp;