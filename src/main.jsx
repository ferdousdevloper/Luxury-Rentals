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
import ViewProperty from "./components/ViewProperty/ViewProperty";
import PrivateDetails from "./PrivateRoute/PrivateDetails";
import ProfileUpdateForm from "./PrivateRoute/ProfileUpdateForm";
import UserProfile from "./PrivateRoute/UserProfile";
import {  HelmetProvider  } from "react-helmet-async";
import 'tippy.js/dist/tippy.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Agents from "./PrivateRoute/Agents";

AOS.init();

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
      {
        path: "/property/:id",
        element: (
          <PrivateDetails>
            <ViewProperty></ViewProperty>
          </PrivateDetails>
        ),
      },
      {
        path: "/agents",
        element: (
          <PrivateDetails>
            <Agents></Agents>
          </PrivateDetails>
        ),
      },
      {
        path: "update-profile",
        element: (
          <PrivateDetails>
            <ProfileUpdateForm></ProfileUpdateForm>
          </PrivateDetails>
        ),
      },
      {
        path: "/user-profile",
        element: (
          <PrivateDetails>
            <UserProfile></UserProfile>
          </PrivateDetails>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <ContextApiData>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </ContextApiData>
    </FirebaseAuthProvider>
  </React.StrictMode>
);
