// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./components/Redux/Store/index";
import { PersistGate } from "redux-persist/integration/react";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

axios.defaults.baseURL = "http://localhost:3001/";

const { persistor, store } = Store;

//persistor.purge();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}> */}
        <App />
      {/* </Auth0Provider> */}
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();