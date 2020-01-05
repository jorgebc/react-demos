import React from "react";
import Child from "./Child";

function Parent() {
    return (
        <React.Fragment>
            <p>I´m a Parent component</p>
            <Child/>
            <Child/>
        </React.Fragment>
    )
}

export default React.memo(Parent)