import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/Layout/About";
import Store from "./components/Layout/Store";
import Home from "./components/Layout/Home";
import ContactUs from "./components/Layout/ContactUs";
import Product from "./components/Layout/Product";
import { Switch } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/home",
    exact: true,
    element: <Home />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/product/:productId",
    element: <Product />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
