import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { ThemeProvider } from "styled-components";
import theme from "./theme";

const Root = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
