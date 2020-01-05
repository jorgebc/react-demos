import React from "react";
import PropTypes, {string} from "prop-types";

function Button(props) {

    const themeClass = `${props.theme}-theme`;

    return (
        <button
            className={themeClass}
            onClick={props.onClick}
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