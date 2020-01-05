import React from 'react';

import useWordGame from "./hooks/useWordGame";

import './App.css';

function App() {

    const {
        textRef,
        handleChange,
        text,
        isGameStarted,
        timeRemaining,
        startGame,
        wordCount
    } = useWordGame();

    return (
        <div>
            <h1>Typing game</h1>
            <textarea
                name="text"
                value={text}
                onChange={handleChange}
                disabled={!isGameStarted}
                ref={textRef}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button
                onClick={startGame}
                disabled={isGameStarted}
            >
                Start!
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    );
}

export default App;
