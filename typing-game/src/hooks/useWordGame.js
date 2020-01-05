import {useEffect, useRef, useState} from "react";
import useWordCount from "./useWordCount";

function useWordGame(startingTime = 10) {

    const [text, setText] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(startingTime);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [wordCount, countWords] = useWordCount();

    const textRef = useRef(null);

    function handleChange(event) {
        const {value} = event.target;
        setText(value);
    }

    useEffect(() => {

        if (isGameStarted && timeRemaining > 0) {

            setTimeout(() => {
                setTimeRemaining(prevState => prevState - 1)
            }, 1000);

        } else if (timeRemaining === 0) {
            endGame();
        }

    }, [timeRemaining, isGameStarted]);


    function endGame() {
        setIsGameStarted(false);
        countWords(text);
    }

    function startGame() {
        setIsGameStarted(true);
        setTimeRemaining(startingTime);
        setText("");

        textRef.current.disabled = false;
        textRef.current.focus();
    }

    return {textRef, handleChange, text, isGameStarted, timeRemaining, startGame, wordCount};
}

export default useWordGame