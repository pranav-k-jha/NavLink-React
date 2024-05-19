import React from "react";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
