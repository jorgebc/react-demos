import React, {useContext} from "react";
import {useHistory, useLocation} from "react-router-dom";

import {AuthenticationContext} from "../AthenticationContext";


export default function LoginPage() {

    let history = useHistory();
    let location = useLocation();

    const {from} = location.state || {from: {pathname: "/"}};

    const {authenticate} = useContext(AuthenticationContext);

    function login() {

        console.log("Log in");

        authenticate(() => {
            console.log("callback login page");
            history.replace(from)
        });
    }

    return (
        <React.Fragment>
            <h1>Log in</h1>
            <button onClick={login}>Log in</button>
        </React.Fragment>
    )
}