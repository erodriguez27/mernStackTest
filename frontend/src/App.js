import React from "react";

import { Provider } from "react-redux";

import AppRouter from "./routes";
import store from "./store";
import AppLayout from "./layouts/AppLayout";

import "./main.css";

function App() {
  return (
    <Provider store={store}>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </Provider>
  );
}

export default App;
