import React from "react";

import {ThemeContextProvider, ThemeContextConsumer} from "./ThemeContext";
import {UserContextConsumer, UserContextProvider} from "./UserContext";

import Header from "./Header";
import Button from "./Button";

import "./themes.css"

class ContextDemo extends React.Component {

    state = {
        username: ""
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <React.Fragment>
                <UserContextProvider>
                    <ThemeContextProvider>

                        <main>
                            <div className="theme-body">

                                <Header/>

                                <ThemeContextConsumer>
                                    {(themeContext) =>
                                        <Button
                                            theme={themeContext.theme}
                                            text="Switch theme"
                                            onClick={themeContext.toggleTheme}
                                        />
                                    }
                                </ThemeContextConsumer>

                                <br/>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="New username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                                <UserContextConsumer>
                                    {(userContext) =>
                                        <Button
                                            text="Change username"
                                            onClick={() => userContext.changeUserName(this.state.username)}
                                        />
                                    }
                                </UserContextConsumer>
                            </div>
                        </main>

                    </ThemeContextProvider>
                </UserContextProvider>
            </React.Fragment>
        )
    }
}

export default ContextDemo