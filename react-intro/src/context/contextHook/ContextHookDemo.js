import React from "react";

import {ThemeContextForHookProvider} from "./ThemeContextForHook";

import Header from "./Header";
import Button from "./Button";

function ContextHookTheme() {
    return (
        <div>
            <ThemeContextForHookProvider>
                <Header/>
                <Button/>
            </ThemeContextForHookProvider>
        </div>
    )
}

export default ContextHookTheme