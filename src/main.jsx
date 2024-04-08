import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ErrorPage404 from "./Pages/ErrorPage404/ErrorPage404";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import FirebaseAuthProvider from "./FirebaseAuthProvider/FirebaseAuthProvider";
import ContextApiData from "./ContextApiData/ContextApiData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage404></ErrorPage404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <ContextApiData>
      <RouterProvider router={router} />
      </ContextApiData> 
    </FirebaseAuthProvider>
  </React.StrictMode>
);
