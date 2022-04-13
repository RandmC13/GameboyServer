import React, { useState } from "react";
//Components
import Screen from "./components/Screen";
import PasswordBox from "./components/PasswordBox";
//Stylesheet
import "./App.css";

const App = () => {

    const [state, setState] = useState({
        authenticated:  false
    });

    //If authenticated draw the screen if not draw password box

    if (state.authenticated) {
        return (
            <div id="mainContainer">
                <Screen pixelSize="4" />
            </div>
        )
    } else {
        return (
            <div id="mainContainer">
                <PasswordBox />
            </div>
        )
    }
}

export default App