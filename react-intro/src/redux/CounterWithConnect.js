import React from "react";
import {connect} from "react-redux";

import {decrement, increment} from "./reduxCounter";

function CounterWithConnect(props) {
    return (
        <React.Fragment>
            <h1>React-redux Counter</h1>
            <h1>{props.count}</h1>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </React.Fragment>
    )
}

function mapStateToProps(globalState) {
    return {
        count: globalState
    }
}

const mapDispatchToProps = {
    increment,
    decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterWithConnect)