import React, {useState} from "react";

const ThemeContextForHook = React.createContext();

function ThemeContextForHookProvider(props) {

    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme(prevTheme => {
                return prevTheme === "light" ? "dark" : "light"
            }
        )
    }

    return (
        <ThemeContextForHook.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContextForHook.Provider>
    )

}

export {ThemeContextForHookProvider, ThemeContextForHook}