import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./components/Header";
import Profile from "./pages/profile/Profile";
import About from "./components/About";
import Home from "./components/Home";
import Services from "./pages/services/Services"

import "./router.css"
import ServiceDetails from "./pages/services/ServiceDetails";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedPage from "./pages/ProtectedPage";
import LoginPage from "./pages/LoginPage";
import {AuthenticationContextProvider} from "./AthenticationContext";

function RouterDemo(props) {

    return (
        <Router>
            <AuthenticationContextProvider>

                <Header/>

                <Switch>

                    <Route exact path="/">
                        <Home/>
                    </Route>

                    <Route path="/profile">
                        <Profile/>
                    </Route>

                    <Route exact path="/services">
                        <Services/>
                    </Route>

                    <Route exact path="/services/:serviceId">
                        <ServiceDetails/>
                    </Route>

                    <Route path="/about">
                        <About/>
                    </Route>

                    <PrivateRoute path="/protected">
                        <ProtectedPage/>
                    </PrivateRoute>

                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                </Switch>

            </AuthenticationContextProvider>
        </Router>
    )
}

export default RouterDemo