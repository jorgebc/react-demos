import React from "react";

import Favorite from "./Favorite";
import Menu from "./Menu";

function TogglerDemo(props) {
    return (
        <React.Fragment>
            <Menu/>
            <Favorite/>
        </React.Fragment>
    )
}

export default TogglerDemo