import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {decrement, increment} from "./reduxCounter";

// https://thoughtbot.com/blog/using-redux-with-react-hooks
// https://react-redux.js.org/api/hooks#usage-warnings

function CounterReduxHooks() {

    const count = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <h1>React-redux with hooks Counter</h1>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </React.Fragment>
    )
}

export default CounterReduxHooks