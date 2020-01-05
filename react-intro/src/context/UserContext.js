import React from "react";

const {Provider, Consumer} = React.createContext({
    username: "username"
});

class UserContextProvider extends React.Component {

    state = {
        username: "username"
    };

    changeUserName = (username) => {
        this.setState({
            username: username
        })
    };

    render() {
        const username = this.state.username;
        return (
            <Provider value={{username: username, changeUserName: this.changeUserName}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}