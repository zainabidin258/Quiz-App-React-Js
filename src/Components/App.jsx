import React from "react";
import { useState } from "react";
import Menu from "./Menu";
import Quiz from "./Quiz";
import Result from "./Result";

const QuizApp = () => {
    const [gameState, setGameState] = useState('menu');
    return (
        <>
            <h1 style={{textAlign: 'center'}}>Quiz App</h1>
            {gameState === 'menu' && <Menu />}
            {gameState === 'quiz' && <Quiz />}
            {gameState === 'result' && <Result />}
            <button>Hello</button>
        </>
    )
}

export default QuizApp;