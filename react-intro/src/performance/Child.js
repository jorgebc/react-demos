import React from "react";

export default React.memo(function Child() {
    return (
        <React.Fragment>
            <p>I´m a Child component</p>
        </React.Fragment>
    )
})