import React from "react";
import BtnBotcamp from "./components/BtnBotcamp";
import BotcampLogo from "./components/BotcampLogo";

class App extends React.Component {
    render() {
        return (
        <React.Fragment>
            <BotcampLogo/>
            <BtnBotcamp/>
        </React.Fragment>
        );
    }
}

export default App;