import React, {useContext} from "react";
import {ThemeContextForHook} from "./ThemeContextForHook";
import PropTypes, {string} from "prop-types";

function Button(props) {

    const {theme, toggleTheme} = useContext(ThemeContextForHook);

    const themeClass = `${theme}-theme`;

    return (
        <button
            className={themeClass}
            onClick={toggleTheme}
        >
            {props.text}
        </button>
    )
}

function defaultHandleClick() {
    console.log("Click!");
}

Button.defaultProps = {
    theme: "light",
    text: "Button",
    onClick: defaultHandleClick
};

Button.protoTypes = {
    theme: PropTypes.oneOf(["light", "dark"]),
    text: string,
    onClick: PropTypes.func
};

export default Button