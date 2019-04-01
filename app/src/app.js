import React from "react";
import BtnBotcamp from "./components/BtnBotcamp";
import "./style.css";
import LogoBotcamp from "./components/LogoBotcamp";
import "./styles/reset.css";

const App = () => (
    <React.Fragment className="main-div">
        <LogoBotcamp/>
        <BtnBotcamp/>
    </React.Fragment>
);

export default App;