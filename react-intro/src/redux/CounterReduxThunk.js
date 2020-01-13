import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {decrement, increment} from "./reduxCounterWithThunk";

function CounterReduxThunk() {

    const count = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <h1>React-redux with thunk Counter</h1>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </React.Fragment>
    )
}

export default CounterReduxThunk