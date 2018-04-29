import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDom from "react-dom";

import { App } from "./app";

const message = "Hello world from React!";

ReactDom.render(
    <App message={message} />,
    document.querySelector("#app")
);

module.hot.accept();