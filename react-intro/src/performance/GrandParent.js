import React from "react";
import Parent from "./Parent";

function GrandParent() {
    return (
        <React.Fragment>
            <p>I´m a GrandParent component</p>
            <Parent/>
            <Parent/>
        </React.Fragment>
    )
}

function areEqual(prevProps, nextProps) {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
    return true;
}

export default React.memo(GrandParent, areEqual)