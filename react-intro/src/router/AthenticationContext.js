import React, {useState} from "react";

const AuthenticationContext = React.createContext();

function AuthenticationContextProvider(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function authenticate(callback) {

        setTimeout(() => {

            console.log("authenticating....");
            setIsAuthenticated(true);

            console.log("authenticated");
            callback();

        }, 1000);
    }

    function signout(callback) {

        setTimeout(()=>{

            console.log("signing out....");
            setIsAuthenticated(false);

            console.log("logged out");
            callback();

        }, 1000);
    }

    return (
        <AuthenticationContext.Provider value={{isAuthenticated, authenticate, signout}}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export {AuthenticationContextProvider, AuthenticationContext}