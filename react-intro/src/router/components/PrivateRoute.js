import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";

import {AuthenticationContext} from "../AthenticationContext";


export default function PrivateRoute({children, ...rest}) {

    const {isAuthenticated} = useContext(AuthenticationContext);

    return (
        <Route
            {...rest}
            render={({location}) =>
                isAuthenticated ?
                    children
                    :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
            }
        />
    )
}