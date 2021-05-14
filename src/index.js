import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { ThemeProvider } from 'styled-components'
import themeObj from './theme'

ReactDOM.render(
    <ThemeProvider theme={themeObj}>
        <App />
    </ThemeProvider>,
    document.getElementById("root"));

//test edit