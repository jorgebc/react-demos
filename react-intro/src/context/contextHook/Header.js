import React, {useContext} from "react";
import {ThemeContextForHook} from "./ThemeContextForHook";

function Header(props) {

    const {theme} = useContext(ThemeContextForHook);

    const themeClass = `${theme}-theme`;
    const themeName = `${theme.charAt(0).toUpperCase()}${theme.slice(1)}`;

    return (
        <header className={themeClass}>
            <h2>{themeName} theme</h2>
        </header>
    )
}

export default Header