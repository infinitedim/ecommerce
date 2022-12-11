import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { Provider } from "react-redux";
import axios from "axios";
import App from "./App";
import { store } from "./app/store";
import { productsApi } from "./features/api/apiSlice";
import ScrollToTop from "./utils/ScrollToTop";
import "./sass/root.scss";

axios.defaults.withCredentials = false;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
);
