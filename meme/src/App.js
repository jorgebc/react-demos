import React from 'react';

import Header from "./components/Header";
// import MemeGenerator from "./components/MemeGenerator";
import MemeGeneratorClassComponent from "./components/MemeGeneratorClassComponent";

import './App.css';

function App() {

    return (
        <>

            {/*<div>*/}
            {/*    <Header/>*/}
            {/*    <MemeGenerator/>*/}
            {/*</div>*/}

            <div>
                <Header/>
                <MemeGeneratorClassComponent/>
            </div>

        </>
    )
}

export default App;
