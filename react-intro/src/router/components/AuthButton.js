import React, {useContext} from "react";
import {useHistory} from "react-router-dom";

import {AuthenticationContext} from "../AthenticationContext";

export default function AuthButton() {

    const history = useHistory();
    const {isAuthenticated, signout} = useContext(AuthenticationContext);

    function handleClick() {
        console.log("log out");
        signout(() => {
            console.log("callback authButton");
            history.push("/");
        });
    }

    return (
        <React.Fragment>
            {
                isAuthenticated ?
                    <button onClick={handleClick}>Log out</button>
                    :
                    <p>You are not logged in.</p>
            }
        </React.Fragment>
    )

}