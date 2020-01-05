import React from "react";
import useToggler from "./useToggler";

function Menu(props) {

    const [isVisible, toggle] = useToggler(true);

    return (
        <React.Fragment>
            <button
                onClick={toggle}
            >
                {isVisible ? "Hide" : "Show"} Menu
            </button>
            <nav style={{display: isVisible ? "block" : "none"}}>
                <h6>Signed in as Coder123</h6>
                <p><a href="#top">Your Profile</a></p>
                <p><a href="#top">Your Repositories</a></p>
                <p><a href="#top">Your Stars</a></p>
                <p><a href="#top">Your Gists</a></p>
            </nav>
        </React.Fragment>
    )
}

export default Menu