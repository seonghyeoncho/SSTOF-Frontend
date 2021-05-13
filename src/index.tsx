import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./components/App";
import theme from "./theme";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { Store } from "./root.redux";

ReactDOM.render(
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root"),
);
