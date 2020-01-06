import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import * as serviceWorker from './serviceWorker';

import {ContextProvider} from "./contexts/Context";
import App from './App';

ReactDOM.render(
    <Router>
        <ContextProvider>
            <App/>
        </ContextProvider>
    </Router>,
    document.getElementById('root')
);


serviceWorker.unregister();
