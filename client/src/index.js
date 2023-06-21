import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./components/Redux/Store/index";
import { PersistGate } from "redux-persist/integration/react";
import dotenv from "dotenv";
import axios from "axios";
import ProtectedRouter from "./ProtectedRouter/ProtectedRoute";
import Home from "./components/Home/Home";
// import Prueba1 from "./components/PruebaRoutePrivada/Prueba1";
import { AuthProvider } from "./components/Auth/AuthProvider";
import Products from "./components/Products/Products";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes/PreguntasFrecuentes";
import Contact from "./components/Contact/Contact";
import HomeAdmin from "./components/Admin/HomeAdmin/HomeAdmin";
dotenv.config();

axios.defaults.baseURL = "http://localhost:3001/";

const { persistor, store } = Store;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/products/detail',
    element: <Detail />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/preguntas-frecuentes',
    element: <PreguntasFrecuentes />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/',
    element: <ProtectedRouter />,
    children: [
      {
        path: "/home-admin",
        element: <HomeAdmin />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate persistor={persistor} >
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

//asd

reportWebVitals();