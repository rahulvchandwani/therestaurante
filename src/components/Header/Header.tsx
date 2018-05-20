import * as React from "react";
import logo from "../../logo.svg";

export const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" /><br/>
            <label className="App-title">The Restaurante</label>
        </header>
    );
}