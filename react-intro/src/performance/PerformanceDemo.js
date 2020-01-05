import React from "react";
import GrandParent from "./GrandParent";

class PerformanceDemo extends React.Component {

    state = {
        count: 0
    };

    increment = () =>
        this.setState(prevState => ({
            count: prevState.count + 1
        }));

    render() {
        return (
            <React.Fragment>
                <button
                    onClick={this.increment}>
                    +1
                </button>
                <h1>{this.state.count}</h1>
                <p>I´m a component</p>
                <GrandParent/>
                <GrandParent/>
            </React.Fragment>
        )
    }
}

export default PerformanceDemo