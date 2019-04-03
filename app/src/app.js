import React from "react";
import BtnBotcamp from "./components/BtnBotcamp";
import LogoBotcamp from "./components/LogoBotcamp";
import "./styles/reset.css";
import LoginWrapper from "./components/LoginWrapper";
import logo from "./images/botcamp-logo.png";

const App = () => (
    <LoginWrapper>
        <LogoBotcamp src={logo} alt="Logo do Botcamp"/>
        <BtnBotcamp>Entrar</BtnBotcamp>
    </LoginWrapper>
);

export default App;