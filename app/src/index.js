import React from "react";
import { render } from "react-dom";
console.log(process.env);
import { App } from "./App";

render(<App />, document.getElementById("app"));
