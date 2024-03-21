import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./routes/ContactUs.jsx";
import AboutUs from "./routes/AboutUs.jsx";
import App from "./routes/App.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Home from "./components/hero/Home.jsx";
import Login from "./routes/Login.jsx";
import BloodRequest from "./routes/BloodRequest.jsx";
import BloodAvailable from "./routes/BloodAvailable.jsx";
import DonorRgister from "./routes/DonorRgister.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/login", element: <Login /> },
      {
        path: "/bloodrequest",
        element: <BloodRequest />,
      },
      { path: "/bloodavailable", element: <BloodAvailable /> },
      { path: "/donerRegister", element: <DonorRgister /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
