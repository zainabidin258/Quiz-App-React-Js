import React from "react";
import { useState } from "react";

const QuizApp = () => {
    const [gameState, setGameState] = useState('menu');
    return (
        <>
            <h1 style={{textAlign: 'center'}}>Quiz App</h1>
        </>
    )
}

export default QuizApp;