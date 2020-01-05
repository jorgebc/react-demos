import React, {useEffect, useState} from "react";
import randomcolor from "randomcolor";

import "./hooks.css"

export default function Counter() {

    const [count, setCount] = useState(0);
    const [randomColor, setRandomColor] = useState("");

    useEffect(() => {
        const intervalID = setInterval(() => {
            increment();
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    function increment() {
        setCount(prevState => prevState + 1);
    }

    function decrement() {
        setCount(prevState => prevState - 1);
    }

    useEffect(() => {
        setRandomColor(randomcolor());
    }, [count]);

    return (
        <div className="counterDiv">
            <h1
                className="counter"
                style={{color: randomColor}}
            >
                {count}
            </h1>
            <button className="counterButton" onClick={increment}>Increment</button>
            <button className="counterButton" onClick={decrement}>Decrement</button>
        </div>
    )
}

