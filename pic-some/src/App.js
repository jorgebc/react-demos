import React from 'react';
import {Switch, Route} from "react-router-dom";

import './App.css';

import Header from "./components/Header";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";

function App() {
    return (
        <React.Fragment>

            <Header/>

            <Switch>
                <Route exact path="/">
                    <Photos/>
                </Route>

                <Route path="/cart">
                    <Cart/>
                </Route>
            </Switch>

        </React.Fragment>
    );
}

export default App;
