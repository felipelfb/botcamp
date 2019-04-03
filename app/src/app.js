import React from "react";
import BtnBotcamp from "./components/BtnBotcamp";
import LogoBotcamp from "./components/LogoBotcamp";
import "./styles/reset.css";
import LoginWrapper from "./components/LoginWrapper";

const App = () => (
    <LoginWrapper>
        <LogoBotcamp/>
        <BtnBotcamp/>
    </LoginWrapper>
);

export default App;