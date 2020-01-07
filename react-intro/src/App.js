import React from "react";

import SWAPIRender from "./renderProps/SWAPIRender";
import PerformanceDemo from "./performance/PerformanceDemo";
import ContextDemo from "./context/ContextDemo";
import ContextHookComponent from "./context/contextHook/ContextHookDemo";
import Counter from "./hooks/Counter";
import Contacts from "./hooks/Contacts";
import TogglerDemo from "./hooks/toggler/TogglerDemo";
import RouterDemo from "./router/RouterDemo";
import ReduxDemo from "./redux/ReduxDemo";

function App() {
    return (
        <div>
            <SWAPIRender/>
            <hr/>

            <PerformanceDemo/>
            <hr/>

            <ContextDemo/>
            <hr/>

            <Counter/>
            <hr/>

            <Contacts/>
            <hr/>

            <ContextHookComponent/>
            <hr/>

            <TogglerDemo/>
            <hr/>

            <RouterDemo/>
            <hr/>

            <ReduxDemo/>
            <hr/>
        </div>
    )
}

export default App;