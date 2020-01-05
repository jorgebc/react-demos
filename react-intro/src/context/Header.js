import React from "react";
import {ThemeContextConsumer} from "./ThemeContext";
import {UserContextConsumer} from "./UserContext";

function Header() {
    return (
        <UserContextConsumer>
            {(usernameContext) => (
                <ThemeContextConsumer>
                    {({theme}) => {

                        const themeClass = `${theme}-theme`;
                        const themeName = `${theme.charAt(0).toUpperCase()}${theme.slice(1)}`;

                        return (
                            <header className={themeClass}>
                                <h2>{themeName} theme</h2>
                                <p>Welcome {usernameContext.username}</p>
                            </header>
                        )
                    }}
                </ThemeContextConsumer>
            )}
        </UserContextConsumer>
    )
}

export default Header